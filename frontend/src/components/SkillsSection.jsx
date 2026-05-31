function SkillsSection({ skillGroups }) {
  return (
    <section id="skills" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-2xl">
          <p className="section-kicker">Core Skills</p>
          <h2 className="section-title">Backend depth with practical frontend and mobile delivery.</h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skillGroups).map(([category, skills]) => (
            <article key={category} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{category}</h3>
              <div className="mt-5 space-y-4">
                {skills.map((skill) => (
                  <div key={skill.id}>
                    <div className="mb-2 flex items-center justify-between gap-4 text-sm">
                      <span className="font-medium text-slate-800">{skill.name}</span>
                      <span className="text-slate-500">{skill.proficiency || 70}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-slate-950"
                        style={{ width: `${Math.min(skill.proficiency || 70, 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
