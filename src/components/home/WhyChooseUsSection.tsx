import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Award, Target, Zap } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface StatCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  stat: number;
  suffix: string;
  statLabel: string;
  index: number;
}

const StatCard = ({ icon: Icon, title, description, stat, suffix, statLabel, index }: StatCardProps) => {
  const { ref, displayValue } = useAnimatedCounter({ end: stat, suffix, duration: 2000 });

  return (
    <AnimatedSection animation="fadeUp" delay={index * 0.1}>
      <motion.div
        ref={ref}
        whileHover={{ y: -4 }}
        className="bg-card rounded-2xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-lg transition-all duration-300 h-full group"
      >
        <div className="flex items-start justify-between mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
            <Icon className="w-7 h-7 text-accent" />
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              {displayValue}
            </p>
            <p className="text-xs text-muted-foreground">{statLabel}</p>
          </div>
        </div>
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </motion.div>
    </AnimatedSection>
  );
};

const whyChooseUs = [
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Average 300% ROI for our clients with data-driven strategies that actually work.',
    stat: 300,
    suffix: '%',
    statLabel: 'Average ROI',
  },
  {
    icon: Clock,
    title: 'Fast Implementation',
    description: 'Go live within 3-7 days with our streamlined setup process and expert team.',
    stat: 7,
    suffix: ' Days',
    statLabel: 'Days to Launch',
  },
  {
    icon: Users,
    title: 'Dedicated Support',
    description: 'Get a dedicated account manager and 24/7 support via WhatsApp and email.',
    stat: 24,
    suffix: '/7',
    statLabel: 'Support Available',
  },
  {
    icon: Award,
    title: 'Industry Expertise',
    description: 'Years of experience across multiple industries with proven frameworks.',
    stat: 50,
    suffix: '+',
    statLabel: 'Industries Served',
  },
  {
    icon: Target,
    title: 'Custom Solutions',
    description: 'Every automation and campaign is tailored to your specific business needs.',
    stat: 100,
    suffix: '%',
    statLabel: 'Customized',
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Tech',
    description: 'We use the latest AI and automation tools to keep you ahead of competition.',
    stat: 15,
    suffix: '+',
    statLabel: 'AI Tools Used',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px]" />
      
      <div className="container-tight relative">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            <Award className="w-4 h-4" />
            Why Choose Biteyc
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Built for Growth,
            <br />
            <span className="text-muted-foreground">Designed for Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We're not just another agency. We're your growth partner, committed to delivering 
            measurable results that transform your business.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <StatCard key={index} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
