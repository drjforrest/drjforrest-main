"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { trackFormSubmission } from '@/lib/analytics';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to send message');

      setSubmitStatus('success');
      setFormData({ name: "", email: "", subject: "", message: "" });
      trackFormSubmission('contact', true);
    } catch (error) {
      setSubmitStatus('error');
      trackFormSubmission('contact', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div 
      className="w-full h-full flex"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form 
        onSubmit={handleSubmit} 
        className="w-full p-8 bg-surface dark:bg-surface-elevated border border-border rounded-lg shadow-sm dark:shadow-lg flex flex-col justify-between"
      >
        <div className="space-y-4">
          {[
            { id: 'name', label: 'Name', type: 'text' },
            { id: 'email', label: 'Email', type: 'email' },
            { id: 'subject', label: 'Subject', type: 'text' }
          ].map(({ id, label, type }) => (
            <motion.div key={id} whileTap={{ scale: 0.995 }}>
              <label htmlFor={id} className="block text-sm font-medium mb-2 text-foreground/80">
                {label}
              </label>
              <Input
                id={id}
                type={type}
                value={formData[id as keyof FormData]}
                onChange={(e) => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
                required
                className="bg-background/50 dark:bg-background/50 border-border focus:border-primary focus:ring-primary h-12 px-4 shadow-sm transition-all duration-300"
              />
            </motion.div>
          ))}

          <motion.div whileTap={{ scale: 0.995 }}>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
              Message
            </label>
            <Textarea
              id="message"
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              required
              className="bg-background/50 dark:bg-background/50 border-border focus:border-primary focus:ring-primary transition-all duration-300"
            />
          </motion.div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.02 }} 
          whileTap={{ scale: 0.98 }} 
          className="mt-6"
        >
          <Button 
            type="submit"
            className="w-full h-12 bg-primary hover:bg-primary/90 text-white shadow-sm dark:shadow-lg px-6 py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  );
}