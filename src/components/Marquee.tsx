const ITEMS = [
  'Microsoft Azure',
  'Networking',
  'SAP MM',
  'Next.js',
  'React',
  'TypeScript',
  'AI Tools',
  'CCNA',
  'Azure Virtual Desktop',
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]
  return (
    <div className="relative py-10 sm:py-14 border-y border-[#E1E0CC]/10 overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap w-max">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center text-3xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-[#E1E0CC]/80"
          >
            <span className="px-6 sm:px-10">{item}</span>
            <span className="font-serif-italic text-2xl sm:text-4xl text-[#E1E0CC]/30">✳</span>
          </span>
        ))}
      </div>
    </div>
  )
}
