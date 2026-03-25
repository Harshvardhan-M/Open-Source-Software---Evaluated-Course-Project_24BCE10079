'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { getAllModules } from '@/lib/modules-data';
import { ArrowRight, Flame, Target, BookOpen, Zap } from 'lucide-react';

export default function Dashboard() {
  const [progress, setProgress] = useState(0);
  const [completedModules, setCompletedModules] = useState<number[]>([]);
  
  const modules = getAllModules();
  const totalModules = modules.length;

  useEffect(() => {
    // Load progress from localStorage
    const saved = localStorage.getItem('completedModules');
    if (saved) {
      const modules = JSON.parse(saved);
      setCompletedModules(modules);
      setProgress(Math.round((modules.length / totalModules) * 100));
    }
  }, [totalModules]);

  const toggleModuleComplete = (id: number) => {
    setCompletedModules(prev => {
      const newCompleted = prev.includes(id) 
        ? prev.filter(m => m !== id)
        : [...prev, id];
      localStorage.setItem('completedModules', JSON.stringify(newCompleted));
      setProgress(Math.round((newCompleted.length / totalModules) * 100));
      return newCompleted;
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80">
              <Zap className="h-5 w-5 text-primary" />
              <span>AuditHub</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/workbench">
                <Button variant="outline">Script Workbench</Button>
              </Link>
              <Link href="/projects">
                <Button variant="outline">Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="mb-12 rounded-lg border border-border bg-primary/5 p-8">
          <h1 className="mb-2 text-3xl font-bold text-foreground">Welcome back!</h1>
          <p className="mb-6 text-lg text-foreground/70">
            You're on a journey to understand open-source development. Every module you complete is a step forward.
          </p>
          
          {/* Progress */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Your Progress</p>
                <p className="text-xs text-foreground/60">{completedModules.length} of {totalModules} modules completed</p>
              </div>
              <div className="text-2xl font-bold text-primary">{progress}%</div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        </div>

        {/* Stats */}
        <div className="mb-12 grid gap-4 sm:grid-cols-3">
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Modules Completed</p>
                <p className="text-2xl font-bold text-foreground">{completedModules.length}</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10">
                <Flame className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Learning Streak</p>
                <p className="text-2xl font-bold text-foreground">7 days</p>
              </div>
            </div>
          </Card>
          <Card className="p-6">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/10">
                <Target className="h-5 w-5 text-secondary-foreground" />
              </div>
              <div>
                <p className="text-sm text-foreground/60">Current Streak</p>
                <p className="text-2xl font-bold text-foreground">3 days</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Modules */}
        <div>
          <h2 className="mb-6 text-2xl font-bold text-foreground">Your Learning Path</h2>
          <div className="space-y-3">
            {modules.map((module) => (
              <div 
                key={module.id}
                className="group flex items-start gap-4 rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mt-1">
                  <input
                    type="checkbox"
                    checked={completedModules.includes(module.id)}
                    onChange={() => toggleModuleComplete(module.id)}
                    className="h-5 w-5 cursor-pointer accent-primary"
                  />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-start justify-between">
                    <h3 className="font-semibold text-foreground">
                      {module.id + 1}. {module.title}
                    </h3>
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                      module.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                      module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {module.difficulty}
                    </span>
                  </div>
                  <p className="mb-3 text-sm text-foreground/70">{module.description}</p>
                  <div className="flex items-center gap-4 text-xs text-foreground/50">
                    <span>{module.estimatedTime} min</span>
                    <span>{module.sections.length} sections</span>
                  </div>
                </div>
                <Link href={`/modules/${module.id}`}>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="gap-2 opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Learn <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {completedModules.length === 0 && (
          <div className="mt-12 rounded-lg border border-border bg-secondary/30 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">Ready to get started?</h3>
            <p className="mb-6 text-foreground/70">
              Start with Module 1 to learn the fundamentals of open source
            </p>
            <Link href="/modules/0">
              <Button size="lg">
                Begin Module 1
              </Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
