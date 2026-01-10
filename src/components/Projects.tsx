import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 'success-call',
        title: 'Success Call',
        subtitle: 'Prayer Times App for Sri Lanka Muslims',
        description: 'A comprehensive mobile and web application providing precise prayer times for every zone in Sri Lanka. Features include ACJU Hijri calendar, multi-language support (English, Sinhala, Tamil, Arabic), offline functionality, auto-silence during prayers, home widgets, and customizable Iqamah times.',
        image: '/projects/success-call.png',
        role: 'Developer',
        tags: ['Mobile App', 'Web App', 'Prayer Times', 'Sri Lanka', 'Hijri Calendar', 'Offline', 'Multi-language'],
        links: [
            { label: 'Android App', href: 'https://play.google.com/store/apps/details?id=me.musab.successcall' },
            { label: 'Web Version', href: 'https://successcall.github.io' }
        ],
    },
    {
        id: 'checklogix',
        title: 'CheckLogix',
        subtitle: 'Checklogix, documentation software, compliance management, log management, process documentation',
        description:
            'Cross-platform Flutter app with Laravel backend. Engineering focus on API-first design, JWT auth, Stripe payments, and subscription management. Includes marketing landing site and enterprise-grade architecture. AI-powered checklist and log form creation for enhanced automation.',
        image: '/projects/checklogix.png',
        role: 'Full-stack',
        tags: ['Flutter', 'Laravel', 'API', 'AWS', 'Stripe', 'Subscription', 'Cross-platform', 'AI', 'Checklist', 'Log Forms'],
        links: [{ label: 'App', href: 'https://app.checklogix.org/' }, { label: 'Website', href: 'https://checklogix.org/' }],
    },
    {
        id: 'mailfast',
        title: 'MailFast',
        subtitle: 'Next Day International Parcel Booking Platform',
        description:
            'Built with WordPress, MailFast uses CourierAPI for shipping, integrates PayPal, and provides competitor price comparison, QR code generation, and parcel booking features.',
        image: '/projects/mailfast.png',
        role: 'Full-stack (partial)',
        tags: ['WordPress', 'CourierAPI', 'PayPal', 'Competitor Comparison', 'QR Code', 'Parcel Booking', 'Shipping', 'Web App', 'Calculator', 'Logistics'],
        links: [
            // { label: 'Website', href: 'http://mail-fast.test/' }
        ],
    },
    {
        id: 'addon-poze',
        title: 'Addon Poze',
        subtitle: 'Laravel package for inventory & purchase management',
        description:
            'An inventory & purchase order Laravel package with advanced features: permission control, vendor management, import/export and UI modules to quickly add PO flows to Laravel apps.',
        image: '/projects/addon-poze.png',
        tags: ['Laravel', 'PHP', 'Inventory', 'Package', 'B2B'],
        links: [
            //   { label: 'Repository', href: 'https://github.com/your-org/addon-poze' },
            //   { label: 'Docs', href: 'https://your-docs-site.example.com/addon-poze' }
        ],
    },
    {
        id: 'mi-invitation-platform',
        title: 'MI Invitation & Rewards Platform',
        subtitle: 'SaaS Platform with Gamification & SMS Marketing',
        description:
            'Invitation platform with Flutter app and React dashboard. Send SMS invitations, earn points from engagement and ad views, win prizes through games. Includes admin panel for management and analytics. MERN stack with AWS S3.',
        image: '/projects/epic-invitation.png',
        role: 'Full-Stack Developer',
        tags: ['Flutter', 'React', 'Node.js', 'MongoDB', 'AWS S3', 'Gamification', 'SMS Marketing'],
        links: []
    },
    {
        "id": "jarvis-imara",
        "title": "Jarvis (HUBEUROPE)",
        "subtitle": "Enterprise Logistics & Courier Management Platform",
        "description": "Comprehensive logistics and courier management system built with Laravel and Vue.js. Features include shipment tracking, customer/billing management, courier API integration, and financial reporting. Integrates Xero for accounting and AWS S3 for storage, focusing on data management and operational efficiency with server-side rendered datatables and RBAC.",
        "image": "/projects/jarvis-imara.png",
        "role": "Full-stack Developer",
        "tags": [
            "Laravel",
            "Vue.js",
            "PHP",
            "Logistics",
            "Courier Management",
            "ERP",
            "Billing System",
            "Xero",
            "AWS S3",
            "Courier API",
            "API Integration",
            "PDF Generation",
            "Datatables"
        ],
        "links": []
    }
    // Add more working projects here
];

export function Projects() {
    return (
        <section id="projects" className="py-5 sm:py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <header className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">My Work & Contributions</h2>
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">A showcase of completed projects and live applications I've built or contributed to.</p>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <article key={p.id} className="group rounded-xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-md transition-all">
                            <div className="relative h-44 overflow-hidden">
                                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-20 pointer-events-none"></div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
                                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.subtitle}</p>
                                <p className="mt-3 text-slate-700 dark:text-slate-200 text-sm">{p.description}</p>

                                <div className="mt-3 flex flex-wrap gap-2 items-center">
                                    {/* {p.role && (
                                        <span className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded-full bg-primary-50 text-primary-600">
                                            {p.role}
                                        </span>
                                    )} */}

                                    <div className="flex flex-wrap gap-2">
                                        {p.tags.map((t) => (
                                            <span key={t} className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    {p.links.map((l) => (
                                        <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-primary-50 text-primary-600 hover:bg-primary-100 border border-transparent transition-all">
                                            <ExternalLink className="w-4 h-4" />
                                            <span className="text-sm">{l.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

