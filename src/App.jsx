import { useState } from 'react'

const programmes = [
  {
    title: 'Content Creation',
    description: 'Turn ideas into stories, campaigns and content that people choose to engage with.',
    meta: 'Level 3',
    color: 'from-[#efecff] to-[#ddd7ff]',
    accent: 'bg-violet',
    number: '01',
  },
  {
    title: 'Digital Marketing',
    description: 'Build practical skills across insight, social, search, email and campaign delivery.',
    meta: 'Level 3',
    color: 'from-[#e5fafa] to-[#c8f1f3]',
    accent: 'bg-[#1598a4]',
    number: '02',
  },
  {
    title: 'Production Assistant',
    description: 'Learn how creative productions move from a brief to a polished final delivery.',
    meta: 'Level 3',
    color: 'from-[#fff0ec] to-[#ffd8cf]',
    accent: 'bg-coral',
    number: '03',
  },
  {
    title: 'Advertising & Media',
    description: 'Understand audiences, media channels and how great creative work gets made.',
    meta: 'Level 3',
    color: 'from-[#f8f1d9] to-[#f4dda0]',
    accent: 'bg-[#bb7f13]',
    number: '04',
  },
  {
    title: 'Data & Digital Skills',
    description: 'Use data with confidence and strengthen the digital capabilities every team needs.',
    meta: 'Skills',
    color: 'from-[#e8eff7] to-[#cad9ea]',
    accent: 'bg-[#335b85]',
    number: '05',
  },
]

const services = [
  {
    title: 'Apprenticeships',
    text: 'Career-shaping programmes that combine structured learning with meaningful work.',
    icon: 'spark',
    tone: 'bg-[#efecff]',
  },
  {
    title: 'Digital & Creative Training',
    text: 'Practical, current training designed around the skills modern creative teams rely on.',
    icon: 'cursor',
    tone: 'bg-[#e3f7f7]',
  },
  {
    title: 'Employer Support',
    text: 'Clear guidance from recruitment and funding through to progress reviews and completion.',
    icon: 'people',
    tone: 'bg-[#fff0ec]',
  },
  {
    title: 'Learner Development',
    text: 'One-to-one coaching that builds confidence, professional habits and long-term ambition.',
    icon: 'rise',
    tone: 'bg-[#f6efd9]',
  },
]

const benefits = [
  'Industry-focused delivery',
  'Supportive one-to-one coaching',
  'Real workplace projects',
  'Creative sector expertise',
  'Progression beyond completion',
]

function Icon({ name, className = 'h-6 w-6' }) {
  const paths = {
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    spark: <path d="m12 3 1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3Zm6 11 .8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14Z" />,
    cursor: <path d="m5 4 13 8-6 1-3 6L5 4Zm7 9 4 4" />,
    people: <path d="M16 18v-1.5c0-1.9-1.8-3.5-4-3.5s-4 1.6-4 3.5V18m4-8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-4.5a2.5 2.5 0 0 1 0 5m2.5 7.5v-1.2a3.2 3.2 0 0 0-2.5-3.1" />,
    rise: <path d="M4 17 10 11l4 4 6-8m-5 0h5v5" />,
    check: <path d="m5 12 4 4L19 6" />,
    menu: <path d="M4 8h16M4 16h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}

function CTAButton({ children, href, variant = 'primary', className = '' }) {
  const styles =
    variant === 'primary'
      ? 'bg-ink text-white hover:bg-violet hover:shadow-[0_12px_30px_rgba(115,87,255,0.28)]'
      : variant === 'light'
        ? 'bg-white text-ink hover:bg-[#f2efff] hover:text-violet'
        : 'border border-ink/15 bg-white/60 text-ink hover:border-ink/30 hover:bg-white'

  return (
    <a
      href={href}
      className={`pointer-events-auto group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet focus-visible:ring-offset-2 ${styles} ${className}`}
    >
      {children}
      <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

function Section({ id, eyebrow, title, intro, children, className = '', dark = false }) {
  return (
    <section id={id} className={`scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28 lg:px-12 ${className}`}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title) && (
          <div className="mb-12 grid gap-6 lg:mb-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              {eyebrow && (
                <p className={`mb-5 text-xs font-bold uppercase tracking-[0.18em] ${dark ? 'text-cyan' : 'text-violet'}`}>
                  {eyebrow}
                </p>
              )}
              <h2 className={`max-w-3xl text-balance text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl ${dark ? 'text-white' : 'text-ink'}`}>
                {title}
              </h2>
            </div>
            {intro && <p className={`max-w-2xl text-lg leading-8 lg:justify-self-end ${dark ? 'text-white/65' : 'text-ink/60'}`}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const links = [
    ['About', '#about'],
    ['What we do', '#services'],
    ['Why us', '#why'],
    ['Programmes', '#programmes'],
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 shadow-[0_10px_35px_rgba(16,24,40,0.07)] sm:px-5" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-violet">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-ink text-white">
            <span className="relative h-4 w-4">
              <span className="absolute left-0 top-0 h-2.5 w-2.5 rounded-full bg-cyan" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-violet" />
            </span>
          </span>
          <span className="text-sm font-bold tracking-[-0.02em] sm:text-base">Creative Alliance</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="text-sm font-medium text-ink/65 transition hover:text-ink">
              {label}
            </a>
          ))}
        </div>

        <a href="#contact" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-violet md:inline-flex">
          Get in touch
        </a>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? 'Close navigation' : 'Open navigation'}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </nav>

      {open && (
        <div className="glass mx-auto mt-2 max-w-7xl rounded-[1.75rem] p-4 shadow-soft md:hidden">
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)} className="block rounded-2xl px-4 py-3 font-medium transition hover:bg-white">
              {label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="mt-2 block rounded-2xl bg-ink px-4 py-3 text-center font-semibold text-white">
            Get in touch
          </a>
        </div>
      )}
    </header>
  )
}

function HeroVisual() {
  return (
    <div className="pointer-events-none relative mx-auto min-h-[430px] w-full max-w-[560px] lg:min-h-[590px]" aria-hidden="true">
      <div className="absolute left-[8%] top-[8%] h-[70%] w-[76%] rotate-[-4deg] rounded-[3rem] bg-gradient-to-br from-violet via-[#8b73ff] to-[#39229f] shadow-[0_35px_80px_rgba(90,64,210,0.3)]" />
      <div className="subtle-grid absolute right-[4%] top-[19%] h-[67%] w-[78%] rotate-[5deg] overflow-hidden rounded-[3rem] bg-[#fcfbf8] shadow-soft">
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-cyan/50 blur-2xl" />
        <div className="absolute -bottom-16 -left-10 h-60 w-60 rounded-full bg-coral/35 blur-3xl" />
      </div>
      <div className="glass absolute left-[12%] top-[22%] w-[70%] rounded-[2rem] p-5 shadow-card sm:p-7">
        <div className="mb-8 flex items-center justify-between">
          <span className="rounded-full bg-ink px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">Your next move</span>
          <div className="flex -space-x-2">
            {['bg-cyan', 'bg-coral', 'bg-violet'].map((color) => (
              <span key={color} className={`h-8 w-8 rounded-full border-2 border-white ${color}`} />
            ))}
          </div>
        </div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">Creative careers</p>
        <p className="max-w-xs text-3xl font-semibold leading-tight tracking-[-0.04em] text-ink sm:text-4xl">
          Make your ideas matter.
        </p>
        <div className="mt-8 flex items-end gap-2">
          {[38, 58, 46, 76, 92, 66].map((height, index) => (
            <span
              key={height}
              className={`w-full rounded-t-xl ${index === 4 ? 'bg-violet' : 'bg-ink/10'}`}
              style={{ height: `${height}px` }}
            />
          ))}
        </div>
      </div>
      <div className="absolute bottom-[4%] right-[3%] flex items-center gap-3 rounded-2xl bg-ink px-4 py-3 text-white shadow-soft sm:right-0">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-cyan text-ink"><Icon name="rise" className="h-5 w-5" /></span>
        <span>
          <span className="block text-[10px] uppercase tracking-wider text-white/50">Progress</span>
          <span className="text-sm font-semibold">Built into every step</span>
        </span>
      </div>
      <div className="absolute left-0 top-[9%] grid h-20 w-20 rotate-[-9deg] place-items-center rounded-[1.7rem] bg-coral shadow-card sm:h-24 sm:w-24">
        <Icon name="spark" className="h-9 w-9 text-white" />
      </div>
    </div>
  )
}

function SplineBackdrop() {
  return (
    <div className="absolute left-[7%] top-[300px] z-0 hidden h-[560px] w-[48%] overflow-hidden bg-white sm:block">
      <hana-viewer
        url="https://prod.spline.design/8t6t8usZdkt3sHIL-pEa/scene.hanacode"
        aria-label="Interactive decorative ribbon sphere"
        class="absolute left-1/2 top-1/2 block h-[820px] w-[1100px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-30"
      ></hana-viewer>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[22%] bg-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[22%] bg-white" />
    </div>
  )
}

function FeatureCard({ item, index }) {
  return (
    <article className="group rounded-[2rem] border border-ink/5 bg-white p-6 shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-soft sm:p-8">
      <div className={`mb-12 grid h-14 w-14 place-items-center rounded-2xl ${item.tone} transition duration-500 group-hover:rotate-3 group-hover:scale-105`}>
        <Icon name={item.icon} className="h-7 w-7" />
      </div>
      <span className="mb-4 block text-xs font-bold tracking-[0.16em] text-ink/30">0{index + 1}</span>
      <h3 className="mb-3 text-2xl font-semibold">{item.title}</h3>
      <p className="leading-7 text-ink/60">{item.text}</p>
    </article>
  )
}

function ProgrammeCard({ item }) {
  return (
    <article className={`group relative min-h-[360px] overflow-hidden rounded-[2.25rem] bg-gradient-to-br p-7 ${item.color} transition duration-500 hover:-translate-y-1.5 sm:p-8`}>
      <div className="relative z-10 flex h-full min-h-[300px] flex-col">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/65 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">{item.meta}</span>
          <span className="text-sm font-semibold text-ink/35">{item.number}</span>
        </div>
        <div className="mt-auto">
          <h3 className="max-w-xs text-3xl font-semibold leading-tight sm:text-4xl">{item.title}</h3>
          <p className="mt-4 max-w-sm leading-7 text-ink/60">{item.description}</p>
          <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
            Explore programme <Icon name="arrow" className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
      <div className={`absolute -right-16 top-20 h-48 w-48 rounded-full ${item.accent} opacity-10 transition duration-700 group-hover:scale-125`} />
      <div className="absolute right-8 top-24 h-16 w-16 rotate-12 rounded-2xl border border-ink/10 bg-white/30 backdrop-blur-sm transition duration-500 group-hover:rotate-[-4deg]" />
    </article>
  )
}

function App() {
  return (
    <div className="overflow-hidden">
      <Header />

      <main>
        <section id="top" className="relative isolate min-h-screen bg-white px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12">
          <SplineBackdrop />
          <div className="pointer-events-none absolute left-[-10rem] top-16 z-[2] h-96 w-96 rounded-full bg-violet/10 blur-3xl" />
          <div className="pointer-events-none absolute right-[-8rem] top-52 z-[2] h-80 w-80 rounded-full bg-cyan/20 blur-3xl" />
          <div className="pointer-events-none relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 text-xs font-semibold shadow-sm backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-coral" />
                Birmingham born. Future focused.
              </div>
              <h1 className="max-w-4xl text-balance text-[3.6rem] font-semibold leading-[0.96] sm:text-7xl lg:text-[5.7rem] xl:text-[6.35rem]">
                Build a career that feels{' '}
                <span className="bg-gradient-to-r from-violet via-[#7057e8] to-[#168f9b] bg-clip-text text-transparent">like you.</span>
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-ink/60 sm:text-xl">
                Creative Alliance helps people and businesses grow through industry-led apprenticeships, practical training and genuinely supportive coaching.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="#programmes">Explore Apprenticeships</CTAButton>
                <CTAButton href="#contact" variant="secondary">Work With Us</CTAButton>
              </div>
              <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/45">
                <span className="font-semibold text-ink">Creative</span>
                <span>Digital</span>
                <span>Marketing</span>
                <span>Content</span>
                <span>Production</span>
              </div>
            </div>
            <HeroVisual />
          </div>
        </section>

        <Section
          id="about"
          eyebrow="About Creative Alliance"
          title="Potential is everywhere. Opportunity should be too."
          intro="We connect ambitious people with the skills, confidence and real-world experience to build lasting careers, while helping employers shape the talent their teams need next."
          className="bg-white"
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <div className="rounded-[2.25rem] bg-ink p-8 text-white lg:col-span-2 lg:p-12">
              <div className="flex h-full min-h-[330px] flex-col justify-between">
                <p className="max-w-3xl text-balance text-3xl font-medium leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                  From a first step into the industry to the next big move, we make development feel clear, relevant and human.
                </p>
                <div className="mt-12 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
                  {[
                    ['Birmingham', 'Rooted in the region'],
                    ['Industry-led', 'Built around real work'],
                    ['People-first', 'Support that stays close'],
                  ].map(([title, text]) => (
                    <div key={title}>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-sm text-white/50">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative min-h-[360px] overflow-hidden rounded-[2.25rem] bg-[#e6f8f8] p-8">
              <div className="absolute -right-20 -top-12 h-64 w-64 rounded-full border-[42px] border-cyan/70" />
              <div className="absolute bottom-10 left-8 h-28 w-28 rotate-12 rounded-[2rem] bg-violet shadow-xl" />
              <div className="absolute bottom-16 left-16 h-28 w-28 -rotate-12 rounded-full bg-coral/90 mix-blend-multiply" />
              <div className="relative z-10 rounded-2xl bg-white/70 p-5 backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-ink/40">One alliance</p>
                <p className="mt-2 text-2xl font-semibold">Learners, employers and industry moving forward together.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="services"
          eyebrow="What we do"
          title="Practical support, designed around people."
          intro="Every programme is shaped to make learning useful from day one, with the right blend of teaching, coaching and workplace application."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => <FeatureCard key={item.title} item={item} index={index} />)}
          </div>
        </Section>

        <Section
          id="why"
          eyebrow="Why Creative Alliance"
          title="Training that works in the real world."
          className="relative bg-ink"
          dark
        >
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative min-h-[480px]">
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-[#2c3140] to-[#171b25]" />
              <div className="absolute inset-8 overflow-hidden rounded-[2rem] bg-[#f4f2ed] p-7 text-ink sm:p-9">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-[#e3f7f7] px-3 py-1.5 text-xs font-bold">Learning journey</span>
                  <span className="text-xs font-semibold text-ink/35">Creative Alliance</span>
                </div>
                <div className="mt-16 space-y-4">
                  {['Discover your direction', 'Develop real skills', 'Deliver meaningful work'].map((step, index) => (
                    <div key={step} className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm">
                      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-sm font-bold ${index === 2 ? 'bg-violet text-white' : 'bg-ink/5'}`}>
                        {index + 1}
                      </span>
                      <span className="font-semibold">{step}</span>
                      {index === 2 && <Icon name="check" className="ml-auto h-5 w-5 text-violet" />}
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 right-0 h-28 w-28 rounded-tl-[4rem] bg-cyan" />
              </div>
            </div>
            <div>
              <p className="mb-9 max-w-xl text-lg leading-8 text-white/60">
                Our programmes stay close to industry and closer to the individual. That means useful learning, honest feedback and visible progress at every stage.
              </p>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div key={benefit} className="group flex items-center gap-4 rounded-2xl border border-white/10 px-5 py-4 transition hover:border-white/20 hover:bg-white/5">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-cyan text-ink"><Icon name="check" className="h-4 w-4" /></span>
                    <span className="font-medium text-white">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="programmes"
          eyebrow="Featured programmes"
          title="Find the route that fits your ambition."
          intro="Explore pathways shaped around the skills employers value and the work creative, digital and marketing teams do every day."
          className="bg-white"
        >
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
            {programmes.map((item, index) => (
              <div key={item.title} className={index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'}>
                <ProgrammeCard item={item} />
              </div>
            ))}
          </div>
        </Section>

        <section id="contact" className="scroll-mt-24 px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-violet via-[#6548e1] to-[#352186] px-7 py-16 text-center text-white shadow-[0_35px_90px_rgba(73,48,170,0.28)] sm:px-12 sm:py-24">
            <div className="absolute -left-28 -top-28 h-72 w-72 rounded-full border-[50px] border-white/10" />
            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-cyan/25 blur-xl" />
            <div className="relative mx-auto max-w-4xl">
              <p className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-cyan">Let&apos;s make progress</p>
              <h2 className="text-balance text-4xl font-semibold leading-[1.04] sm:text-6xl lg:text-7xl">
                Ready to build what comes next?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Whether you&apos;re looking for your next opportunity or growing the talent in your team, start the conversation with Creative Alliance.
              </p>
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <CTAButton href="mailto:hello@creativealliance.org.uk" variant="light">I&apos;m a learner</CTAButton>
                <CTAButton href="mailto:hello@creativealliance.org.uk?subject=Employer%20enquiry" className="border border-white/25 bg-white/10 hover:bg-white/20">
                  I&apos;m an employer
                </CTAButton>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-5 pb-10 pt-8 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 border-t border-ink/10 pt-8 text-sm text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-xl bg-ink text-white">
              <span className="h-3 w-3 rounded-full bg-cyan" />
            </span>
            <span className="font-bold">Creative Alliance</span>
          </div>
          <p>Creative, digital and marketing training from Birmingham.</p>
          <p>© {new Date().getFullYear()} Creative Alliance</p>
        </div>
      </footer>
    </div>
  )
}

export default App
