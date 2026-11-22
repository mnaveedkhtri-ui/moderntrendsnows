import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import { Mail, MapPin, Clock, MessageSquare, ShieldCheck, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Modern Trends Now Editorial Studio',
  description:
    'Get in touch with Modern Trends Now editors, curators, and research staff. Contact us for product review submissions, advertising disclosures, and technical feedback.',
  alternates: {
    canonical: 'https://www.moderntrendsnow.store/contact',
  },
  openGraph: {
    title: 'Contact Us | Modern Trends Now Editorial Studio',
    description:
      'Direct contact information and editorial inquiry desk for Modern Trends Now. We respond within 24 business hours.',
    url: 'https://www.moderntrendsnow.store/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#07090e] text-slate-100 selection:bg-amber-400 selection:text-black">
      <Navbar />

      <main className="flex-1">
        {/* Breadcrumb Path */}
        <div className="border-b border-white/10 bg-[#05070d]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-3.5">
            <nav className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Link href="/" className="hover:text-white transition">Home</Link>
              <ChevronRight className="h-3 w-3 text-slate-600" />
              <span className="text-amber-400 font-bold">Contact Editorial</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <section className="py-12 sm:py-16 border-b border-white/10 bg-[#06080f] text-left">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-mono font-bold text-amber-300 mb-4">
              <MessageSquare className="h-3.5 w-3.5 text-amber-400" />
              <span>COMMUNICATION DESK</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Get in Touch with Our Editorial Team
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl font-light leading-relaxed">
              Have a question about an architectural guide, need advice on an ergonomic setup, or want to submit an object for independent review? We would love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Grid */}
        <section className="py-12 sm:py-16 bg-[#080b12] text-left">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <div className="rounded-2xl border border-white/10 bg-[#0c0f18] p-6 space-y-4">
                  <h3 className="text-sm font-mono uppercase tracking-wider text-amber-400 font-bold">
                    Official Communication
                  </h3>

                  <div className="space-y-4 text-xs font-light text-slate-300">
                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-slate-400 text-[11px]">Primary Editorial Desk</div>
                        <a href="mailto:support@moderntrendsnow.store" className="text-white hover:text-amber-300 transition font-mono">
                          support@moderntrendsnow.store
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-slate-400 text-[11px]">Founder Direct</div>
                        <a href="mailto:naveed@smartratecalcs.com" className="text-white hover:text-amber-300 transition font-mono">
                          naveed@smartratecalcs.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-slate-400 text-[11px]">Editorial Headquarters</div>
                        <div className="text-white">Latifabad, Hyderabad, Sindh, Pakistan</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <Clock className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <div className="font-mono text-slate-400 text-[11px]">Guaranteed SLA</div>
                        <div className="text-white">Replies dispatched within 24 business hours</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-amber-400/20 bg-amber-400/05 p-6">
                  <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold mb-2">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Editorial Integrity</span>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    We do not accept paid reviews or sponsored placements from manufacturers. All products featured are purchased or independently evaluated against our strict 4-point material standard.
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <div className="lg:col-span-2 rounded-2xl border border-white/10 bg-[#0c0f18] p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white mb-2">Send an Instant Message</h2>
                <p className="text-xs text-slate-400 mb-6 font-light">
                  Fill out the form below and our editorial team will get back to you promptly.
                </p>
                <ContactForm />
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
