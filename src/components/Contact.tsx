import { Mail, MapPin, Phone, Linkedin, Github, Facebook } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-5 sm:py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white">Get in touch</h2>
          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Available for freelance & full-time opportunities</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <a
            href="mailto:musab.dot@gmail.com"
            className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-md transition-all group"
          >
            <div className="p-3 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-all">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Email</p>
              <p className="text-slate-900 dark:text-white font-medium">musab.dot@gmail.com</p>
            </div>
          </a>

          <a
            href="tel:+94755513162"
            className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-md transition-all group"
          >
            <div className="p-3 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-all">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Phone</p>
              <p className="text-slate-900 dark:text-white font-medium">+94 75 551 3162</p>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-card">
            <div className="p-3 rounded-lg bg-primary-50 text-primary-600">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Location</p>
              <p className="text-slate-900 dark:text-white font-medium">Puttalam, Sri Lanka</p>
            </div>
          </div>

          <a
            href="https://linkedin.com/in/musab-ibnu-siraj"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-card hover:shadow-md transition-all group"
          >
            <div className="p-3 rounded-lg bg-primary-50 text-primary-600 group-hover:bg-primary-100 transition-all">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <p className="text-slate-500 dark:text-slate-400 text-sm">LinkedIn</p>
              <p className="text-slate-900 dark:text-white font-medium">musab-ibnu-siraj</p>
            </div>
          </a>
        </div>

        <div className="text-center pt-8">
          <p className="text-slate-600 dark:text-slate-400 mb-4">Open to collaborations, contract work, and full-time roles.</p>
          <div className="flex justify-center gap-4">
            <a
              href="https://linkedin.com/in/musab-ibnu-siraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-slate-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/musabibnusiraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-slate-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://web.facebook.com/musabibnusiraj"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-all text-slate-700 dark:text-slate-200"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
