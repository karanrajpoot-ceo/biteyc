import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Award, Users, Rocket, Heart, Linkedin, Twitter, Mail } from 'lucide-react';
import founderImage from '@/assets/founder.jpg';

export const FounderSection = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-accent/5 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Heart className="w-4 h-4 text-pink-500" />
            Meet The Founder
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            The Vision Behind
            <span className="text-primary"> Biteyc</span>
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Founder Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={founderImage}
                  alt="Founder of Biteyc"
                  className="w-full h-[500px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </div>
              
              {/* Floating Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-card p-4 rounded-2xl shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">500+</p>
                    <p className="text-sm text-muted-foreground">Clients Served</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -top-6 -left-6 bg-card p-4 rounded-2xl shadow-xl border border-border/50"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2+</p>
                    <p className="text-sm text-muted-foreground">Years Experience</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -z-10" />
          </motion.div>

          {/* Founder Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">Karan Rajpoot</h3>
              <p className="text-primary font-medium text-lg">Founder & CEO, Biteyc</p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Karan Rajpoot is a dynamic entrepreneur and digital marketing strategist with 2+ years of hands-on 
              experience in AI automation, performance marketing, and business transformation. As the founder of 
              Biteyc, he has dedicated himself to making cutting-edge AI technology accessible to businesses of 
              all sizes across India.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Specializing in Meta Ads, Google Ads, WhatsApp Business API, and custom AI chatbot development, 
              Karan has successfully helped 500+ businesses achieve remarkable growth. His data-driven approach, 
              combined with creative innovation, consistently delivers an average 300% ROI improvement for clients. 
              His mission is simple: empower businesses with automation that works 24/7, so they can focus on what 
              truly matters—growing their vision.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="p-4 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Rocket className="w-5 h-5 text-orange-500" />
                  <span className="font-semibold">Mission</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Empower businesses with AI-driven solutions that deliver measurable results.
                </p>
              </div>
              <div className="p-4 rounded-2xl bg-card border border-border/50">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-5 h-5 text-pink-500" />
                  <span className="font-semibold">Values</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Innovation, transparency, and client success above everything else.
                </p>
              </div>
            </div>

            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-foreground/80">
              "Technology should simplify business, not complicate it. At Biteyc, we make AI work for you, 
              so you can focus on what you do best — growing your business."
              <span className="block mt-2 text-sm not-italic text-muted-foreground">— Karan Rajpoot</span>
            </blockquote>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-muted-foreground">Connect:</span>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1DA1F2] flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@biteyc.com"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:scale-110 transition-transform"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
