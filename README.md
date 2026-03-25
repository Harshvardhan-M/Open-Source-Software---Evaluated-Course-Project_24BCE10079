Name: Harshvardhan Santosh Magar
Reg. No.: 24BCE10079

# AuditHub: Open Source Audit Learning Platform

> A warm, humanized platform for learning to audit open-source software like a professional developer.

## Welcome 👋

Getting started with open-source can feel intimidating. You might be asking: *Where do I even begin? What am I looking for? Why does this matter?* 

AuditHub answers these questions and more. This platform is designed like a mentor—one who believes in you, celebrates your wins, and explains not just *how*, but *why*.

## What You Get

### 📚 Six Learning Modules
Progressive lessons that build real skills, woven with stories from actual open-source creators:
- **Module 0**: Welcome to Open Source (culture, philosophy, why it matters)
- **Module 1**: Setting Up Your Environment (tools, Git, getting comfortable)
- **Module 2**: Reading & Understanding Code (core auditing skills)
- **Module 3**: Building & Testing (hands-on with real projects)
- **Module 4**: Security & Code Quality (advanced auditing techniques)
- **Module 5**: Writing Audit Reports (communicating your findings)

### 🛠️ Interactive Script Workbench
Six production-ready shell scripts you can learn from, modify, and use:
- File and directory analysis
- Git history statistics
- Dependency mapping
- Code metrics calculation
- Test automation
- License compliance checking

### 🚀 Real Projects to Audit
Eight open-source projects of increasing complexity:
- **Beginner**: Hello World, Awesome Lists, Draw.io
- **Intermediate**: Gifsicle, Husky, Framer Motion
- **Advanced**: Tailwind CSS, Kubernetes

Each includes context about what you'll learn and why the project matters.

### 🎉 Humanized Learning Experience
- Conversational language that feels like mentorship
- Progress tracking as a journey, not a checklist
- Celebration moments when you achieve milestones
- Helpful hints that appear when you need them
- Warm, accessible design that encourages exploration

## Getting Started

### Quick Start

1. **Clone or download this project**
   ```bash
   git clone <repository-url>
   cd vityarthi
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Run the development server**
   ```bash
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

5. **Start learning!**
   Click "Get Started" and follow the "Getting Started" guide

### First Time Here?

1. Start with the **Landing Page** to understand the "why" behind open-source auditing
2. Go to **Getting Started** for a structured roadmap
3. Work through the **Modules** in order (they build on each other)
4. Use the **Script Workbench** to practice real auditing techniques
5. Explore **Real Projects** once you feel confident
6. Track your progress in the **Dashboard**

## Project Structure

```
vityarthi/
├── app/
│   ├── page.tsx                 # Landing page
│   ├── getting-started/         # Onboarding guide
│   ├── dashboard/               # Progress tracking
│   ├── modules/                 # Learning modules
│   │   ├── page.tsx            # Modules list
│   │   └── [id]/page.tsx       # Individual module
│   ├── workbench/              # Script editor
│   ├── projects/               # Real OSS projects
│   └── layout.tsx              # Root layout
│
├── components/
│   ├── hints-provider.tsx       # Hint system
│   ├── celebration-toast.tsx    # Celebration notifications
│   └── ui/                      # shadcn/ui components
│
├── lib/
│   ├── modules-data.ts         # Learning module content
│   ├── scripts-data.ts         # Shell scripts
│   └── projects-data.ts        # Real OSS projects
│
├── app/globals.css             # Design system & tokens
├── package.json                # Dependencies
└── README.md                   # This file
```

## Core Features Explained

### 📖 Learning Modules
Each module includes:
- **Introduction**: Context and "why this matters"
- **Core Concepts**: Explained with real examples
- **Key Takeaways**: What you should remember
- **Challenges**: Practical exercises
- **Stories**: Real anecdotes from open-source creators
- **Completion**: Mark your progress and celebrate!

### 🎯 Getting Started Guide
A structured roadmap that shows:
- What to do first (with no "prerequisites" anxiety)
- Step-by-step progression
- Checkpoints to celebrate
- Tips for each stage
- Links to modules and projects

### 📊 Dashboard
Your personal hub showing:
- Modules completed (with visual progress)
- Total time spent learning
- Projects explored
- Scripts practiced
- Achievement milestones

### 💡 Hint System
Context-aware suggestions that:
- Appear randomly as you work
- Offer practical tips
- Explain concepts in simple language
- Encourage without spoiling

### 🎊 Celebration System
Moment of joy when you:
- Complete a module
- Finish your first script
- Explore a new project
- Reach milestone achievements

Each celebration uses encouraging, genuine language (not corporate fluff).

## Design Philosophy

AuditHub is built on these core beliefs:

1. **Humanized Learning**: Language should feel like mentorship, not textbooks
2. **Accessible**: Complex topics broken into digestible pieces
3. **Encouraging**: Celebrate effort and progress, not just perfection
4. **Real-World**: Use actual projects and stories
5. **Respectful**: Honor the learner's time and effort
6. **Responsive**: Works beautifully on phones, tablets, and desktops

## Technology Stack

- **Framework**: Next.js 16 with App Router
- **React**: React 19 with hooks
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui
- **Code Editor**: Monaco Editor
- **State**: React hooks + localStorage
- **Deployment**: Vercel-ready

## Customization

### Add Your Own Modules
Edit `lib/modules-data.ts`:
```typescript
{
  id: 6,
  title: "Your Custom Module",
  description: "What learners will discover",
  story: "A real story from the open-source world",
  sections: [
    {
      title: "Section Title",
      content: "Your educational content",
      examples: ["Example 1", "Example 2"]
    }
  ]
}
```

### Add More Projects
Edit `lib/projects-data.ts` to include additional open-source projects with their stories and learning outcomes.

### Adjust the Color Scheme
Edit `app/globals.css` to change the warm, earthy palette to match your preference while keeping the humanized feel.

## Development Commands

```bash
# Development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Lint code
pnpm lint
```

## Deployment

AuditHub is built for Vercel and deploys seamlessly:

1. Connect your repository to Vercel
2. Deploy with one click
3. Share your learning platform with the world

Alternatively, you can deploy to any Node.js hosting service that supports Next.js.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Found an issue? Want to improve the content? We'd love your help!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please maintain the humanized tone and accessibility standards when contributing.

## Troubleshooting

### Scripts Not Running?
Make sure you have Node.js 18+ and bash available on your system.

### Styles Look Off?
Clear your browser cache and rebuild:
```bash
pnpm clean
pnpm install
pnpm dev
```

### Hints Not Appearing?
Check that localStorage is enabled in your browser. AuditHub uses it to track progress.

## Future Roadmap

- [ ] Video walkthroughs of real auditing
- [ ] Community audit showcases
- [ ] Peer review system
- [ ] Gamification & badges
- [ ] Integration with GitHub
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Live coding sessions

## License

MIT License - You're free to use, modify, and distribute this platform.

## Acknowledgments

- Built with love for learners
- Inspired by real open-source communities
- Stories from Linus Torvalds, Richard Stallman, and many other OSS pioneers
- Special thanks to VIT University for believing in educational innovation

---

## Get Started Today

1. Install dependencies: `pnpm install`
2. Run the dev server: `pnpm dev`
3. Visit `http://localhost:3000`
4. Click "Get Started" and begin your journey

**Remember: Every expert was once a beginner. You've got this.** 💚

---

**Questions? Feedback? Found a bug?**  
We're here to support your learning journey. Open an issue or reach out—your experience matters to us.

**AuditHub**: *Where learning to audit open-source software feels less like a task and more like a discovery.*
