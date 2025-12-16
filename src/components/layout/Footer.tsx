import { Link } from 'react-router-dom';
import { Instagram, Mail, Phone, MessageCircle, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Team', href: '/about' },
    { label: 'Careers', href: '/about' },
    { label: 'Contact', href: '/about' },
  ],
  services: [
    { label: 'AI Automations', href: '/services' },
    { label: 'Meta & Google Ads', href: '/services' },
    { label: 'Chatbot Solutions', href: '/services' },
    { label: 'Lead Generation', href: '/services' },
  ],
  resources: [
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'How We Work', href: '/how-we-work' },
    { label: 'FAQ', href: '/about' },
    { label: 'Blog', href: '/' },
  ],
};

const socialLinks = [
  { icon: Instagram, href: 'https://instagram.com/karanrajpoot.me', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/918433299471', label: 'WhatsApp' },
  { icon: Linkedin, href: 'https://www.threads.com/@karanrajpoot.me', label: 'Threads' },
  { icon: Mail, href: 'mailto:hello.biteyc@gmail.com', label: 'Email' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* CTA Section */}
      <div className="container-tight py-20 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
          Let's discuss how AI automations and strategic ads can scale your growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              Schedule Free Consultation
            </Button>
          </a>
          <a href="https://wa.me/918433299471" target="_blank" rel="noopener noreferrer">
            <Button variant="hero-outline" size="lg" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-tight py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <img src={logo} alt="Biteyc" className="w-12 h-12 rounded-lg" />
                <span className="text-2xl font-bold">Biteyc</span>
              </Link>
              <p className="text-primary-foreground/70 mb-6 max-w-sm">
                AI Automations & Ads agency helping businesses grow through intelligent automation and strategic advertising.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-tight py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Biteyc. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-primary-foreground/60">
            <Phone className="w-4 h-4" />
            <a href="tel:+918433299471" className="hover:text-primary-foreground transition-colors">
              +91 84332 99471
            </a>
            <span className="mx-2">•</span>
            <Mail className="w-4 h-4" />
            <a href="mailto:hello.biteyc@gmail.com" className="hover:text-primary-foreground transition-colors">
              hello.biteyc@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
