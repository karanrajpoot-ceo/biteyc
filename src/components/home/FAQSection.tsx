import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';

const faqs = [
  {
    question: 'What services does Biteyc offer?',
    answer: 'We specialize in AI automation solutions including WhatsApp & Instagram chatbots, automated lead generation, Meta & Google Ads management, and custom automation workflows. Our goal is to help businesses scale through intelligent automation and strategic advertising.',
  },
  {
    question: 'How long does it take to set up automations?',
    answer: 'Most automation setups can be completed within 3-7 business days, depending on complexity. Simple chatbots can be deployed within 48 hours, while comprehensive automation systems with multiple integrations may take up to 2 weeks.',
  },
  {
    question: 'What kind of ROI can I expect from your services?',
    answer: 'Our clients typically see a 200-500% improvement in lead response rates and a 2-4x increase in conversion rates. For paid advertising, we aim for a minimum 3x ROAS (Return on Ad Spend). Results vary based on industry and current marketing infrastructure.',
  },
  {
    question: 'Do you work with businesses of all sizes?',
    answer: 'Yes! We work with startups, SMBs, and established enterprises. Our solutions are scalable and can be customized to fit your budget and requirements. Whether you\'re just starting out or looking to scale, we have packages designed for your needs.',
  },
  {
    question: 'How do your chatbots integrate with existing systems?',
    answer: 'Our chatbots integrate seamlessly with popular CRMs (HubSpot, Salesforce, Zoho), e-commerce platforms (Shopify, WooCommerce), payment gateways, and custom APIs. We ensure smooth data flow between your chatbot and existing tools.',
  },
  {
    question: 'What support do you provide after implementation?',
    answer: 'We provide ongoing support including regular performance reviews, optimization recommendations, and technical assistance. All our packages include a dedicated account manager and access to our support team via WhatsApp and email.',
  },
  {
    question: 'Can I try your services before committing?',
    answer: 'Absolutely! We offer a free 30-minute consultation where we analyze your current setup and provide actionable recommendations. For chatbots, we can create a demo customized to your business flow.',
  },
  {
    question: 'What platforms do your automations support?',
    answer: 'We support all major platforms including WhatsApp Business, Instagram, Facebook Messenger, Telegram, and website chatbots. For advertising, we manage campaigns on Meta (Facebook & Instagram), Google Ads, and LinkedIn.',
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Frequently Asked
            <br />
            <span className="text-muted-foreground">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't find what you're looking for,
            feel free to reach out to us directly.
          </p>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fadeUp" delay={index * 0.05}>
              <div className="border-b border-border">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-semibold text-lg pr-8 group-hover:text-accent transition-colors">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-muted flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
