import { motion } from 'framer-motion';
import { Check, Zap, Crown, Building2, ArrowRight, Star, MessageCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { MagneticButton } from '@/components/ui/magnetic-button';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for small businesses getting started with automation',
    price: '$499',
    period: '/month',
    icon: Zap,
    popular: false,
    features: [
      'WhatsApp Chatbot (Basic)',
      '1 Social Media Platform',
      'Up to 1,000 messages/month',
      'Basic lead capture forms',
      'Email support',
      'Monthly performance report',
      'Basic analytics dashboard',
    ],
    notIncluded: [
      'Meta & Google Ads management',
      'Custom integrations',
      'Priority support',
    ],
  },
  {
    name: 'Growth',
    description: 'Ideal for growing businesses ready to scale their operations',
    price: '$999',
    period: '/month',
    icon: Crown,
    popular: true,
    features: [
      'Advanced AI Chatbot',
      'WhatsApp + Instagram automation',
      'Up to 10,000 messages/month',
      'Meta Ads management (up to $600 spend)',
      'Lead nurturing sequences',
      'CRM integration',
      'Weekly performance reports',
      'A/B testing',
      'Priority email & WhatsApp support',
      'Custom conversation flows',
    ],
    notIncluded: [
      'Google Ads management',
      'Dedicated account manager',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For established businesses needing comprehensive solutions',
    price: '$1499',
    period: '/month',
    icon: Building2,
    popular: false,
    features: [
      'Everything in Growth, plus:',
      'Unlimited messages',
      'All social platforms',
      'Meta + Google Ads management',
      'Unlimited ad spend management',
      'Custom AI model training',
      'Advanced analytics & attribution',
      'Dedicated account manager',
      '24/7 priority support',
      'Custom integrations',
      'White-label solutions',
      'Quarterly strategy sessions',
    ],
    notIncluded: [],
  },
];

export const PricingSection = () => {
  const getWhatsAppLink = (planName: string, price: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the ${planName} plan (${price}/month). Please share more details about how I can get started.`
    );
    return `https://wa.me/918433299471?text=${message}`;
  };

  return (
    <section className="section-padding bg-muted/30">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            Pricing Plans
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simple, Transparent
            <br />
            <span className="text-muted-foreground">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the plan that fits your business needs. All plans include setup, 
            onboarding, and ongoing optimization. No hidden fees.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={index * 0.1}
            >
              <motion.div
                whileHover={{ y: -8 }}
                className={`relative bg-card rounded-3xl p-6 lg:p-8 border h-full flex flex-col ${
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

                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

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

                <a href={getWhatsAppLink(plan.name, plan.price)} target="_blank" rel="noopener noreferrer" className="block">
                  <MagneticButton 
                    variant={plan.popular ? 'hero' : 'outline'} 
                    size="lg" 
                    className="w-full"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Started
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="mt-10 text-center" delay={0.3}>
          <p className="text-muted-foreground">
            Need a custom solution? {' '}
            <a 
              href="https://cal.com/biteyc/30mins" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline font-medium"
            >
              Let's talk about your requirements
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};
