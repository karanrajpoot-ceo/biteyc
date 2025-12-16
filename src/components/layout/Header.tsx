import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-tight flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src={logo} 
            alt="Biteyc" 
            className="w-10 h-10 rounded-lg transition-transform duration-300 group-hover:scale-110" 
          />
          <span className="text-xl font-bold tracking-tight">Biteyc</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative text-sm font-medium transition-colors duration-200 hover:text-foreground ${
                location.pathname === link.href
                  ? 'text-foreground'
                  : 'text-muted-foreground'
              }`}
            >
              {link.label}
              {location.pathname === link.href && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-foreground rounded-full"
                />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+918433299471">
            <Button variant="ghost" size="sm" className="gap-2">
              <Phone className="w-4 h-4" />
              Contact
            </Button>
          </a>
          <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
            <Button size="sm">Schedule Call</Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="container-tight py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.href}
                    className={`block py-2 text-lg font-medium transition-colors ${
                      location.pathname === link.href
                        ? 'text-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-3 pt-4 border-t border-border"
              >
                <a href="tel:+918433299471" className="w-full">
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    +91 84332 99471
                  </Button>
                </a>
                <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full">Schedule a Call</Button>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
