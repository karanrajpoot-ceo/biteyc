import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  Target, 
  Bot, 
  BarChart3, 
  Users, 
  Zap,
  Instagram,
  Facebook
} from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const deliverables = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Smart conversational bots that engage customers 24/7, answer FAQs instantly, and qualify leads automatically.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    description: 'Automate your WhatsApp business communication. Send bulk messages, auto-replies, and nurture leads effortlessly.',
    color: 'bg-whatsapp/10 text-whatsapp',
  },
  {
    icon: Target,
    title: 'Meta & Google Ads',
    description: 'Strategic ad campaigns on Facebook, Instagram, and Google that drive quality traffic and maximize your ROI.',
    color: 'bg-facebook/10 text-facebook',
  },
  {
    icon: Instagram,
    title: 'Instagram Growth',
    description: 'Automate DMs, comments, and story replies. Turn engagement into conversions with smart Instagram automation.',
    color: 'bg-instagram/10 text-instagram',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Generate high-quality leads through targeted campaigns, landing pages, and automated follow-up sequences.',
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Get detailed analytics and insights on campaign performance, customer behavior, and conversion metrics.',
    color: 'bg-tiktok/10 text-tiktok',
  },
];

export const WhatWeDeliver = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-4">
            <Zap className="w-4 h-4 text-accent" />
            What We Deliver
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <br />
            <span className="text-muted-foreground">Scale Your Business</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intelligent automation to strategic advertising, we provide end-to-end solutions 
            that transform how you engage customers and generate revenue.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverables.map((item, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className="bg-card rounded-2xl p-8 h-full border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
