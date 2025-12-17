import { motion } from 'framer-motion';
import { useAnimatedCounter } from '@/hooks/useAnimatedCounter';

interface StatItemProps {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  description: string;
}

const StatItem = ({ end, suffix = '', prefix = '', label, description }: StatItemProps) => {
  const { ref, displayValue } = useAnimatedCounter({ end, suffix, prefix, duration: 2500 });

  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.02 }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-card to-muted/30 rounded-3xl p-8 border border-border/50 hover:border-accent/30 transition-all duration-500 h-full">
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors" />
        <p className="text-5xl md:text-6xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
          {displayValue}
        </p>
        <p className="text-lg font-semibold mb-1">{label}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </motion.div>
  );
};

const stats = [
  { end: 500, suffix: '+', label: 'Happy Clients', description: 'Businesses transformed' },
  { end: 10, suffix: 'M+', label: 'Leads Generated', description: 'Quality prospects delivered' },
  { end: 300, suffix: '%', label: 'Average ROI', description: 'Return on investment' },
  { end: 50, suffix: 'K+', label: 'Automations Run', description: 'Messages sent daily' },
];

export const StatsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Numbers That Speak
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Real results from real businesses we've helped grow
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <StatItem {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
