import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, FileText, Mail, MapPin, ArrowUpRight, Code2, BarChart3, Brain } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bontewar Jyothi — Portfolio" },
      { name: "description", content: "Personal portfolio of Bontewar Jyothi — projects, skills, resume, and links to GitHub, LinkedIn, and Kaggle." },
      { property: "og:title", content: "Bontewar Jyothi — Portfolio" },
      { property: "og:description", content: "Personal portfolio of Bontewar Jyothi — projects, skills, resume, and links." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Portfolio,
});

const LINKEDIN_URL = "https://www.linkedin.com/in/jyothi-bontewar-730a83439";
const GITHUB_URL = "https://github.com/YOUR_USERNAME"; // replace with your GitHub username
const KAGGLE_URL = "https://www.kaggle.com/YOUR_USERNAME"; // replace with your Kaggle username
const RESUME_URL = "#"; // replace with a link to your resume PDF

const projects = [
  {
    title: "Data Analysis Dashboard",
    description:
      "An interactive dashboard for exploring datasets, visualizing trends, and surfacing insights with charts and filters.",
    tags: ["Python", "Pandas", "Visualization"],
    icon: BarChart3,
  },
  {
    title: "Machine Learning Model",
    description:
      "A machine learning project covering data cleaning, feature engineering, model training, and evaluation on a real-world dataset.",
    tags: ["Machine Learning", "scikit-learn", "Kaggle"],
    icon: Brain,
  },
  {
    title: "Web Development Project",
    description:
      "A responsive web application built with modern tooling, focusing on clean UI, accessibility, and performance.",
    tags: ["React", "TypeScript", "Tailwind"],
    icon: Code2,
  },
];

const skills = [
  "Python", "SQL", "Machine Learning", "Data Analysis", "Pandas", "NumPy",
  "React", "TypeScript", "Git & GitHub", "Problem Solving",
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#home" className="text-lg font-bold tracking-tight">BJ</a>
          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#projects" className="text-muted-foreground transition-colors hover:text-foreground">Projects</a>
            <a href="#skills" className="text-muted-foreground transition-colors hover:text-foreground">Skills</a>
            <a href="#contact" className="text-muted-foreground transition-colors hover:text-foreground">Contact</a>
            <a
              href={RESUME_URL}
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Resume
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Hello, I'm</p>
        <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl">Bontewar Jyothi</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Aspiring data and software professional passionate about machine learning, data analysis,
          and building useful things on the web. Welcome to my portfolio.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={KAGGLE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <BarChart3 className="h-4 w-4" /> Kaggle
          </a>
          <a
            href={RESUME_URL}
            className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
          >
            <FileText className="h-4 w-4" /> Resume
          </a>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
          <p className="mt-2 text-muted-foreground">A selection of things I've built and worked on.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <project.icon className="h-8 w-8 text-muted-foreground" />
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Skills</h2>
        <div className="mt-8 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            I'm open to opportunities and collaborations. Reach out through any of these channels.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href={KAGGLE_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <BarChart3 className="h-4 w-4" /> Kaggle
            </a>
            <a
              href="mailto:jyothi@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground sm:flex-row">
          <p>© 2026 Bontewar Jyothi. All rights reserved.</p>
          <p className="inline-flex items-center gap-1">
            <MapPin className="h-4 w-4" /> India
          </p>
        </div>
      </footer>
    </div>
  );
}
