import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Facebook, Globe, Smartphone, Mail } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const platforms = [
  { icon: MessageCircle, name: 'WhatsApp', color: 'bg-whatsapp/10 text-whatsapp' },
  { icon: Instagram, name: 'Instagram', color: 'bg-instagram/10 text-instagram' },
  { icon: Facebook, name: 'Facebook', color: 'bg-facebook/10 text-facebook' },
  { icon: Globe, name: 'Website', color: 'bg-accent/10 text-accent' },
  { icon: Smartphone, name: 'Telegram', color: 'bg-tiktok/10 text-tiktok' },
  { icon: Mail, name: 'Email', color: 'bg-destructive/10 text-destructive' },
];

const trustedBy = [
  'TechStart Solutions',
  'StyleHub Fashion',
  'EduLearn Academy',
  'Wellness Studio',
  'GrowthBox Agency',
  'FoodieDelights',
];

export const TrustedBySection = () => {
  return (
    <section className="py-16 border-y border-border/50">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-10">
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by 500+ businesses across India
          </p>
          
          {/* Trusted Companies */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {trustedBy.map((company, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors"
              >
                {company}
              </motion.span>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <p className="text-center text-sm text-muted-foreground mb-6">
            We automate across all major platforms
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full ${platform.color}`}
              >
                <platform.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{platform.name}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
