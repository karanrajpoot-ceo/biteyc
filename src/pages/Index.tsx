import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { TrustedBySection } from '@/components/home/TrustedBySection';
import { WhatWeDeliver } from '@/components/home/WhatWeDeliver';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { HowWeWork } from '@/components/home/HowWeWorkSection';
import { PricingSection } from '@/components/home/PricingSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FAQSection } from '@/components/home/FAQSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustedBySection />
      <WhatWeDeliver />
      <WhyChooseUsSection />
      <HowWeWork />
      <PricingSection />
      <ReviewsSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
