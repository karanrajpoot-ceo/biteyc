import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const reviews = [
  {
    name: 'Rahul Sharma',
    role: 'Founder, TechStart Solutions',
    content: 'Biteyc transformed our lead generation process. The WhatsApp automation alone increased our response rate by 300%. Highly recommended!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Priya Patel',
    role: 'Marketing Director, StyleHub',
    content: 'Their Meta ads strategy doubled our ROAS within the first month. The team really understands performance marketing.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Amit Kumar',
    role: 'CEO, EduLearn Academy',
    content: 'The chatbot they built handles 80% of our student inquiries automatically. It\'s like having a 24/7 sales team!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Sneha Reddy',
    role: 'Owner, Wellness Studio',
    content: 'From strategy to execution, Biteyc delivered exceptional results. Our Instagram following grew 5x and conversions are through the roof.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Vikram Singh',
    role: 'Founder, GrowthBox Agency',
    content: 'Professional, responsive, and results-oriented. Biteyc is our go-to partner for all automation needs.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
  },
  {
    name: 'Neha Gupta',
    role: 'Marketing Head, FoodieDelights',
    content: 'The AI chatbot integration was seamless. Customer satisfaction scores improved significantly after implementation.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
  },
];

export const ReviewsSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-whatsapp/5 rounded-full blur-[100px] -translate-y-1/2" />
      
      <div className="container-tight relative">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-foreground text-sm font-medium mb-4">
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
          
          <motion.div
            animate={{ x: [0, -1920] }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="flex gap-6"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex-shrink-0 w-[380px] bg-card rounded-3xl p-8 border border-border/50 hover:border-accent/30 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-6">
                  <Quote className="w-10 h-10 text-accent/30 group-hover:text-accent/50 transition-colors" />
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground mb-8 leading-relaxed text-lg">{review.content}</p>
                <div className="flex items-center gap-4">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                  />
                  <div>
                    <p className="font-semibold text-lg">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats below reviews */}
        <AnimatedSection className="mt-12">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">4.9/5</p>
              <p className="text-sm text-muted-foreground">Average Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">500+</p>
              <p className="text-sm text-muted-foreground">Happy Clients</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold mb-1">98%</p>
              <p className="text-sm text-muted-foreground">Client Retention</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
