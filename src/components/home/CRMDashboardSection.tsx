import { motion } from 'framer-motion';
import { TrendingUp, Users, MessageSquare, Target, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { AnimatedSection } from '@/components/shared/AnimatedSection';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const lineData = [
  { name: 'Jan', leads: 400, conversions: 240 },
  { name: 'Feb', leads: 600, conversions: 390 },
  { name: 'Mar', leads: 800, conversions: 480 },
  { name: 'Apr', leads: 1200, conversions: 720 },
  { name: 'May', leads: 1600, conversions: 1100 },
  { name: 'Jun', leads: 2100, conversions: 1500 },
];

const barData = [
  { name: 'WhatsApp', value: 4500 },
  { name: 'Instagram', value: 3200 },
  { name: 'Facebook', value: 2800 },
  { name: 'Email', value: 1800 },
];

const pieData = [
  { name: 'Qualified', value: 65 },
  { name: 'Nurturing', value: 25 },
  { name: 'Cold', value: 10 },
];

const COLORS = ['hsl(var(--accent))', 'hsl(var(--whatsapp))', 'hsl(var(--muted-foreground))'];

const MetricCard = ({ title, value, change, isPositive, icon: Icon }: {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ElementType;
}) => (
  <motion.div
    whileHover={{ y: -4 }}
    className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all"
  >
    <div className="flex items-start justify-between mb-4">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-accent" />
      </div>
      <span className={`flex items-center gap-1 text-sm font-medium ${isPositive ? 'text-whatsapp' : 'text-destructive'}`}>
        {isPositive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        {change}
      </span>
    </div>
    <p className="text-3xl font-bold mb-1">{value}</p>
    <p className="text-sm text-muted-foreground">{title}</p>
  </motion.div>
);

export const CRMDashboardSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background overflow-hidden">
      <div className="container-tight">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Real-Time Analytics
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Data-Driven Results
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how our AI automation and ad campaigns drive measurable growth for your business
          </p>
        </AnimatedSection>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <MetricCard icon={Users} title="Total Leads" value="12,847" change="+24%" isPositive />
          <MetricCard icon={Target} title="Conversions" value="3,421" change="+18%" isPositive />
          <MetricCard icon={MessageSquare} title="Messages Sent" value="156K" change="+42%" isPositive />
          <MetricCard icon={TrendingUp} title="Revenue Generated" value="₹48L" change="+31%" isPositive />
        </div>

        {/* Charts Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Lead Growth Chart */}
          <AnimatedSection animation="slideLeft">
            <div className="bg-card rounded-3xl p-6 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Lead Growth</h3>
                  <p className="text-sm text-muted-foreground">Monthly performance</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-whatsapp/10 text-whatsapp text-sm font-medium">
                  +156% Growth
                </span>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={lineData}>
                    <defs>
                      <linearGradient id="leadGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--accent))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--accent))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px'
                      }} 
                    />
                    <Area type="monotone" dataKey="leads" stroke="hsl(var(--accent))" fill="url(#leadGradient)" strokeWidth={3} />
                    <Line type="monotone" dataKey="conversions" stroke="hsl(var(--whatsapp))" strokeWidth={2} dot={false} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AnimatedSection>

          {/* Channel Performance */}
          <AnimatedSection animation="slideRight">
            <div className="bg-card rounded-3xl p-6 border border-border/50">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-semibold">Channel Performance</h3>
                  <p className="text-sm text-muted-foreground">Leads by platform</p>
                </div>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" horizontal={false} />
                    <XAxis type="number" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                    <YAxis dataKey="name" type="category" stroke="hsl(var(--muted-foreground))" fontSize={12} width={80} />
                    <Tooltip 
                      contentStyle={{ 
                        background: 'hsl(var(--card))', 
                        border: '1px solid hsl(var(--border))',
                        borderRadius: '12px'
                      }} 
                    />
                    <Bar dataKey="value" fill="hsl(var(--accent))" radius={[0, 8, 8, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </AnimatedSection>

          {/* Lead Quality Distribution */}
          <AnimatedSection animation="fadeUp" className="lg:col-span-2">
            <div className="bg-card rounded-3xl p-6 border border-border/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Lead Quality Distribution</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Our AI-powered targeting ensures high-quality leads that are ready to convert
                  </p>
                  <div className="space-y-4">
                    {pieData.map((item, index) => (
                      <div key={item.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 rounded-full" style={{ background: COLORS[index] }} />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <span className="text-muted-foreground">{item.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {pieData.map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ 
                          background: 'hsl(var(--card))', 
                          border: '1px solid hsl(var(--border))',
                          borderRadius: '12px'
                        }} 
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
