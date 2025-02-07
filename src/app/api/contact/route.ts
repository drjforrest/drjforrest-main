import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { 
  checkRateLimit, 
  validateEmail, 
  validateMessage,
  getClientIp 
} from '@/lib/contact-protection';

// Create transporter outside of the handler to reuse the connection
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    // Get client IP and check rate limit
    const clientIp = await getClientIp(); // Await the promise here
    const isWithinLimit = await checkRateLimit(clientIp);
    
    if (!isWithinLimit) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse the request body
    const { name, email, subject, message } = await request.json();

    // Email validation
    if (!validateEmail(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Message validation
    const messageValidation = validateMessage(message);
    if (!messageValidation.isValid) {
      return NextResponse.json(
        { error: messageValidation.error },
        { status: 400 }
      );
    }

    // Email content formatting
    const mailOptions = {
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      subject: `Contact Form: ${subject}`,
      replyTo: email,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
IP Address: ${clientIp}

Message:
${message}
      `,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333;">New Contact Form Submission</h2>
  <p><strong>From:</strong> ${name}</p>
  <p><strong>Email:</strong> ${email}</p>
  <p><strong>Subject:</strong> ${subject}</p>
  <p><strong>IP Address:</strong> ${clientIp}</p>
  <div style="margin-top: 20px;">
    <h3 style="color: #555;">Message:</h3>
    <p style="white-space: pre-wrap;">${message}</p>
  </div>
</div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Remaining': '5',
          'X-RateLimit-Reset': '3600'
        }
      }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}