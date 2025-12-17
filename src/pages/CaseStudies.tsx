import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Users, 
  MessageSquare, 
  Target,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    client: 'TechStart Solutions',
    industry: 'SaaS / Technology',
    challenge: 'Low lead conversion rate and slow response times to inquiries. The sales team was overwhelmed with manual follow-ups and missed opportunities.',
    solution: 'Implemented WhatsApp chatbot for instant lead qualification and follow-up automation. Integrated with their CRM for seamless data flow.',
    results: [
      { metric: 'Response Time', before: '4+ hours', after: '< 2 mins', improvement: '99%' },
      { metric: 'Lead Conversion', before: '8%', after: '24%', improvement: '200%' },
      { metric: 'Monthly Leads', before: '120', after: '450', improvement: '275%' },
    ],
    testimonial: 'Biteyc transformed our lead generation process. The automation alone increased our response rate by 300%. Highly recommended!',
    author: 'Rahul Sharma, Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    color: 'from-blue-500 to-cyan-500',
    services: ['WhatsApp Automation', 'Lead Generation', 'CRM Integration'],
  },
  {
    id: 2,
    client: 'StyleHub Fashion',
    industry: 'E-commerce / Fashion',
    challenge: 'High ad spend with poor ROAS and no systematic retargeting. Cart abandonment was at 75% with no recovery mechanism.',
    solution: 'Restructured Meta ads strategy with custom audiences and automated cart abandonment sequences via WhatsApp.',
    results: [
      { metric: 'ROAS', before: '1.8x', after: '4.2x', improvement: '133%' },
      { metric: 'Cart Recovery', before: '5%', after: '28%', improvement: '460%' },
      { metric: 'Ad Spend Efficiency', before: '$1,400', after: '$1,000', improvement: '29%' },
    ],
    testimonial: 'Their Meta ads strategy doubled our ROAS within the first month. The team really understands performance marketing.',
    author: 'Priya Patel, Marketing Director',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    color: 'from-pink-500 to-rose-500',
    services: ['Meta Ads', 'WhatsApp Automation', 'Retargeting'],
  },
  {
    id: 3,
    client: 'EduLearn Academy',
    industry: 'Education / EdTech',
    challenge: 'Overwhelming student inquiries and manual enrollment process. Staff spent 80% of time answering repetitive questions.',
    solution: 'Built AI chatbot for FAQs, course recommendations, and automated enrollment workflow with payment integration.',
    results: [
      { metric: 'Inquiries Handled', before: '40%', after: '92%', improvement: '130%' },
      { metric: 'Enrollment Rate', before: '12%', after: '31%', improvement: '158%' },
      { metric: 'Support Time Saved', before: '0 hrs', after: '120 hrs/month', improvement: '100%' },
    ],
    testimonial: 'The chatbot handles 80% of our student inquiries automatically. It\'s like having a 24/7 sales team!',
    author: 'Amit Kumar, CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    color: 'from-emerald-500 to-teal-500',
    services: ['AI Chatbot', 'Lead Nurturing', 'Payment Integration'],
  },
  {
    id: 4,
    client: 'Wellness Studio',
    industry: 'Health & Fitness',
    challenge: 'Limited social media presence and no systematic lead capture. Relying solely on walk-ins for new customers.',
    solution: 'Instagram automation + targeted ad campaigns + lead nurturing sequences with appointment booking.',
    results: [
      { metric: 'Instagram Followers', before: '2.5K', after: '14K', improvement: '460%' },
      { metric: 'Monthly Bookings', before: '85', after: '280', improvement: '229%' },
      { metric: 'Revenue Growth', before: '—', after: '+$3,800/month', improvement: '—' },
    ],
    testimonial: 'Our Instagram following grew 5x and conversions are through the roof. Exceptional results!',
    author: 'Sneha Reddy, Owner',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    color: 'from-purple-500 to-violet-500',
    services: ['Instagram Automation', 'Meta Ads', 'Lead Generation'],
  },
  {
    id: 5,
    client: 'PropertyPro Realty',
    industry: 'Real Estate',
    challenge: 'High cost per lead from traditional marketing. No follow-up system for property inquiries.',
    solution: 'Implemented Google + Meta ads with WhatsApp chatbot for instant property matching and virtual tour scheduling.',
    results: [
      { metric: 'Cost Per Lead', before: '$45', after: '$12', improvement: '73%' },
      { metric: 'Site Visits', before: '15/month', after: '58/month', improvement: '287%' },
      { metric: 'Deals Closed', before: '3/month', after: '9/month', improvement: '200%' },
    ],
    testimonial: 'The combination of targeted ads and instant WhatsApp response has completely transformed our lead pipeline.',
    author: 'Vikram Singh, Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    color: 'from-amber-500 to-orange-500',
    services: ['Google Ads', 'Meta Ads', 'WhatsApp Automation'],
  },
  {
    id: 6,
    client: 'FoodieDelights',
    industry: 'Food & Restaurant',
    challenge: 'Low repeat orders and no customer retention strategy. Losing customers to competitors.',
    solution: 'WhatsApp broadcast campaigns, loyalty program automation, and targeted promotions based on order history.',
    results: [
      { metric: 'Repeat Orders', before: '18%', after: '47%', improvement: '161%' },
      { metric: 'Average Order Value', before: '$22', after: '$31', improvement: '41%' },
      { metric: 'Monthly Revenue', before: '$8K', after: '$15K', improvement: '88%' },
    ],
    testimonial: 'The AI chatbot integration was seamless. Customer satisfaction scores improved significantly after implementation.',
    author: 'Neha Gupta, Marketing Head',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    color: 'from-red-500 to-pink-500',
    services: ['WhatsApp Automation', 'Customer Retention', 'Analytics'],
  },
];

const stats = [
  { value: '500+', label: 'Clients Served' },
  { value: '3.5x', label: 'Average ROAS' },
  { value: '200%', label: 'Avg. Lead Increase' },
  { value: '98%', label: 'Client Satisfaction' },
];

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState(caseStudies[0]);

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
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

      {/* Stats Bar */}
      <section className="py-8 border-y border-border/50 bg-muted/20">
        <div className="container-tight">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="fadeUp" delay={index * 0.1}>
                <div>
                  <p className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-tight">
          {/* Navigation */}
          <AnimatedSection className="mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {caseStudies.map((study) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCase(study)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
            <div className="p-6 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-10">
                {/* Left Column */}
                <div>
                  <div className="mb-6">
                    <span className="text-sm text-muted-foreground">{activeCase.industry}</span>
                    <h2 className="text-3xl lg:text-4xl font-bold mt-2">{activeCase.client}</h2>
                  </div>

                  {/* Services Used */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeCase.services.map((service, i) => (
                      <span key={i} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium">
                        {service}
                      </span>
                    ))}
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
                        <CheckCircle2 className="w-5 h-5 text-accent" />
                        Our Solution
                      </h3>
                      <p className="text-muted-foreground">{activeCase.solution}</p>
                    </div>

                    <div className="bg-muted/50 rounded-2xl p-6">
                      <Quote className="w-8 h-8 text-accent/30 mb-3" />
                      <p className="italic text-lg mb-4">"{activeCase.testimonial}"</p>
                      <div className="flex items-center gap-3">
                        <img 
                          src={activeCase.image} 
                          alt={activeCase.author}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-semibold">{activeCase.author}</p>
                          <div className="flex gap-0.5">
                            {[1,2,3,4,5].map(i => (
                              <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                        </div>
                      </div>
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
                      <div key={index} className="bg-muted/30 rounded-2xl p-5">
                        <p className="text-sm text-muted-foreground mb-3">{result.metric}</p>
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-muted-foreground text-xs">Before</span>
                            <p className="text-lg font-semibold">{result.before}</p>
                          </div>
                          <ArrowRight className="w-5 h-5 text-muted-foreground" />
                          <div className="text-right">
                            <span className="text-whatsapp text-xs">After</span>
                            <p className="text-lg font-semibold text-whatsapp">{result.after}</p>
                          </div>
                          <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${activeCase.color} text-white text-sm font-semibold`}>
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

      {/* All Case Studies Grid */}
      <section className="section-padding bg-muted/30">
        <div className="container-tight">
          <AnimatedSection className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Success Stories</h2>
            <p className="text-muted-foreground">Browse through all our client transformations</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.id} animation="fadeUp" delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  onClick={() => {
                    setActiveCase(study);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 cursor-pointer transition-all duration-300"
                >
                  <div className={`h-1 w-16 rounded-full bg-gradient-to-r ${study.color} mb-4`} />
                  <span className="text-xs text-muted-foreground">{study.industry}</span>
                  <h3 className="text-xl font-semibold mt-1 mb-3">{study.client}</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <img 
                      src={study.image} 
                      alt={study.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <p className="text-sm text-muted-foreground">{study.author}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {study.results.slice(0, 2).map((result, i) => (
                      <span key={i} className="text-xs bg-muted px-2 py-1 rounded-full">
                        {result.metric}: <span className="text-whatsapp font-semibold">+{result.improvement}</span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
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
              <a href="https://wa.me/918433299471" target="_blank" rel="noopener noreferrer">
                <Button variant="hero-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  <MessageSquare className="w-5 h-5" />
                  Chat on WhatsApp
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
