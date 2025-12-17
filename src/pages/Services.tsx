import { motion } from 'framer-motion';
import { 
  Bot, 
  MessageSquare, 
  Target, 
  BarChart3, 
  Users, 
  Zap,
  Instagram,
  ArrowRight,
  CheckCircle2,
  Globe,
  Smartphone,
  Mail,
  TrendingUp,
  ShoppingCart,
  Calendar,
  FileText
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
    benefits: ['Reduce response time by 90%', 'Handle 1000+ conversations simultaneously', 'Never miss a lead again'],
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
    benefits: ['98% open rate on messages', 'Instant customer engagement', 'Automated order updates'],
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
    benefits: ['5x follower growth', 'Engage every DM instantly', 'Convert followers to customers'],
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
    benefits: ['3-5x ROAS average', 'Lower cost per acquisition', 'Data-driven optimization'],
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
    benefits: ['200%+ increase in leads', 'Qualified leads only', 'Automated nurturing'],
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
    benefits: ['Full visibility into ROI', 'Identify top performers', 'Optimize in real-time'],
  },
];

const additionalServices = [
  {
    icon: Globe,
    title: 'Website Development',
    description: 'Custom, high-converting websites built for performance',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Integration',
    description: 'Connect your app with our automation ecosystem',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Automated email sequences that convert',
  },
  {
    icon: TrendingUp,
    title: 'SEO Services',
    description: 'Improve organic visibility and traffic',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Automation',
    description: 'Automate orders, inventory, and customer communication',
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Automated scheduling and reminder systems',
  },
];

const industries = [
  'E-commerce & Retail',
  'Healthcare & Wellness',
  'Education & EdTech',
  'Real Estate',
  'Financial Services',
  'Travel & Hospitality',
  'Food & Restaurant',
  'Professional Services',
  'SaaS & Technology',
  'Fitness & Gym',
  'Beauty & Salon',
  'Automotive',
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
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
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                <Button variant="hero" size="lg">
                  Get Started Today
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://wa.me/918433299471" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-5 h-5" />
                  Chat With Us
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Powerful automation and advertising solutions tailored to your business needs
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-6">
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
                  
                  {/* Benefits */}
                  <div className="bg-muted/50 rounded-xl p-4 mb-6">
                    <p className="text-sm font-semibold mb-2">Key Benefits:</p>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-whatsapp flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

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

      {/* Additional Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complement your automation with these value-added services
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We've helped businesses across various industries achieve their growth goals
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {industries.map((industry, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {industry}
                </motion.span>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process Overview */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Deliver</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A streamlined process designed for your success
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand your business goals and challenges' },
              { step: '02', title: 'Strategy', desc: 'Create a customized automation plan' },
              { step: '03', title: 'Implementation', desc: 'Build and deploy your solutions' },
              { step: '04', title: 'Optimization', desc: 'Continuously improve performance' },
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-5xl font-bold text-foreground/80 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
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
