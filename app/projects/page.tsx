'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllProjects, getProjectsByDifficulty } from '@/lib/projects-data';
import Link from 'next/link';
import { ExternalLink, Github, Zap } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  
  const projects = getAllProjects();
  const filteredProjects = selectedDifficulty 
    ? getProjectsByDifficulty(selectedDifficulty)
    : projects;

  const difficulties = ['beginner', 'intermediate', 'advanced'];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/80 backdrop-blur-md sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
                <Button variant="outline">Workbench</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">
            Real Projects to Audit
          </h1>
          <p className="text-lg text-foreground/70">
            Choose an open-source project that interests you. Each one teaches you something different about software development and the open-source philosophy.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedDifficulty(null)}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              selectedDifficulty === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            }`}
          >
            All ({projects.length})
          </button>
          {difficulties.map(diff => {
            const count = getProjectsByDifficulty(diff).length;
            return (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedDifficulty === diff
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {diff.charAt(0).toUpperCase() + diff.slice(1)} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="space-y-4">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="overflow-hidden hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
            >
              <div className="p-8">
                {/* Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex-1">
                    <h2 className="mb-2 text-2xl font-bold text-foreground">
                      {project.name}
                    </h2>
                    <p className="text-foreground/70">{project.description}</p>
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ml-4 ${
                    project.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                    project.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                  }`}>
                    {project.difficulty}
                  </span>
                </div>

                {/* Story */}
                <div className="mb-6 rounded-lg bg-secondary/20 border-l-4 border-primary p-4">
                  <p className="italic text-foreground/70">"{project.story}"</p>
                </div>

                {/* Metadata */}
                <div className="mb-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-foreground/60">Language</p>
                    <p className="text-base font-semibold text-foreground">{project.language}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground/60">Codebase Size</p>
                    <p className="text-base font-semibold text-foreground">{project.codebaseSize}</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="text-sm font-medium text-foreground/60">Community</p>
                    <p className="text-base font-semibold text-foreground">{project.community}</p>
                  </div>
                </div>

                {/* Audit Focus */}
                <div className="mb-6">
                  <p className="mb-3 font-semibold text-foreground">What You'll Audit</p>
                  <div className="flex flex-wrap gap-2">
                    {project.auditFocus.map((focus, i) => (
                      <span
                        key={i}
                        className="inline-block rounded-full bg-primary/10 px-3 py-1 text-sm text-primary font-medium"
                      >
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Why Section */}
                <div className="mb-6 rounded-lg bg-accent/5 p-4 border border-accent/20">
                  <p className="font-semibold text-foreground mb-2">Why This Project?</p>
                  <p className="text-foreground/70">{project.why}</p>
                </div>

                {/* Getting Started */}
                <div className="mb-6">
                  <p className="mb-3 font-semibold text-foreground">Getting Started</p>
                  <ol className="space-y-2">
                    {project.gettingStarted.map((step, i) => (
                      <li key={i} className="flex gap-3 text-foreground/70">
                        <span className="flex-shrink-0 font-semibold text-primary">{i + 1}.</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* CTA Button */}
                <div className="flex gap-3 pt-6 border-t border-border">
                  <a 
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                  <Link href="/workbench" className="flex-1">
                    <Button className="w-full">
                      Start Auditing
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Encouragement */}
        <div className="mt-12 rounded-lg border border-border bg-primary/5 p-8 text-center">
          <h3 className="mb-4 text-2xl font-bold text-foreground">
            Don't Know Where to Start?
          </h3>
          <p className="mb-6 text-foreground/70">
            Begin with "Hello World" or cURL. They're smaller, perfect for your first audit. Then move up to bigger projects as you gain confidence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row justify-center">
            <a 
              href={getAllProjects()[0].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="gap-2">
                Start with Hello World
                <ExternalLink className="h-4 w-4" />
              </Button>
            </a>
            <Link href="/dashboard">
              <Button className="gap-2">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
