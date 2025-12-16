import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  Target, 
  BarChart3, 
  Users, 
  Zap,
  Instagram,
  Facebook,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Bot,
    title: 'AI Chatbots',
    description: 'Deploy intelligent chatbots that engage your customers 24/7. Answer FAQs, qualify leads, and provide instant support—all automatically.',
    features: [
      'Natural language processing',
      'Multi-platform deployment',
      'Custom conversation flows',
      'Lead qualification & scoring',
      'CRM integration',
      'Analytics dashboard',
    ],
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp Automation',
    description: 'Transform WhatsApp into your most powerful sales channel. Automate messages, broadcasts, and customer follow-ups at scale.',
    features: [
      'Bulk messaging campaigns',
      'Auto-reply sequences',
      'Broadcast lists management',
      'Order notifications',
      'Payment reminders',
      'Customer segmentation',
    ],
    color: 'bg-whatsapp/10 text-whatsapp',
  },
  {
    icon: Instagram,
    title: 'Instagram Automation',
    description: 'Grow your Instagram presence with smart automation. Auto-respond to DMs, comments, and stories to maximize engagement.',
    features: [
      'DM automation',
      'Comment auto-replies',
      'Story mention responses',
      'Lead capture from DMs',
      'Follower engagement',
      'Content scheduling',
    ],
    color: 'bg-instagram/10 text-instagram',
  },
  {
    icon: Target,
    title: 'Meta & Google Ads',
    description: 'Strategic advertising campaigns that deliver results. We create, manage, and optimize ads across Meta and Google platforms.',
    features: [
      'Facebook & Instagram ads',
      'Google Search & Display',
      'Retargeting campaigns',
      'A/B testing',
      'Conversion tracking',
      'Monthly performance reports',
    ],
    color: 'bg-facebook/10 text-facebook',
  },
  {
    icon: Users,
    title: 'Lead Generation',
    description: 'Generate high-quality leads consistently. We build funnels, landing pages, and automation that turn visitors into customers.',
    features: [
      'Landing page design',
      'Lead magnet creation',
      'Email sequences',
      'SMS follow-ups',
      'Lead scoring',
      'CRM automation',
    ],
    color: 'bg-accent/10 text-accent',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    description: 'Make data-driven decisions with comprehensive analytics. Track every metric that matters to your business growth.',
    features: [
      'Real-time dashboards',
      'Conversion tracking',
      'ROI calculation',
      'Customer journey mapping',
      'A/B test results',
      'Weekly/monthly reports',
    ],
    color: 'bg-tiktok/10 text-tiktok',
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-tight">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-accent" />
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Everything You Need
              <br />
              <span className="text-muted-foreground">to Grow Online</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              From intelligent automation to strategic advertising, we provide comprehensive 
              solutions that transform how you engage customers and generate revenue.
            </p>
            <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
              <Button variant="hero" size="lg">
                Get Started Today
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={index}
                animation="fadeUp"
                delay={index * 0.1}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-3xl p-8 lg:p-10 border border-border/50 hover:border-border hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
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
              Ready to Transform Your Business?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss which services are right for you. Schedule a free consultation 
              and get a customized strategy for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  Schedule Free Consultation
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

export default Services;
