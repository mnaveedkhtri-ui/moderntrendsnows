const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT = path.join(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const BLOG_IMG_DIR = path.join(PUBLIC_DIR, 'blog');
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
  body {
    background: #06080f;
    color: #f8fafc;
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: hidden;
    position: relative;
  }
  .grid-bg {
    position: absolute; inset: 0;
    background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px);
    background-size: 28px 28px;
  }
  .glow-amber {
    position: absolute; top: -120px; right: -80px; width: 460px; height: 460px;
    background: radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%);
  }
  .glow-cyan {
    position: absolute; bottom: -120px; left: -80px; width: 420px; height: 420px;
    background: radial-gradient(circle, rgba(34,211,238,0.12) 0%, transparent 70%);
  }
  .pill {
    display: inline-block; padding: 6px 14px; border-radius: 999px;
    border: 1px solid rgba(251,191,36,0.35); background: rgba(251,191,36,0.1);
    color: #fbbf24; font-family: Consolas, monospace; font-size: 13px; font-weight: 700;
    letter-spacing: 1.5px; text-transform: uppercase;
  }
  .brand-foot {
    display: flex; justify-content: space-between; align-items: center;
    border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px;
    font-family: Consolas, monospace; font-size: 13px; color: #94a3b8;
  }
  .amber { color: #fbbf24; }
  .emerald { color: #34d399; }
  .cyan { color: #22d3ee; }
`;

// 1. Brand Logo 512x512
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 512px; height: 512px; display:flex; align-items:center; justify-content:center; background:#07090e; }
  .badge {
    width: 440px; height: 440px; border-radius: 96px;
    border: 4px solid rgba(251,191,36,0.55);
    background: linear-gradient(145deg, #121626 0%, #07090e 100%);
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    box-shadow: 0 30px 70px rgba(0,0,0,0.7);
  }
  .mono { font-size: 150px; font-weight: 900; letter-spacing: -8px; color: #ffffff; line-height: 1; }
  .mono span { color: #fbbf24; }
  .sub { margin-top: 18px; font-family: Consolas, monospace; font-size: 20px; letter-spacing: 5px; color: #94a3b8; text-transform: uppercase; }
  </style></head><body>
  <div class="grid-bg"></div>
  <div class="badge"><div class="mono">MT<span>N</span></div><div class="sub">Modern Trends Now</div></div>
  </body></html>`,
  path.join(PUBLIC_DIR, 'brand-logo.png'),
  512,
  512
);

// 2. Ergonomic Desk Height Chart (1200x630)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1200px; height: 630px; padding: 42px 52px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 40px; font-weight: 900; line-height: 1.15; margin: 14px 0 8px; }
  .lead { font-size: 17px; color: #cbd5e1; margin-bottom: 18px; }
  table { width: 100%; border-collapse: collapse; background: #0c101b; border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; overflow: hidden; }
  th { background: #14192a; color: #fbbf24; font-family: Consolas, monospace; font-size: 13px; text-transform: uppercase; padding: 12px 16px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }
  td { padding: 11px 16px; font-family: Consolas, monospace; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.06); color: #e2e8f0; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">ISO 9241-5 Anthropometric Standard</div>
    <h1>Ergonomic Sitting &amp; Standing <span class="amber">Desk Height Blueprint</span></h1>
    <p class="lead">Calibrate 90-degree neutral elbow posture, chair pan height, and monitor eye-level riser clearance.</p>
    <table>
      <thead><tr><th>User Stature</th><th>Chair Seat</th><th>Sitting Desk</th><th>Standing Desk</th><th>Eye-Level Monitor Top</th></tr></thead>
      <tbody>
        <tr><td>5&apos;2&quot; (157 cm)</td><td>15.6&quot;</td><td class="amber">25.1&quot; (64 cm)</td><td class="emerald">38.3&quot; (97 cm)</td><td class="cyan">+17.8&quot; above desk</td></tr>
        <tr><td>5&apos;6&quot; (168 cm)</td><td>16.6&quot;</td><td class="amber">26.1&quot; (66 cm)</td><td class="emerald">40.8&quot; (104 cm)</td><td class="cyan">+19.5&quot; above desk</td></tr>
        <tr><td>5&apos;9&quot; (175 cm)</td><td>17.4&quot;</td><td class="amber">26.9&quot; (68 cm)</td><td class="emerald">42.6&quot; (108 cm)</td><td class="cyan">+20.8&quot; above desk</td></tr>
        <tr><td>6&apos;0&quot; (183 cm)</td><td>18.1&quot;</td><td class="amber">27.6&quot; (70 cm)</td><td class="emerald">44.5&quot; (113 cm)</td><td class="cyan">+22.1&quot; above desk</td></tr>
        <tr><td>6&apos;3&quot; (191 cm)</td><td>18.9&quot;</td><td class="amber">28.4&quot; (72 cm)</td><td class="emerald">46.3&quot; (118 cm)</td><td class="cyan">+23.5&quot; above desk</td></tr>
      </tbody>
    </table>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;">
    <span>MODERNTRENDSNOW.STORE // WORKSPACE ARCHITECTURE LAB</span>
    <span class="amber">INTERACTIVE CALCULATOR AT /TOOLS/ERGONOMIC-DESK-HEIGHT-CALCULATOR</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'ergonomic-desk-height-chart.png'),
  1200,
  630
);

// 3. Monitor Viewing Distance & Load Chart (1200x630)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1200px; height: 630px; padding: 42px 52px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 38px; font-weight: 900; line-height: 1.15; margin: 14px 0 18px; }
  .cards { display:grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
  .card { background:#0c101b; border:1px solid rgba(255,255,255,0.12); border-radius:16px; padding:22px; }
  .card h2 { font-size:20px; margin-bottom:10px; color:#fbbf24; }
  .stat { font-family:Consolas, monospace; font-size:28px; font-weight:900; margin:8px 0; color:#ffffff; }
  .desc { font-size:14px; color:#94a3b8; line-height:1.5; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-cyan"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">Optical Acuity &amp; Structural Load Matrix</div>
    <h1>Monitor Viewing Distance &amp; <span class="amber">Desktop Clamp Load Guide</span></h1>
    <div class="cards">
      <div class="card">
        <h2>27&quot; QHD / 4K Single</h2>
        <div class="stat">22&quot; - 27&quot; <span style="font-size:14px;color:#34d399;">Eye Distance</span></div>
        <p class="desc">109-163 PPI sharpness. Fits 24&quot; deep desks cleanly. Typical load: 11-14 lbs safe on standard MDF or hardwood.</p>
      </div>
      <div class="card">
        <h2>Dual 27&quot; Horizontal</h2>
        <div class="stat">26&quot; - 32&quot; <span style="font-size:14px;color:#22d3ee;">Eye Distance</span></div>
        <p class="desc">47&quot; display span creates 24-30 lbs leverage. On hollow honeycomb desks, use a 46&quot; Solid Walnut Desk Shelf (100 lb rated).</p>
      </div>
      <div class="card">
        <h2>34&quot; &amp; 49&quot; Ultrawide</h2>
        <div class="stat">28&quot; - 36&quot; <span style="font-size:14px;color:#fbbf24;">Eye Distance</span></div>
        <p class="desc">30&quot; minimum desk depth advised. Requires rigid hardwood top or distributed monitor shelf to prevent cantilever sag.</p>
      </div>
    </div>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;">
    <span>MODERNTRENDSNOW.STORE // OPTICAL ERGONOMICS</span>
    <span class="amber">MODEL YOUR SETUP AT /TOOLS/MONITOR-VIEWING-DISTANCE-CALCULATOR</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'monitor-distance-load-chart.png'),
  1200,
  630
);

// 4. Desk Mat & Keyboard Fit Blueprint (1200x630)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1200px; height: 630px; padding: 42px 52px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 38px; font-weight: 900; line-height: 1.15; margin: 14px 0 18px; }
  .bars { display:flex; flex-direction:column; gap:14px; }
  .row { background:#0c101b; border:1px solid rgba(255,255,255,0.12); border-radius:14px; padding:16px 22px; display:flex; align-items:center; justify-content:space-between; }
  .lbl { font-weight:800; font-size:18px; width:260px; }
  .bar-wrap { flex:1; height:20px; background:#151b2b; border-radius:999px; margin:0 24px; overflow:hidden; }
  .bar-fill { height:100%; border-radius:999px; background: linear-gradient(90deg, #fbbf24, #34d399); }
  .val { font-family:Consolas, monospace; font-size:15px; width:240px; text-align:right; color:#cbd5e1; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">Spatial Footprint Engineering</div>
    <h1>Keyboard Form Factor vs <span class="amber">Mouse Sweep &amp; XXL Mat Fit</span></h1>
    <div class="bars">
      <div class="row"><div class="lbl">60% Compact (11.6&quot;)</div><div class="bar-wrap"><div class="bar-fill" style="width:45%"></div></div><div class="val"><span class="emerald">+18&quot; Mouse Sweep</span></div></div>
      <div class="row"><div class="lbl">75% Tactile (12.6&quot;)</div><div class="bar-wrap"><div class="bar-fill" style="width:55%"></div></div><div class="val"><span class="emerald">+15&quot; Sweep | 35.4&quot; Mat</span></div></div>
      <div class="row"><div class="lbl">TKL 80% Board (14.2&quot;)</div><div class="bar-wrap"><div class="bar-fill" style="width:68%"></div></div><div class="val"><span class="amber">+13&quot; Sweep | 35.4&quot; Mat</span></div></div>
      <div class="row"><div class="lbl">100% Full-Size (17.5&quot;)</div><div class="bar-wrap"><div class="bar-fill" style="width:88%"></div></div><div class="val"><span class="cyan">Requires 48&quot;+ Desk</span></div></div>
    </div>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;">
    <span>MODERNTRENDSNOW.STORE // DESK LAYOUT ENGINE</span>
    <span class="amber">TRY PLANNER AT /TOOLS/DESK-MAT-KEYBOARD-FIT-CALCULATOR</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'desk-mat-fit-blueprint.png'),
  1200,
  630
);

// 5. ScreenBar Glare Optics Diagram (1200x800)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1200px; height: 800px; padding: 48px 56px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 42px; font-weight: 900; line-height: 1.15; margin: 14px 0 22px; }
  .split { display:grid; grid-template-columns: 1fr 1fr; gap: 26px; }
  .box { border-radius: 18px; padding: 28px; border: 1px solid rgba(255,255,255,0.12); background: #0c101b; }
  .bad { border-color: rgba(244,63,94,0.45); }
  .good { border-color: rgba(52,211,153,0.45); }
  .tag { font-family:Consolas,monospace; font-size:13px; font-weight:800; text-transform:uppercase; margin-bottom:12px; display:block; }
  ul { padding-left: 20px; margin-top: 14px; color:#cbd5e1; font-size:16px; line-height:1.8; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">IES RP-1 Optical Physics</div>
    <h1>Asymmetric ScreenBar vs <span class="amber">Traditional Desk Lamp</span></h1>
    <div class="split">
      <div class="box bad">
        <span class="tag" style="color:#fb7185;">FAIL: Symmetrical Desk Lamp</span>
        <h2 style="font-size:24px;color:#fff;">Radial Light Spill &amp; Screen Glare</h2>
        <ul>
          <li>Casts 360-degree rays across glossy monitor coating</li>
          <li>Drops washed-out contrast ratio on dark IDEs</li>
          <li>Consumes 60-90 sq in of usable desk footprint</li>
          <li>Uneven 150-800 Lux hot spots cause pupil fatigue</li>
        </ul>
      </div>
      <div class="box good">
        <span class="tag" style="color:#34d399;">PASS: Asymmetric 45-Deg ScreenBar</span>
        <h2 style="font-size:24px;color:#fff;">Cut-Off Beam Desk Illumination</h2>
        <ul>
          <li>Precision reflector stops rays 1.5 cm clear of panel glass</li>
          <li>Delivers uniform 500 Lux across keyboard and notes</li>
          <li>Zero desktop footprint via weighted monitor counterweight</li>
          <li>Stepless 2700K-6500K CRI 95+ circadian color tuning</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;">
    <span>MODERNTRENDSNOW.STORE // OPTICAL ERGONOMICS</span>
    <span class="amber">ZERO GLARE WORKSPACE STANDARD</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'screenbar-glare-optics-diagram.png'),
  1200,
  800
);

// 6. Cable Slack Architecture Diagram (1200x800)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1200px; height: 800px; padding: 48px 56px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 42px; font-weight: 900; line-height: 1.15; margin: 14px 0 22px; }
  .steps { display:grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
  .step { background:#0c101b; border:1px solid rgba(255,255,255,0.12); border-radius:16px; padding:24px; }
  .num { font-family:Consolas,monospace; font-size:14px; font-weight:800; color:#fbbf24; margin-bottom:8px; }
  .step h2 { font-size:21px; color:#fff; margin-bottom:8px; }
  .step p { font-size:15px; color:#94a3b8; line-height:1.55; }
  .eq { margin-top:20px; padding:18px 24px; border-radius:14px; border:1px solid rgba(251,191,36,0.4); background:rgba(251,191,36,0.08); font-family:Consolas,monospace; font-size:20px; text-align:center; color:#fbbf24; font-weight:800; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-cyan"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">Standing Desk Power Routing</div>
    <h1>Single-Drop 48&quot; <span class="amber">Cable Management Architecture</span></h1>
    <div class="steps">
      <div class="step"><div class="num">STEP 01 // STEEL TRAY ZONE</div><h2>Under-Desk Power Consolidation</h2><p>Mount 2,100J surge strip inside rear steel wire mesh tray so all monitors, docks, and chargers travel with the desktop.</p></div>
      <div class="step"><div class="num">STEP 02 // MAGNETIC SPINE</div><h2>Articulated Quad-Channel Spine</h2><p>Route the single 14 AWG main power drop and Cat6A Ethernet down separated channels inside a weighted floor spine.</p></div>
      <div class="step"><div class="num">STEP 03 // EMI ISOLATION</div><h2>AC vs Signal Separation</h2><p>Maintain 2 inches of physical separation between 120V AC power bricks and unshielded USB-C / DisplayPort cables.</p></div>
      <div class="step"><div class="num">STEP 04 // FULL-HEIGHT TEST</div><h2>48-Inch Motor Clearance</h2><p>Verify zero tension across 3 full sit-stand elevation cycles before locking desk clips.</p></div>
    </div>
    <div class="eq">Required Cord Length = Max Desk Height (48&quot;) + Wall Distance + 6&quot; Safety Buffer</div>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;">
    <span>MODERNTRENDSNOW.STORE // CABLE ENGINEERING</span>
    <span class="amber">ANSI/BIFMA MOTOR ELEVATION COMPLIANCE</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'cable-slack-architecture-diagram.png'),
  1200,
  800
);

// 7. Pinterest Vertical Pin #1 (1000x1500)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1000px; height: 1500px; padding: 64px 56px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 56px; font-weight: 900; line-height: 1.1; margin: 22px 0 18px; }
  .sub { font-size: 22px; color:#cbd5e1; line-height:1.5; margin-bottom: 32px; }
  .card { background:#0c101b; border:1px solid rgba(251,191,36,0.3); border-radius:20px; padding:26px 30px; margin-bottom:20px; display:flex; justify-content:space-between; align-items:center; }
  .ht { font-size:30px; font-weight:900; color:#fff; }
  .vals { text-align:right; font-family:Consolas,monospace; font-size:20px; line-height:1.5; }
  .cta { background: linear-gradient(90deg, #fbbf24, #f59e0b); color:#07090e; padding:24px; border-radius:18px; text-align:center; font-weight:900; font-size:24px; letter-spacing:0.5px; margin-top:16px; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">Save This Ergonomic Cheat Sheet</div>
    <h1>Exact Sitting &amp; Standing <span class="amber">Desk Height Chart</span></h1>
    <p class="sub">Stop guessing desk height. Use ISO 9241-5 proportions to end wrist pain and neck strain.</p>
    <div class="card"><div class="ht">5&apos;3&quot; (160 cm)</div><div class="vals"><span class="amber">Sit: 25.4&quot;</span><br/><span class="emerald">Stand: 38.9&quot;</span></div></div>
    <div class="card"><div class="ht">5&apos;6&quot; (168 cm)</div><div class="vals"><span class="amber">Sit: 26.1&quot;</span><br/><span class="emerald">Stand: 40.8&quot;</span></div></div>
    <div class="card"><div class="ht">5&apos;9&quot; (175 cm)</div><div class="vals"><span class="amber">Sit: 26.9&quot;</span><br/><span class="emerald">Stand: 42.6&quot;</span></div></div>
    <div class="card"><div class="ht">6&apos;0&quot; (183 cm)</div><div class="vals"><span class="amber">Sit: 27.6&quot;</span><br/><span class="emerald">Stand: 44.5&quot;</span></div></div>
    <div class="card"><div class="ht">6&apos;3&quot; (191 cm)</div><div class="vals"><span class="amber">Sit: 28.4&quot;</span><br/><span class="emerald">Stand: 46.3&quot;</span></div></div>
    <div class="cta">CALCULATE YOUR EXACT SETUP AT MODERNTRENDSNOW.STORE</div>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;font-size:18px;">
    <span>MODERN TRENDS NOW</span><span class="amber">WORKSPACE ARCHITECTURE</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'pin-ergonomic-desk-cheat-sheet.png'),
  1000,
  1500
);

// 8. Pinterest Vertical Pin #2 (1000x1500)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1000px; height: 1500px; padding: 64px 56px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 54px; font-weight: 900; line-height: 1.1; margin: 22px 0 18px; }
  .sub { font-size: 22px; color:#cbd5e1; line-height:1.5; margin-bottom: 30px; }
  .box { background:#0c101b; border:1px solid rgba(255,255,255,0.14); border-radius:20px; padding:28px; margin-bottom:22px; }
  .box h2 { font-size:28px; color:#fbbf24; margin-bottom:10px; }
  .box p { font-size:20px; color:#cbd5e1; line-height:1.55; }
  .cta { background: linear-gradient(90deg, #fbbf24, #f59e0b); color:#07090e; padding:24px; border-radius:18px; text-align:center; font-weight:900; font-size:24px; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-cyan"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">Minimalist Desk Upgrade Guide</div>
    <h1>Dual Monitor Shelf vs <span class="amber">Monitor Arm Blueprint</span></h1>
    <p class="sub">Protect thin desktops from C-clamp crush while reclaiming 3.2 sq ft of under-shelf desk space.</p>
    <div class="box"><h2>01. Solid Walnut Dual Shelf</h2><p>Supports up to 100 lbs across wide steel legs. Perfect for dual 27&quot; or 49&quot; ultrawides on IKEA laminate tops.</p></div>
    <div class="box"><h2>02. Optimal Eye Distance</h2><p>Keep 27&quot; displays 22&quot;-27&quot; away, or 28&quot;-36&quot; for dual 27&quot; and 34&quot; ultrawide monitors.</p></div>
    <div class="box"><h2>03. Two-Tier Storage Bay</h2><p>Slide 75% mechanical keyboards, audio DACs, and MagSafe docks cleanly under 4.3&quot; shelf clearance.</p></div>
    <div class="box"><h2>04. Glare-Free Task Light</h2><p>Mount an asymmetric ScreenBar on top so 500 Lux lands on your desk mat with zero panel glare.</p></div>
    <div class="cta">TEST YOUR MONITOR LOAD AT MODERNTRENDSNOW.STORE</div>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;font-size:18px;">
    <span>MODERN TRENDS NOW</span><span class="amber">DUAL MONITOR SETUPS</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'pin-dual-monitor-blueprint.png'),
  1000,
  1500
);

// 9. Pinterest Vertical Pin #3 (1000x1500)
renderPng(
  `<!DOCTYPE html><html><head><style>${BASE_CSS}
  body { width: 1000px; height: 1500px; padding: 64px 56px; display:flex; flex-direction:column; justify-content:space-between; }
  h1 { font-size: 54px; font-weight: 900; line-height: 1.1; margin: 22px 0 18px; }
  .sub { font-size: 22px; color:#cbd5e1; line-height:1.5; margin-bottom: 30px; }
  .item { background:#0c101b; border-left:6px solid #fbbf24; border-radius:14px; padding:24px 28px; margin-bottom:18px; }
  .item strong { font-size:26px; color:#ffffff; display:block; margin-bottom:6px; }
  .item span { font-size:19px; color:#cbd5e1; }
  .cta { background: linear-gradient(90deg, #fbbf24, #f59e0b); color:#07090e; padding:24px; border-radius:18px; text-align:center; font-weight:900; font-size:24px; }
  </style></head><body>
  <div class="grid-bg"></div><div class="glow-amber"></div>
  <div style="position:relative;z-index:2;">
    <div class="pill">Aesthetic Setup Checklist 2026</div>
    <h1>5 Spatial Rules For A <span class="amber">Clutter-Free Desk</span></h1>
    <p class="sub">Small layout swaps that instantly double usable workspace on 48&quot; and 55&quot; desks.</p>
    <div class="item"><strong>1. Vertical CNC Laptop Dock</strong><span>Reclaims 10.5&quot; of horizontal width instantly vs flat open laptops.</span></div>
    <div class="item"><strong>2. 75% Gasket Mechanical Board</strong><span>Saves 5 inches over full keyboards while dampening harsh key ping.</span></div>
    <div class="item"><strong>3. Reversible Leather &amp; Felt Mat</strong><span>35.4&quot; x 15.7&quot; XXL surface anchors keyboard + 15&quot; smooth mouse glide.</span></div>
    <div class="item"><strong>4. Asymmetric Monitor ScreenBar</strong><span>Replaces bulky lamp bases with 500 Lux zero-glare beam optics.</span></div>
    <div class="item"><strong>5. Articulated Cable Spine</strong><span>Hides all power &amp; display cords into one sleek vertical channel.</span></div>
    <div class="cta">PLAN YOUR DESK FIT AT MODERNTRENDSNOW.STORE</div>
  </div>
  <div class="brand-foot" style="position:relative;z-index:2;font-size:18px;">
    <span>MODERN TRENDS NOW</span><span class="amber">DESK ARCHITECTURE LAB</span>
  </div>
  </body></html>`,
  path.join(BLOG_IMG_DIR, 'pin-minimalist-desk-checklist.png'),
  1000,
  1500
);

fs.rmSync(TEMP_DIR, { recursive: true, force: true });
console.log('ALL 9 PNG ASSETS GENERATED CLEANLY.');
