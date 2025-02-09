"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { trackFormSubmission, trackExternalLink } from '@/lib/analytics';

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
  const [focusedField, setFocusedField] = useState<string | null>(null);

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
      <div className="container px-4">
        <motion.div 
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <p className="text-lg text-foreground/80">
              I'm always interested in connecting with colleagues and exploring new opportunities
              in global health, clinical research, and data science.
            </p>
          </div>

          <div className="grid md:grid-cols-[1.5fr,1fr] gap-8">
            {/* Contact Form */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm border border-primary/10 shadow-lg transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  {[
                    { id: 'name', label: 'Name', type: 'text', icon: 'user' },
                    { id: 'email', label: 'Email', type: 'email', icon: 'mail' },
                    { id: 'subject', label: 'Subject', type: 'text', icon: 'message' }
                  ].map(({ id, label, type }) => (
                    <motion.div 
                      key={id}
                      whileTap={{ scale: 0.995 }}
                    >
                      <label htmlFor={id} className="block text-sm font-medium mb-2 text-foreground/80">
                        {label}
                      </label>
                      <div className="relative">
                        <Input
                          id={id}
                          type={type}
                          value={formData[id]}
                          onChange={(e) => setFormData(prev => ({ ...prev, [id]: e.target.value }))}
                          onFocus={() => setFocusedField(id)}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`bg-background/50 border-primary/10 focus:border-primary/20 h-12 px-4 transition-all duration-300
                            ${focusedField === id ? 'shadow-lg' : 'shadow-sm'}`}
                        />
                      </div>
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
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`bg-background/50 border-primary/10 focus:border-primary/20 transition-all duration-300
                        ${focusedField === 'message' ? 'shadow-lg' : 'shadow-sm'}`}
                    />
                  </motion.div>
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-background shadow-lg"
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
            </Card>

            {/* Contact Info */}
            <Card className="p-8 bg-white/90 backdrop-blur-sm border border-primary/10 shadow-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Contact Information</h3>
                  <div className="space-y-3">
                    {[
                      { icon: Mail, text: 'jamie@drjforrest.com', action: 'email' },
                      { icon: Linkedin, text: 'Connect on LinkedIn', action: 'linkedin' },
                      { icon: Github, text: 'GitHub Profile', action: 'github' }
                    ].map(({ icon: Icon, text, action }) => (
                      <motion.button
                        key={text}
                        whileHover={{ scale: 1.02, x: 4 }}
                        onClick={() => handleExternalLink(action, `${action === 'email' ? 'mailto:' : ''}${text}`)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                      >
                        <div className="p-2 rounded-full bg-primary/10">
                          <Icon className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground/80">{text}</span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Looking to collaborate?</h3>
                  <p className="text-foreground/70 mb-4">I'm open to discussing opportunities in:</p>
                  <div className="space-y-3">
                    {[
                      'Clinical Research Leadership',
                      'Global Health Projects',
                      'Data Science Initiatives',
                      'Health Systems Strengthening'
                    ].map((item) => (
                      <motion.div 
                        key={item} 
                        className="flex items-center gap-3 p-2"
                        whileHover={{ x: 4 }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                        <span className="text-foreground/80">{item}</span>
                      </motion.div>
                    ))}
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
