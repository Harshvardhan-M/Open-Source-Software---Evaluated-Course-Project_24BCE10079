export interface Script {
  id: string;
  title: string;
  description: string;
  category: 'bash' | 'shell' | 'analysis' | 'audit' | 'other';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  code: string;
  explanation: string;
  tips: string[];
  commonErrors: string[];
}

export const exampleScripts: Script[] = [
  {
    id: 'file-count',
    title: 'Count Files by Extension',
    description: 'A simple script to count how many files of each type exist in a project',
    category: 'analysis',
    difficulty: 'beginner',
    code: `#!/bin/bash

# Count files by extension
echo "File count by extension:"
find . -type f -name "*.js" | wc -l | xargs echo "JavaScript files:"
find . -type f -name "*.ts" | wc -l | xargs echo "TypeScript files:"
find . -type f -name "*.py" | wc -l | xargs echo "Python files:"
find . -type f -name "*.md" | wc -l | xargs echo "Markdown files:"`,
    explanation: 'This script uses the `find` command to locate all files with specific extensions, then pipes them to `wc -l` to count the lines. The `xargs echo` formats the output nicely.',
    tips: [
      'Use `find . -type f` to find only files (not directories)',
      'The `-name` flag lets you search by filename pattern',
      'Add more extensions to analyze more file types'
    ],
    commonErrors: [
      'Forgetting the dot in `./` - always specify where to search',
      'Using wrong quotes or escaping - bash is picky about syntax'
    ]
  },
  {
    id: 'git-stats',
    title: 'Git Repository Statistics',
    description: 'Analyze commits, contributors, and activity in a Git repository',
    category: 'audit',
    difficulty: 'intermediate',
    code: `#!/bin/bash

echo "=== Git Repository Statistics ==="
echo ""

# Total commits
echo "Total commits: $(git rev-list --count HEAD)"

# Total contributors
echo "Total contributors: $(git shortlog -sn | wc -l)"

# Most active contributor
echo ""
echo "Top 5 contributors:"
git shortlog -sn | head -5

# Files changed in last month
echo ""
echo "Files changed in last 30 days:"
git log --since="30 days ago" --name-only --pretty=format: | sort | uniq | wc -l

# Lines of code added/removed
echo ""
echo "Code changes:"
git log --since="30 days ago" --numstat --pretty="%H" | awk '{added+=$1; removed+=$2} END {print "Added: " added " lines, Removed: " removed " lines"}'`,
    explanation: 'This script uses Git commands to extract valuable information about repository health and activity. Each command taps into Git\'s data to tell you something important.',
    tips: [
      'Use `git log` for commit history analysis',
      'The `shortlog` command is perfect for contributor statistics',
      'Always include timestamps to track trends over time'
    ],
    commonErrors: [
      'Running this outside a Git repository - check you\'re in the right directory',
      'Not having Git installed or configured properly'
    ]
  },
  {
    id: 'dependency-check',
    title: 'Check Project Dependencies',
    description: 'Find outdated dependencies and security vulnerabilities',
    category: 'audit',
    difficulty: 'intermediate',
    code: `#!/bin/bash

echo "=== Dependency Analysis ==="

# Check for package.json
if [ -f "package.json" ]; then
  echo "Found Node.js project"
  npm list --depth=0
  echo ""
  echo "Outdated packages:"
  npm outdated
fi

# Check for requirements.txt
if [ -f "requirements.txt" ]; then
  echo "Found Python project"
  pip list --outdated
fi

# Check for Gemfile
if [ -f "Gemfile" ]; then
  echo "Found Ruby project"
  bundle outdated
fi`,
    explanation: 'This script detects which package managers your project uses and shows you outdated dependencies. The `if [ -f file ]` checks if a file exists.',
    tips: [
      'Check for outdated dependencies regularly - they often have security patches',
      'Different languages use different package managers',
      'Use `--depth=0` to avoid seeing nested dependencies'
    ],
    commonErrors: [
      'Running with wrong permissions - some commands need sudo',
      'Not having package managers installed'
    ]
  },
  {
    id: 'code-metrics',
    title: 'Calculate Code Metrics',
    description: 'Analyze code complexity with line counts and function metrics',
    category: 'analysis',
    difficulty: 'intermediate',
    code: `#!/bin/bash

echo "=== Code Metrics ==="
echo ""

# Total lines of code
echo "Total lines of code:"
find . -type f \\( -name "*.js" -o -name "*.ts" -o -name "*.py" \\) -exec wc -l {} + | tail -1

# Average file size
echo ""
echo "Average file size (lines):"
find . -type f \\( -name "*.js" -o -name "*.ts" \\) | xargs wc -l | tail -1 | awk '{print $1 / NR}'

# Function count (rough estimate for Python)
echo ""
echo "Python functions:"
grep -r "^def " --include="*.py" . | wc -l

# Class count
echo ""
echo "Classes defined:"
grep -r "^class " --include="*.py" . | wc -l`,
    explanation: 'This script provides high-level metrics about your codebase size and complexity. Use it to understand project scale.',
    tips: [
      'Escaped backslash (\\) in parentheses helps with complex find patterns',
      'Use grep with `-r` for recursive search',
      'These are just rough metrics - not perfect measurements'
    ],
    commonErrors: [
      'Forgetting to escape special characters in bash',
      'Using wrong file extensions for your project'
    ]
  },
  {
    id: 'test-runner',
    title: 'Run All Tests and Report',
    description: 'Execute tests and generate a simple report of pass/fail status',
    category: 'audit',
    difficulty: 'intermediate',
    code: `#!/bin/bash

echo "=== Running Tests ==="
echo ""

# Detect and run tests
if [ -f "package.json" ]; then
  echo "Running Node.js tests..."
  npm test
elif [ -f "pytest.ini" ] || grep -q "pytest" requirements.txt 2>/dev/null; then
  echo "Running Python tests..."
  pytest -v
elif [ -f "Rakefile" ]; then
  echo "Running Ruby tests..."
  rake test
fi

echo ""
echo "Test run completed."`,
    explanation: 'This script automatically detects your project type and runs the appropriate test command. This is useful in automation pipelines.',
    tips: [
      'Always check if test files exist before running',
      'Different frameworks have different test runners',
      'Capture test output for CI/CD systems'
    ],
    commonErrors: [
      'Running tests without dependencies installed',
      'Not having the right testing framework installed'
    ]
  },
  {
    id: 'license-check',
    title: 'Check Project License Compliance',
    description: 'Verify license files exist and scan for common license types',
    category: 'audit',
    difficulty: 'beginner',
    code: `#!/bin/bash

echo "=== License Compliance Check ==="
echo ""

# Check for common license files
for license_file in LICENSE LICENSE.md LICENSE.txt COPYING COPYING.md; do
  if [ -f "$license_file" ]; then
    echo "Found license file: $license_file"
    head -5 "$license_file"
    echo ""
  fi
done

# Check for license headers in code
echo "Scanning for license headers in source files..."
grep -r "Copyright\\|License\\|SPDX" --include="*.js" --include="*.py" . | head -10

echo ""
echo "License check complete."`,
    explanation: 'This script checks if your project has proper license documentation and if source files include copyright headers.',
    tips: [
      'A LICENSE file is essential for open-source projects',
      'Many projects include copyright headers at the top of files',
      'Use SPDX identifiers for machine-readable license information'
    ],
    commonErrors: [
      'Forgetting to include a LICENSE file',
      'Using proprietary code in open-source projects without checking licenses'
    ]
  }
];

export function getScript(id: string): Script | undefined {
  return exampleScripts.find(s => s.id === id);
}

export function getScriptsByCategory(category: string): Script[] {
  return exampleScripts.filter(s => s.category === category);
}

export function getAllScripts(): Script[] {
  return exampleScripts;
}
