import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/918433299471"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
};
