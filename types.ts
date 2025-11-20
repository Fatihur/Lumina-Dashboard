import { ReactNode } from 'react';

export type ViewName = 'Dashboard' | 'Customers' | 'Products' | 'Analytics' | 'Messages' | 'Settings' | 'Projects';

export interface NavItem {
  label: ViewName;
  icon: ReactNode;
  badge?: number;
}

export interface StatCardProps {
  title: string;
  value: string | number;
  change: number;
  icon: ReactNode;
  trend: 'up' | 'down' | 'neutral';
  chartData?: any[]; // Array of objects for recharts
  chartColor?: string;
}

export interface SalesData {
  name: string;
  revenue: number;
  visitors: number;
  sales: number;
}

export interface Transaction {
  id: string;
  user: string;
  avatar: string;
  email: string;
  amount: string;
  status: 'Completed' | 'Pending' | 'Failed';
  date: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}