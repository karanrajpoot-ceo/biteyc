import { motion } from 'framer-motion';
import logo from '@/assets/logo.jpg';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 2 }}
      onAnimationComplete={onLoadingComplete}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img 
            src={logo} 
            alt="Leads Jeeto Logo" 
            className="w-24 h-24 rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* Brand Name */}
        <motion.h1
          className="text-3xl font-bold text-gradient"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Leads Jeeto
        </motion.h1>

        {/* Loading Bar */}
        <motion.div
          className="w-48 h-1 bg-muted rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.3, delay: 0.6, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          className="text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Automate. Engage. Convert.
        </motion.p>
      </div>
    </motion.div>
  );
};
