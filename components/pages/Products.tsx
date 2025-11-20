
import React from 'react';
import { Filter, Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const Products = () => {
  const products = [
    { id: 1, name: 'Wireless Headphones', sku: 'WH-001', stock: 45, price: '$129.99', category: 'Electronics', image: '🎧' },
    { id: 2, name: 'Ergonomic Chair', sku: 'EC-202', stock: 12, price: '$259.00', category: 'Furniture', image: '🪑' },
    { id: 3, name: 'Mechanical Keyboard', sku: 'MK-999', stock: 0, price: '$89.50', category: 'Electronics', image: '⌨️' },
    { id: 4, name: 'Smart Watch V2', sku: 'SW-200', stock: 89, price: '$199.99', category: 'Electronics', image: '⌚' },
    { id: 5, name: 'Leather Notebook', sku: 'LN-055', stock: 200, price: '$24.00', category: 'Stationery', image: '📒' },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
         <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Products</h2>
            <p className="text-sm text-muted-foreground">Manage inventory and product details.</p>
        </div>
        <div className="flex gap-3 w-full sm:w-auto">
            <Button variant="outline" className="flex-1 sm:flex-none">
                <Filter className="mr-2 h-4 w-4" /> Filter
            </Button>
            <Button className="flex-1 sm:flex-none">
                <Plus className="mr-2 h-4 w-4" /> Add Product
            </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-6">
         <Card className="p-6 flex flex-col justify-between">
            <div className="text-sm font-medium text-muted-foreground">Total Products</div>
            <div className="text-3xl font-bold mt-2">342</div>
         </Card>
         <Card className="p-6 border-amber-200/50 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-800/50 flex flex-col justify-between">
            <div className="text-sm font-medium text-amber-600 dark:text-amber-400">Low Stock Alerts</div>
            <div className="text-3xl font-bold mt-2 text-amber-700 dark:text-amber-300">12</div>
         </Card>
         <Card className="p-6 border-rose-200/50 bg-rose-50/50 dark:bg-rose-950/20 dark:border-rose-800/50 flex flex-col justify-between">
            <div className="text-sm font-medium text-rose-600 dark:text-rose-400">Out of Stock</div>
            <div className="text-3xl font-bold mt-2 text-rose-700 dark:text-rose-300">3</div>
         </Card>
      </div>

      <Card className="overflow-hidden">
        <div className="overflow-x-auto">
            <table className="w-full text-sm text-left min-w-[800px]">
                <thead className="bg-muted/30">
                <tr>
                    <th className="h-12 px-6 align-middle font-semibold text-muted-foreground">Product</th>
                    <th className="h-12 px-6 align-middle font-semibold text-muted-foreground">SKU</th>
                    <th className="h-12 px-6 align-middle font-semibold text-muted-foreground">Category</th>
                    <th className="h-12 px-6 align-middle font-semibold text-muted-foreground text-right">Stock</th>
                    <th className="h-12 px-6 align-middle font-semibold text-muted-foreground text-right">Price</th>
                    <th className="h-12 px-6 align-middle font-semibold text-muted-foreground text-center">Action</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-border">
                {products.map((p) => (
                    <tr key={p.id} className="transition-colors hover:bg-muted/40 group">
                    <td className="p-6 align-middle">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-xl shadow-sm border border-border">
                                {p.image}
                            </div>
                            <span className="font-medium text-foreground group-hover:text-primary transition-colors">{p.name}</span>
                        </div>
                    </td>
                    <td className="p-6 align-middle text-muted-foreground font-mono text-xs">{p.sku}</td>
                    <td className="p-6 align-middle">
                        <Badge variant="secondary">
                            {p.category}
                        </Badge>
                    </td>
                    <td className="p-6 align-middle text-right">
                        <span className={p.stock === 0 ? 'text-rose-500 font-semibold' : p.stock < 20 ? 'text-amber-500 font-semibold' : 'text-foreground'}>
                            {p.stock === 0 ? 'Out of Stock' : `${p.stock} units`}
                        </span>
                    </td>
                    <td className="p-6 align-middle text-right font-medium">{p.price}</td>
                    <td className="p-6 align-middle text-center">
                        <div className="flex items-center justify-center gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-primary">
                                <Edit size={16} />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-destructive hover:bg-destructive/10">
                                <Trash2 size={16} />
                            </Button>
                        </div>
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

export default Products;
