'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { getAllScripts, getScriptsByCategory } from '@/lib/scripts-data';
import Link from 'next/link';
import { Copy, Check, ChevronDown, Zap, Plus } from 'lucide-react';

export default function WorkbenchPage() {
  const [selectedScriptId, setSelectedScriptId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [customCode, setCustomCode] = useState('');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [expandedTips, setExpandedTips] = useState<string | null>(null);

  const scripts = getAllScripts();
  const categories = ['bash', 'shell', 'analysis', 'audit', 'other'];
  const displayedScripts = selectedCategory 
    ? getScriptsByCategory(selectedCategory)
    : scripts;
  const selectedScript = selectedScriptId ? scripts.find(s => s.id === selectedScriptId) : displayedScripts[0];

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

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
              <Link href="/projects">
                <Button variant="outline">Projects</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="mb-4 text-4xl font-bold text-foreground">Script Workbench</h1>
          <p className="text-lg text-foreground/70">
            A collection of practical shell scripts for auditing open-source projects. Copy, modify, and use them for your audits.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar - Script List */}
          <div className="lg:col-span-1">
            <div className="sticky top-20 space-y-4">
              {/* Category Filter */}
              <div>
                <h3 className="mb-3 font-semibold text-foreground">Categories</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => { setSelectedCategory(null); setSelectedScriptId(null); }}
                    className={`w-full px-4 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
                      selectedCategory === null
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    All Scripts
                  </button>
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setSelectedScriptId(null); }}
                      className={`w-full px-4 py-2 rounded-lg text-sm font-medium text-left transition-colors ${
                        selectedCategory === cat
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                      }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Script List */}
              <div>
                <h3 className="mb-3 font-semibold text-foreground">Scripts ({displayedScripts.length})</h3>
                <div className="space-y-2 max-h-96 overflow-y-auto">
                  {displayedScripts.map(script => (
                    <button
                      key={script.id}
                      onClick={() => setSelectedScriptId(script.id)}
                      className={`w-full rounded-lg px-4 py-3 text-left transition-all ${
                        selectedScriptId === script.id || (selectedScriptId === null && displayedScripts[0]?.id === script.id)
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-card text-foreground hover:border-primary/50 border border-border hover:bg-secondary/20'
                      }`}
                    >
                      <p className="font-medium text-sm">{script.title}</p>
                      <p className={`text-xs mt-1 ${selectedScriptId === script.id ? 'text-primary-foreground/70' : 'text-foreground/60'}`}>
                        {script.difficulty}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Script Details */}
          <div className="lg:col-span-2">
            {selectedScript ? (
              <Card className="overflow-hidden">
                {/* Script Header */}
                <div className="border-b border-border bg-secondary/30 p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <h2 className="mb-2 text-2xl font-bold text-foreground">
                        {selectedScript.title}
                      </h2>
                      <p className="text-foreground/70">{selectedScript.description}</p>
                    </div>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                      selectedScript.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' :
                      selectedScript.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100' :
                      'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                    }`}>
                      {selectedScript.difficulty}
                    </span>
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {selectedScript.category}
                  </span>
                </div>

                {/* Code Block */}
                <div className="p-6 border-b border-border">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-foreground">Code</h3>
                    <button
                      onClick={() => copyToClipboard(selectedScript.code, selectedScript.id)}
                      className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm font-medium text-secondary-foreground hover:bg-secondary/80 transition-colors"
                    >
                      {copiedId === selectedScript.id ? (
                        <>
                          <Check className="h-4 w-4" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="h-4 w-4" />
                          Copy
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="rounded-lg bg-foreground/5 p-4 overflow-x-auto border border-border text-sm">
                    <code className="text-foreground/80 font-mono">{selectedScript.code}</code>
                  </pre>
                </div>

                {/* Explanation */}
                <div className="p-6 border-b border-border">
                  <h3 className="mb-3 font-semibold text-foreground">How It Works</h3>
                  <p className="text-foreground/70">{selectedScript.explanation}</p>
                </div>

                {/* Tips */}
                <div className="p-6 border-b border-border">
                  <button
                    onClick={() => setExpandedTips(expandedTips === selectedScript.id ? null : selectedScript.id)}
                    className="flex items-center justify-between w-full font-semibold text-foreground hover:opacity-80"
                  >
                    <span>Tips & Best Practices</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${expandedTips === selectedScript.id ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedTips === selectedScript.id && (
                    <div className="mt-4 space-y-2">
                      {selectedScript.tips.map((tip, i) => (
                        <div key={i} className="flex gap-3 rounded-lg bg-accent/5 p-3 border border-accent/20">
                          <span className="text-accent flex-shrink-0">💡</span>
                          <p className="text-sm text-foreground/70">{tip}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Common Errors */}
                <div className="p-6">
                  <h3 className="mb-3 font-semibold text-foreground">Common Errors</h3>
                  <div className="space-y-2">
                    {selectedScript.commonErrors.map((error, i) => (
                      <div key={i} className="flex gap-3 rounded-lg bg-destructive/10 p-3 border border-destructive/20">
                        <span className="text-destructive flex-shrink-0">⚠️</span>
                        <p className="text-sm text-foreground/70">{error}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ) : (
              <Card className="p-12 text-center">
                <p className="text-foreground/70">Select a script to view details</p>
              </Card>
            )}
          </div>
        </div>

        {/* Custom Script Section */}
        <div className="mt-12">
          <div className="rounded-lg border border-border bg-card p-8">
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold text-foreground">
              <Plus className="h-6 w-6 text-primary" />
              Create Your Own Script
            </h2>
            <p className="mb-6 text-foreground/70">
              Use the workbench below to write and test your own audit scripts. These examples are starting points—modify them for your specific needs.
            </p>
            <textarea
              value={customCode}
              onChange={(e) => setCustomCode(e.target.value)}
              placeholder="#!/bin/bash&#10;&#10;# Your custom script here..."
              className="w-full h-64 rounded-lg border border-border bg-foreground/5 p-4 font-mono text-sm text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={() => copyToClipboard(customCode, 'custom')}
              className="mt-4 flex items-center gap-2 rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Copy className="h-4 w-4" />
              Copy Custom Script
            </button>
          </div>
        </div>

        {/* Encouragement */}
        <div className="mt-12 rounded-lg border border-border bg-primary/5 p-8 text-center">
          <h3 className="mb-2 text-xl font-bold text-foreground">Ready to audit?</h3>
          <p className="mb-6 text-foreground/70">
            Pick a real project and use these scripts to understand how it works. Start small, then go bigger.
          </p>
          <Link href="/projects">
            <Button>Explore Projects to Audit</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
