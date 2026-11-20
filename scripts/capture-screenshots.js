const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const targets = [
  {
    name: 'nephroscan.png',
    url: 'https://ksd-ten.vercel.app/',
    height: 3200,
  },
  {
    name: 'shiaquraninstitute.png',
    url: 'https://shiaquranacedamy.vercel.app/',
    height: 3400,
  },
  {
    name: 'smindruk.png',
    url: 'https://smindruk.vercel.app/',
    height: 3000,
  },
  {
    name: 'dashboard-smindruk.png',
    url: 'https://dashboard-smindruk.vercel.app/',
    height: 2400,
  },
];

for (const t of targets) {
  const dest = path.join(__dirname, '..', 'public', 'images', 'projects', t.name);
  console.log(`Capturing ${t.name} from ${t.url} ...`);
  try {
    execFileSync(chromePath, [
      '--headless',
      '--disable-gpu',
      '--hide-scrollbars',
      `--window-size=1440,${t.height}`,
      `--screenshot=${dest}`,
      t.url,
    ], { stdio: 'inherit', timeout: 30000 });
    console.log(`Saved ${t.name}`);
  } catch (err) {
    console.error(`Failed ${t.name}:`, err.message);
  }
}
