import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { WhatsAppButton } from '../shared/WhatsAppButton';
import { ScrollProgress } from '../shared/ScrollProgress';
import { PageTransition } from '../shared/PageTransition';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <PageTransition>
        <main className="flex-1">
          {children}
        </main>
      </PageTransition>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
