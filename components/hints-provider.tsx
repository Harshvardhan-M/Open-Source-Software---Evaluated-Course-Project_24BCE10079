'use client';

import { useState, useEffect } from 'react';
import { Lightbulb, X } from 'lucide-react';

interface Hint {
  id: string;
  title: string;
  content: string;
  type: 'tip' | 'warning' | 'success' | 'info';
}

const AVAILABLE_HINTS: Record<string, Hint> = {
  'first-module': {
    id: 'first-module',
    title: 'Starting Your Journey',
    content: 'Reading the introduction carefully helps you understand the bigger picture. Take time to absorb the philosophy before rushing into code.',
    type: 'info'
  },
  'git-basics': {
    id: 'git-basics',
    title: 'Git is Your Friend',
    content: 'Don\'t be intimidated by Git. It\'s just a tool for tracking changes. Once you understand the basics, it becomes second nature.',
    type: 'tip'
  },
  'script-safety': {
    id: 'script-safety',
    title: 'Test Scripts Safely',
    content: 'Always test scripts on a copy of the project, not the original. Use version control so you can easily revert changes.',
    type: 'warning'
  },
  'read-slow': {
    id: 'read-slow',
    title: 'Read Code Slowly',
    content: 'Don\'t try to read entire files at once. Focus on one function at a time. Use print statements to trace execution.',
    type: 'tip'
  },
  'ask-questions': {
    id: 'ask-questions',
    title: 'Questions Are Good',
    content: 'When you don\'t understand something, ask. Check the documentation, search online, or ask in the project\'s community. That\'s how developers learn.',
    type: 'success'
  }
};

export function HintsProvider() {
  const [visibleHints, setVisibleHints] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Randomly show a hint when user arrives at a page
    const randomHintId = Object.keys(AVAILABLE_HINTS)[
      Math.floor(Math.random() * Object.keys(AVAILABLE_HINTS).length)
    ];
    setVisibleHints(new Set([randomHintId]));
  }, []);

  const dismiss = (id: string) => {
    setVisibleHints(prev => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 space-y-3 max-w-sm">
      {Array.from(visibleHints).map(hintId => {
        const hint = AVAILABLE_HINTS[hintId];
        if (!hint) return null;

        const bgColor = {
          tip: 'bg-accent/10 border-accent/20',
          warning: 'bg-yellow-50 border-yellow-200 dark:bg-yellow-950 dark:border-yellow-800',
          success: 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800',
          info: 'bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800'
        }[hint.type];

        const iconColor = {
          tip: 'text-accent',
          warning: 'text-yellow-600 dark:text-yellow-400',
          success: 'text-green-600 dark:text-green-400',
          info: 'text-blue-600 dark:text-blue-400'
        }[hint.type];

        return (
          <div 
            key={hint.id}
            className={`rounded-lg border ${bgColor} p-4 shadow-lg animate-in slide-in-from-right`}
          >
            <div className="flex items-start gap-3">
              <Lightbulb className={`h-5 w-5 flex-shrink-0 mt-0.5 ${iconColor}`} />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground text-sm">{hint.title}</p>
                <p className="text-foreground/70 text-sm mt-1">{hint.content}</p>
              </div>
              <button
                onClick={() => dismiss(hint.id)}
                className="flex-shrink-0 text-foreground/40 hover:text-foreground/60 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
