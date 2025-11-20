
import React, { useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';
import { 
  DollarSign, Users, ShoppingCart, Activity, 
  Sparkles, Calendar, Download, TrendingUp 
} from 'lucide-react';
import StatCard from './StatCard';
import { SalesData, Transaction } from '../types';
import { Button } from './ui/Button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Avatar } from './ui/Avatar';
import { Badge } from './ui/Badge';

// --- Mock Data ---
const chartData: SalesData[] = [
  { name: 'Mon', revenue: 4000, visitors: 2400, sales: 120 },
  { name: 'Tue', revenue: 3000, visitors: 1398, sales: 98 },
  { name: 'Wed', revenue: 2000, visitors: 9800, sales: 210 },
  { name: 'Thu', revenue: 2780, visitors: 3908, sales: 160 },
  { name: 'Fri', revenue: 1890, visitors: 4800, sales: 130 },
  { name: 'Sat', revenue: 2390, visitors: 3800, sales: 170 },
  { name: 'Sun', revenue: 3490, visitors: 4300, sales: 190 },
];

const trafficData = [
  { name: 'Direct', value: 400, color: 'hsl(var(--primary))' },
  { name: 'Social', value: 300, color: '#8b5cf6' }, // Violet
  { name: 'Organic', value: 300, color: '#10b981' }, // Emerald
  { name: 'Referral', value: 200, color: '#f59e0b' }, // Amber
];

const sparklineData1 = Array.from({ length: 20 }, (_, i) => ({ value: Math.random() * 100 + 50 }));
const sparklineData2 = Array.from({ length: 20 }, (_, i) => ({ value: Math.random() * 100 + 20 }));
const sparklineData3 = Array.from({ length: 20 }, (_, i) => ({ value: Math.random() * 100 + 80 }));
const sparklineData4 = Array.from({ length: 20 }, (_, i) => ({ value: Math.random() * 100 + 40 }));

const recentTransactions: Transaction[] = [
  { id: '1', user: 'Courtney Henry', email: 'courtney@example.com', avatar: 'https://i.pravatar.cc/150?u=1', amount: '$345.00', status: 'Completed', date: '2 mins ago' },
  { id: '2', user: 'Brooklyn Simmons', email: 'brooklyn@example.com', avatar: 'https://i.pravatar.cc/150?u=2', amount: '$120.50', status: 'Pending', date: '15 mins ago' },
  { id: '3', user: 'Darlene Robertson', email: 'darlene@example.com', avatar: 'https://i.pravatar.cc/150?u=3', amount: '$560.00', status: 'Failed', date: '1 hr ago' },
  { id: '4', user: 'Cody Fisher', email: 'cody@example.com', avatar: 'https://i.pravatar.cc/150?u=4', amount: '$89.00', status: 'Completed', date: '3 hrs ago' },
  { id: '5', user: 'Arlene McCoy', email: 'arlene@example.com', avatar: 'https://i.pravatar.cc/150?u=5', amount: '$205.50', status: 'Completed', date: '5 hrs ago' },
];

interface DashboardHomeProps {
  onOpenAI: () => void;
}

const DashboardHome: React.FC<DashboardHomeProps> = ({ onOpenAI }) => {
  const [timeRange, setTimeRange] = useState('7d');

  return (
    <div className="space-y-6 md:space-y-8 animate-fade-in">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">Dashboard</h1>
          <p className="text-sm md:text-base text-muted-foreground mt-1">Welcome back, Alex. Here's what's happening today.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="hidden sm:flex items-center rounded-md border border-border bg-card p-1 shadow-sm">
            {['24h', '7d', '30d', '90d'].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={`px-3 py-1 text-xs font-medium rounded-sm transition-all ${
                  timeRange === range 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Calendar className="mr-2 h-4 w-4" />
            Date Range
          </Button>
          <Button size="sm" className="w-full sm:w-auto">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Ask AI Banner */}
      <div className="rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-500/20 p-1 flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-3">
        <div className="flex items-center gap-3 text-sm">
            <div className="p-2 bg-indigo-500/20 text-indigo-600 dark:text-indigo-300 rounded-lg shrink-0">
                <Sparkles size={18} />
            </div>
            <span className="text-foreground font-medium text-center sm:text-left">
                Get deep insights about your sales performance with Lumina AI.
            </span>
        </div>
        <Button variant="link" onClick={onOpenAI} className="text-xs font-semibold text-primary h-auto p-0 whitespace-nowrap">
            Analyze Data &rarr;
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$45,231.89" 
          change={20.1} 
          trend="up" 
          icon={<DollarSign />}
          chartData={sparklineData1}
          chartColor="#3b82f6"
        />
        <StatCard 
          title="Active Users" 
          value="2,345" 
          change={15.2} 
          trend="up" 
          icon={<Users />} 
          chartData={sparklineData2}
          chartColor="#10b981"
        />
        <StatCard 
          title="Total Orders" 
          value="12,543" 
          change={-4.5} 
          trend="down" 
          icon={<ShoppingCart />} 
          chartData={sparklineData3}
          chartColor="#f43f5e"
        />
        <StatCard 
          title="Bounce Rate" 
          value="42.3%" 
          change={0.0} 
          trend="neutral" 
          icon={<Activity />} 
          chartData={sparklineData4}
          chartColor="#f59e0b"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Area Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between border-b border-border p-4 md:p-6">
            <div>
                <CardTitle>Revenue & Growth</CardTitle>
                <CardDescription>Comparison between this period and last year.</CardDescription>
            </div>
            <div className="hidden sm:flex items-center gap-2">
                <span className="flex items-center text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mr-1"></span> Current
                </span>
                <span className="flex items-center text-xs text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-1"></span> Previous
                </span>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6">
            <div className="h-[300px] md:h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" opacity={0.5} />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }}
                    tickFormatter={(value) => `$${value}`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--popover))', 
                      borderColor: 'hsl(var(--border))', 
                      color: 'hsl(var(--popover-foreground))',
                      borderRadius: '8px', 
                      boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' 
                    }}
                    itemStyle={{ color: 'hsl(var(--foreground))' }}
                  />
                  <Area 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorRevenue)" 
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                   <Area 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="#10b981" 
                    strokeWidth={3}
                    fillOpacity={1} 
                    fill="url(#colorPrevious)" 
                    strokeDasharray="5 5"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="flex flex-col">
          <CardHeader className="border-b border-border">
            <CardTitle>Traffic Sources</CardTitle>
            <CardDescription>Where your visitors are coming from.</CardDescription>
          </CardHeader>
          <CardContent className="flex-1 flex flex-col items-center justify-center relative p-6">
            <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                    stroke="none"
                    >
                    {trafficData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                    </Pie>
                    <Tooltip 
                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                    />
                </PieChart>
                </ResponsiveContainer>
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <span className="text-2xl font-bold block">12.5K</span>
                        <span className="text-xs text-muted-foreground">Total Visits</span>
                    </div>
                </div>
            </div>
            <div className="w-full space-y-3 mt-4">
                {trafficData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span className="text-muted-foreground">{item.name}</span>
                        </div>
                        <span className="font-medium">{Math.round((item.value / 1200) * 100)}%</span>
                    </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Transactions */}
        <Card className="lg:col-span-2 overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between bg-muted/30 border-b border-border py-4">
            <div>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Latest financial activity.</CardDescription>
            </div>
            <Button variant="link" className="text-primary p-0 h-auto">
                View All &rarr;
            </Button>
          </CardHeader>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[650px]">
              <thead className="bg-muted/30">
                <tr>
                  <th className="px-6 py-4 font-medium text-muted-foreground">Customer</th>
                  <th className="px-6 py-4 font-medium text-muted-foreground">Status</th>
                  <th className="px-6 py-4 font-medium text-muted-foreground">Date</th>
                  <th className="px-6 py-4 font-medium text-muted-foreground text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {recentTransactions.map((item) => (
                  <tr key={item.id} className="hover:bg-muted/50 transition-colors group cursor-pointer">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <Avatar src={item.avatar} fallback={item.user.charAt(0)} />
                        <div>
                            <div className="font-medium text-foreground">{item.user}</div>
                            <div className="text-xs text-muted-foreground">{item.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant={
                          item.status === 'Completed' ? 'success' : 
                          item.status === 'Pending' ? 'warning' : 'destructive'
                      }>
                        {item.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {item.date}
                    </td>
                    <td className="px-6 py-4 font-medium text-right tabular-nums">
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Actions / Promo */}
        <div className="space-y-6">
            <div className="rounded-xl border border-border bg-gradient-to-br from-primary/5 to-transparent p-6 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Upgrade to Pro</h3>
                <p className="text-sm text-muted-foreground mb-4">
                    Unlock advanced analytics, unlimited team members, and priority support.
                </p>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                        <TrendingUp size={16} className="text-primary" />
                        <span>Advanced Forecasting</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                        <Users size={16} className="text-primary" />
                        <span>Team Collaboration</span>
                    </div>
                </div>
                <Button className="mt-6 w-full shadow-lg shadow-primary/20">
                    Upgrade Now
                </Button>
            </div>

            <Card>
                <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4">Sales by Category</h3>
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Electronics</span>
                                <span className="text-muted-foreground">45%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[45%] rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Clothing</span>
                                <span className="text-muted-foreground">30%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-indigo-500 w-[30%] rounded-full"></div>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="font-medium">Home Goods</span>
                                <span className="text-muted-foreground">25%</span>
                            </div>
                            <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                <div className="h-full bg-rose-500 w-[25%] rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
