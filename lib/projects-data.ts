export interface AuditProject {
  id: string;
  name: string;
  description: string;
  url: string;
  language: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  auditFocus: string[];
  why: string;
  gettingStarted: string[];
  story: string;
  codebaseSize: string;
  community: string;
}

export const projects: AuditProject[] = [
  {
    id: 'hello-world',
    name: 'Hello World',
    description: 'The simplest open-source project—just a tiny program that prints "Hello, World!" Great for understanding the absolute basics.',
    url: 'https://github.com/leachim6/hello-world',
    language: 'Multiple Languages',
    difficulty: 'beginner',
    auditFocus: ['Project structure', 'Documentation', 'Licensing', 'Code simplicity'],
    why: 'This is the perfect starting point. It\'s so simple you can understand the entire codebase in minutes. Perfect for your first audit.',
    gettingStarted: [
      'Clone the repository',
      'Read the README thoroughly',
      'Look at the file structure',
      'Examine how each language implementation differs'
    ],
    story: 'Every programmer\'s first program is "Hello, World!" This project celebrates that tradition across hundreds of languages. It\'s humble but teaches you about cross-platform development.',
    codebaseSize: '~1 MB',
    community: 'Educational'
  },
  {
    id: 'curl',
    name: 'cURL',
    description: 'One of the most important tools on the internet. cURL transfers data using URLs and is used billions of times per day.',
    url: 'https://github.com/curl/curl',
    language: 'C',
    difficulty: 'intermediate',
    auditFocus: ['Security', 'Performance', 'API design', 'Testing', 'Documentation'],
    why: 'cURL is critical infrastructure. If you learn to audit it, you\'ve mastered auditing tools that affect the entire internet.',
    gettingStarted: [
      'Clone curl/curl',
      'Read the SECURITY.md file carefully',
      'Build from source: ./configure && make',
      'Run the test suite: make test',
      'Examine the src/ directory structure'
    ],
    story: 'Daniel Stenberg created cURL in 1997 to transfer files over the internet. Today, it\'s used in countless applications, from your phone to major web services. When you audit cURL, you\'re looking at code that\'s shaped how the internet works.',
    codebaseSize: '~2 MB (source)',
    community: 'Extremely active and well-maintained'
  },
  {
    id: 'git',
    name: 'Git',
    description: 'The version control system that changed software development forever. Understanding Git\'s internals teaches you about elegant software design.',
    url: 'https://github.com/git/git',
    language: 'C, Shell',
    difficulty: 'advanced',
    auditFocus: ['Algorithm complexity', 'Performance', 'Compatibility', 'Data structures', 'Security'],
    why: 'Git is one of the most well-designed pieces of software ever created. Auditing it teaches you how professional developers think.',
    gettingStarted: [
      'Clone git/git',
      'Read the README and INSTALL files',
      'Build from source: make',
      'Run the test suite: make test',
      'Start with git.c to understand the core'
    ],
    story: 'Linus Torvalds created Git in 2005 because he needed a better version control system for Linux. In just 15 years, it became the standard for all software development. When you read Git\'s code, you\'re reading code written by someone who fundamentally changed how software is made.',
    codebaseSize: '~5 MB',
    community: 'Professional, meritocratic'
  },
  {
    id: 'python',
    name: 'Python',
    description: 'One of the most popular programming languages. Python\'s code is intentionally readable, making it perfect for learning.',
    url: 'https://github.com/python/cpython',
    language: 'C, Python',
    difficulty: 'advanced',
    auditFocus: ['Interpreter design', 'Memory management', 'API stability', 'Testing'],
    why: 'If you can understand Python\'s core implementation, you understand how programming languages work at their foundation.',
    gettingStarted: [
      'Clone python/cpython',
      'Configure: ./configure',
      'Build: make',
      'Run the test suite: make test',
      'Start with Objects/object.c'
    ],
    story: 'Guido van Rossum started Python as a hobby in 1989. His design philosophy—that code readability matters—has shaped an entire generation of developers. Python powers everything from machine learning to web applications. When you audit Python, you\'re auditing a tool that changed education.',
    codebaseSize: '~50 MB',
    community: 'Large, diverse, extremely organized'
  },
  {
    id: 'nginx',
    name: 'Nginx',
    description: 'A high-performance web server and reverse proxy. Nginx powers a significant portion of the internet\'s infrastructure.',
    url: 'https://github.com/nginx/nginx',
    language: 'C',
    difficulty: 'advanced',
    auditFocus: ['Performance', 'Concurrency', 'Networking', 'Configuration parsing', 'Security'],
    why: 'Nginx is used by millions of websites. Understanding how it handles thousands of concurrent connections teaches you advanced systems programming.',
    gettingStarted: [
      'Clone nginx/nginx',
      'Read the README',
      'Build: ./auto/configure && make',
      'Review src/ directory structure',
      'Study event handling in src/core/ngx_connection.c'
    ],
    story: 'Igor Sysoev created Nginx in 2002 because Apache couldn\'t handle the C10K problem—supporting 10,000 concurrent connections. His solution was so elegant that Nginx eventually powered more of the internet than Apache. This is engineering at its finest.',
    codebaseSize: '~2 MB',
    community: 'Professional, focused on stability'
  },
  {
    id: 'react',
    name: 'React',
    description: 'A JavaScript library that transformed web development. React shows how to build complex applications with simple components.',
    url: 'https://github.com/facebook/react',
    language: 'JavaScript',
    difficulty: 'advanced',
    auditFocus: ['State management', 'Rendering optimization', 'API design', 'Performance', 'Testing'],
    why: 'React\'s clever architecture influenced every modern framework. Auditing it teaches you how to think about large frontend systems.',
    gettingStarted: [
      'Clone facebook/react',
      'Read the README and CONTRIBUTING.md',
      'Install dependencies: npm install',
      'Build: npm run build',
      'Explore the packages/ directory'
    ],
    story: 'Facebook engineers created React to solve their own problems building large applications. They decided to open-source it, and it became one of the most influential JavaScript projects ever. What started as an internal tool shaped how millions of developers build web applications.',
    codebaseSize: '~100 MB (with node_modules)',
    community: 'Enormous, very active'
  },
  {
    id: 'sqlite',
    name: 'SQLite',
    description: 'The most widely deployed SQL database in the world. SQLite is a masterclass in C programming and database design.',
    url: 'https://github.com/sqlite/sqlite',
    language: 'C',
    difficulty: 'advanced',
    auditFocus: ['Database design', 'SQL parsing', 'Testing methodology', 'Code quality', 'Reliability'],
    why: 'SQLite is used in billions of devices. Learning to audit it teaches you about correctness and reliability at scale.',
    gettingStarted: [
      'Clone sqlite/sqlite',
      'Read the README',
      'Build: ./configure && make',
      'Run tests: make test',
      'Start with parse.y for SQL parsing'
    ],
    story: 'D. Richard Hipp created SQLite in 2000 for Acme Laboratory. He designed it with a simple philosophy: it should work correctly, be small, and be reliable. Today, SQLite is used more than any other database. When you audit SQLite, you\'re auditing one of the most successful software projects in history.',
    codebaseSize: '~15 MB',
    community: 'Highly professional, meticulous about quality'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    description: 'The container orchestration platform that powers modern cloud infrastructure. Understanding Kubernetes teaches advanced systems design.',
    url: 'https://github.com/kubernetes/kubernetes',
    language: 'Go',
    difficulty: 'advanced',
    auditFocus: ['Distributed systems', 'APIs', 'Scalability', 'Networking', 'Security'],
    why: 'Kubernetes is how modern applications are deployed. It represents state-of-the-art thinking about distributed systems.',
    gettingStarted: [
      'Clone kubernetes/kubernetes',
      'Read the README and CONTRIBUTING.md',
      'Build: make',
      'Run tests: make test',
      'Start with pkg/kubelet for core scheduling logic'
    ],
    story: 'Google released Kubernetes in 2014, based on their internal Borg system. Borg had been managing billions of containers for over a decade. Kubernetes brought that experience to the world, and it revolutionized how companies deploy applications.',
    codebaseSize: '~200 MB',
    community: 'Massive, extremely well-organized'
  }
];

export function getProject(id: string): AuditProject | undefined {
  return projects.find(p => p.id === id);
}

export function getProjectsByDifficulty(difficulty: string): AuditProject[] {
  return projects.filter(p => p.difficulty === difficulty);
}

export function getAllProjects(): AuditProject[] {
  return projects;
}
