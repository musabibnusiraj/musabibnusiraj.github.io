import { GraduationCap } from 'lucide-react';

const education = [
  {
    institution: 'Kingston University - UK',
    degree: 'Bachelor of Science (BSc) with Honours in Software Engineering',
    year: '2024'
  },
  {
    institution: 'Sri Lanka - German Training Institute',
    degree: 'National Diploma in Information and Communication Technology (NVQ 5)',
    year: '2018'
  },
  {
    institution: 'Vocational Training Authority of Sri Lanka',
    degree: 'ICT Technician (NVQ 4)',
    year: '2015'
  }
];

export function Education() {
  return (
    <section id="education" className="py-5 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">Education</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Academic background and certifications</p>
        </header>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <article
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg p-5 border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.institution}</h3>
                      <p className="text-slate-700 dark:text-slate-200">{edu.degree}</p>
                    </div>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{edu.year}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
