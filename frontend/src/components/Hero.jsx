import { ArrowRight, Database, Layers3, ShieldCheck, Smartphone } from 'lucide-react';

function Hero({ apiStatus }) {
  const statusText = {
    loading: 'Connecting to Spring Boot API',
    connected: 'Live data from Spring Boot API',
    fallback: 'Using local fallback data',
  }[apiStatus];

  return (
    <section id="home" className="border-b border-slate-200 bg-white">
      <div className="mx-auto grid min-h-[calc(100vh-73px)] max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {statusText}
          </div>
          <p className="mb-4 text-sm font-semibold uppercase text-slate-500">Fresher IT Full-Stack Intern</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            TRAN PHUONG NAM
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Full-Stack Developer focused on Java, Spring Boot, and React. Graduated from FPT Aptech, with strong logical
            thinking and hands-on experience building enterprise web systems and cross-platform mobile applications.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">
              View Projects
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary">
              Contact
            </a>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <CapabilityCard icon={Layers3} title="Enterprise Systems" text="ERP-style workflows, clean service layers, REST APIs." />
          <CapabilityCard icon={ShieldCheck} title="Secure APIs" text="Spring Security, JWT concepts, authorization tiers." />
          <CapabilityCard icon={Database} title="Data Design" text="SQL Server schemas, CRUD operations, reliable persistence." />
          <CapabilityCard icon={Smartphone} title="Cross-Platform" text="React web frontends and Flutter mobile clients." />
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({ icon: Icon, title, text }) {
  return (
    <article className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-sm">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-md bg-white text-slate-950 shadow-sm">
        <Icon size={22} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-slate-950">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
    </article>
  );
}

export default Hero;
