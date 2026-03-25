export interface Module {
  id: number;
  title: string;
  description: string;
  intro: string;
  objectives: string[];
  sections: Section[];
  story: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
}

export interface Section {
  id: string;
  title: string;
  content: string;
  codeExample?: string;
  tips?: string[];
}

export const modules: Module[] = [
  {
    id: 0,
    title: 'Welcome to Open Source',
    description: 'Understand the philosophy and culture behind open-source software',
    difficulty: 'beginner',
    estimatedTime: 45,
    intro: 'Before we dive into code, let\'s talk about why open source matters. You\'re about to join millions of developers worldwide who contribute to software that powers the world.',
    story: 'In 1991, Linus Torvalds was a student in Finland who wanted to understand how operating systems work. He didn\'t have access to expensive mainframes, so he started writing his own kernel as a hobby. Today, Linux powers everything from your phone to the servers running the internet. That\'s the power of open source—one person\'s curiosity can change the world.',
    objectives: [
      'Understand the philosophy of open source',
      'Learn about different open source licenses',
      'Discover why developers contribute',
      'Get comfortable with GitHub and version control'
    ],
    sections: [
      {
        id: 'intro',
        title: 'What is Open Source?',
        content: 'Open source software is code that anyone can see, modify, and distribute. It\'s built on the principle of transparency and collaboration. Unlike proprietary software where a company controls the source code, open source lets the community guide development.\n\nThis might sound radical, but it\'s actually how the most critical software in the world is built. Linux, Apache, Firefox, Python—all open source. When you use a web browser or send an email, open-source code is almost certainly involved.',
        tips: [
          'Open source isn\'t just about free software—it\'s about freedom',
          'The "open" part means the code is visible; the "source" part means you get the actual code, not just the compiled binary'
        ]
      },
      {
        id: 'licenses',
        title: 'Understanding Licenses',
        content: 'Every open-source project has a license that tells you what you can and can\'t do with the code. Here are the most common ones:\n\n**MIT License**: Super permissive. You can do almost anything with it, including use it in proprietary software.\n\n**GPL (GNU General Public License)**: Copyleft. If you use GPL code, any code you create with it must also be open source.\n\n**Apache 2.0**: Permissive, but includes explicit patent rights.\n\nThe license matters. Always read it before using someone\'s code.',
        tips: [
          'Licenses are about respect and legal clarity',
          'Many projects use the license that best matches their philosophy'
        ]
      },
      {
        id: 'why',
        title: 'Why Do People Contribute?',
        content: 'You might think contributors are just doing it for free. But that\'s missing the point entirely.\n\nDevelopers contribute to open source because:\n- They use the software and want to improve it\n- They want to learn and grow their skills\n- They\'re building their reputation and portfolio\n- They believe in the mission\n- It\'s genuinely fun\n\nWhen you maintain an open-source project, you\'re becoming part of a global community. You get feedback from the smartest people in your field. You solve problems that matter. That\'s powerful.',
      }
    ]
  },
  {
    id: 1,
    title: 'Setting Up Your Environment',
    description: 'Get your terminal, Git, and tools ready for auditing',
    difficulty: 'beginner',
    estimatedTime: 30,
    intro: 'Every journey starts with the right tools. Before we audit our first project, let\'s make sure your development environment is solid.',
    story: 'Richard Stallman started the free software movement in the 1980s because he believed software should be free (as in freedom). He wrote the GNU Compiler, created Emacs, and championed the GPL. His philosophy was simple: software freedom is as important as free speech. Today, that philosophy has created an ecosystem where developers can work together across the entire world.',
    objectives: [
      'Install and configure Git',
      'Understand the command line',
      'Clone your first repository',
      'Navigate a project structure'
    ],
    sections: [
      {
        id: 'git-setup',
        title: 'Installing and Configuring Git',
        content: 'Git is the version control system that powers most open-source projects. If you\'re serious about working with code, Git is non-negotiable.\n\nAfter installing Git, configure it with your information. This is how the world will know you when you contribute:',
        codeExample: 'git config --global user.name "Your Name"\ngit config --global user.email "your.email@example.com"',
        tips: [
          'Your commit message will be the only thing people see—make it clear and helpful',
          'Git has a learning curve, but it\'s worth it'
        ]
      },
      {
        id: 'cli',
        title: 'The Command Line',
        content: 'The command line (terminal) is where real developers work. It might look intimidating at first, but it\'s actually more powerful and faster than clicking around GUIs once you get used to it.\n\nHere are commands you\'ll use constantly:\n- `cd` - Change directory\n- `ls` or `dir` - List files\n- `pwd` - Print working directory\n- `mkdir` - Make directory\n- `cat` - View file contents\n\nDon\'t worry about memorizing everything. You\'ll learn by doing.',
        tips: [
          'Tab completion is your friend—start typing and press Tab',
          'Use `--help` to learn about any command'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Reading and Understanding Code',
    description: 'Learn how to read code like a professional developer',
    difficulty: 'intermediate',
    estimatedTime: 60,
    intro: 'This is where the real learning happens. Most developers spend way more time reading code than writing it. Let\'s get good at it.',
    story: 'When Guido van Rossum created Python in 1989, he had a specific philosophy: code is read much more often than it\'s written. This is why Python emphasizes readability. When you learn to read code deeply, you\'re not just understanding what it does—you\'re understanding how experienced developers think.',
    objectives: [
      'Understand code structure and architecture',
      'Read and interpret documentation',
      'Follow the flow of execution',
      'Identify design patterns'
    ],
    sections: [
      {
        id: 'structure',
        title: 'Project Structure',
        content: 'Most large projects follow similar patterns. Understanding the structure helps you navigate any codebase:\n\n- `src/` or `lib/` - The actual source code\n- `tests/` - Automated tests\n- `docs/` or `README.md` - Documentation\n- `examples/` - Example code\n- `build/` or `dist/` - Compiled output\n\nWhen you first clone a project, look at the README. If it\'s well-maintained, it\'ll tell you exactly what you need to know to get started.'
      },
      {
        id: 'reading',
        title: 'Reading Code Like a Book',
        content: 'Code tells a story. Functions are chapters. Variables are characters. When you read code, ask yourself:\n\n1. What is this function supposed to do?\n2. What are the inputs and outputs?\n3. What are the edge cases?\n4. How does it relate to the bigger picture?\n\nStart at the main entry point and trace through the code. Use print statements (or logging) to follow the flow. Don\'t feel bad asking questions—every developer does.'
      }
    ]
  },
  {
    id: 3,
    title: 'Building and Testing',
    description: 'Compile projects and run their test suites',
    difficulty: 'intermediate',
    estimatedTime: 45,
    intro: 'Before you can audit a project, you need to get it running. Let\'s learn how to build and test.',
    story: 'When you compile and test a project, you\'re doing what professional developers do every single day. It\'s not glamorous, but it\'s essential. Proper testing catches bugs before they reach users.',
    objectives: [
      'Build projects from source',
      'Run test suites',
      'Interpret build output',
      'Debug build failures'
    ],
    sections: [
      {
        id: 'building',
        title: 'Building from Source',
        content: 'Most projects have build instructions in the README. Common build systems include:\n\n- `make` - Used by C/C++ projects\n- `npm` or `yarn` - Used by JavaScript projects\n- `cargo` - Used by Rust projects\n- `pip` - Used by Python projects\n\nAlways check the README first. It will tell you exactly what you need to install and run.',
        codeExample: '# For a typical JavaScript project\nnpm install\nnpm run build\n\n# For a C project\nmake\nmake install'
      },
      {
        id: 'testing',
        title: 'Running Tests',
        content: 'Tests are code that verify other code works correctly. When you run the test suite, you\'re checking that the project actually works as advertised.\n\nMost projects include a command to run tests. Look for:\n- `npm test`\n- `make test`\n- `pytest`\n- `cargo test`\n\nIf tests pass, the project is in a working state. If they fail, something is broken.'
      }
    ]
  },
  {
    id: 4,
    title: 'Security and Code Quality',
    description: 'Audit code for security vulnerabilities and quality issues',
    difficulty: 'advanced',
    estimatedTime: 60,
    intro: 'Now we get to the real auditing. You\'re going to look for problems that could affect security or reliability.',
    story: 'Every year, billions of devices are affected by security vulnerabilities. Many of them could have been caught during code review if someone had just looked carefully. When you audit code for security, you\'re protecting users.',
    objectives: [
      'Identify common security vulnerabilities',
      'Review code for quality issues',
      'Use security scanning tools',
      'Write a security report'
    ],
    sections: [
      {
        id: 'security-basics',
        title: 'Security Basics',
        content: 'Security vulnerabilities fall into categories:\n\n**SQL Injection**: Passing user input directly into database queries\n**Cross-Site Scripting (XSS)**: Putting user input directly into HTML\n**Buffer Overflow**: Writing too much data into fixed-size memory\n**Insecure Cryptography**: Using weak encryption or hashing\n\nWhen you read code, think like an attacker. "What if a user provides malicious input? What if they try to break this?"'
      },
      {
        id: 'code-quality',
        title: 'Code Quality Checks',
        content: 'Beyond security, look for code quality:\n\n- Is the code readable?\n- Are there obvious bugs?\n- Are error cases handled?\n- Are there memory leaks?\n- Is performance acceptable?\n\nTools like linters, static analysis tools, and code formatters help automate these checks, but your human judgment matters most.'
      }
    ]
  },
  {
    id: 5,
    title: 'Writing Your Audit Report',
    description: 'Document your findings and share your insights',
    difficulty: 'advanced',
    estimatedTime: 90,
    intro: 'You\'ve done the work. Now let\'s communicate what you\'ve learned in a way that helps others.',
    story: 'Great open-source maintainers are usually people who can clearly communicate. When you write your audit report, you\'re joining that tradition. You\'re helping future developers understand the codebase.',
    objectives: [
      'Structure a professional audit report',
      'Document your methodology',
      'Present findings clearly',
      'Provide actionable recommendations'
    ],
    sections: [
      {
        id: 'report-structure',
        title: 'Report Structure',
        content: 'A good audit report has:\n\n1. **Executive Summary** - One paragraph overview\n2. **Methodology** - How you conducted the audit\n3. **Findings** - What you discovered, organized by category\n4. **Recommendations** - What should be improved\n5. **Conclusion** - Overall assessment\n\nBe honest. If the code is great, say so. If it needs work, be specific about how to improve it.'
      },
      {
        id: 'presentation',
        title: 'Presenting Your Findings',
        content: 'When you write your report:\n\n- Be specific. "The code is bad" is not useful. "SQL injection vulnerability in line 42" is.\n- Be respectful. Remember, someone spent time on this code.\n- Provide solutions. If you found a problem, suggest how to fix it.\n- Give credit. Thank the maintainers for their work.\n\nYour job isn\'t to be a critic. It\'s to help make the software better.'
      }
    ]
  }
];

export function getModule(id: number): Module | undefined {
  return modules.find(m => m.id === id);
}

export function getAllModules(): Module[] {
  return modules;
}
