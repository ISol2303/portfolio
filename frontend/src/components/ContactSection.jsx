import { Github, Mail, MapPin, Phone } from 'lucide-react';

function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 rounded-lg border border-slate-200 bg-white p-6 shadow-soft md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <p className="section-kicker">Contact</p>
            <h2 className="section-title">Ready for Full-Stack internship opportunities.</h2>
            <p className="mt-5 leading-7 text-slate-600">
              I am interested in backend-heavy full-stack roles where I can contribute to Java/Spring Boot systems,
              React interfaces, and practical product features.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <ContactItem icon={Mail} label="Email" value="tp.nam23@gmail.com" href="mailto:tp.nam23@gmail.com" />
            <ContactItem icon={Github} label="GitHub" value="github.com/ISol2303" href="https://github.com/ISol2303" />
            <ContactItem icon={Phone} label="Phone" value="0373553880" href="tel:0373553880" />
            <ContactItem icon={MapPin} label="Location" value="56/11 Van Chung Street, Tan Binh District, Ho Chi Minh City" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, label, value, href }) {
  const content = (
    <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-white text-slate-950 shadow-sm">
        <Icon size={20} aria-hidden="true" />
      </div>
      <p className="text-sm font-semibold text-slate-500">{label}</p>
      <p className="mt-1 break-words text-sm font-medium text-slate-950">{value}</p>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
      {content}
    </a>
  ) : (
    content
  );
}

export default ContactSection;
