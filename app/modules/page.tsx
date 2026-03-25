'use client';

import { getAllModules } from '@/lib/modules-data';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';

export default function ModulesPage() {
  const modules = getAllModules();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80">
              <Zap className="h-5 w-5 text-primary" />
              <span>AuditHub</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link href="/workbench">
                <Button variant="default">Script Workbench</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Your Learning Path
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-foreground/70">
            Six modules designed to take you from curious to confident. Each one builds on the last, guiding you deeper into the world of open-source software.
          </p>
        </div>

        {/* Modules Grid */}
        <div className="space-y-4">
          {modules.map((module) => (
            <Link key={module.id} href={`/modules/${module.id}`}>
              <Card className="group relative overflow-hidden p-6 transition-all hover:border-primary/50 hover:shadow-lg cursor-pointer">
                <div className="mb-4 flex items-start justify-between">
                  <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1">
                      <span className="text-sm font-semibold text-primary">
                        Module {module.id + 1}
                      </span>
                    </div>
                    <h2 className="mt-2 text-2xl font-bold text-foreground">
                      {module.title}
                    </h2>
                  </div>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                    module.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                    module.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                  }`}>
                    {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
                  </span>
                </div>

                <p className="mb-4 text-foreground/70">{module.description}</p>

                {/* Story teaser */}
                <div className="mb-6 rounded-lg bg-secondary/20 p-4 border-l-2 border-primary">
                  <p className="text-sm italic text-foreground/60">
                    "{module.story.substring(0, 100)}..."
                  </p>
                </div>

                {/* Objectives */}
                <div className="mb-6">
                  <p className="mb-2 text-sm font-semibold text-foreground">What you'll learn:</p>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {module.objectives.slice(0, 4).map((obj, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {obj}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex gap-4 text-sm text-foreground/50">
                    <span>{module.estimatedTime} min read</span>
                    <span>{module.sections.length} sections</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="gap-2 text-primary group-hover:gap-3 transition-all"
                  >
                    Start Learning <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Encouragement */}
        <div className="mt-12 rounded-lg border border-border bg-primary/5 p-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-foreground">
            You've got this
          </h3>
          <p className="text-foreground/70">
            Take it one module at a time. By the end, you'll have skills that stay with you for your entire career.
          </p>
        </div>
      </main>
    </div>
  );
}
