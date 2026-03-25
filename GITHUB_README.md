# AuditHub Open Source Audit Platform

**Student Name:** Harshvardhan S. Magar  
**Roll Number:** 24BCE10079  
**Project:** Interactive Learning Platform for Open Source Software Auditing

## Overview

This project is an interactive web-based learning platform designed to teach students how to audit and analyze open-source software projects. Rather than just reading theory, learners work with real shell scripts on actual repositories, building confidence and practical skills step by step.

## Scripts Included

### 1. **File Counter Script** (`analyze-files.sh`)
Counts and categorizes all files in a project by type. Useful for understanding project complexity.
```bash
bash scripts/analyze-files.sh /path/to/repo
```
**Output:** Total files, breakdown by extension, largest files  
**Dependencies:** `bash`, `wc`, `find`

### 2. **Git History Analyzer** (`git-stats.sh`)
Extracts commit statistics, contributor count, and repository age.
```bash
cd /path/to/repo && bash ../scripts/git-stats.sh
```
**Output:** Commits, authors, last modified date  
**Dependencies:** `git`

### 3. **Dependency Checker** (`check-dependencies.sh`)
Identifies project dependencies from package managers.
```bash
bash scripts/check-dependencies.sh /path/to/repo
```
**Output:** Lists package.json, requirements.txt, Gemfile, etc.  
**Dependencies:** `bash`, `find`, `grep`

### 4. **Code Metrics** (`code-metrics.sh`)
Calculates lines of code, documentation ratio, and code density.
```bash
bash scripts/code-metrics.sh /path/to/repo
```
**Output:** Total LOC, comments, code-to-comment ratio  
**Dependencies:** `bash`, `wc`, `grep`

### 5. **Test Coverage Checker** (`test-coverage.sh`)
Finds and reports test files and coverage status.
```bash
bash scripts/test-coverage.sh /path/to/repo
```
**Output:** Test file count, coverage percentage  
**Dependencies:** `bash`, `find`

### 6. **License Compliance** (`check-license.sh`)
Verifies LICENSE file presence and extracts license information.
```bash
bash scripts/check-license.sh /path/to/repo
```
**Output:** License type, SPDX identifier  
**Dependencies:** `bash`, `grep`, `file`

## Linux Setup

### Prerequisites
```bash
sudo apt-get update
sudo apt-get install git curl build-essential
```

### Running the Platform
```bash
# Clone repository
git clone https://github.com/yourusername/vityarthi.git
cd vityarthi

# Install Node dependencies
npm install

# Start development server
npm run dev
```

Access at `http://localhost:3000`

## Core Dependencies
- **Node.js 18+** - JavaScript runtime
- **Next.js 16** - React framework
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Linux/macOS** - For running audit scripts

All scripts are bash-based and work on any Linux distribution.

## What You'll Learn
- How to audit real open-source projects
- Master shell scripting fundamentals
- Understand code quality metrics
- Analyze security and dependencies
- Write professional audit reports

**This isn't just a tool—it's your mentorship journey into open-source.**
