export function About() {
  return (
    <section id="about" className="py-5 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">About Me</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Summary of experience and focus areas</p>
        </header>

        <div className="bg-white dark:bg-slate-800 rounded-lg p-8 shadow-card border border-slate-100 dark:border-slate-700">
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed">
            Experienced Full-Stack Software Engineer with 6+ years of expertise building scalable web and mobile applications using Flutter, Laravel, React, Angular, and Node.js. I focus on creating reliable, maintainable systems and delivering measurable business value through software.
          </p>
          <p className="text-slate-700 dark:text-slate-200 text-lg leading-relaxed mt-6">
            My work emphasizes AI-enabled features, cloud-first infrastructure (AWS), robust REST APIs, and pragmatic DevOps (CI/CD, Docker). I care about clean code, accessible UIs, and high-performing user experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
