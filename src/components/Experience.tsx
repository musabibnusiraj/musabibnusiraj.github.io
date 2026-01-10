import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Imara Software Solutions',
    period: 'February 2023 – Present',
    responsibilities: [
      'Led full-stack development of enterprise-level web and mobile applications using Laravel, Flutter, React, Angular, and Node.js',
      'Spearheaded AI integration initiatives and optimized system performance across frontend and backend components',
      'Architected and deployed scalable solutions using AWS (EC2, S3, RDS, CodeCommit), Docker, and CI/CD pipelines'
    ]
  },
  {
    title: 'Software Engineer',
    company: 'Imara Software Solutions',
    period: 'January 2021 – February 2023',
    responsibilities: [
      'Led full-stack development and maintenance of web and mobile applications using Flutter, Laravel, React, Angular, and Node.js',
      'Integrated AI features and enhanced performance optimization across full-stack solutions',
      'Collaborated with stakeholders to translate business requirements into technical implementations'
    ]
  },
  {
    title: 'Software Developer',
    company: 'Imara Software Solutions',
    period: 'November 2018 – January 2021',
    responsibilities: [
      'Developed full-stack web and mobile applications with focus on UI/UX design and scalable architecture',
      'Implemented RESTful APIs and database integration for seamless data flow',
      'Collaborated with cross-functional teams to deliver responsive and user-friendly applications'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-5 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">Experience</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Selected roles & responsibilities</p>
        </header>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <article
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300">{exp.company}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-2 text-slate-700 dark:text-slate-200">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="mt-1 w-2 h-2 rounded-full bg-primary-600 dark:bg-primary-600" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
