import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

interface Project {
  number: string
  title: string
  description: string
  tags: string[]
  link: string
}

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'Meeting Time Tracker',
    description: 'AI matches MS Teams meetings to tasks and writes time entries automatically.',
    tags: ['Next.js', 'React', 'AI Matching', 'MS Teams'],
    link: 'https://meeting-time-tracker-app.vercel.app/',
  },
  {
    number: '02',
    title: 'Local NotebookLM',
    description: 'Privacy-first RAG document chat — everything runs on your own machine.',
    tags: ['Python', 'FastAPI', 'ChromaDB', 'Ollama'],
    link: 'https://local-notebook-lm-app.vercel.app/',
  },
  {
    number: '03',
    title: 'CarbonStack',
    description: 'Maps AWS, GCP & Azure services to CO₂ emissions to cut cloud carbon.',
    tags: ['Next.js', 'Tailwind CSS', 'Cloud APIs'],
    link: 'https://carbon-stack-cloud-carbon-intellige.vercel.app/',
  },
  {
    number: '04',
    title: 'DebtMap',
    description: 'Quantifies technical debt in financial terms and turns code risk into revenue risk.',
    tags: ['Next.js', 'TypeScript', 'Jira/Linear'],
    link: 'https://tech-debt-marketplace.vercel.app/',
  },
]

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLAnchorElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.a
      ref={ref}
      href={project.link}
      target="_blank"
      rel="noopener"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group relative block border-t border-[#E1E0CC]/15 last:border-b overflow-hidden"
    >
      {/* hover fill */}
      <div className="absolute inset-0 bg-[#E1E0CC] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]" />

      <div className="relative flex flex-col md:flex-row md:items-center gap-3 md:gap-8 px-1 sm:px-2 py-8 sm:py-10 md:py-12 transition-colors duration-300 group-hover:text-black">
        <span className="text-[11px] sm:text-xs tracking-[0.25em] text-[#E1E0CC]/40 group-hover:text-black/50 transition-colors duration-300 md:w-12 shrink-0">
          /{project.number}
        </span>
        <h3 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight leading-none md:flex-1 group-hover:translate-x-3 transition-transform duration-500">
          {project.title}
        </h3>
        <div className="md:w-72 shrink-0">
          <p className="text-xs sm:text-sm text-[#E1E0CC]/60 group-hover:text-black/70 transition-colors duration-300">
            {project.description}
          </p>
          <p className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.18em] text-[#E1E0CC]/40 group-hover:text-black/50 transition-colors duration-300">
            {project.tags.join(' · ')}
          </p>
        </div>
        <ArrowUpRight className="hidden md:block w-8 h-8 shrink-0 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500" />
      </div>
    </motion.a>
  )
}

export default function Work() {
  return (
    <section id="projects" className="relative bg-black py-24 sm:py-32 md:py-44 px-5 sm:px-8 md:px-12">
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-12 sm:mb-16">
          <div>
            <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E1E0CC]/50">
              (02) — Selected work
            </p>
            <h2 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight">
              Projects<span className="font-serif-italic font-normal lowercase">.</span>
            </h2>
          </div>
          <p className="hidden md:block text-xs text-[#E1E0CC]/50 uppercase tracking-[0.2em]">
            2024 — 2026
          </p>
        </div>

        <div>
          {PROJECTS.map((project, i) => (
            <ProjectRow key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
