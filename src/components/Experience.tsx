import { motion } from 'framer-motion'

interface Entry {
  role: string
  org: string
  period: string
  description: string
}

const ENTRIES: Entry[] = [
  {
    role: 'Associate Software Engineer',
    org: 'NathCorp Pvt. Ltd. — Ranchi, India',
    period: 'Present',
    description:
      'Contributing to software development projects with expertise in cloud computing, networking, and enterprise solutions.',
  },
  {
    role: 'SAP MM Module Training',
    org: 'NathCorp Pvt. Ltd.',
    period: 'Training',
    description:
      'Master data, procure-to-pay, inventory management, contract management, and invoice verification.',
  },
  {
    role: 'Software Trainee',
    org: 'NathCorp Pvt. Ltd. — Ranchi, India',
    period: 'Trainee',
    description:
      'Hands-on software training building foundational skills in IT professional services.',
  },
]

const CERTS = ['Azure Fundamentals (AZ-900)', 'Azure Virtual Desktop Specialty', 'CCNA', 'MCA & BCA']

export default function Experience() {
  return (
    <section id="experience" className="bg-black py-24 sm:py-32 md:py-44 px-5 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto">
        <p className="text-[11px] sm:text-xs uppercase tracking-[0.3em] text-[#E1E0CC]/50">
          (03) — Experience
        </p>
        <h2 className="mt-6 mb-12 sm:mb-16 text-4xl sm:text-6xl md:text-7xl font-extrabold uppercase tracking-tight">
          The path<span className="font-serif-italic font-normal lowercase"> so far.</span>
        </h2>

        <div>
          {ENTRIES.map((entry, i) => (
            <motion.div
              key={entry.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-12 gap-y-2 md:gap-x-8 border-t border-[#E1E0CC]/15 py-8 sm:py-10"
            >
              <span className="col-span-12 md:col-span-2 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#E1E0CC]/40 pt-1">
                {entry.period}
              </span>
              <div className="col-span-12 md:col-span-5">
                <h3 className="text-xl sm:text-2xl md:text-3xl">{entry.role}</h3>
                <p className="mt-1 text-xs sm:text-sm text-[#E1E0CC]/50">{entry.org}</p>
              </div>
              <p className="col-span-12 md:col-span-5 text-sm sm:text-base text-[#E1E0CC]/60 leading-relaxed">
                {entry.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 flex flex-wrap gap-3"
        >
          {CERTS.map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-[#E1E0CC]/25 px-4 sm:px-5 py-2 text-[11px] sm:text-xs uppercase tracking-[0.18em] text-[#E1E0CC]/70 hover:bg-[#E1E0CC] hover:text-black transition-colors duration-300"
            >
              {cert}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
