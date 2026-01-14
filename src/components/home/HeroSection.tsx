import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Zap, Target, TrendingUp, Play } from 'lucide-react';
import { MagneticButton } from '@/components/ui/magnetic-button';
import heroRobot from '@/assets/hero-robot.png';
import heroFrame from '@/assets/hero-frame.png';

const features = [
  { icon: Zap, title: 'Lightning Fast Setup' },
  { icon: Target, title: 'Precision Targeting' },
  { icon: TrendingUp, title: 'Scalable Growth' },
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-muted/50 via-background to-accent/5" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-whatsapp/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />

      <div className="container-tight relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
                AI Automations & Ads Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Transform Your
              <br />
              <span className="relative">
                Business
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-accent/30" viewBox="0 0 200 8">
                  <path d="M0,5 Q50,0 100,5 T200,5" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
              </span>
              <br />
              with AI
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Automate conversations, run targeted ads, and generate quality leads. 
              We help businesses scale with intelligent automation and strategic advertising.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="hero" size="lg" className="w-full sm:w-auto">
                  Schedule Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </MagneticButton>
              </a>
              <a href="https://wa.me/918433299471" target="_blank" rel="noopener noreferrer">
                <MagneticButton variant="hero-outline" size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </MagneticButton>
              </a>
            </motion.div>

            {/* Quick Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-6 mt-10"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <feature.icon className="w-4 h-4 text-accent" />
                  <span>{feature.title}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            className="order-1 lg:order-2 relative flex-shrink-0 lg:ml-8 xl:ml-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] group">
              {/* Paintbrush Frame Background with hover animation */}
              <motion.img
                src={heroFrame}
                alt=""
                className="absolute -inset-8 w-[calc(100%+64px)] h-[calc(100%+64px)] object-contain pointer-events-none"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 3, scale: 1.05 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ zIndex: -1 }}
              />
              <img
                src={heroRobot}
                alt="AI Automation Robot"
                className="relative w-full h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] object-contain"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -left-4 top-1/4 glass rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-whatsapp" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Messages Automated</p>
                    <p className="font-bold">50K+ Daily</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -right-4 bottom-1/4 glass rounded-2xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Conversion Rate</p>
                    <p className="font-bold">+156%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
