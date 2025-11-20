
import React, { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardHome from './components/DashboardHome';
import AIAssistant from './components/AIAssistant';
import Customers from './components/pages/Customers';
import Products from './components/pages/Products';
import Analytics from './components/pages/Analytics';
import Messages from './components/pages/Messages';
import Settings from './components/pages/Settings';
import Projects from './components/pages/Projects';
import { ViewName } from './types';

// Data summary to pass to AI context
const DASHBOARD_CONTEXT_SUMMARY = `
  Total Revenue: $45,231.89 (Up 20.1%).
  Active Users: 2,345 (Up 15.2%).
  Total Orders: 12,543 (Down 4.5%).
  Top recent transaction: Courtney Henry $345.
  Recent trends show revenue increasing on weekends but order volume slightly down midweek.
`;

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewName>('Dashboard');

  const renderView = () => {
    switch (currentView) {
      case 'Dashboard': return <DashboardHome onOpenAI={() => setAiOpen(true)} />;
      case 'Customers': return <Customers />;
      case 'Products': return <Products />;
      case 'Analytics': return <Analytics />;
      case 'Messages': return <Messages />;
      case 'Settings': return <Settings />;
      case 'Projects': return <Projects />;
      default: return <DashboardHome onOpenAI={() => setAiOpen(true)} />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-secondary/20 dark:bg-background transition-colors duration-300 font-sans antialiased text-foreground">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        setIsOpen={setSidebarOpen} 
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden relative">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto animate-in fade-in duration-500 pb-10">
            {renderView()}
          </div>
        </main>

        {/* AI Assistant Drawer */}
        <AIAssistant 
          isOpen={aiOpen} 
          onClose={() => setAiOpen(false)} 
          dashboardContext={DASHBOARD_CONTEXT_SUMMARY}
        />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
};

export default App;