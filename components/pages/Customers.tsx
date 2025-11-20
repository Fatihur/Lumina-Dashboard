
import React from 'react';
import { Search, Filter, Download, MoreHorizontal, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const Customers = () => {
  const customers = [
    { id: 1, name: 'Alice Freeman', email: 'alice@example.com', status: 'Active', spent: '$1,200', lastOrder: '2023-10-01', avatar: 'A' },
    { id: 2, name: 'Bob Smith', email: 'bob.smith@test.co', status: 'Inactive', spent: '$340', lastOrder: '2023-09-12', avatar: 'B' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@domain.net', status: 'Active', spent: '$2,150', lastOrder: '2023-10-05', avatar: 'C' },
    { id: 4, name: 'Diana Prince', email: 'diana@wonder.com', status: 'Active', spent: '$890', lastOrder: '2023-10-02', avatar: 'D' },
    { id: 5, name: 'Evan Wright', email: 'evan@wright.com', status: 'Blocked', spent: '$0', lastOrder: 'N/A', avatar: 'E' },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Customers</h2>
            <p className="text-sm text-muted-foreground">Manage your customer base and view history.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Customer
        </Button>
      </div>

      <Card className="overflow-hidden">
        <div className="p-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-border bg-muted/20">
            <div className="w-full sm:flex-1 sm:max-w-sm">
                <Input 
                  icon={<Search size={16} />}
                  placeholder="Search customers..." 
                />
            </div>
            <div className="flex gap-2 w-full sm:w-auto">
                <Button variant="outline" size="icon">
                    <Filter size={16} />
                </Button>
                <Button variant="outline" size="icon">
                    <Download size={16} />
                </Button>
            </div>
        </div>
        <div className="relative w-full overflow-auto">
          <table className="w-full text-sm text-left min-w-[900px]">
            <thead>
              <tr className="border-b bg-muted/30">
                <th className="h-12 px-6 align-middle font-semibold text-muted-foreground">Customer</th>
                <th className="h-12 px-6 align-middle font-semibold text-muted-foreground">Status</th>
                <th className="h-12 px-6 align-middle font-semibold text-muted-foreground text-right">Total Spent</th>
                <th className="h-12 px-6 align-middle font-semibold text-muted-foreground text-right">Last Order</th>
                <th className="h-12 px-6 align-middle font-semibold text-muted-foreground text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {customers.map((c) => (
                <tr key={c.id} className="transition-colors hover:bg-muted/40">
                  <td className="p-6 align-middle">
                     <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-bold border border-primary/20">
                            {c.avatar}
                        </div>
                        <div>
                            <div className="font-medium text-foreground">{c.name}</div>
                            <div className="text-xs text-muted-foreground">{c.email}</div>
                        </div>
                     </div>
                  </td>
                  <td className="p-6 align-middle">
                    <Badge variant={
                        c.status === 'Active' ? 'success' : 
                        c.status === 'Inactive' ? 'secondary' : 
                        'destructive'
                    }>
                        {c.status}
                    </Badge>
                  </td>
                  <td className="p-6 align-middle text-right font-medium tabular-nums">{c.spent}</td>
                  <td className="p-6 align-middle text-right text-muted-foreground tabular-nums">{c.lastOrder}</td>
                  <td className="p-6 align-middle text-center">
                    <Button variant="ghost" size="icon" className="rounded-full">
                        <MoreHorizontal size={16} />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default Customers;
