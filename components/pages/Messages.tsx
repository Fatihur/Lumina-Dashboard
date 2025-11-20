
import React from 'react';
import { Search, Mail } from 'lucide-react';

const Messages = () => {
  const messages = [
    { id: 1, sender: 'Support Team', subject: 'Welcome to Lumina', preview: 'Thanks for signing up...', time: '10:00 AM', unread: true, initial: 'S', color: 'bg-blue-500' },
    { id: 2, sender: 'John Doe', subject: 'Product Inquiry', preview: 'Is the chair available in blue?', time: 'Yesterday', unread: true, initial: 'J', color: 'bg-emerald-500' },
    { id: 3, sender: 'System', subject: 'Backup Completed', preview: 'Your data has been successfully backed up.', time: 'Oct 5', unread: false, initial: 'Sys', color: 'bg-slate-500' },
    { id: 4, sender: 'Sarah Smith', subject: 'Refund Request', preview: 'I would like to request a refund for order #123', time: 'Oct 4', unread: false, initial: 'S', color: 'bg-rose-500' },
  ];

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col rounded-xl border border-border bg-card shadow-sm overflow-hidden animate-fade-in">
      <div className="flex h-full">
        {/* List - Full width on mobile, fixed width on desktop */}
        <div className="w-full md:w-80 lg:w-96 border-r border-border flex flex-col bg-muted/10">
            <div className="p-4 border-b border-border bg-card">
                <h2 className="font-semibold text-lg mb-4">Inbox</h2>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <input className="w-full h-9 pl-9 pr-4 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Search..." />
                </div>
            </div>
            <div className="flex-1 overflow-y-auto">
                {messages.map((m) => (
                    <div key={m.id} className={`p-4 border-b border-border/50 cursor-pointer hover:bg-accent transition-all ${m.unread ? 'bg-background border-l-4 border-l-primary' : 'opacity-80'}`}>
                        <div className="flex items-start gap-3">
                            <div className={`w-10 h-10 rounded-full ${m.color} text-white flex items-center justify-center text-sm font-bold shadow-sm`}>
                                {m.initial}
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className={`text-sm font-semibold truncate ${m.unread ? 'text-foreground' : 'text-muted-foreground'}`}>{m.sender}</span>
                                    <span className="text-[10px] text-muted-foreground">{m.time}</span>
                                </div>
                                <div className={`text-sm mb-1 ${m.unread ? 'font-medium text-foreground' : 'text-muted-foreground'}`}>{m.subject}</div>
                                <div className="text-xs text-muted-foreground truncate">{m.preview}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Content - Hidden on mobile, shown on desktop */}
        <div className="hidden md:flex flex-1 flex-col items-center justify-center bg-background p-8 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
             <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center mb-6 mx-auto shadow-inner">
                    <Mail size={32} className="text-muted-foreground" />
                </div>
                <h3 className="font-bold text-2xl text-foreground mb-2">No Message Selected</h3>
                <p className="text-muted-foreground max-w-xs mx-auto">Choose a message from the list to view the full conversation details.</p>
             </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
