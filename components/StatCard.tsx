import React from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { StatCardProps } from '../types';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import { Badge } from './ui/Badge';

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, trend, chartData, chartColor = "hsl(var(--primary))" }) => {
  const isPositive = trend === 'up';
  const isNegative = trend === 'down';

  return (
    <Card className="relative overflow-hidden transition-all hover:shadow-md hover:border-primary/20 group">
      <CardHeader className="pb-2 flex flex-row items-center justify-between space-y-0">
        <CardTitle className="text-sm font-medium text-muted-foreground tracking-tight">
          {title}
        </CardTitle>
        <div className="rounded-full p-2 bg-secondary/50 text-primary group-hover:bg-primary/10 group-hover:text-primary transition-colors">
          {/* Cast icon to ReactElement<any> to allow passing 'size' prop without TS error */}
          {React.cloneElement(icon as React.ReactElement<any>, { size: 16 })}
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-end justify-between">
          <div>
            <div className="text-2xl font-bold tracking-tight">{value}</div>
            <div className="flex items-center mt-1 text-xs font-medium">
              <Badge 
                variant={isPositive ? 'success' : isNegative ? 'destructive' : 'secondary'}
                className="px-1.5 py-0.5 h-auto"
              >
                {isPositive ? <ArrowUpRight size={12} className="mr-1" /> : isNegative ? <ArrowDownRight size={12} className="mr-1" /> : <Minus size={12} className="mr-1" />}
                {Math.abs(change)}%
              </Badge>
              <span className="ml-2 text-muted-foreground opacity-80">vs last month</span>
            </div>
          </div>
        </div>
      </CardContent>

      {/* Sparkline Chart Background */}
      {chartData && (
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-10 dark:opacity-20 pointer-events-none group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id={`color-${title}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={chartColor} stopOpacity={0.8}/>
                  <stop offset="95%" stopColor={chartColor} stopOpacity={0}/>
                </linearGradient>
              </defs>
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke={chartColor} 
                fill={`url(#color-${title})`} 
                strokeWidth={2} 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  );
};

export default StatCard;