import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechStart Solutions',
    content: 'Biteyc transformed our lead generation process. The WhatsApp automation alone increased our response rate by 300%. Highly recommended!',
    rating: 5,
    avatar: 'RS',
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Director, StyleHub',
    content: 'Their Meta ads strategy doubled our ROAS within the first month. The team really understands performance marketing.',
    rating: 5,
    avatar: 'PP',
  },
  {
    name: 'Amit Kumar',
    role: 'CEO, EduLearn Academy',
    content: 'The chatbot they built handles 80% of our student inquiries automatically. It\'s like having a 24/7 sales team!',
    rating: 5,
    avatar: 'AK',
  },
  {
    name: 'Sneha Reddy',
    role: 'Owner, Wellness Studio',
    content: 'From strategy to execution, Biteyc delivered exceptional results. Our Instagram following grew 5x and conversions are through the roof.',
    rating: 5,
    avatar: 'SR',
  },
  {
    name: 'Vikram Singh',
    role: 'Founder, GrowthBox Agency',
    content: 'Professional, responsive, and results-oriented. Biteyc is our go-to partner for all automation needs.',
    rating: 5,
    avatar: 'VS',
  },
  {
    name: 'Neha Gupta',
    role: 'Marketing Head, FoodieDelights',
    content: 'The AI chatbot integration was seamless. Customer satisfaction scores improved significantly after implementation.',
    rating: 5,
    avatar: 'NG',
  },
];

export const ReviewsSection = () => {
  return (
    <section className="section-padding bg-muted/30 overflow-hidden">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-4">
            <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Trusted by Businesses
            <br />
            <span className="text-muted-foreground">Across India</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about working with Biteyc.
          </p>
        </AnimatedSection>

        {/* Marquee Effect */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-muted/30 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-muted/30 to-transparent z-10" />
          
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[350px] bg-card rounded-2xl p-6 border border-border/50"
              >
                <Quote className="w-8 h-8 text-muted mb-4" />
                <p className="text-foreground mb-6 leading-relaxed">{review.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
