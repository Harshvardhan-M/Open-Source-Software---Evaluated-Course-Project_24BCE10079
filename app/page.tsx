'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight, Code2, BookOpen, Zap } from 'lucide-react';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Code2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">AuditHub</span>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Link href="/getting-started">
                <Button variant="default">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm text-secondary-foreground">
              <Zap className="h-4 w-4" />
              <span>Learn open-source development the right way</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold leading-tight text-foreground sm:text-6xl">
              Audit Open Source, <span className="text-primary">Learn Deeply</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-foreground/80">
              This isn't just another assignment. You're going to dig into real open-source projects, understand how they work, and build practical shell scripts. You'll learn what it means to be a real developer in the open-source community.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/getting-started">
                <Button size="lg" className="w-full sm:w-auto">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="#about">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mt-20 grid gap-6 sm:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <BookOpen className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold text-foreground">Real Projects</h3>
              <p className="text-sm text-foreground/70">
                Work with actual open-source codebases, not toy examples
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Code2 className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold text-foreground">Hands-on Scripts</h3>
              <p className="text-sm text-foreground/70">
                Write shell scripts that matter, with real-time feedback
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <Zap className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold text-foreground">Build Confidence</h3>
              <p className="text-sm text-foreground/70">
                From zero to comfortable reading any codebase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="border-t border-border bg-secondary/30 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 text-3xl font-bold text-foreground">Why This Matters</h2>
          <div className="space-y-4 text-foreground/80">
            <p>
              Most of us have heard about open source. You know, Linux. Richard Stallman. The free software movement. But understanding it intellectually and actually being part of the community are two completely different things.
            </p>
            <p>
              When you audit an open-source project, you're not just checking boxes on an assignment. You're stepping into the world of developers who build the tools that power the internet. You're learning the same skills they use every day: reading code, understanding architecture, running builds, and thinking critically about security and quality.
            </p>
            <p>
              This course is designed to take you from someone who's nervous about touching a real codebase to someone who can confidently dive into any project and figure out how it works. That's a skill that will define your career.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-lg border border-border bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-foreground">Ready to Start?</h2>
          <p className="mb-6 text-foreground/80">
            You're about to learn something that will stick with you for the rest of your career. Let's dive in.
          </p>
          <Link href="/getting-started">
            <Button size="lg" className="gap-2">
              Begin Your Journey <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-sm text-foreground/60">
          <p>AuditHub Open Source Audit • A course in understanding real software</p>
        </div>
      </footer>
    </div>
  );
}
