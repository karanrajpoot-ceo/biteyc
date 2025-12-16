import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { WhatWeDeliver } from '@/components/home/WhatWeDeliver';
import { HowWeWork } from '@/components/home/HowWeWorkSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FAQSection } from '@/components/home/FAQSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <WhatWeDeliver />
      <HowWeWork />
      <ReviewsSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
