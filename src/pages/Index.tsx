import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/home/HeroSection';
import { ClientLogosSection } from '@/components/home/ClientLogosSection';
import { StatsSection } from '@/components/home/StatsSection';
import { TrustedBySection } from '@/components/home/TrustedBySection';
import { WhatWeDeliver } from '@/components/home/WhatWeDeliver';
import { CRMDashboardSection } from '@/components/home/CRMDashboardSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { HowWeWork } from '@/components/home/HowWeWorkSection';
import { PricingSection } from '@/components/home/PricingSection';
import { ReviewsSection } from '@/components/home/ReviewsSection';
import { FAQSection } from '@/components/home/FAQSection';
import { FounderSection } from '@/components/home/FounderSection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ClientLogosSection />
      <StatsSection />
      <TrustedBySection />
      <WhatWeDeliver />
      <CRMDashboardSection />
      <WhyChooseUsSection />
      <HowWeWork />
      <PricingSection />
      <ReviewsSection />
      <FounderSection />
      <FAQSection />
    </Layout>
  );
};

export default Index;
