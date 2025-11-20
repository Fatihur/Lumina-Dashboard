import React from 'react';
import { Menu, Bell, Search, Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Avatar } from './ui/Avatar';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 h-14 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 sm:px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onMenuClick}
          className="-ml-2 lg:hidden text-muted-foreground"
        >
          <Menu size={20} />
        </Button>
        
        <div className="hidden md:flex items-center w-64 lg:w-80">
          <Input 
            icon={<Search size={16} />}
            placeholder="Search..." 
            className="h-9 bg-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={toggleTheme}
          className="h-9 w-9"
        >
          {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          <span className="sr-only">Toggle theme</span>
        </Button>

        <Button variant="ghost" size="icon" className="h-9 w-9 relative">
          <Bell size={18} />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-destructive rounded-full"></span>
        </Button>

        <div className="h-8 w-px bg-border mx-1 hidden sm:block"></div>

        <Button variant="ghost" className="pl-1 rounded-full gap-2">
          <Avatar src="https://picsum.photos/100/100" fallback="AM" size="sm" />
          <div className="hidden sm:block text-left pr-2">
            <p className="text-sm font-medium text-foreground">Alex M.</p>
          </div>
        </Button>
      </div>
    </header>
  );
};

export default Header;