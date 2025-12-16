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
  HelpCircle
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
];

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slideRight">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Clients</p>
                </div>
                <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">10M+</p>
                  <p className="text-sm text-muted-foreground">Messages Automated</p>
                </div>
                <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">300%</p>
                  <p className="text-sm text-muted-foreground">Average ROI</p>
                </div>
                <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
                  <p className="text-4xl font-bold mb-2">24/7</p>
                  <p className="text-sm text-muted-foreground">Support Available</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do at Biteyc.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-8 border border-border/50 text-center h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-16">
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
                    className="w-full py-6 flex items-center justify-between text-left group"
                  >
                    <span className="font-semibold text-lg pr-8 group-hover:text-accent transition-colors">
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
                        <p className="pb-6 text-muted-foreground leading-relaxed">
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
