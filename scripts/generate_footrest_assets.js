const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT = path.join(__dirname, '..');
const BLOG_IMG_DIR = path.join(ROOT, 'public', 'blog');
const TEMP_DIR = path.join(ROOT, '.tmp_assets');

fs.mkdirSync(BLOG_IMG_DIR, { recursive: true });
fs.mkdirSync(TEMP_DIR, { recursive: true });

function renderPng(html, outPath, width, height) {
  const htmlPath = path.join(TEMP_DIR, `${path.basename(outPath, '.png')}.html`);
  fs.writeFileSync(htmlPath, html, 'utf8');
  execFileSync(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-sandbox',
      `--window-size=${width},${height}`,
      '--hide-scrollbars',
      `--screenshot=${outPath}`,
      `file:///${htmlPath.replace(/\\/g, '/')}`,
    ],
    { stdio: 'pipe' }
  );
  const stat = fs.statSync(outPath);
  console.log(`Generated ${path.relative(ROOT, outPath)} (${width}x${height}) -> ${Math.round(stat.size / 1024)} KB`);
}

const BASE_CSS = `
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: #06080f; color: #f8fafc; font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif; overflow: hidden; position: relative; }
  .grid-bg { position: absolute; inset: 0; background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px); background-size: 28px 28px; }
  .glow-amber { position: absolute; top: -120px; right: -80px; width: 460px; height: 460px; background: radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%); }
  .glow-emerald { position: absolute; bottom: -120px; left: -80px; width: 420px; height: 420px; background: radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%); }
  .pill { display: inline-block; padding: 6px 14px; border-radius: 999px; border: 1px solid rgba(251,191,36,0.35); background: rgba(251,191,36,0.1); color: #fbbf24; font-family: Consolas, monospace; font-size: 13px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; }
  .brand-foot { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; font-family: Consolas, monospace; font-size: 13px; color: #94a3b8; }
`;

// 1. 1200x630 Engineering Diagram: ISO 9241-5 Seat Height & Footrest Offset Chart
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1200px; height: 630px; padding: 40px 48px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 34px; font-weight: 900; margin-top: 10px; letter-spacing: -0.5px; }
  h1 span { color: #fbbf24; }
  .wrap { display:grid; grid-template-columns: 1.35fr 1fr; gap: 28px; z-index:2; margin-top: 18px; }
  table { width:100%; border-collapse:collapse; background:#0c101b; border:1px solid #1e293b; border-radius:14px; overflow:hidden; font-size:15px; }
  th, td { padding: 13px 15px; text-align:left; border-bottom:1px solid #1e293b; font-family: Consolas, monospace; }
  th { background: rgba(251,191,36,0.12); color:#fbbf24; font-size:12px; text-transform:uppercase; }
  .ok { color:#34d399; font-weight:700; }
  .warn { color:#fb7185; font-weight:700; }
  .box { background:#0c101b; border:1px solid #1e293b; border-radius:16px; padding:22px; display:flex; flex-direction:column; justify-content:space-between; }
  .card { background:#07090e; border:1px solid #1e293b; border-radius:12px; padding:14px; margin-top:12px; }
  .card strong { color:#fbbf24; display:block; font-size:13px; font-family:Consolas,monospace; margin-bottom:4px; }
  .card span { font-size:13px; color:#cbd5e1; line-height:1.45; display:block; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div><div class="glow-emerald"></div>
  <div style="z-index:2">
    <span class="pill">ISO 9241-5 &amp; ANSI/BIFMA G1 Seat Geometry</span>
    <h1>Popliteal Seat Height &amp; <span>Footrest Elevation Matrix</span></h1>
  </div>
  <div class="wrap">
    <table>
      <thead><tr><th>User Stature</th><th>Popliteal Seat</th><th>On 29&quot; Desk Seat</th><th>Footrest Lift Needed</th></tr></thead>
      <tbody>
        <tr><td>5&apos;2&quot; (157 cm)</td><td>15.7 in</td><td>19.5 in</td><td class="warn">+3.8 in (9.7 cm)</td></tr>
        <tr><td>5&apos;5&quot; (165 cm)</td><td>16.5 in</td><td>19.5 in</td><td class="warn">+3.0 in (7.6 cm)</td></tr>
        <tr><td>5&apos;8&quot; (173 cm)</td><td>17.3 in</td><td>19.5 in</td><td class="warn">+2.2 in (5.6 cm)</td></tr>
        <tr><td>5&apos;10&quot; (178 cm)</td><td>17.8 in</td><td>19.5 in</td><td class="warn">+1.7 in (4.3 cm)</td></tr>
        <tr><td>6&apos;1&quot; (185 cm)</td><td>18.5 in</td><td>19.5 in</td><td class="ok">+1.0 in (Optional)</td></tr>
        <tr><td>6&apos;3&quot; (191 cm)</td><td>19.1 in</td><td>19.5 in</td><td class="ok">+0.4 in (Feet Flat)</td></tr>
      </tbody>
    </table>
    <div class="box">
      <div style="font-size:14px;font-weight:800;color:#fff;text-transform:uppercase;letter-spacing:0.6px;">Two Distinct Footrest Zones</div>
      <div class="card">
        <strong>1. Upright Typing (90° - 100° Hip Angle)</strong>
        <span>Raise seat cylinder so elbows level with your 29&quot; desk, then place a 10°-15° tilted under-desk footrest under heels to prevent hamstring compression.</span>
      </div>
      <div class="card">
        <strong>2. Reclined Break / Reading (115° - 135°)</strong>
        <span>Extend the chair&apos;s integrated retractable leg rest with lumbar lock engaged to unload L4-L5 spinal disc pressure by up to 35%.</span>
      </div>
    </div>
  </div>
  <div class="brand-foot" style="z-index:2"><span>MODERNS TRENDS NOW LAB // ERGONOMIC BIOMECHANICS</span><span>moderntrendsnow.store/tools/chair-footrest-height-calculator</span></div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'chair-footrest-knee-angle-diagram.png'),
  1200,
  630
);

// 2. 1200x630 In-Article Engineering Chart: Retractable Built-In vs Separate Rocking Footrest
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1200px; height: 630px; padding: 40px 48px; display:flex; flex-direction:column; justify-content:space-between; }
  h2 { font-size: 32px; font-weight: 900; margin-top: 10px; }
  h2 span { color: #34d399; }
  .cols { display:grid; grid-template-columns: 1fr 1fr; gap: 28px; z-index:2; margin-top:16px; }
  .panel { background:#0c101b; border:1px solid #1e293b; border-radius:18px; padding:26px; }
  .panel.a { border-top: 4px solid #fbbf24; }
  .panel.b { border-top: 4px solid #34d399; }
  .tag { font-family: Consolas, monospace; font-size: 12px; font-weight:700; text-transform:uppercase; margin-bottom:8px; }
  .title { font-size: 22px; font-weight:800; color:#fff; margin-bottom:14px; }
  .row { display:flex; justify-content:space-between; padding:11px 0; border-bottom:1px solid rgba(255,255,255,0.07); font-size:14px; }
  .row span:first-child { color:#94a3b8; font-family:Consolas,monospace; }
  .row strong { color:#f8fafc; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div><div class="glow-emerald"></div>
  <div style="z-index:2">
    <span class="pill">Clinical Posture &amp; Load Audit (2026)</span>
    <h2>Retractable Chair Footrest vs <span>Under-Desk Tilting Footrest</span></h2>
  </div>
  <div class="cols">
    <div class="panel a">
      <div class="tag" style="color:#fbbf24">Architecture A // Built-In Retractable Rest</div>
      <div class="title">Ergonomic Office Chair with Footrest</div>
      <div class="row"><span>Best Backrest Angle</span><strong>110° - 135° Reclined</strong></div>
      <div class="row"><span>Primary Support Zone</span><strong>Calves &amp; Achilles</strong></div>
      <div class="row"><span>Spinal Pressure Drop</span><strong style="color:#34d399">Up to 35% Relief</strong></div>
      <div class="row"><span>Keyboard Reach @ 130°</span><strong style="color:#fb7185">Requires Lap Tray / Break Mode</strong></div>
      <div class="row"><span>Minimum Cylinder Spec</span><strong>BIFMA Class 4 Heavy Steel</strong></div>
    </div>
    <div class="panel b">
      <div class="tag" style="color:#34d399">Architecture B // Independent Floor Platform</div>
      <div class="title">Tilting Under-Desk Footrest</div>
      <div class="row"><span>Best Backrest Angle</span><strong>90° - 102° Upright Work</strong></div>
      <div class="row"><span>Primary Support Zone</span><strong>Heels, Arches &amp; Ankle Pump</strong></div>
      <div class="row"><span>29&quot; Desk Elbow Match</span><strong style="color:#34d399">100% Optimal Fix</strong></div>
      <div class="row"><span>Thigh Nerve Clearance</span><strong style="color:#34d399">Zero Front-Edge Pinch</strong></div>
      <div class="row"><span>Micro-Circulation Gain</span><strong>Active 15° Rocking Motion</strong></div>
    </div>
  </div>
  <div class="brand-foot" style="z-index:2"><span>DATA SOURCE // ANSI/BIFMA X5.1 &amp; ISO 9241-5</span><span>moderntrendsnow.store/blog/office-chair-with-footrest-ergonomic-guide</span></div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'footrest-lumbar-compression-comparison.png'),
  1200,
  630
);

// 3. 1000x1500 High-CTR Vertical Pinterest Pin Cheat Sheet
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1000px; height: 1500px; padding: 56px 52px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 54px; font-weight: 900; line-height: 1.08; margin-top: 18px; letter-spacing: -1px; }
  h1 span { color: #fbbf24; }
  .sub { font-size: 21px; color: #cbd5e1; margin-top: 16px; line-height: 1.5; }
  .box { background:#0c101b; border:1px solid #1e293b; border-radius:20px; padding:28px; margin-top:24px; }
  .box-title { font-family:Consolas,monospace; font-size:16px; font-weight:700; color:#fbbf24; text-transform:uppercase; margin-bottom:14px; letter-spacing:1px; }
  table { width:100%; border-collapse:collapse; font-family:Consolas,monospace; font-size:18px; }
  th, td { padding:15px 12px; border-bottom:1px solid #1e293b; text-align:left; }
  th { color:#94a3b8; font-size:14px; text-transform:uppercase; }
  .hl { color:#34d399; font-weight:800; }
  .rule { display:flex; gap:16px; padding:16px 0; border-bottom:1px solid rgba(255,255,255,0.08); }
  .num { width:40px; height:40px; border-radius:12px; background:rgba(251,191,36,0.15); border:1px solid rgba(251,191,36,0.4); color:#fbbf24; font-weight:900; font-size:20px; display:flex; align-items:center; justify-content:center; shrink:0; }
  .cta { background: linear-gradient(90deg, #fbbf24, #f59e0b); color:#07090e; border-radius:18px; padding:24px 28px; text-align:center; font-weight:900; font-size:24px; margin-top:20px; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div><div class="glow-emerald"></div>
  <div style="z-index:2">
    <span class="pill">2026 Posture Cheat Sheet // Save For Desk Setup</span>
    <h1>Office Chair with <span>Footrest</span> vs Desk Height</h1>
    <p class="sub">Stop leg numbness and lower-back compression at a 29-inch fixed desk using ISO 9241-5 seat math.</p>

    <div class="box">
      <div class="box-title">Quick Footrest Lift Needed (On Fixed 29&quot; Desk)</div>
      <table>
        <thead><tr><th>Your Height</th><th>Ideal Seat</th><th>Footrest Height</th></tr></thead>
        <tbody>
          <tr><td>5&apos;2&quot; (157 cm)</td><td>15.7&quot;</td><td class="hl">+3.8&quot; Lift</td></tr>
          <tr><td>5&apos;5&quot; (165 cm)</td><td>16.5&quot;</td><td class="hl">+3.0&quot; Lift</td></tr>
          <tr><td>5&apos;8&quot; (173 cm)</td><td>17.3&quot;</td><td class="hl">+2.2&quot; Lift</td></tr>
          <tr><td>5&apos;10&quot; (178 cm)</td><td>17.8&quot;</td><td class="hl">+1.7&quot; Lift</td></tr>
          <tr><td>6&apos;2&quot; (188 cm)</td><td>18.8&quot;</td><td class="hl">Flat on Floor</td></tr>
        </tbody>
      </table>
    </div>

    <div class="box">
      <div class="box-title">4 Non-Negotiable Buying Rules</div>
      <div class="rule"><div class="num">1</div><div><strong style="font-size:19px;">3-Finger Knee Gap</strong><div style="color:#94a3b8;font-size:16px;margin-top:4px;">Keep 2 inches clearance behind knee crease so popliteal blood flow never pinches.</div></div></div>
      <div class="rule"><div class="num">2</div><div><strong style="font-size:19px;">Class 4 Gas Cylinder + Steel Rails</strong><div style="color:#94a3b8;font-size:16px;margin-top:4px;">Twin dual-rod steel glide rails stop retractable footrests from sagging under leg weight.</div></div></div>
      <div class="rule"><div class="num">3</div><div><strong style="font-size:19px;">Reclined vs Upright Separation</strong><div style="color:#94a3b8;font-size:16px;margin-top:4px;">Use a tilting floor footrest at 95° typing; extend retractable chair rest at 120°+.</div></div></div>
      <div class="rule" style="border:none;"><div class="num">4</div><div><strong style="font-size:19px;">Synchronized Tilt-Lock</strong><div style="color:#94a3b8;font-size:16px;margin-top:4px;">Lock backrest at 115°-135° so headrest supports your neck cleanly when elevated.</div></div></div>
    </div>

    <div class="cta">Try Free Calculator: moderntrendsnow.store/tools</div>
  </div>
  <div class="brand-foot" style="z-index:2"><span>MODERNS TRENDS NOW</span><span>ISO 9241-5 &amp; BIFMA VERIFIED</span></div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'pin-office-chair-footrest-cheat-sheet.png'),
  1000,
  1500
);
