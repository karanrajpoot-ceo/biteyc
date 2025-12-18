import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-3' : 'py-5'
      }`}
    >
      {/* Background with blur */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border/50' : 'bg-transparent'
      }`} />

      <nav className="container-tight relative flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0, 0)}>
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src={logo} 
              alt="Biteyc" 
              className="w-11 h-11 rounded-xl shadow-md" 
            />
          </motion.div>
          <span className="text-xl font-bold tracking-tight">Biteyc</span>
        </Link>

        {/* Desktop Navigation - Modern Pill Style */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-1 p-1.5 rounded-full bg-muted/60 backdrop-blur-sm border border-border/50">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className="relative"
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-background rounded-full shadow-sm"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 block px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-full ${
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`}>
                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918433299471">
            <Button variant="ghost" size="sm" className="gap-2 rounded-full">
              <Phone className="w-4 h-4" />
              Contact
            </Button>
          </a>
          <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="rounded-full gap-2 group">
              Schedule Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="lg:hidden p-2.5 hover:bg-muted rounded-xl transition-colors border border-transparent hover:border-border"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="container-tight py-6 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => window.scrollTo(0, 0)}
                    className={`flex items-center justify-between py-3 px-4 rounded-xl text-lg font-medium transition-all ${
                      location.pathname === link.href
                        ? 'bg-muted text-foreground'
                        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                    }`}
                  >
                    {link.label}
                    {location.pathname === link.href && (
                      <div className="w-2 h-2 rounded-full bg-accent" />
                    )}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="flex flex-col gap-3 pt-4 mt-4 border-t border-border"
              >
                <a href="tel:+918433299471" className="w-full">
                  <Button variant="outline" className="w-full rounded-xl h-12">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 84332 99471
                  </Button>
                </a>
                <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full rounded-xl h-12 gap-2">
                    Schedule a Call
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
