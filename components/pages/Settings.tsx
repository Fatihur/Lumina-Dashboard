
import React from 'react';
import { User, Mail, Save } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../ui/Card';

const Settings = () => {
  return (
    <div className="max-w-4xl mx-auto animate-slide-up">
      <div className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-sm md:text-base text-muted-foreground">Manage your account settings and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sidebar Nav for Settings */}
        <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
            {['Profile', 'Account', 'Appearance', 'Notifications', 'Security'].map((item, i) => (
                <Button 
                    key={item} 
                    variant={i === 0 ? 'secondary' : 'ghost'} 
                    className={`justify-start whitespace-nowrap ${i === 0 ? 'bg-secondary' : ''}`}
                >
                    {item}
                </Button>
            ))}
        </nav>

        {/* Main Settings Area */}
        <div className="lg:col-span-2 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your photo and personal details here.</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center border-4 border-background shadow-md overflow-hidden shrink-0">
                            <User size={40} className="text-muted-foreground" />
                        </div>
                        <div className="space-y-2 w-full sm:w-auto text-center sm:text-left">
                            <Button size="sm">Upload New Photo</Button>
                            <Button variant="destructive" size="sm" className="block w-full sm:w-auto">Remove Photo</Button>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">First Name</label>
                                <Input defaultValue="Alex" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Last Name</label>
                                <Input defaultValue="Morgan" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <Input defaultValue="alex@lumina.com" type="email" icon={<Mail size={14} />} />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium">Bio</label>
                            <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="Tell us a little about yourself" />
                        </div>
                    </div>
                </CardContent>
                
                <div className="p-6 pt-0 border-t border-border flex justify-end mt-4">
                    <Button className="mt-4 w-full sm:w-auto">
                        <Save className="mr-2 h-4 w-4" /> Save Changes
                    </Button>
                </div>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;
