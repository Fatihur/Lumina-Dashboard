
import React from 'react';
import { 
  LayoutDashboard, 
  Users, 
  ShoppingBag, 
  Settings, 
  PieChart, 
  MessageSquare, 
  LogOut,
  X,
  ChevronRight,
  FolderKanban
} from 'lucide-react';
import { NavItem, ViewName } from '../types';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentView: ViewName;
  setCurrentView: (view: ViewName) => void;
}

const navItems: NavItem[] = [
  { label: 'Dashboard', icon: <LayoutDashboard size={20} /> },
  { label: 'Projects', icon: <FolderKanban size={20} /> },
  { label: 'Customers', icon: <Users size={20} />, badge: 12 },
  { label: 'Products', icon: <ShoppingBag size={20} /> },
  { label: 'Analytics', icon: <PieChart size={20} /> },
  { label: 'Messages', icon: <MessageSquare size={20} />, badge: 3 },
  { label: 'Settings', icon: <Settings size={20} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, currentView, setCurrentView }) => {
  return (
    <>
      {/* Mobile Overlay */}
      <div 
        className={`fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Content */}
      <aside 
        className={`fixed lg:sticky top-0 left-0 z-50 h-screen w-72 bg-card border-r border-border transform transition-transform duration-300 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        {/* Logo Area */}
        <div className="h-20 flex items-center justify-between px-8 border-b border-border/50">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-primary-foreground flex items-center justify-center shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <span className="font-bold text-lg">L</span>
            </div>
            <div>
                <span className="font-bold text-xl tracking-tight block leading-none">Lumina</span>
                <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">Admin</span>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)} 
            className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-2 rounded-md hover:bg-accent"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav Items */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
            <div className="px-4 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Menu
            </div>
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentView(item.label);
                  setIsOpen(false); // Close sidebar on mobile when clicked
                }}
                className={`group w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  currentView === item.label
                    ? 'bg-primary/10 text-primary' 
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <span className={currentView === item.label ? 'text-primary' : 'text-muted-foreground group-hover:text-foreground transition-colors'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge ? (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-primary-foreground shadow-sm">
                    {item.badge}
                  </span>
                ) : (
                    currentView === item.label && <ChevronRight size={14} className="text-primary animate-slide-in-right" />
                )}
              </button>
            ))}
            
            <div className="px-4 mt-8 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Other
            </div>
            <button className="w-full flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-colors">
                <LogOut size={20} />
                <span>Logout</span>
            </button>
        </nav>

        {/* User Footer */}
        <div className="p-6 border-t border-border/50">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-accent/50 hover:bg-accent transition-colors cursor-pointer border border-border/50">
                <img 
                  src="https://i.pravatar.cc/150?u=admin" 
                  alt="Profile" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-background shadow-sm"
                />
                <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-foreground truncate">Alex Morgan</p>
                    <p className="text-xs text-muted-foreground truncate">alex@lumina.com</p>
                </div>
            </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;