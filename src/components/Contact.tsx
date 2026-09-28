import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, AlertCircle, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);
  const [submittedMessage, setSubmittedMessage] = useState<boolean>(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Please provide a valid email format (e.g. rupaambadipudi@gmail.com).';
    }

    if (!message.trim()) {
      errs.message = 'Please provide a message or inquiry.';
    } else if (message.trim().length < 10) {
      errs.message = 'Message should be at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmittedMessage(true);
  };

  const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${name}`
  )}&body=${encodeURIComponent(`Hi Ambadipudi,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`)}`;

  return (
    <section id="contact" className="py-20 border-t border-slate-200/80 dark:border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs uppercase tracking-widest font-semibold text-indigo-600 dark:text-indigo-400 mb-2">
            Get In Touch
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Let's Connect
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
            I'm open to connecting with recruiters, developers, and teams working on interesting software and AI projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Direct inbox · Typically responds within 24 hours
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-2xs hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block">
                      Phone Number
                    </span>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-mono"
                    >
                      +91 {personalInfo.phone}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                      Available for phone & technical screening calls
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  title="Copy phone number to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Profiles & Location Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 shadow-2xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 dark:text-slate-500 block">
                    Location Base
                  </span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 text-xs font-semibold transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-2.5 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/40 hover:bg-indigo-50 dark:hover:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/70 dark:border-indigo-800 text-xs font-semibold transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-indigo-400" />
                </a>
              </div>
            </div>

          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                Fill out the form below. Client-side verified with immediate email client integration.
              </p>

              {submittedMessage ? (
                <div className="p-6 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white">
                      Message Prepared for Dispatch
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 max-w-md mx-auto mt-1 leading-relaxed">
                      Thank you, <strong className="text-slate-900 dark:text-white">{name}</strong>. Because no server-side mailing proxy is required, you can launch your mail client directly with one click:
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-xs transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span>Launch Email Client</span>
                    </a>

                    <button
                      onClick={() => {
                        setSubmittedMessage(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-4 py-2.5 text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                    >
                      Write Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                      }}
                      placeholder="Ambadipudi Rupavani"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/70 border ${
                        errors.name
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Your Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                      }}
                      placeholder="rupaambadipudi@gmail.com"
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/70 border ${
                        errors.email
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1"
                    >
                      Message or Project Role Inquiry
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => {
                        setMessage(e.target.value);
                        if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                      }}
                      placeholder="Hi Ambadipudi, I came across your portfolio and wanted to discuss opportunities..."
                      className={`w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-950/70 border ${
                        errors.message
                          ? 'border-rose-500 focus:ring-rose-500'
                          : 'border-slate-200 dark:border-slate-800 focus:border-indigo-500'
                      } text-slate-900 dark:text-white focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl shadow-xs transition-colors cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Message</span>
                    </button>
                    <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center mt-2">
                      Client-side form · Configured to open via your email client or mailto
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
