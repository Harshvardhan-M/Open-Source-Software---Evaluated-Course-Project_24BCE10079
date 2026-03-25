'use client';

import { useState, useEffect } from 'react';
import { getModule, getAllModules } from '@/lib/modules-data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CelebrationToast, getRandomCelebration } from '@/components/celebration-toast';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, BookOpen, Zap, CheckCircle2 } from 'lucide-react';
import { useParams } from 'next/navigation';

export default function ModulePage() {
  const params = useParams();
  const moduleId = parseInt(params.id as string);
  const module = getModule(moduleId);
  const allModules = getAllModules();
  const [isCompleted, setIsCompleted] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState('');

  useEffect(() => {
    // Check if module is completed
    const saved = localStorage.getItem('completedModules');
    if (saved) {
      const modules = JSON.parse(saved);
      setIsCompleted(modules.includes(moduleId));
    }
  }, [moduleId]);

  if (!module) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Module not found</h1>
          <Link href="/modules">
            <Button>Back to Modules</Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = allModules.findIndex(m => m.id === moduleId);
  const prevModule = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const nextModule = currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;

  const toggleSection = (id: string) => {
    setExpandedSections(prev => 
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const toggleCompletion = () => {
    const newIsCompleted = !isCompleted;
    setIsCompleted(newIsCompleted);
    const saved = localStorage.getItem('completedModules');
    let modules = saved ? JSON.parse(saved) : [];
    
    if (newIsCompleted) {
      modules.push(moduleId);
      setCelebrationMessage(getRandomCelebration());
      setShowCelebration(true);
    } else {
      modules = modules.filter((m: number) => m !== moduleId);
    }
    localStorage.setItem('completedModules', JSON.stringify(modules));
  };

  return (
    <div className="min-h-screen bg-background">
      {showCelebration && (
        <CelebrationToast 
          message={celebrationMessage}
          type="success"
          onDismiss={() => setShowCelebration(false)}
        />
      )}
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/modules" className="flex items-center gap-2 text-foreground hover:opacity-80">
              <ArrowLeft className="h-5 w-5" />
              <span className="text-sm font-medium">Back</span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:opacity-80">
              <Zap className="h-5 w-5 text-primary" />
              <span>VITyarthi</span>
            </Link>
            <div />
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Module {module.id + 1} of {allModules.length}
            </span>
          </div>

          <h1 className="mb-4 text-4xl font-bold text-foreground">
            {module.title}
          </h1>

          <p className="mb-6 text-lg text-foreground/70">
            {module.intro}
          </p>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-foreground/60 mb-6">
            <span>{module.estimatedTime} minutes</span>
            <span>•</span>
            <span>{module.sections.length} sections</span>
            <span>•</span>
            <span className={`${
              module.difficulty === 'beginner' ? 'text-green-600' :
              module.difficulty === 'intermediate' ? 'text-yellow-600' :
              'text-red-600'
            }`}>
              {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
            </span>
          </div>

          {/* Story */}
          <Card className="bg-secondary/20 border-l-4 border-primary p-6">
            <p className="text-base leading-relaxed text-foreground">
              <span className="font-semibold text-primary">Real Story:</span> {module.story}
            </p>
          </Card>
        </div>

        {/* Objectives */}
        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-bold text-foreground">What You'll Learn</h2>
          <div className="grid gap-3">
            {module.objectives.map((obj, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-primary/5 p-4">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-foreground">{obj}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Content Sections */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold text-foreground">Content</h2>
          <div className="space-y-3">
            {module.sections.map((section) => (
              <div key={section.id} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-6 hover:bg-secondary/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground text-left">
                    {section.title}
                  </h3>
                  <span className={`transform transition-transform ${expandedSections.includes(section.id) ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {expandedSections.includes(section.id) && (
                  <div className="border-t border-border bg-background/50 p-6 space-y-4">
                    <div className="prose prose-sm max-w-none text-foreground/80 space-y-3">
                      {section.content.split('\n\n').map((para, i) => (
                        <p key={i} className="whitespace-pre-wrap">{para}</p>
                      ))}
                    </div>

                    {section.codeExample && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-foreground mb-2">Example:</p>
                        <pre className="rounded-lg bg-foreground/5 p-4 overflow-x-auto text-sm border border-border">
                          <code className="text-foreground/70">{section.codeExample}</code>
                        </pre>
                      </div>
                    )}

                    {section.tips && section.tips.length > 0 && (
                      <div className="mt-4 rounded-lg bg-accent/5 p-4 border border-accent/20">
                        <p className="text-sm font-semibold text-foreground mb-2">💡 Tips:</p>
                        <ul className="space-y-2">
                          {section.tips.map((tip, i) => (
                            <li key={i} className="text-sm text-foreground/70 flex gap-2">
                              <span className="text-primary">•</span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Completion */}
        <div className="mb-12 rounded-lg border border-border bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">
            {isCompleted ? '✨ Great work!' : 'Mark as Complete'}
          </h2>
          <p className="mb-6 text-foreground/70">
            {isCompleted 
              ? 'You\'ve completed this module. You\'re building real knowledge with every lesson.'
              : 'When you\'ve finished reviewing this module, mark it as complete.'}
          </p>
          <Button 
            onClick={toggleCompletion}
            size="lg"
            variant={isCompleted ? "outline" : "default"}
          >
            {isCompleted ? '✓ Completed' : 'Mark as Complete'}
          </Button>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {prevModule ? (
            <Link href={`/modules/${prevModule.id}`} className="flex-1">
              <Button variant="outline" className="w-full gap-2">
                <ArrowLeft className="h-4 w-4" />
                Previous Module
              </Button>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextModule ? (
            <Link href={`/modules/${nextModule.id}`} className="flex-1">
              <Button className="w-full gap-2">
                Next Module
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <Link href="/workbench" className="flex-1">
              <Button className="w-full gap-2">
                Script Workbench
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </main>
    </div>
  );
}
