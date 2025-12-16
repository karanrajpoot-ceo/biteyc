import { motion } from 'framer-motion';
import { 
  Phone, 
  Search, 
  Lightbulb, 
  Rocket, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Discovery Call',
    description: 'We start with a free 30-minute consultation to understand your business, current challenges, and growth goals.',
    details: [
      'Understand your business model',
      'Identify pain points',
      'Discuss current marketing efforts',
      'Define success metrics',
    ],
  },
  {
    icon: Search,
    number: '02',
    title: 'Research & Analysis',
    description: 'We analyze your industry, competitors, and target audience to create a data-driven strategy.',
    details: [
      'Competitor analysis',
      'Market research',
      'Audience profiling',
      'Platform audit',
    ],
  },
  {
    icon: Lightbulb,
    number: '03',
    title: 'Strategy Development',
    description: 'Based on our research, we create a customized automation and advertising strategy tailored to your needs.',
    details: [
      'Custom automation flows',
      'Ad campaign strategy',
      'Content calendar',
      'KPI definition',
    ],
  },
  {
    icon: Rocket,
    number: '04',
    title: 'Implementation',
    description: 'Our team sets up all automations, creates ad campaigns, and integrates everything with your existing tools.',
    details: [
      'Chatbot development',
      'Ad creative design',
      'Platform integration',
      'Testing & QA',
    ],
  },
  {
    icon: TrendingUp,
    number: '05',
    title: 'Optimize & Scale',
    description: 'We continuously monitor, optimize, and scale your campaigns based on real-time data and performance metrics.',
    details: [
      'A/B testing',
      'Performance optimization',
      'Scale winning campaigns',
      'Monthly reporting',
    ],
  },
];

const HowWeWorkPage = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-tight">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-6">
              Our Process
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How We Work
              <br />
              <span className="text-muted-foreground">With You</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Our proven 5-step process ensures transparency, efficiency, and results. 
              From discovery to scale, we're with you every step of the way.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <AnimatedSection
                key={index}
                animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className="bg-card rounded-3xl border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                          <step.icon className="w-7 h-7 text-accent" />
                        </div>
                        <span className="text-5xl font-bold text-muted/30">{step.number}</span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold mb-4">{step.title}</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-3">
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`bg-muted/30 p-8 lg:p-12 flex items-center justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <div className="text-center">
                        <span className="text-8xl lg:text-9xl font-bold text-muted/20">{step.number}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Schedule your free discovery call today and let's discuss how we can help 
              transform your business with AI automation and strategic advertising.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  Schedule Discovery Call
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

export default HowWeWorkPage;
