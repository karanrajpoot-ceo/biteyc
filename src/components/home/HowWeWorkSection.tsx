import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';

const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a free consultation to understand your business, goals, and challenges. This helps us craft a tailored strategy.',
    features: ['Business Analysis', 'Goal Setting', 'Strategy Blueprint'],
  },
  {
    number: '02',
    title: 'Strategy & Setup',
    description: 'Our team designs and implements your custom automation flows and ad campaigns based on your specific requirements.',
    features: ['Custom Automation Flows', 'Ad Campaign Setup', 'Integration with Tools'],
  },
  {
    number: '03',
    title: 'Launch & Optimize',
    description: 'We launch your campaigns and continuously optimize based on real-time data to maximize your ROI.',
    features: ['Campaign Launch', 'A/B Testing', 'Performance Optimization'],
  },
  {
    number: '04',
    title: 'Scale & Grow',
    description: 'Once we find the winning formula, we scale your success. Watch your business grow with consistent, quality leads.',
    features: ['Scale Winning Campaigns', 'Expand to New Channels', 'Monthly Reports'],
  },
];

export const HowWeWork = () => {
  return (
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Hello to
            <br />
            <span className="text-muted-foreground">High Conversions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our proven 4-step process takes you from initial consultation to consistent, 
            scalable growth. Simple, transparent, and results-driven.
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 0.15}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-card rounded-2xl p-8 border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative z-10">
                    <span className="text-5xl font-bold text-foreground/20 mb-4 block">
                      {step.number}
                    </span>
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-16" delay={0.4}>
          <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="lg">
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
