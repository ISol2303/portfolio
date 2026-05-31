import { Github, ServerCog } from 'lucide-react';

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="border-y border-slate-200 bg-white py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="section-kicker">Highlighted Projects</p>
            <h2 className="section-title">Systems that connect APIs, interfaces, and business logic.</h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-slate-600">
            Project cards are loaded from the Spring Boot REST API. Each card keeps the core business outcome visible
            while surfacing the implementation stack.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article key={project.id} className="project-card">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-slate-950 text-white">
                    <ServerCog size={23} aria-hidden="true" />
                  </div>
                  <p className="text-sm font-semibold text-slate-500">Project 0{index + 1}</p>
                  <h3 className="mt-2 text-2xl font-bold text-slate-950">{project.name}</h3>
                </div>
                <a
                  href={project.githubLink}
                  className="icon-link"
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.name} GitHub repository`}
                  title="GitHub repository"
                >
                  <Github size={20} aria-hidden="true" />
                </a>
              </div>

              <p className="mt-6 leading-7 text-slate-600">{project.description}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.techStack.split(',').map((tech) => (
                  <span key={tech.trim()} className="tech-pill">
                    {tech.trim()}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
