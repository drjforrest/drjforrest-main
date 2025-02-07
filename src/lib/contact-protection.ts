import { RateLimiter } from 'limiter';
import BadWords from 'bad-words';
import { headers } from 'next/headers';

// Create a rate limiter: 5 requests per IP per hour
const limiters = new Map<string, RateLimiter>();

// Email regex for validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Initialize profanity filter
const filter = new BadWords();

// Interface for validation result
interface ValidationResult {
  isValid: boolean;
  error?: string;
}

// Add at the top with other constants
const limiterLastUsed = new Map<string, number>();

export async function getClientIp(): Promise<string> {
  const headersList = await headers();
  return (
    headersList.get('x-real-ip') ||
    headersList.get('x-forwarded-for')?.split(',')[0] ||
    'unknown-ip'
  );
}

export async function checkRateLimit(ip: string): Promise<boolean> {
  let limiter = limiters.get(ip);
  
  if (!limiter) {
    limiter = new RateLimiter({
      tokensPerInterval: 5,
      interval: "hour",
      fireImmediately: true
    });
    limiters.set(ip, limiter);
  }
  limiterLastUsed.set(ip, Date.now());

  const remainingRequests = await limiter.removeTokens(1);
  return remainingRequests >= 0;
}

export function validateEmail(email: string): boolean {
  return emailRegex.test(email);
}

export function validateMessage(text: string): ValidationResult {
  // Check for spam indicators
  const spamIndicators = [
    /\b(cash|loan|money|buy|sell|offer|deal|discount|price)\b/gi,
    /\b(viagra|cialis|pharmacy|prescription)\b/gi,
    /\b(casino|bet|gambling|lottery)\b/gi,
    /\b(cryptocurrency|bitcoin|crypto|btc|eth)\b/gi,
    /\b(sex|dating|hot|singles)\b/gi,
  ];

  // Check for too many links
  const linkCount = (text.match(/https?:\/\/[^\s]+/g) || []).length;
  if (linkCount > 2) {
    return {
      isValid: false,
      error: 'Too many links in message'
    };
  }

  // Check for spam trigger words
  for (const pattern of spamIndicators) {
    const matches = text.match(pattern);
    if (matches && matches.length > 2) {
      return {
        isValid: false,
        error: 'Message contains spam indicators'
      };
    }
  }

  // Check for profanity
  if (filter.isProfane(text)) {
    return {
      isValid: false,
      error: 'Message contains inappropriate content'
    };
  }

  // Check message length
  if (text.length < 10) {
    return {
      isValid: false,
      error: 'Message is too short'
    };
  }

  if (text.length > 5000) {
    return {
      isValid: false,
      error: 'Message is too long'
    };
  }

  return { isValid: true };
}

// Update the cleanup interval
setInterval(() => {
  const now = Date.now();
  Array.from(limiterLastUsed.entries()).forEach(([ip, lastUsed]) => {
    if (now - lastUsed > 3600000) {
      limiters.delete(ip);
      limiterLastUsed.delete(ip);
    }
  });
}, 3600000);