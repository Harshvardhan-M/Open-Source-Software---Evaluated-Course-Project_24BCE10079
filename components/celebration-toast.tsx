'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

interface CelebrationToastProps {
  message: string;
  type?: 'success' | 'milestone' | 'achievement';
  onDismiss?: () => void;
}

const messages = [
  'You\'re building real knowledge!',
  'Keep going—you\'re getting stronger.',
  'This is the kind of thinking pro developers use.',
  'You just learned something that will stick with you.',
  'Small steps lead to big achievements.',
  'You\'re becoming someone who understands real code.',
  'This is what learning looks like.',
  'Every lesson compounds. Great work.',
];

export function CelebrationToast({ message, type = 'success', onDismiss }: CelebrationToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onDismiss?.();
    }, 4000);

    return () => clearTimeout(timer);
  }, [onDismiss]);

  if (!isVisible) return null;

  const Icon = type === 'milestone' ? Star : CheckCircle2;
  const bgColor = type === 'success' 
    ? 'bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800'
    : 'bg-primary/10 border-primary/20';
  const textColor = type === 'success'
    ? 'text-green-900 dark:text-green-100'
    : 'text-primary';
  const iconColor = type === 'success'
    ? 'text-green-600'
    : 'text-primary';

  return (
    <div className={`fixed bottom-6 right-6 z-50 rounded-lg border ${bgColor} p-4 shadow-lg animate-in fade-in slide-in-from-bottom-2`}>
      <div className="flex items-center gap-3">
        <Icon className={`h-5 w-5 flex-shrink-0 ${iconColor}`} />
        <p className={`text-sm font-medium ${textColor}`}>{message}</p>
      </div>
    </div>
  );
}

export function getRandomCelebration(): string {
  return messages[Math.floor(Math.random() * messages.length)];
}
