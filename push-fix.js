const { execSync } = require('child_process');
const cwd = 'C:\\Users\\EliteBook\\.gemini\\antigravity\\scratch\\moderntrendsnows';

try {
  console.log('--- Git Add ---');
  execSync('git add .', { cwd, stdio: 'inherit' });

  console.log('--- Git Commit ---');
  execSync('git commit -m "fix(products): replace broken titanium pen image with verified 200 OK asset and add onError fallback guards"', { cwd, stdio: 'inherit' });

  console.log('--- Git Push ---');
  execSync('git push origin main', { cwd, stdio: 'inherit' });
  console.log('Push complete!');
} catch (e) {
  console.error('Error during git execution:', e.message);
  process.exit(1);
}
