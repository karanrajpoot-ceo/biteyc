import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Target,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    client: 'TechStart Solutions',
    industry: 'SaaS / Technology',
    challenge: 'Low lead conversion rate and slow response times to inquiries.',
    solution: 'Implemented WhatsApp chatbot for instant lead qualification and follow-up automation.',
    results: [
      { metric: 'Response Time', before: '4+ hours', after: '< 2 mins', improvement: '99%' },
      { metric: 'Lead Conversion', before: '8%', after: '24%', improvement: '200%' },
      { metric: 'Monthly Leads', before: '120', after: '450', improvement: '275%' },
    ],
    testimonial: 'Biteyc transformed our lead generation process. The automation alone increased our response rate by 300%.',
    author: 'Rahul Sharma, Founder',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    client: 'StyleHub Fashion',
    industry: 'E-commerce / Fashion',
    challenge: 'High ad spend with poor ROAS and no systematic retargeting.',
    solution: 'Restructured Meta ads strategy with custom audiences and automated cart abandonment sequences.',
    results: [
      { metric: 'ROAS', before: '1.8x', after: '4.2x', improvement: '133%' },
      { metric: 'Cart Recovery', before: '5%', after: '28%', improvement: '460%' },
      { metric: 'Ad Spend Efficiency', before: '₹1.2L', after: '₹85K', improvement: '29%' },
    ],
    testimonial: 'Their Meta ads strategy doubled our ROAS within the first month. The team really understands performance marketing.',
    author: 'Priya Patel, Marketing Director',
    color: 'from-pink-500 to-rose-500',
  },
  {
    id: 3,
    client: 'EduLearn Academy',
    industry: 'Education / EdTech',
    challenge: 'Overwhelming student inquiries and manual enrollment process.',
    solution: 'Built AI chatbot for FAQs, course recommendations, and automated enrollment workflow.',
    results: [
      { metric: 'Inquiries Handled', before: '40%', after: '92%', improvement: '130%' },
      { metric: 'Enrollment Rate', before: '12%', after: '31%', improvement: '158%' },
      { metric: 'Support Time Saved', before: '0 hrs', after: '120 hrs/month', improvement: '100%' },
    ],
    testimonial: 'The chatbot handles 80% of our student inquiries automatically. It\'s like having a 24/7 sales team!',
    author: 'Amit Kumar, CEO',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 4,
    client: 'Wellness Studio',
    industry: 'Health & Fitness',
    challenge: 'Limited social media presence and no systematic lead capture.',
    solution: 'Instagram automation + targeted ad campaigns + lead nurturing sequences.',
    results: [
      { metric: 'Instagram Followers', before: '2.5K', after: '14K', improvement: '460%' },
      { metric: 'Monthly Bookings', before: '85', after: '280', improvement: '229%' },
      { metric: 'Revenue Growth', before: '—', after: '+₹3.2L/month', improvement: '—' },
    ],
    testimonial: 'Our Instagram following grew 5x and conversions are through the roof. Exceptional results!',
    author: 'Sneha Reddy, Owner',
    color: 'from-purple-500 to-violet-500',
  },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container-tight">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 text-accent" />
              Case Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Real Results for
              <br />
              <span className="text-muted-foreground">Real Businesses</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              See how we've helped businesses across industries transform their operations 
              and achieve remarkable growth with AI automation and strategic advertising.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-tight">
          {/* Navigation */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap gap-3 justify-center">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCase(study)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCase.id === study.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                  }`}
                >
                  {study.client}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Active Case Study */}
          <motion.div
            key={activeCase.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card rounded-3xl border border-border/50 overflow-hidden"
          >
            <div className={`h-2 bg-gradient-to-r ${activeCase.color}`} />
            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">{activeCase.industry}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold mt-2">{activeCase.client}</h2>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <Target className="w-5 h-5 text-destructive" />
                        The Challenge
                      </h3>
                      <p className="text-muted-foreground">{activeCase.challenge}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2 flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-accent" />
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground">{activeCase.solution}</p>
                    </div>

                    <div className="bg-muted/50 rounded-2xl p-6">
                      <p className="italic text-lg mb-4">"{activeCase.testimonial}"</p>
                      <p className="text-sm text-muted-foreground">— {activeCase.author}</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Results */}
                <div>
                  <h3 className="font-semibold mb-6 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-whatsapp" />
                    The Results
                  </h3>
                  <div className="space-y-4">
                    {activeCase.results.map((result, index) => (
                      <div key={index} className="bg-muted/30 rounded-2xl p-6">
                        <p className="text-sm text-muted-foreground mb-3">{result.metric}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-muted-foreground text-sm">Before</span>
                            <p className="text-lg font-semibold">{result.before}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground" />
                          <div className="text-right">
                            <span className="text-whatsapp text-sm">After</span>
                            <p className="text-lg font-semibold text-whatsapp">{result.after}</p>
                          </div>
                          <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${activeCase.color} text-white text-sm font-semibold`}>
                            +{result.improvement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container-tight text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want Results Like These?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business achieve similar transformations. 
              Schedule a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://cal.com/biteyc/30mins" target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  Get Your Free Strategy Session
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
