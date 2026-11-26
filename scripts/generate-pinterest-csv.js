const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const productsPath = path.join(ROOT, 'data', 'products.ts');
const blogPath = path.join(ROOT, 'data', 'blog-posts.ts');

const productsTs = fs.readFileSync(productsPath, 'utf8');
const blogTs = fs.readFileSync(blogPath, 'utf8');

function clampText(str, maxLen) {
  const clean = String(str || '').replace(/[\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  return clean.slice(0, maxLen - 3).trimEnd() + '...';
}

// Parse products safely by extracting PRODUCTS array literal
const prodArrayMatch = productsTs.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
if (!prodArrayMatch) {
  throw new Error('Failed to parse PRODUCTS array in products.ts');
}
const products = eval(prodArrayMatch[1]);

// Parse blog posts cleanly by evaluating the exported array literal
const bpArrayMatch = blogTs.match(/export const BLOG_POSTS: BlogPost\[\] = (\[[\s\S]*\]);?\s*$/);
if (!bpArrayMatch) {
  throw new Error('Failed to parse BLOG_POSTS array in blog-posts.ts');
}
const blogPosts = eval(bpArrayMatch[1]);

console.log(`Parsed ${products.length} products and ${blogPosts.length} blog posts.`);

const rows = [['Title', 'Media URL', 'Pinterest board', 'Description', 'Link']];

const boardMap = {
  Workspace: 'Aesthetic Desk Setup 2026',
  Lighting: 'Ambient Lighting & Room Decor',
  Living: 'Minimalist Workspace Inspiration',
  Gadgets: 'Viral Tech Gadgets & EDC',
};

// 0. High-CTR Vertical Infographic Pins (1000x1500 PNGs) for Engineering Tools
const toolPins = [
  {
    title: 'Ergonomic Sitting & Standing Desk Height Chart 2026 + Calculator',
    img: 'https://www.moderntrendsnow.store/blog/pin-ergonomic-desk-cheat-sheet.png',
    board: 'Minimalist Workspace Inspiration',
    desc: 'Calculate your exact sitting desk height, standing desk elevation, chair pan height, and monitor riser clearance with our free ISO 9241-5 calculator. #desksetup #ergonomics #standingdesk #homeoffice #moderntrendsnow',
    link: 'https://www.moderntrendsnow.store/tools/ergonomic-desk-height-calculator',
  },
  {
    title: 'Dual Monitor Shelf vs Monitor Arm: Viewing Distance & Load Blueprint',
    img: 'https://www.moderntrendsnow.store/blog/pin-dual-monitor-blueprint.png',
    board: 'Aesthetic Desk Setup 2026',
    desc: 'Stop risking C-clamp crush on thin desktops. Model Retina viewing distance, dual 27-inch span, and hardwood desk shelf capacity with our interactive tool. #dualmonitor #desksetup #minimalistdesk #workspace',
    link: 'https://www.moderntrendsnow.store/tools/monitor-viewing-distance-calculator',
  },
  {
    title: '5 Spatial Rules For A Clutter-Free Minimalist Desk Setup 2026',
    img: 'https://www.moderntrendsnow.store/blog/pin-minimalist-desk-checklist.png',
    board: 'Minimalist Workspace Inspiration',
    desc: 'Plan desk width, 75% mechanical keyboards, vertical laptop docks, and XXL leather/felt desk mats using our interactive desk footprint calculator. #minimalistworkspace #deskmat #mechanicalkeyboard #deskgoals',
    link: 'https://www.moderntrendsnow.store/tools/desk-mat-keyboard-fit-calculator',
  },
];

toolPins.forEach((pin) => {
  rows.push([
    clampText(pin.title, 98),
    pin.img,
    pin.board,
    clampText(pin.desc, 490),
    pin.link,
  ]);
});

// 1. Add Blog Posts
blogPosts.forEach((post) => {
  const cleanTitle = clampText(post.title, 98);
  const cleanDesc = clampText(
    `${post.metaDescription} Technical workspace guide from Modern Trends Now. #desksetup #minimalist #ergonomics #workspace`,
    490
  );
  rows.push([
    cleanTitle,
    post.coverImage,
    'Minimalist Workspace Inspiration',
    cleanDesc,
    `https://www.moderntrendsnow.store/blog/${post.slug}`,
  ]);
});

// 2. Add All Products
products.forEach((p) => {
  const board = boardMap[p.category] || 'Aesthetic Desk Setup 2026';
  const cleanTitle = clampText(p.title, 98);
  const cleanDesc = clampText(
    `${p.tagline} ${p.description} #desksetup #aesthetic #viralgadgets #moderntrendsnow #${p.category.toLowerCase()}`,
    490
  );
  rows.push([
    cleanTitle,
    p.imageUrl,
    board,
    cleanDesc,
    `https://www.moderntrendsnow.store/#product-${p.id}`,
  ]);
});

const csvLines = rows.map((row) => row.map((cell) => `"${String(cell).replace(/"/g, '""')}"`).join(','));
const outputPath = path.join(ROOT, 'public', 'pinterest_bulk_pins.csv');
fs.writeFileSync(outputPath, csvLines.join('\n'), 'utf8');

console.log(`Successfully generated ${rows.length - 1} clean pins in ${outputPath}`);
