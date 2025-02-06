"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackFormSubmission, trackExternalLink } from '@/lib/analytics';

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
        headers: {
          'Content-Type': 'application/json',
        },
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

  const handleExternalLink = (platform: string, url: string) => {
    trackExternalLink(platform);
    window.open(url, '_blank');
  };

  return (
    <section className="py-20 bg-muted/50" id="contact">
      <div className="container px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-content-muted max-w-2xl mx-auto">
              I'm always interested in connecting with colleagues and exploring new opportunities
              in global health, clinical research, and data science.
            </p>
          </div>

          <div className="grid md:grid-cols-[2fr,1fr] gap-8">
            {/* Contact Form */}
            <Card className="p-6 bg-surface-elevated elevation-1 hover:elevation-2 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                      required
                      className="bg-background"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="bg-background"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full"
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

                {submitStatus === 'success' && (
                  <motion.p 
                    className="text-green-500 text-sm text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.p>
                )}

                {submitStatus === 'error' && (
                  <motion.p 
                    className="text-red-500 text-sm text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    There was an error sending your message. Please try again.
                  </motion.p>
                )}
              </form>
            </Card>

            {/* Contact Info */}
            <Card className="p-6 bg-surface-elevated elevation-1 hover:elevation-2 transition-all duration-300">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <button
                      onClick={() => handleExternalLink('email', 'mailto:jamie@drjforrest.com')}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>jamie@drjforrest.com</span>
                    </button>
                    
                    <button
                      onClick={() => handleExternalLink('linkedin', 'https://www.linkedin.com/in/jamie_forrest')}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span>Connect on LinkedIn</span>
                    </button>

                    <button
                      onClick={() => handleExternalLink('github', 'https://github.com/drjforrest')}
                      className="w-full flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <span>GitHub Profile</span>
                    </button>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Looking to collaborate?</h3>
                  <p className="text-content-muted">
                    I'm open to discussing opportunities in:
                  </p>
                  <ul className="mt-2 space-y-2 text-content-muted">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Clinical Research Leadership
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Global Health Projects
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Data Science Initiatives
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                      Health Systems Strengthening
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">More Resources</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => handleExternalLink('blog', 'https://blog.drjforrest.com')}
                      className="w-full text-left text-primary hover:underline"
                    >
                      Read my blog →
                    </button>
                    <button
                      onClick={() => handleExternalLink('apps', 'https://apps.drjforrest.com')}
                      className="w-full text-left text-primary hover:underline"
                    >
                      Check out my apps →
                    </button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}