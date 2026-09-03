import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';

const routes = {
  '/about': {
    title: 'About | Muhammad Hafizh Maulidan',
    description: 'Learn about my journey from IPB University to leading dairy production operations at Rumah Susu Indonesia.',
  },
  '/skills': {
    title: 'Skills | Muhammad Hafizh Maulidan',
    description: 'Skills in Operations Management, Production Planning, Quality Control, Supply Chain, and Dairy Processing.',
  },
  '/experience': {
    title: 'Experience | Muhammad Hafizh Maulidan',
    description: 'Professional experience: Head of Unit at Rumah Susu Indonesia, Frontend Developer at PT Matra Kreasi Mandiri.',
  },
  '/publications': {
    title: 'Publications | Muhammad Hafizh Maulidan',
    description: 'Research publications on IoT Automation and Engineering applications.',
  },
  '/certifications': {
    title: 'Certifications | Muhammad Hafizh Maulidan',
    description: 'Certifications: Hardware Installation Supervisor (BNSP), Google Analytics, Junior Network Engineer.',
  },
  '/contact': {
    title: 'Contact | Muhammad Hafizh Maulidan',
    description: 'Get in touch for collaboration opportunities in Operations Management, Production Leadership, or Dairy Manufacturing.',
  },
  '/impact': {
    title: 'Production Impact | Muhammad Hafizh Maulidan',
    description: 'Live production data from Rumah Susu Indonesia: total output, reject rates, cup production trends, and raw milk processing metrics.',
  },
  '/achievements': {
    title: 'Achievements | Muhammad Hafizh Maulidan',
    description: 'Milestones and achievements — milk quality digitalization, mozzarella first production, SOP standardization, and distribution SOPs.',
  },
};

const dist = 'dist';
const base = 'https://portfolio-muhammad-hafizh-maulidan.vercel.app';

if (!existsSync(join(dist, 'index.html'))) {
  console.log('[prerender] dist/index.html not found — skip');
  process.exit(0);
}

let html = readFileSync(join(dist, 'index.html'), 'utf8');

for (const [route, meta] of Object.entries(routes)) {
  let out = html;

  // Replace <title>
  out = out.replace(/<title>.*?<\/title>/, `<title>${meta.title}</title>`);

  // Replace meta description
  out = out.replace(
    /<meta name="description" content="[^"]*" \/>/,
    `<meta name="description" content="${meta.description}" />`
  );

  // Inject/update canonical + og:url + og:title + og:description for crawler shell
  // Ensure canonical exists
  const canonical = `<link rel="canonical" href="${base}${route}" />`;
  if (out.includes('rel="canonical"')) {
    out = out.replace(/<link rel="canonical" href="[^"]*" \/>/, canonical);
  } else {
    out = out.replace('</head>', `  ${canonical}\n  </head>`);
  }

  out = out.replace(
    /<meta property="og:url" content="[^"]*" \/>/,
    `<meta property="og:url" content="${base}${route}" />`
  );
  out = out.replace(
    /<meta property="og:title" content="[^"]*" \/>/,
    `<meta property="og:title" content="${meta.title}" />`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*" \/>/,
    `<meta property="og:description" content="${meta.description}" />`
  );

  const dir = join(dist, route.slice(1));
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, 'index.html'), out, 'utf8');
  console.log(`[prerender] ${route} -> ${join(dir, 'index.html')}`);
}

console.log('[prerender] done');
