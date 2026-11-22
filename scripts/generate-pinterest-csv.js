const fs = require('fs');
const path = require('path');

// Read products
const productsPath = path.join(__dirname, '..', 'data', 'products.ts');
const blogPath = path.join(__dirname, '..', 'data', 'blog-posts.ts');

const productsTs = fs.readFileSync(productsPath, 'utf8');
const blogTs = fs.readFileSync(blogPath, 'utf8');

// Simple regex parser for products and blog posts to ensure robust execution without ts-node
const productMatches = [...productsTs.matchAll(/id:\s*'([^']+)',\s*title:\s*'([^']+)',\s*category:\s*'([^']+)',\s*tagline:\s*'([^']+)',\s*description:\s*'([^']+)',[\s\S]*?imageUrl:\s*'([^']+)',/g)];
const blogMatches = [...blogTs.matchAll(/slug:\s*'([^']+)',\s*title:\s*'([^']+)',[\s\S]*?metaDescription:\s*'([^']+)',[\s\S]*?coverImage:\s*'([^']+)',/g)];

console.log(`Parsed ${productMatches.length} products and ${blogMatches.length} blogs.`);

const rows = [
  ['Title', 'Media URL', 'Pinterest board', 'Description', 'Link']
];

const boardMap = {
  Workspace: 'Aesthetic Desk Setup 2026',
  Lighting: 'Ambient Lighting & Room Decor',
  Living: 'Minimalist Workspace Inspiration',
  Gadgets: 'Viral Tech Gadgets & EDC'
};

// 1. Add Blogs
blogMatches.forEach(b => {
  const [, slug, title, metaDesc, coverImage] = b;
  const cleanTitle = title.replace(/"/g, "'").trim();
  const cleanDesc = (metaDesc.replace(/"/g, "'").trim() + ' Detailed technical guide for modern workspace ergonomics. #desksetup #minimalist #ergonomics #workspace #moderntrends').trim();
  rows.push([
    cleanTitle,
    coverImage,
    'Minimalist Workspace Inspiration',
    cleanDesc,
    `https://www.moderntrendsnow.store/blog/${slug}`
  ]);
});

// 2. Add Products
productMatches.forEach(p => {
  const [, id, title, category, tagline, description, imageUrl] = p;
  const board = boardMap[category] || 'Aesthetic Desk Setup 2026';
  const cleanTitle = title.replace(/"/g, "'").trim();
  const cleanDesc = `${tagline.replace(/"/g, "'").trim()} ${description.replace(/"/g, "'").trim()} Tested for premium build quality and direct Amazon Prime delivery. #desksetup #aesthetic #viralgadgets #moderntrendsnow #${category.toLowerCase()}`;
  rows.push([
    cleanTitle,
    imageUrl,
    board,
    cleanDesc,
    `https://www.moderntrendsnow.store#catalog`
  ]);
});

const csvLines = rows.map(row => 
  row.map(cell => `"${cell.replace(/"/g, '""')}"`).join(',')
);

const csvContent = csvLines.join('\n');
const outputPath = path.join(__dirname, '..', 'public', 'pinterest_bulk_pins.csv');
fs.writeFileSync(outputPath, csvContent, 'utf8');

console.log(`Successfully generated ${rows.length - 1} pins in ${outputPath}`);
