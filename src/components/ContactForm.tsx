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
import { SectionTitle } from "@/components/ui/section-title";

interface FormData {
  [key: string]: string;
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
    <section className="py-20">
      <SectionTitle>Get in Touch</SectionTitle>
      <div className="container px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <p className="text-lg text-muted-foreground">
              I'm always interested in connecting with colleagues and exploring new opportunities
              in global health, clinical research, and data science.
            </p>
          </div>

          <div className="grid md:grid-cols-[1.5fr,1fr] gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-background/50 backdrop-blur-sm border border-primary/10 hover:shadow-lg transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {[
                    { id: 'name', label: 'Name', type: 'text' },
                    { id: 'email', label: 'Email', type: 'email' },
                    { id: 'subject', label: 'Subject', type: 'text' }
                  ].map(({ id, label, type }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium mb-2 text-foreground/80">
                        {label}
                      </label>
                      <Input
                        id={id}
                        type={type}
                        value={formData[id]}
                        onChange={(e) => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
                        required
                        className="bg-background/80 border-primary/10 focus:border-primary/20"
                      />
                    </div>
                  ))}
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="bg-background/80 border-primary/10 focus:border-primary/20"
                    />
                  </div>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary text-background hover:bg-primary/90"
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
              </form>
            </Card>

            {/* Contact Info */}
            <Card className="p-8 bg-background/50 backdrop-blur-sm border border-primary/10">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Mail, text: 'jamie@drjforrest.com', action: 'email' },
                      { icon: Linkedin, text: 'Connect on LinkedIn', action: 'linkedin' },
                      { icon: Github, text: 'GitHub Profile', action: 'github' }
                    ].map(({ icon: Icon, text, action }) => (
                      <button
                        key={text}
                        onClick={() => handleExternalLink(action, `${action === 'email' ? 'mailto:' : ''}${text}`)}
                        className="w-full flex items-center gap-3 p-2.5 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <span className="text-foreground/80">{text}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Looking to collaborate?</h3>
                  <p className="text-foreground/70 mb-3">I'm open to discussing opportunities in:</p>
                  <ul className="space-y-2">
                    {[
                      'Clinical Research Leadership',
                      'Global Health Projects',
                      'Data Science Initiatives',
                      'Health Systems Strengthening'
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        <span className="text-foreground/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}