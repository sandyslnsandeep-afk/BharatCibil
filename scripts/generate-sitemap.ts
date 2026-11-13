import fs from 'node:fs';
import path from 'node:path';
import dotenv from 'dotenv';
import { generateRobotsTxt, generateSitemapXml, getSitemapEntries } from '../src/utils/sitemap.ts';

dotenv.config();

const rawSiteUrl = process.env.SITE_URL || process.env.APP_URL || 'https://bharatcibil.com';
const siteUrl = rawSiteUrl.startsWith('http') ? rawSiteUrl : `https://${rawSiteUrl}`;

const publicDir = path.resolve(process.cwd(), 'public');
fs.mkdirSync(publicDir, { recursive: true });

const xml = generateSitemapXml(siteUrl);
const robots = generateRobotsTxt(siteUrl);

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), xml, 'utf-8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf-8');

const entries = getSitemapEntries(siteUrl);
console.log(
  `Generated public/sitemap.xml (${entries.length} URLs) and public/robots.txt for ${siteUrl}`
);
