import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
  Database,
  Layers3,
  Mail,
  MapPin,
  Server,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Portofolio Sendy Andreansah",
  description:
    "Profil, project, skills, dan pengalaman Sendy Andreansah sebagai junior developer.",
};

const projects = [
  {
    title: "Rumah Peradaban Subang",
    description:
      "Platform web modern untuk kebutuhan organisasi dengan halaman publik yang responsif.",
    href: "https://rpsncsubang.vercel.app",
    stack: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Human Resources Management System",
    description:
      "Sistem HRMS untuk pengelolaan data karyawan dan proses administrasi internal.",
    href: "https://hrms-psi.vercel.app",
    stack: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Engineering Job Order",
    description:
      "Aplikasi pendukung engineering untuk pencatatan dan pemantauan job order.",
    href: "",
    stack: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Human Resources Dashboard",
    description:
      "Dashboard analitik untuk memantau metrik sumber daya manusia secara terstruktur.",
    href: "",
    stack: ["React", "PostgreSQL", "Data Viz"],
  },
  {
    title: "RKK-Petshop",
    description:
      "Aplikasi e-commerce petshop dengan katalog produk dan pengalaman belanja online.",
    href: "https://rkk-petshop.vercel.app",
    stack: ["Next.js", "Prisma", "Vercel Blob"],
  },
  {
    title: "Basic-Logic",
    description:
      "Platform pembelajaran interaktif untuk materi, latihan, dan progres belajar.",
    href: "",
    stack: ["Vue.js", "Express", "MongoDB"],
  },
];

const skillGroups = [
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCn UI"],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "Next.js", "JavaScript", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Tools",
    icon: TerminalSquare,
    skills: ["Git", "Docker", "Prisma", "Vercel", "VS Code"],
  },
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Vercel",
  "Tailwind CSS",
  "Framer Motion",
  "PostgreSQL",
  "MongoDB",
  "ShadCn UI",
  "Prisma",
  "GitHub",
];

const journeys = [
  {
    period: "2024 - Present",
    role: "Junior Engineering",
    company: "PT Gajah Tunggal Tbk",
    items: [
      "Developing mission-critical internal modules to streamline production workflows.",
      "Refactoring legacy monolith systems into modern micro-services using Next.js and API-first architecture.",
      "Optimizing PostgreSQL database queries, resulting in faster data retrieval for inventory reports.",
    ],
    stack: ["Next.js", "Laravel", "TailwindCSS", "PostgreSQL", "Docker"],
  },
  {
    period: "2020 - 2024",
    role: "Sistem Informasi",
    company: "Various Clients - Freelance",
    items: [
      "Architected end-to-end web solutions for cooperatives and local SMEs.",
      "Integrated secure payment gateways and real-time notification systems.",
      "Delivered 10+ high-performance corporate websites with SEO optimization.",
    ],
    stack: ["React.js", "Laravel", "Postgres", "Redux", "Framer Motion"],
  },
  {
    period: "2020 - 2024",
    role: "Fullstack Developer Specialist",
    company: "Various Clients - Freelance",
    items: [
      "Built fullstack systems from interface implementation through database integration.",
      "Created reusable UI patterns for faster delivery across client projects.",
      "Handled deployment workflows for web applications on cloud platforms.",
    ],
    stack: ["React.js", "Laravel", "Postgres", "Redux", "Framer Motion"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#06080f] text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#06080f]/85 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/portofolio"
            className="text-lg font-extrabold tracking-tight text-[#e8c766]"
          >
            Sendy Andreansah
          </Link>
          <div className="hidden items-center gap-7 text-sm font-semibold text-white/65 md:flex">
            <a href="#projects" className="transition hover:text-[#e8c766]">
              Projects
            </a>
            <a href="#skills" className="transition hover:text-[#e8c766]">
              Skills
            </a>
            <a href="#journey" className="transition hover:text-[#e8c766]">
              Journey
            </a>
            <a href="#contact" className="transition hover:text-[#e8c766]">
              Contact
            </a>
          </div>
          <a
            href="mailto:sendy.lazada@gmail.com"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#e8c766] px-4 text-sm font-bold text-[#06080f] transition hover:bg-[#9cc9ff]"
          >
            <Mail className="size-4" />
            Contact
          </a>
        </nav>
      </header>

      <section className="relative mx-auto grid min-h-[calc(100vh-73px)] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_25%_20%,rgba(232,199,102,0.18),transparent_32%),radial-gradient(circle_at_72%_24%,rgba(91,157,228,0.16),transparent_28%)]" />
        <div className="mx-auto w-full max-w-[420px]">
          <div className="relative aspect-square overflow-hidden rounded-lg border border-white/15 bg-white/5 p-2 shadow-2xl shadow-black/30">
            <Image
              src="/sendy.png"
              alt="Sendy Andreansah"
              width={900}
              height={900}
              priority
              className="h-full w-full rounded-md object-cover"
            />
          </div>
        </div>

        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-[#e8c766]/30 bg-[#e8c766]/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#e8c766]">
            <Sparkles className="size-4" />
            Junior Developer
          </div>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.05] tracking-tight text-white md:text-7xl">
            Sendy Andreansah, S.Kom
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            I craft beautiful and functional web applications with modern
            technologies. Passionate about creating digital solutions that make
            a difference.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#e8c766] px-6 font-bold text-[#06080f] transition hover:bg-[#9cc9ff]"
            >
              View My Work
              <ArrowUpRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 font-bold text-white transition hover:border-[#e8c766]/60 hover:text-[#e8c766]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="border-y border-white/10 bg-white/[0.025] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Featured Projects"
            title="Recent work across web systems and dashboards"
            description="A collection of project references copied from the profile site and adapted for this portfolio route."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex min-h-[285px] flex-col justify-between rounded-lg border border-white/10 bg-[#0b101b] p-6 transition hover:border-[#e8c766]/60"
              >
                <div>
                  <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-[#9cc9ff]/10 text-[#9cc9ff]">
                    <Code2 className="size-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 leading-7 text-white/62">
                    {project.description}
                  </p>
                </div>
                <div className="mt-8">
                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-white/68"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {project.href ? (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#e8c766] transition group-hover:text-[#9cc9ff]"
                    >
                      View Project
                      <ArrowUpRight className="size-4" />
                    </a>
                  ) : (
                    <span className="text-sm font-bold text-white/35">
                      Private project
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Skills & Expertise"
            title="Technologies used to bring ideas to production"
            description="Frontend, backend, database, and delivery tools used across freelance and internal engineering work."
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-white/70"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {skillGroups.map((group) => {
              const Icon = group.icon;

              return (
                <article
                  key={group.title}
                  className="rounded-lg border border-white/10 bg-[#0b101b] p-6"
                >
                  <div className="mb-7 flex items-center gap-3">
                    <div className="flex size-11 items-center justify-center rounded-lg bg-[#e8c766]/10 text-[#e8c766]">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-2xl font-bold">{group.title}</h3>
                  </div>
                  <div className="space-y-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3 text-white/72"
                      >
                        <span className="size-2 rounded-full bg-[#9cc9ff]" />
                        {skill}
                      </div>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="journey" className="border-y border-white/10 bg-white/[0.025] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            eyebrow="Career Journey"
            title="Experience in internal systems and client products"
            description="A concise timeline of engineering work, freelance projects, and system delivery."
          />
          <div className="mt-14 space-y-8 border-l border-white/15 pl-6">
            {journeys.map((item) => (
              <article key={`${item.period}-${item.role}`} className="relative">
                <span className="absolute -left-[31px] top-1 flex size-3 rounded-full bg-[#e8c766] ring-8 ring-[#1c1720]" />
                <p className="font-mono text-sm font-bold text-[#e8c766]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-2xl font-extrabold">{item.role}</h3>
                <p className="mt-1 text-white/50">{item.company}</p>
                <ul className="mt-6 space-y-3">
                  {item.items.map((entry) => (
                    <li key={entry} className="flex gap-3 leading-7 text-white/70">
                      <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-[#9cc9ff]" />
                      <span>{entry}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-semibold text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-lg border border-white/10 bg-[#0b101b] p-6 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="mb-6 flex size-12 items-center justify-center rounded-lg bg-[#e8c766]/10 text-[#e8c766]">
              <BriefcaseBusiness className="size-5" />
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight">
              Let&apos;s Build Something Great
            </h2>
            <p className="mt-5 leading-8 text-white/62">
              Open for collaborations, freelance opportunities, or a discussion
              about web applications and internal systems.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <ContactItem
              icon={<Mail className="size-5" />}
              label="Email"
              value="sendy.lazada@gmail.com"
              href="mailto:sendy.lazada@gmail.com"
            />
            <ContactItem
              icon={<MapPin className="size-5" />}
              label="Location"
              value="Banten, Indonesia"
            />
            <ContactItem
              icon={<TerminalSquare className="size-5" />}
              label="GitHub"
              value="Open profile"
              href="#"
            />
            <ContactItem
              icon={<Database className="size-5" />}
              label="Portfolio Source"
              value="andreansah.vercel.app"
              href="https://andreansah.vercel.app"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#e8c766]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-lg leading-8 text-white/62">{description}</p>
    </div>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-[#e8c766]/45">
      <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-[#9cc9ff]/10 text-[#9cc9ff]">
        {icon}
      </div>
      <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/40">
        {label}
      </p>
      <p className="mt-2 break-words font-bold text-white">{value}</p>
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
      {content}
    </a>
  );
}
