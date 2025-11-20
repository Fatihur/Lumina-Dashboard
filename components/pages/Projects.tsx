
import React, { useState } from 'react';
import { 
  Plus, 
  MoreHorizontal, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  Paperclip,
  MessageSquare
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Avatar } from '../ui/Avatar';
import { Badge } from '../ui/Badge';

interface Task {
  id: string;
  title: string;
  category: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  attachments: number;
  comments: number;
  assignees: string[];
  status: 'Todo' | 'In Progress' | 'Review' | 'Done';
}

const initialTasks: Task[] = [
  {
    id: '1',
    title: 'Redesign Homepage',
    category: 'Design',
    priority: 'High',
    dueDate: 'Oct 24',
    attachments: 2,
    comments: 5,
    assignees: ['https://i.pravatar.cc/150?u=1', 'https://i.pravatar.cc/150?u=2'],
    status: 'Todo'
  },
  {
    id: '2',
    title: 'Fix API authentication bug',
    category: 'Development',
    priority: 'High',
    dueDate: 'Oct 22',
    attachments: 0,
    comments: 1,
    assignees: ['https://i.pravatar.cc/150?u=3'],
    status: 'In Progress'
  },
  {
    id: '3',
    title: 'Update user documentation',
    category: 'Content',
    priority: 'Low',
    dueDate: 'Oct 28',
    attachments: 1,
    comments: 0,
    assignees: ['https://i.pravatar.cc/150?u=4'],
    status: 'In Progress'
  },
  {
    id: '4',
    title: 'Q3 Performance Review',
    category: 'Management',
    priority: 'Medium',
    dueDate: 'Nov 01',
    attachments: 4,
    comments: 12,
    assignees: ['https://i.pravatar.cc/150?u=5'],
    status: 'Review'
  },
  {
    id: '5',
    title: 'Mobile App Dark Mode',
    category: 'Development',
    priority: 'Medium',
    dueDate: 'Oct 15',
    attachments: 3,
    comments: 8,
    assignees: ['https://i.pravatar.cc/150?u=2', 'https://i.pravatar.cc/150?u=6'],
    status: 'Done'
  },
  {
    id: '6',
    title: 'Client Meeting Preparation',
    category: 'Sales',
    priority: 'High',
    dueDate: 'Oct 20',
    attachments: 1,
    comments: 2,
    assignees: ['https://i.pravatar.cc/150?u=1'],
    status: 'Done'
  }
];

const Projects = () => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [draggedTaskId, setDraggedTaskId] = useState<string | null>(null);
  const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);

  const columns = [
    { title: 'To Do', status: 'Todo' as const, color: 'bg-slate-500' },
    { title: 'In Progress', status: 'In Progress' as const, color: 'bg-blue-500' },
    { title: 'In Review', status: 'Review' as const, color: 'bg-amber-500' },
    { title: 'Completed', status: 'Done' as const, color: 'bg-emerald-500' },
  ];

  // --- Drag and Drop Handlers ---

  const handleDragStart = (e: React.DragEvent, taskId: string) => {
    setDraggedTaskId(taskId);
    // Set effect allowed to move
    e.dataTransfer.effectAllowed = 'move';
    // Optional: Set a custom drag image or data
    e.dataTransfer.setData('text/plain', taskId);
  };

  const handleDragOver = (e: React.DragEvent, status: string) => {
    e.preventDefault(); // Necessary to allow dropping
    setDragOverColumn(status);
  };

  const handleDragLeave = () => {
    setDragOverColumn(null);
  };

  const handleDrop = (e: React.DragEvent, status: Task['status']) => {
    e.preventDefault();
    setDragOverColumn(null);
    
    if (!draggedTaskId) return;

    setTasks((prevTasks) => 
      prevTasks.map((task) => 
        task.id === draggedTaskId ? { ...task, status: status } : task
      )
    );
    setDraggedTaskId(null);
  };

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col space-y-6 animate-slide-up">
      {/* Header & Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Projects</h2>
          <p className="text-sm text-muted-foreground">Track tasks and manage team workflow.</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> New Task
        </Button>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
         <Card className="p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Clock size={20} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Pending</p>
                <p className="text-xl font-bold">{tasks.filter(t => t.status === 'Todo').length} Tasks</p>
            </div>
         </Card>
         <Card className="p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                <AlertCircle size={20} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">High Priority</p>
                <p className="text-xl font-bold">{tasks.filter(t => t.priority === 'High').length} Tasks</p>
            </div>
         </Card>
         <Card className="p-4 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 size={20} />
            </div>
            <div>
                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Completed</p>
                <p className="text-xl font-bold">{tasks.filter(t => t.status === 'Done').length} Tasks</p>
            </div>
         </Card>
         <div className="flex items-center -space-x-2 pl-2">
            {[1,2,3,4,5].map(i => (
                <Avatar key={i} src={`https://i.pravatar.cc/150?u=${i+10}`} className="border-2 border-background w-10 h-10" />
            ))}
            <div className="w-10 h-10 rounded-full bg-muted text-muted-foreground flex items-center justify-center text-xs font-bold border-2 border-background">
                +8
            </div>
         </div>
      </div>

      {/* Kanban Board */}
      <div className="flex-1 overflow-x-auto pb-4">
        <div className="flex min-w-[1000px] h-full gap-6">
          {columns.map((col) => (
            <div 
                key={col.title} 
                className={`flex-1 flex flex-col rounded-xl border transition-colors duration-200 max-w-sm
                    ${dragOverColumn === col.status 
                        ? 'bg-accent/50 border-primary/50 ring-2 ring-primary/20' 
                        : 'bg-muted/30 border-border/50'}`}
                onDragOver={(e) => handleDragOver(e, col.status)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, col.status)}
            >
              {/* Column Header */}
              <div className="p-4 flex items-center justify-between border-b border-border/50 bg-muted/20 rounded-t-xl">
                <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${col.color}`} />
                    <span className="font-semibold text-sm text-foreground">{col.title}</span>
                    <Badge variant="secondary" className="ml-2 text-xs px-1.5 py-0 h-5">
                        {tasks.filter(t => t.status === col.status).length}
                    </Badge>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                    <MoreHorizontal size={16} />
                </Button>
              </div>

              {/* Task List */}
              <div className="flex-1 p-3 space-y-3 overflow-y-auto">
                {tasks
                    .filter((task) => task.status === col.status)
                    .map((task) => (
                    <Card 
                        key={task.id} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, task.id)}
                        className={`p-4 shadow-sm hover:shadow-md transition-all cursor-grab active:cursor-grabbing group border-border/60 
                            ${draggedTaskId === task.id ? 'opacity-50 border-dashed border-primary' : ''}`}
                    >
                        <div className="flex justify-between items-start mb-3">
                             <Badge 
                                variant="outline" 
                                className={`text-[10px] px-2 py-0.5 border-none
                                    ${task.category === 'Design' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400' : 
                                      task.category === 'Development' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400' :
                                      task.category === 'Management' ? 'bg-orange-500/10 text-orange-600 dark:text-orange-400' :
                                      'bg-slate-500/10 text-slate-600 dark:text-slate-400'
                                    }`}
                             >
                                {task.category}
                             </Badge>
                             <Button variant="ghost" size="icon" className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity -mr-2 -mt-1">
                                <MoreHorizontal size={14} />
                             </Button>
                        </div>

                        <h4 className="text-sm font-semibold mb-3 line-clamp-2 leading-snug">
                            {task.title}
                        </h4>

                        {/* Meta Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                {task.priority === 'High' && (
                                    <span className="flex items-center text-rose-500 font-medium bg-rose-500/10 px-1.5 py-0.5 rounded">
                                        <AlertCircle size={12} className="mr-1" /> High
                                    </span>
                                )}
                                <span className="flex items-center">
                                    <Calendar size={12} className="mr-1" /> {task.dueDate}
                                </span>
                            </div>

                            <div className="flex items-center justify-between pt-2 border-t border-border/50">
                                <div className="flex -space-x-2">
                                    {task.assignees.map((avatar, i) => (
                                        <Avatar key={i} src={avatar} size="sm" className="h-6 w-6 border-2 border-card" />
                                    ))}
                                </div>
                                <div className="flex items-center gap-3 text-xs text-muted-foreground">
                                    {task.comments > 0 && (
                                        <div className="flex items-center hover:text-foreground transition-colors">
                                            <MessageSquare size={14} className="mr-1" /> {task.comments}
                                        </div>
                                    )}
                                    {task.attachments > 0 && (
                                        <div className="flex items-center hover:text-foreground transition-colors">
                                            <Paperclip size={14} className="mr-1" /> {task.attachments}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
                
                <Button variant="ghost" className="w-full border border-dashed border-border text-muted-foreground hover:text-primary hover:bg-primary/5 hover:border-primary/40 h-10 text-sm">
                    <Plus size={16} className="mr-2" /> Add Task
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
