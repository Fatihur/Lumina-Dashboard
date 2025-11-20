
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, LineChart, Line, Legend } from 'recharts';

// Mock Data for Analytics
const analyticsData = [
  { name: 'Jan', views: 4000, sales: 2400, amt: 2400 },
  { name: 'Feb', views: 3000, sales: 1398, amt: 2210 },
  { name: 'Mar', views: 2000, sales: 9800, amt: 2290 },
  { name: 'Apr', views: 2780, sales: 3908, amt: 2000 },
  { name: 'May', views: 1890, sales: 4800, amt: 2181 },
  { name: 'Jun', views: 2390, sales: 3800, amt: 2500 },
  { name: 'Jul', views: 3490, sales: 4300, amt: 2100 },
];

const Analytics = () => {
  return (
    <div className="space-y-8 animate-slide-up">
      <div>
         <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
         <p className="text-muted-foreground">Deep dive into your business metrics.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
         <div className="rounded-xl border border-border bg-card shadow-sm p-6">
            <h3 className="font-semibold text-lg mb-6">User Growth Trend</h3>
            <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                        <Tooltip 
                           contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--popover-foreground))', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="views" name="Page Views" stroke="hsl(var(--primary))" strokeWidth={3} dot={{r: 4, fill: 'hsl(var(--card))', strokeWidth: 2}} activeDot={{r: 6}} />
                        <Line type="monotone" dataKey="sales" name="Conversions" stroke="#10b981" strokeWidth={3} dot={{r: 4, fill: 'hsl(var(--card))', strokeWidth: 2}} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
         </div>

         <div className="rounded-xl border border-border bg-card shadow-sm p-6">
            <h3 className="font-semibold text-lg mb-6">Revenue Distribution</h3>
            <div className="h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={analyticsData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                        <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} dy={10} />
                        <YAxis axisLine={false} tickLine={false} tick={{fill: 'hsl(var(--muted-foreground))'}} />
                        <Tooltip 
                           cursor={{fill: 'hsl(var(--accent))'}}
                           contentStyle={{ backgroundColor: 'hsl(var(--popover))', borderColor: 'hsl(var(--border))', color: 'hsl(var(--popover-foreground))', borderRadius: '8px' }}
                        />
                        <Bar dataKey="amt" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} maxBarSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Analytics;
