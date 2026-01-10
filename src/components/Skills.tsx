import { Brain, Code, Database, Layout, Server, Smartphone } from 'lucide-react';
import { useState } from 'react';

const skillCategories = [
  {
    id: 'ai',
    title: 'AI & Cloud',
    icon: Brain,
    items: [
      { name: 'AI Integration', level: 85, years: 3 },
      { name: 'AWS (EC2, S3, RDS)', level: 80, years: 4 },
      { name: 'Cloud Deployments', level: 78, years: 4 }
    ]
  },
  {
    id: 'web',
    title: 'Web & Mobile',
    icon: Smartphone,
    items: [
      { name: 'Laravel', level: 90, years: 6 },
      { name: 'Flutter', level: 76, years: 4 },
      { name: 'React / Angular / TypeScript / Node', level: 65, years: 3 },
    ]
  },
  {
    id: 'arch',
    title: 'Architecture & DB',
    icon: Server,
    items: [
      { name: 'APIs & Microservices', level: 82, years: 5 },
      { name: 'MySQL / Postgres ', level: 82, years: 5 },
      { name: 'MongoDB / Firebase / Supabase', level: 70, years: 3 }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Tooling',
    icon: Code,
    items: [
      { name: 'Docker & CI/CD', level: 75, years: 3 },
      { name: 'Observability', level: 72, years: 2 }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX & Product',
    icon: Layout,
    items: [
      { name: 'Design Systems', level: 80, years: 5 },
      { name: 'Accessibility', level: 68, years: 3 }
    ]
  },
  {
    id: 'data',
    title: 'Databases',
    icon: Database,
    items: [
      { name: 'MySQL / Postgres ', level: 82, years: 5 },
      { name: 'MongoDB / Firebase / Supabase', level: 70, years: 3 }
    ]
  }
];

export function Skills() {
  const [filter, setFilter] = useState<'all' | string>('all');

  const filtered = filter === 'all' ? skillCategories : skillCategories.filter((c) => c.id === filter);

  return (
    <section id="skills" className="py-5 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white">Skills & Expertise</h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Proficiency levels and years of experience</p>
          </div>

          <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none ${filter === 'all' ? 'bg-primary-600 text-white' : 'bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-800'}`}
              aria-pressed={filter === 'all'}
            >
              All
            </button>
            {skillCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium focus:outline-none ${filter === c.id ? 'bg-primary-600 text-white' : 'bg-white/90 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-800'}`}
                aria-pressed={filter === c.id}
              >
                {c.title}
              </button>
            ))}
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((category) => {
            const Icon = category.icon;
            return (
              <div key={category.id} className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-100 dark:border-slate-700 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary-50 text-primary-600">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.items.map((it) => (
                    <div key={it.name}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm text-slate-700 dark:text-slate-200 font-medium">{it.name}</div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">{it.years} yr</div>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-3">
                        <div className="h-3 rounded-full bg-primary-600 dark:bg-primary-600 transition-all" style={{ width: `${it.level}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
