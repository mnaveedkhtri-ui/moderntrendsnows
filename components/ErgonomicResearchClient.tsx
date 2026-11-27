'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ERGONOMIC_STANDARDS_2026 } from '../data/ergonomic-standards-2026';
import { Check, Copy, Code2, Ruler } from 'lucide-react';

export default function ErgonomicResearchClient() {
  const [heightCm, setHeightCm] = useState<number>(175);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const safeCm = Number.isFinite(heightCm) && heightCm >= 135 && heightCm <= 220 ? heightCm : 175;
  const effectiveIn = safeCm / 2.54 + 0.5;
  const chairSeatIn = Math.round(effectiveIn * 0.252 * 10) / 10;
  const seatedDeskIn = Math.round((chairSeatIn + 9.5) * 10) / 10;
  const standingDeskIn = Math.round(effectiveIn * 0.618 * 10) / 10;
  const mismatch29In = Math.round((29.0 - seatedDeskIn) * 10) / 10;

  const htmlCitation = `<p>Source: <a href="https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards" rel="noopener">ModernTrendsNow 2026 ISO 9241-5 Desk Ergonomics Anthropometric Benchmark</a> (CC BY 4.0 Open Dataset).</p>`;
  const markdownCitation = `[ModernTrendsNow 2026 ISO 9241-5 Ergonomic Desk Standards Dataset](https://www.moderntrendsnow.store/research/2026-ergonomic-desk-standards)`;

  const copyText = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch {
      // Clipboard blocked in restricted browser contexts
    }
  };

  return (
    <div className="space-y-8">
      {/* Live Height Audit Bar */}
      <div className="rounded-2xl border border-white/10 bg-[#0c101b] p-6 space-y-5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
              <Ruler className="h-3.5 w-3.5" />
              <span>Instant ISO 9241-5 Geometry Check</span>
            </div>
            <p className="text-xs text-slate-400">
              Slide or enter your stature in centimeters to compare optimal neutral elbow desk height against a standard 29-inch fixed desk.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="range"
              min={150}
              max={200}
              value={safeCm}
              onChange={(e) => setHeightCm(Number(e.target.value))}
              aria-label="User stature in centimeters"
              className="w-40 accent-amber-400"
            />
            <div className="rounded-xl border border-white/15 bg-[#07090e] px-3.5 py-2 font-mono text-sm font-bold text-amber-300">
              {safeCm} cm
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-xl border border-white/10 bg-[#07090e] p-4">
            <div className="text-[11px] font-mono text-slate-400 uppercase">Chair Pan Height</div>
            <div className="text-xl font-black text-white mt-1">{chairSeatIn}&quot;</div>
            <div className="text-[11px] text-slate-500 font-mono">{(chairSeatIn * 2.54).toFixed(1)} cm</div>
          </div>
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/5 p-4">
            <div className="text-[11px] font-mono text-emerald-300 uppercase">Ideal Seated Desk</div>
            <div className="text-xl font-black text-emerald-400 mt-1">{seatedDeskIn}&quot;</div>
            <div className="text-[11px] text-slate-400 font-mono">{(seatedDeskIn * 2.54).toFixed(1)} cm</div>
          </div>
          <div className="rounded-xl border border-amber-400/30 bg-amber-400/5 p-4">
            <div className="text-[11px] font-mono text-amber-300 uppercase">Ideal Standing Desk</div>
            <div className="text-xl font-black text-amber-400 mt-1">{standingDeskIn}&quot;</div>
            <div className="text-[11px] text-slate-400 font-mono">{(standingDeskIn * 2.54).toFixed(1)} cm</div>
          </div>
          <div className="rounded-xl border border-rose-500/30 bg-rose-500/5 p-4">
            <div className="text-[11px] font-mono text-rose-300 uppercase">29&quot; Desk Mismatch</div>
            <div className="text-xl font-black text-rose-400 mt-1">
              {mismatch29In > 0 ? `+${mismatch29In}" high` : `${mismatch29In}" low`}
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              {mismatch29In > 0.5 ? `Need ${(mismatch29In * 2.54).toFixed(1)} cm footrest` : 'Within neutral zone'}
            </div>
          </div>
        </div>
      </div>

      {/* Full Empirical Table */}
      <div className="rounded-2xl border border-white/10 bg-[#0c101b] p-6 overflow-x-auto">
        <h2 className="text-lg font-bold text-white mb-4">
          ISO 9241-5 &amp; ANSI/BIFMA G1 Reference Matrix (5&apos;0&quot; to 6&apos;4&quot;)
        </h2>
        <table className="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr className="border-b border-white/10 text-[11px] font-mono uppercase text-slate-400">
              <th className="py-3 pr-4">Height</th>
              <th className="py-3 px-3">Chair Seat</th>
              <th className="py-3 px-3">Seated Desk</th>
              <th className="py-3 px-3">Standing Desk</th>
              <th className="py-3 px-3">vs 29&quot; Fixed Desk</th>
              <th className="py-3 pl-3">Footrest Correction</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 font-mono text-xs">
            {ERGONOMIC_STANDARDS_2026.map((row) => (
              <tr key={row.heightCm} className="hover:bg-white/[0.03] transition">
                <td className="py-3 pr-4 font-bold text-white">
                  {row.heightLabel} ({row.heightCm} cm)
                </td>
                <td className="py-3 px-3 text-slate-300">{row.chairSeatIn}&quot;</td>
                <td className="py-3 px-3 text-emerald-400 font-bold">
                  {row.seatedDeskIn}&quot; ({row.seatedDeskCm} cm)
                </td>
                <td className="py-3 px-3 text-amber-300 font-bold">
                  {row.standingDeskIn}&quot; ({row.standingDeskCm} cm)
                </td>
                <td className="py-3 px-3 text-rose-400">
                  {row.deltaFrom29InDesk > 0 ? `+${row.deltaFrom29InDesk}" too high` : `${row.deltaFrom29InDesk}"`}
                </td>
                <td className="py-3 pl-3 text-slate-300">
                  {row.footrestNeededCm > 0 ? `${row.footrestNeededCm} cm footrest` : 'Optional'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pt-4 text-xs text-slate-400">
          Need millimeter monitor viewing distance or cable slack modeling? Open our full{' '}
          <Link href="/tools" className="text-amber-400 underline font-semibold">
            Workspace Engineering Calculators
          </Link>
          .
        </div>
      </div>

      {/* Attribution Block */}
      <div className="rounded-2xl border border-white/10 bg-[#0c101b] p-6 space-y-4">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
          <Code2 className="h-4 w-4" />
          <h2>Cite This Ergonomics Benchmark Dataset (CC BY 4.0)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase text-slate-400 mb-1">
              <span>HTML Attribution</span>
              <button
                type="button"
                onClick={() => copyText('html', htmlCitation)}
                className="inline-flex items-center gap-1 text-amber-400 hover:underline"
              >
                {copiedId === 'html' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                <span>{copiedId === 'html' ? 'Copied' : 'Copy HTML'}</span>
              </button>
            </div>
            <pre className="rounded-xl bg-[#05070c] border border-white/10 text-emerald-300 p-3 text-[11px] font-mono overflow-x-auto">{htmlCitation}</pre>
          </div>
          <div>
            <div className="flex items-center justify-between text-[11px] font-mono uppercase text-slate-400 mb-1">
              <span>Markdown Link</span>
              <button
                type="button"
                onClick={() => copyText('md', markdownCitation)}
                className="inline-flex items-center gap-1 text-amber-400 hover:underline"
              >
                {copiedId === 'md' ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                <span>{copiedId === 'md' ? 'Copied' : 'Copy Markdown'}</span>
              </button>
            </div>
            <pre className="rounded-xl bg-[#05070c] border border-white/10 text-sky-300 p-3 text-[11px] font-mono overflow-x-auto">{markdownCitation}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
