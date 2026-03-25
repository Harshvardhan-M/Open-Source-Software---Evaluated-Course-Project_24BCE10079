'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Check, Clock, BookOpen, Code2, Users, Zap } from 'lucide-react';

export default function GettingStartedPage() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (step: number) => {
    setCompletedSteps(prev =>
      prev.includes(step) ? prev.filter(s => s !== step) : [...prev, step]
    );
  };

  const steps = [
    {
      id: 1,
      title: 'Start with the Fundamentals',
      description: 'Read Module 1: Welcome to Open Source',
      time: '45 min',
      why: 'You need to understand the philosophy and culture before diving into code.',
      action: 'Read Module 1',
      href: '/modules/0'
    },
    {
      id: 2,
      title: 'Set Up Your Environment',
      description: 'Complete Module 2: Setting Up Your Environment',
      time: '30 min',
      why: 'Make sure Git, your terminal, and basic tools are ready.',
      action: 'Read Module 2',
      href: '/modules/1'
    },
    {
      id: 3,
      title: 'Learn to Read Code',
      description: 'Work through Module 3: Reading and Understanding Code',
      time: '60 min',
      why: 'This is the core skill. Developers spend more time reading code than writing it.',
      action: 'Read Module 3',
      href: '/modules/2'
    },
    {
      id: 4,
      title: 'Master Building and Testing',
      description: 'Complete Module 4: Building and Testing',
      time: '45 min',
      why: 'Learn how to compile projects and run test suites.',
      action: 'Read Module 4',
      href: '/modules/3'
    },
    {
      id: 5,
      title: 'Audit for Security',
      description: 'Study Module 5: Security and Code Quality',
      time: '60 min',
      why: 'Learn what makes code secure and high-quality.',
      action: 'Read Module 5',
      href: '/modules/4'
    },
    {
      id: 6,
      title: 'Write Your Audit Report',
      description: 'Learn Module 6: Writing Your Audit Report',
      time: '90 min',
      why: 'Document your findings professionally.',
      action: 'Read Module 6',
      href: '/modules/5'
    },
    {
      id: 7,
      title: 'Practice with Scripts',
      description: 'Explore the Script Workbench and practice',
      time: 'Self-paced',
      why: 'Real-world tools that will accelerate your audits.',
      action: 'Visit Workbench',
      href: '/workbench'
    },
    {
      id: 8,
      title: 'Audit Your First Project',
      description: 'Choose a project and start auditing',
      time: 'Variable',
      why: 'The best way to learn is by doing. Start small, then go bigger.',
      action: 'Browse Projects',
      href: '/projects'
    }
  ];

  const totalTime = steps.reduce((acc, step) => {
    const minutes = parseInt(step.time);
    return acc + (isNaN(minutes) ? 0 : minutes);
  }, 0);

  const progress = Math.round((completedSteps.length / steps.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80">
              <Zap className="h-5 w-5 text-primary" />
              <span>AuditHub</span>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Your Learning Roadmap
          </h1>
          <p className="mb-8 text-lg text-foreground/70">
            Here's exactly how to go from zero to confident. Each step builds on the last.
          </p>

          {/* Quick Stats */}
          <div className="grid gap-4 sm:grid-cols-3 mb-8">
            <Card className="p-4">
              <div className="flex items-center gap-3 justify-center">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-foreground/60">Total Time</p>
                  <p className="font-semibold text-foreground">~{totalTime} min</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3 justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-foreground/60">Modules</p>
                  <p className="font-semibold text-foreground">6 total</p>
                </div>
              </div>
            </Card>
            <Card className="p-4">
              <div className="flex items-center gap-3 justify-center">
                <Code2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-xs text-foreground/60">Skills</p>
                  <p className="font-semibold text-foreground">Complete</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Progress */}
        <Card className="mb-12 p-6 bg-primary/5 border-primary/20">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-foreground">Your Progress</h2>
            <span className="text-2xl font-bold text-primary">{progress}%</span>
          </div>
          <div className="h-2 bg-foreground/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-foreground/60 mt-2">
            {completedSteps.length} of {steps.length} steps completed
          </p>
        </Card>

        {/* Steps */}
        <div className="space-y-4 mb-12">
          {steps.map((step) => (
            <Card
              key={step.id}
              className={`overflow-hidden transition-all ${
                completedSteps.includes(step.id)
                  ? 'bg-green-50/50 dark:bg-green-950/20 border-green-200 dark:border-green-800'
                  : 'hover:border-primary/50'
              }`}
            >
              <div className="w-full text-left p-6 flex items-start gap-4">
                {/* Checkbox */}
                <button
                  onClick={() => toggleStep(step.id)}
                  className={`flex-shrink-0 w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${
                    completedSteps.includes(step.id)
                      ? 'bg-green-500 border-green-500'
                      : 'border-border hover:border-primary'
                  }`}
                  aria-label="Toggle step completion"
                >
                  {completedSteps.includes(step.id) && (
                    <Check className="h-4 w-4 text-white" />
                  )}
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className={`text-lg font-semibold ${
                      completedSteps.includes(step.id)
                        ? 'text-green-700 dark:text-green-300 line-through'
                        : 'text-foreground'
                    }`}>
                      Step {step.id}: {step.title}
                    </h3>
                    <span className="text-xs font-medium text-foreground/60 whitespace-nowrap ml-2">
                      {step.time}
                    </span>
                  </div>

                  <p className={`text-sm mb-3 ${
                    completedSteps.includes(step.id)
                      ? 'text-green-700/70 dark:text-green-300/70'
                      : 'text-foreground/70'
                  }`}>
                    {step.description}
                  </p>

                  <div className={`rounded-lg p-3 mb-4 ${
                    completedSteps.includes(step.id)
                      ? 'bg-green-100/50 dark:bg-green-900/30'
                      : 'bg-secondary/30'
                  }`}>
                    <p className={`text-sm font-medium ${
                      completedSteps.includes(step.id)
                        ? 'text-green-800 dark:text-green-200'
                        : 'text-foreground'
                    }`}>
                      Why: {step.why}
                    </p>
                  </div>

                  <Link href={step.href}>
                    <Button 
                      size="sm"
                      variant={completedSteps.includes(step.id) ? "outline" : "default"}
                      className="gap-2"
                    >
                      {step.action}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <Card className="p-8 text-center bg-primary/5 border-primary/20">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Begin?</h2>
          <p className="mb-6 text-foreground/70">
            You have everything you need. The only thing standing between you and mastery is starting.
          </p>
          <Link href="/modules/0">
            <Button size="lg" className="gap-2">
              Start with Module 1
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>

        {/* Encouragement */}
        <div className="mt-12 text-center">
          <p className="text-foreground/70 flex items-center justify-center gap-2">
            <Users className="h-4 w-4" />
            Thousands of developers have walked this path. You can too.
          </p>
        </div>
      </main>
    </div>
  );
}
