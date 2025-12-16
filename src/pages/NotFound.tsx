import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';

const NotFound = () => {
  return (
    <Layout>
      <section className="min-h-[80vh] flex items-center justify-center">
        <div className="container-tight text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-9xl font-bold text-muted/30">404</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
              Page Not Found
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md mx-auto">
              Oops! The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button variant="hero" size="lg">
                  <Home className="w-5 h-5" />
                  Back to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => window.history.back()}
              >
                <ArrowLeft className="w-5 h-5" />
                Go Back
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
