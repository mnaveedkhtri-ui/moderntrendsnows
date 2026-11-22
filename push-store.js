const { execSync } = require('child_process');
const cwd = 'C:\\Users\\EliteBook\\.gemini\\antigravity\\scratch\\moderntrendsnows';

try {
  console.log('--- Git Add ---');
  execSync('git add .', { cwd, stdio: 'inherit' });

  console.log('--- Git Commit ---');
  execSync('git commit -m "feat(store): expand to 38 viral objects, launch interactive Setup Builder, mobile floating dock, and tactile audio system"', { cwd, stdio: 'inherit' });

  console.log('--- Git Push ---');
  execSync('git push origin main', { cwd, stdio: 'inherit' });
  console.log('Successfully pushed to main!');
} catch (e) {
  console.error('Error during git execution:', e.message);
  process.exit(1);
}
