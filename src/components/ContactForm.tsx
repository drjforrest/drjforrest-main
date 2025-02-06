"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Send } from "lucide-react";
import Link from "next/link";

// ... (previous interfaces remain the same)

export function ContactForm() {
  // ... (previous state and handlers remain the same)

  return (
    <section className="py-20 bg-muted/50" id="contact">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-content-muted max-w-2xl mx-auto">
              I'm always interested in connecting with colleagues and exploring new opportunities
              in global health, clinical research, and data science.
            </p>
          </div>

          <div className="grid md:grid-cols-[2fr,1fr] gap-8">
            {/* Contact Form */}
            <Card className="p-6 bg-surface-elevated">
              {/* ... (form content remains the same) ... */}
            </Card>

            {/* Contact Info */}
            <Card className="p-6 bg-surface-elevated">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <Link 
                      href="mailto:jamie@drjforrest.com"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>jamie@drjforrest.com</span>
                    </Link>
                    
                    <Link 
                      href="https://www.linkedin.com/in/jamie_forrest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span>Connect on LinkedIn</span>
                    </Link>

                    <Link 
                      href="https://github.com/drjforrest"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Github className="h-5 w-5 text-primary" />
                      <span>GitHub Profile</span>
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">Looking to collaborate?</h3>
                  <p className="text-content-muted">
                    I'm open to discussing opportunities in:
                  </p>
                  <ul className="mt-2 space-y-2 text-content-muted">
                    <li>• Clinical Research Leadership</li>
                    <li>• Global Health Projects</li>
                    <li>• Data Science Initiatives</li>
                    <li>• Health Systems Strengthening</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">More Resources</h3>
                  <div className="space-y-2">
                    <Link 
                      href="https://blog.drjforrest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                    >
                      Read my blog →
                    </Link>
                    <Link 
                      href="https://apps.drjforrest.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-primary hover:underline"
                    >
                      Check out my apps →
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}