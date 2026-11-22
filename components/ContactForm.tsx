'use client';

import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { sound } from '../lib/sound';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'Editorial & Curation Inquiry', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setLoading(true);
    sound.playPop();

    // Emulate swift client dispatch
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      sound.playChime();
    }, 800);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-8 text-center space-y-3">
        <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
        <h3 className="text-lg font-bold text-white">Inquiry Received Successfully</h3>
        <p className="text-xs text-slate-300 max-w-md mx-auto font-light leading-relaxed">
          Thank you for reaching out to Modern Trends Now Editorial Studio. Our lead curator will review your message and reply via email within 24 business hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: 'Editorial & Curation Inquiry', message: '' });
          }}
          className="mt-4 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-mono text-white transition"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Your Full Name *</label>
          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="e.g. Alex Mercer"
            className="w-full rounded-xl border border-white/10 bg-[#0c0f18] px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
        </div>
        <div>
          <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Email Address *</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@company.com"
            className="w-full rounded-xl border border-white/10 bg-[#0c0f18] px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Subject / Department *</label>
        <select
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full rounded-xl border border-white/10 bg-[#0c0f18] px-3.5 py-2.5 text-xs text-white focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
        >
          <option value="Editorial & Curation Inquiry">Editorial &amp; Curation Inquiry</option>
          <option value="Product Review Suggestion">Product Review Suggestion</option>
          <option value="Affiliate & Partnership Disclosure">Affiliate &amp; Partnership Question</option>
          <option value="Technical or Website Feedback">Technical or Website Feedback</option>
          <option value="Press & Media Contact">Press &amp; Media Contact</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">Your Message *</label>
        <textarea
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Please describe your question or feedback in detail..."
          className="w-full rounded-xl border border-white/10 bg-[#0c0f18] px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-amber-400 focus:outline-none focus:ring-1 focus:ring-amber-400"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full flex items-center justify-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-950 hover:bg-amber-300 transition shadow-lg shadow-amber-400/20 disabled:opacity-50"
      >
        <Send className="h-3.5 w-3.5" />
        <span>{loading ? 'Dispatching...' : 'Send Message to Editorial Team'}</span>
      </button>
    </form>
  );
}
