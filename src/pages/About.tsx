import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  Target, 
  Award,
  MessageSquare,
  Mail,
  Phone,
  Instagram,
  Linkedin,
  ArrowRight,
  Plus,
  Minus,
  HelpCircle,
  Lightbulb,
  Heart,
  Rocket,
  Shield,
  Clock,
  Globe
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Results-Driven',
    description: 'We focus on metrics that matter. Every strategy is designed to deliver measurable ROI for your business.',
  },
  {
    icon: Users,
    title: 'Client-First Approach',
    description: 'Your success is our success. We build long-term partnerships and treat your business like our own.',
  },
  {
    icon: Award,
    title: 'Innovation & Excellence',
    description: 'We stay ahead of the curve, constantly exploring new technologies and strategies to give you an edge.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description: 'No hidden fees, no surprises. We believe in honest communication and clear expectations.',
  },
  {
    icon: Rocket,
    title: 'Speed & Agility',
    description: 'Fast implementation without compromising quality. We adapt quickly to market changes.',
  },
  {
    icon: Shield,
    title: 'Data Security',
    description: 'Your data is safe with us. We follow industry best practices for security and privacy.',
  },
];

import founderImage from '@/assets/founder.jpg';

const team = [
  {
    name: 'Karan Rajpoot',
    role: 'Founder & CEO',
    bio: 'A dynamic entrepreneur with 2+ years of experience in AI automation and performance marketing. Karan founded Biteyc with a vision to make powerful AI technology accessible to businesses of all sizes, helping 500+ clients achieve remarkable growth.',
    image: founderImage,
  },
];

const milestones = [
  { year: '2022', title: 'Founded', desc: 'Biteyc was born with a mission to democratize AI automation' },
  { year: '2023', title: '100+ Clients', desc: 'Reached our first hundred happy clients across India' },
  { year: '2023', title: '10M Messages', desc: 'Our automations processed over 10 million messages' },
  { year: '2024', title: 'Enterprise Launch', desc: 'Launched enterprise solutions for large businesses' },
];

const faqs = [
  {
    question: 'What services does Biteyc offer?',
    answer: 'We specialize in AI automation solutions including WhatsApp & Instagram chatbots, automated lead generation, Meta & Google Ads management, and custom automation workflows. Our goal is to help businesses scale through intelligent automation and strategic advertising.',
  },
  {
    question: 'How long does it take to set up automations?',
    answer: 'Most automation setups can be completed within 3-7 business days, depending on complexity. Simple chatbots can be deployed within 48 hours, while comprehensive automation systems with multiple integrations may take up to 2 weeks.',
  },
  {
    question: 'What kind of ROI can I expect from your services?',
    answer: 'Our clients typically see a 200-500% improvement in lead response rates and a 2-4x increase in conversion rates. For paid advertising, we aim for a minimum 3x ROAS (Return on Ad Spend). Results vary based on industry and current marketing infrastructure.',
  },
  {
    question: 'Do you work with businesses of all sizes?',
    answer: 'Yes! We work with startups, SMBs, and established enterprises. Our solutions are scalable and can be customized to fit your budget and requirements. Whether you\'re just starting out or looking to scale, we have packages designed for your needs.',
  },
  {
    question: 'How do your chatbots integrate with existing systems?',
    answer: 'Our chatbots integrate seamlessly with popular CRMs (HubSpot, Salesforce, Zoho), e-commerce platforms (Shopify, WooCommerce), payment gateways, and custom APIs. We ensure smooth data flow between your chatbot and existing tools.',
  },
  {
    question: 'What support do you provide after implementation?',
    answer: 'We provide ongoing support including regular performance reviews, optimization recommendations, and technical assistance. All our packages include a dedicated account manager and access to our support team via WhatsApp and email.',
  },
  {
    question: 'Do you offer training for our team?',
    answer: 'Yes! We provide comprehensive training sessions to help your team understand and manage the automation tools. We also provide documentation and video tutorials for reference.',
  },
  {
    question: 'What makes Biteyc different from other agencies?',
    answer: 'We combine deep AI expertise with performance marketing knowledge. Unlike traditional agencies, we focus on measurable results and provide end-to-end solutions from strategy to implementation to optimization.',
  },
];

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-tight">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Building Big.
              <br />
              <span className="text-muted-foreground">Documenting the Hustle.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're Biteyc — an AI automations and advertising agency helping businesses 
              grow through intelligent automation and strategic marketing.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideLeft">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Biteyc was founded with a simple mission: make powerful AI automation 
                  accessible to businesses of all sizes. We saw too many businesses struggle 
                  with manual processes, missed leads, and inefficient marketing.
                </p>
                <p>
                  Led by Karan Rajpoot, our team combines deep expertise in automation, 
                  AI technology, and performance marketing. We've helped hundreds of businesses 
                  transform their operations and achieve remarkable growth.
                </p>
                <p>
                  Today, we're proud to be trusted by businesses across India, from startups 
                  to established enterprises. Our commitment remains the same: deliver results 
                  that matter.
                </p>
                <p>
                  We believe that every business deserves access to the same powerful tools 
                  that big corporations use. That's why we've made our solutions affordable, 
                  scalable, and easy to implement.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">10M+</p>
                  <p className="text-sm text-muted-foreground">Messages Automated</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">300%</p>
                  <p className="text-sm text-muted-foreground">Average ROI</p>
                </div>
                <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">Key milestones in our growth story</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {milestones.map((milestone, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">{milestone.year}</div>
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground text-sm">{milestone.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Biteyc.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 h-full"
                >
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                    <value.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Founder</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The visionary behind Biteyc
            </p>
          </AnimatedSection>

          <div className="max-w-md lg:max-w-4xl mx-auto">
            {team.map((member, index) => (
              <AnimatedSection key={index} animation="fadeUp">
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-3xl p-8 border border-border/50 lg:flex lg:items-center lg:gap-8 lg:text-left text-center"
                >
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-32 h-32 lg:w-48 lg:h-48 rounded-2xl object-cover object-top mx-auto lg:mx-0 mb-6 lg:mb-0 shadow-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-2xl font-semibold mb-1">{member.name}</h3>
                    <p className="text-accent font-medium mb-4">{member.role}</p>
                    <p className="text-muted-foreground">{member.bio}</p>
                    <div className="flex justify-center lg:justify-start gap-4 mt-6">
                      <a 
                        href="https://instagram.com/karanrajpoot.me" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/karanrajpoot0" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.05}>
                <div className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full py-5 flex items-center justify-between text-left group"
                  >
                    <span className="font-semibold pr-8 group-hover:text-accent transition-colors">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {openIndex === index ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Something Amazing
              </h2>
              <p className="text-primary-foreground/70 text-lg mb-8">
                Ready to transform your business? Get in touch with us today.
              </p>

              <div className="space-y-4">
                <a 
                  href="tel:+918433299471" 
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span>+91 84332 99471</span>
                </a>
                <a 
                  href="mailto:hello.biteyc@gmail.com" 
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span>hello.biteyc@gmail.com</span>
                </a>
                <a 
                  href="https://instagram.com/karanrajpoot.me" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <span>@karanrajpoot.me</span>
                </a>
                <a 
                  href="https://linktr.ee/biteyc" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <span>linktr.ee/biteyc</span>
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="bg-primary-foreground/5 rounded-3xl p-8 lg:p-10 border border-primary-foreground/10">
                <h3 className="text-2xl font-bold mb-4">Schedule a Free Call</h3>
                <p className="text-primary-foreground/70 mb-6">
                  Book a 30-minute consultation to discuss your business goals and 
                  how we can help you achieve them.
                </p>
                <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                  <Button variant="secondary" size="lg" className="w-full">
                    Book Your Free Call
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
