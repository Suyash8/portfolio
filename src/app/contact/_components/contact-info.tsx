import React from "react";
import { Mail, Phone, Calendar, MapPin, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/config/personalInfo";
import { motion } from "framer-motion";

const ContactInfo = () => {
  return (
    <motion.div
      className="glass-card animate-fade-in border border-white/10 backdrop-blur-xl relative overflow-hidden h-full"
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
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-br from-electric-blue/20 to-neon-pink/20 rounded-full blur-xl"></div>

      <div className="relative z-10">
        <h3 className="text-2xl font-semibold mb-8 inline-block pb-2 border-b-2 border-electric-blue/50">
          Contact Information
        </h3>

        <div className="space-y-8">
          <div className="flex items-start gap-5">
            <div className="p-3 rounded-lg bg-gradient-to-br from-electric-blue/20 to-deep-purple/20 backdrop-blur-md border border-white/10">
              <Mail size={22} className="text-white" />
            </div>
            <div>
              <p className="font-medium text-lg">Email</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {personalInfo.email}
              </a>
            </div>
          </div>

          {personalInfo.contact.phone && (
            <div className="flex items-start gap-5">
              <div className="p-3 rounded-lg bg-gradient-to-br from-neon-pink/20 to-deep-purple/20 backdrop-blur-md border border-white/10">
                <Phone size={22} className="text-white" />
              </div>
              <div>
                <p className="font-medium text-lg">Phone</p>
                <a
                  href={`tel:${personalInfo.contact.phone}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {personalInfo.contact.phone}
                </a>
              </div>
            </div>
          )}

          <div className="flex items-start gap-5">
            <div className="p-3 rounded-lg bg-gradient-to-br from-electric-blue/20 to-neon-pink/20 backdrop-blur-md border border-white/10">
              <Calendar size={22} className="text-white" />
            </div>
            <div>
              <p className="font-medium text-lg">Schedule a Call</p>
              <a
                href={personalInfo.social.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Book a time on my calendar
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="p-3 rounded-lg bg-gradient-to-br from-neon-pink/20 to-electric-blue/20 backdrop-blur-md border border-white/10">
              <MapPin size={22} className="text-white" />
            </div>
            <div>
              <p className="font-medium text-lg">Location</p>

              <a
                href="https://maps.app.goo.gl/eBL7CaqjxfKrNtwG7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                {personalInfo.contact.location}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h4 className="text-xl font-medium mb-5">Connect With Me</h4>
          <div className="flex gap-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="GitHub"
            >
              <Github size={22} className="text-white" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} className="text-white" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Email"
            >
              <Mail size={22} className="text-white" />
            </a>
            <a
              href={personalInfo.social.calendly}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              aria-label="Calendar"
            >
              <Calendar size={22} className="text-white" />
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
