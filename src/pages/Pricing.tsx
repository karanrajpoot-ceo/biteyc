import { motion } from 'framer-motion';
import { 
  Check, 
  Zap, 
  Crown, 
  Building2, 
  ArrowRight, 
  Star,
  MessageSquare,
  HelpCircle
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with automation',
    price: '₹15,000',
    period: '/month',
    icon: Zap,
    popular: false,
    features: [
      'WhatsApp Chatbot (Basic)',
      '1 Social Media Platform',
      'Up to 1,000 messages/month',
      'Basic lead capture forms',
      'Email support (48hr response)',
      'Monthly performance report',
      'Basic analytics dashboard',
      'Setup & onboarding included',
    ],
    notIncluded: [
      'Meta & Google Ads management',
      'Custom integrations',
      'Priority support',
      'Advanced AI features',
    ],
    bestFor: 'Small businesses, Startups, Solopreneurs',
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale their operations',
    price: '₹35,000',
    period: '/month',
    icon: Crown,
    popular: true,
    features: [
      'Advanced AI Chatbot',
      'WhatsApp + Instagram automation',
      'Up to 10,000 messages/month',
      'Meta Ads management (up to ₹50K spend)',
      'Lead nurturing sequences',
      'CRM integration (HubSpot, Zoho)',
      'Weekly performance reports',
      'A/B testing & optimization',
      'Priority email & WhatsApp support',
      'Custom conversation flows',
      'Landing page design (1/month)',
      'Retargeting campaigns',
    ],
    notIncluded: [
      'Google Ads management',
      'Dedicated account manager',
    ],
    bestFor: 'Growing SMBs, E-commerce, Service businesses',
  },
  {
    name: 'Enterprise',
    description: 'For established businesses needing comprehensive solutions',
    price: '₹75,000',
    period: '/month',
    icon: Building2,
    popular: false,
    features: [
      'Everything in Growth, plus:',
      'Unlimited messages',
      'All social platforms (WhatsApp, Instagram, Facebook, Telegram)',
      'Meta + Google Ads management',
      'Unlimited ad spend management',
      'Custom AI model training',
      'Advanced analytics & attribution',
      'Dedicated account manager',
      '24/7 priority support (phone, WhatsApp, email)',
      'Custom integrations & API access',
      'White-label solutions available',
      'Quarterly strategy sessions',
      'Competitor monitoring',
      'Multi-location support',
    ],
    notIncluded: [],
    bestFor: 'Enterprises, Agencies, Multi-location businesses',
  },
];

const faqs = [
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes! You can upgrade at any time, and the difference will be prorated. Downgrades take effect at the next billing cycle.',
  },
  {
    question: 'Is there a setup fee?',
    answer: 'No, setup and onboarding are included in all plans. We want you to get started without any barriers.',
  },
  {
    question: 'What if I exceed my message limit?',
    answer: 'We will notify you before you hit the limit. Additional messages are charged at competitive rates, or you can upgrade your plan.',
  },
  {
    question: 'Do you offer annual discounts?',
    answer: 'Yes! Pay annually and get 2 months free on any plan. Contact us for custom enterprise pricing.',
  },
];

const Pricing = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-tight">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-6">
              <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
              Transparent Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Simple Pricing,
              <br />
              <span className="text-muted-foreground">Powerful Results</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Choose the plan that fits your business. All plans include setup, onboarding, 
              and ongoing optimization. No hidden fees, no surprises.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  className={`relative bg-card rounded-3xl p-8 border h-full flex flex-col ${
                    plan.popular 
                      ? 'border-accent shadow-glow' 
                      : 'border-border/50 hover:border-border'
                  } hover:shadow-lg transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-accent text-accent-foreground text-sm font-semibold px-4 py-1 rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <div className={`w-14 h-14 rounded-2xl ${plan.popular ? 'bg-accent/20' : 'bg-muted'} flex items-center justify-center mb-4`}>
                      <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-accent' : 'text-foreground'}`} />
                    </div>
                    <h3 className="text-2xl font-bold">{plan.name}</h3>
                    <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                  </div>

                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-6 pb-6 border-b border-border">
                    Best for: {plan.bestFor}
                  </p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-whatsapp flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li key={`not-${i}`} className="flex items-start gap-3 opacity-50">
                        <span className="w-5 h-5 flex-shrink-0 mt-0.5 text-center">—</span>
                        <span className="text-sm line-through">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant={plan.popular ? 'hero' : 'outline'} 
                      size="lg" 
                      className="w-full"
                    >
                      Get Started
                      <ArrowRight className="w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="mt-12 text-center">
            <div className="bg-muted/50 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold mb-2">Need a Custom Solution?</h3>
              <p className="text-muted-foreground mb-4">
                We offer custom packages for agencies, enterprises, and businesses with unique requirements.
              </p>
              <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                <Button variant="default">
                  Contact for Custom Pricing
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              Pricing FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Common Questions
            </h2>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto grid gap-6">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="bg-card rounded-2xl p-6 border border-border/50">
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Book a free consultation and we will help you choose the right plan for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://wa.me/918433299471" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
