"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send data to our new API endpoint
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      // Show success message
      toast.success("Message received! I'll get back to you soon.", {
        position: "top-center",
      });

      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      toast.error("Something went wrong. Please try again later.", {
        position: "top-center",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="glass-card backdrop-blur-xl border border-white/10 relative overflow-hidden"
      variants={{
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: { duration: 0.5 },
        },
      }}
    >
      {/* Decorative gradient */}
      <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-neon-pink/20 to-electric-blue/20 rounded-full blur-xl"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-8 inline-block pb-2 border-b-2 border-neon-pink/50">
          Send a Message
        </h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-base font-medium mb-2">
              Your Name
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className={cn(
                "bg-white/5 border border-white/10",
                "focus:ring-electric-blue/50 focus:border-electric-blue/50",
                "text-base py-6"
              )}
              placeholder="John Doe"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-base font-medium mb-2">
              Your Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={cn(
                "bg-white/5 border border-white/10",
                "focus:ring-electric-blue/50 focus:border-electric-blue/50",
                "text-base py-6"
              )}
              placeholder="johndoe@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-base font-medium mb-2"
            >
              Your Message
            </label>
            <Textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className={cn(
                "bg-white/5 border border-white/10",
                "focus:ring-electric-blue/50 focus:border-electric-blue/50",
                "text-base min-h-[160px]"
              )}
              placeholder="Hello, I'd like to discuss a project..."
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className={cn(
              "w-full py-6 text-base",
              "bg-gradient-to-r from-electric-blue to-neon-pink text-white",
              "hover:shadow-lg hover:shadow-neon-pink/20",
              "transition-all duration-300",
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:translate-y-[-2px]"
            )}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
            <Send size={18} className="ml-2" />
          </Button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactForm;
