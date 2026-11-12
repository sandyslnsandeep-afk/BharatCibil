# Bharat Cibil — WordPress Theme Installation & Hostinger Deployment Guide

## 1. Domain, SSL & WordPress Installation on Hostinger
1. Log in to **Hostinger hPanel** → **Domains** and ensure your purchased domain points to your Hostinger hosting plan (DNS A record / Hostinger nameservers).
2. Go to **Security → SSL** in hPanel, install the Free Lifetime SSL certificate, and toggle **Force HTTPS** ON.
3. Go to **Websites → Auto Installer**, choose **WordPress**, set your Admin Email, Username, and strong Password, and complete installation.

## 2. Installing the Bharat Cibil Theme ZIP
1. Log in to your WordPress Dashboard (`https://yourdomain.com/wp-admin`).
2. Navigate to **Appearance → Themes → Add New → Upload Theme**.
3. Upload `bharat-cibil-theme.zip` and click **Install Now**, then **Activate**.
4. Upon activation, the theme automatically seeds all 16 core pages, 6 Sample Testimonials, 12 FAQs, and 10 Knowledge Centre article drafts/posts (if not already present).
5. Go to **Settings → Permalinks**, select **Post name**, and click **Save Changes**.

## 3. Uploading the Official Bharat Cibil Logo & Favicon
1. Go to **Appearance → Customize → Site Identity**.
2. Under **Logo**, upload your official Bharat Cibil logo (PNG, SVG, or WebP). The theme uses `flex-width` and `flex-height` so your original lettering and proportions are never cropped or distorted.
3. Under **Site Icon**, upload a square 512×512px version of the Bharat Cibil mark for browser tabs and mobile bookmarks.
4. Click **Publish**.

## 4. Uploading the Founder Photograph (Sandiep Shandilya Sharma)
1. Go to **Appearance → Customize → Bharat Cibil Settings → Founder Profile & Message**.
2. Upload the actual founder photograph under **Founder Photograph** and edit the headline or designation anytime.
3. Click **Publish**.

## 5. Changing WhatsApp Number & Hero Content
1. Go to **Appearance → Customize → Bharat Cibil Settings → WhatsApp & Contact Details**.
2. Update **WhatsApp Number** (e.g. `917018223850`, digits only) and **WhatsApp Display Format** (`+91 7018223850`). All Hero buttons, Service CTAs, Footer buttons, Floating WhatsApp button, and Consultation Form redirects update automatically.
3. Under **Homepage Hero Banner**, customize the headline, subheading, or hero photograph anytime.

## 6. Editing Service Pages & Using Gutenberg Block Patterns
- Go to **Pages → All Pages** to edit any of the 16 pages using native WordPress Gutenberg blocks (no paid page-builder or paid ACF plugin required).
- In the Block Inserter (`+`), open **Patterns → Bharat Cibil Consultancy** to insert pre-styled CTA banners or 4-Step Process blocks anywhere.
- If you prefer structured custom fields via ACF Free/Pro, the theme remains 100% compatible, while natively providing built-in Custom Post Types and meta boxes so no paid plugins are needed.

## 7. Editing or Replacing Sample Testimonials
1. Go to **Testimonials** in the left WordPress Dashboard sidebar.
2. Each seeded placeholder displays a visible **SAMPLE · DEMO PLACEHOLDER** tag.
3. When you receive an authentic, permission-based client review, edit or create a Testimonial entry, enter the client's city/state and service category, and **uncheck** `"Display visible SAMPLE / DEMO PLACEHOLDER label"`.

## 8. Editing Frequently Asked Questions (FAQs) & Knowledge Centre Posts
- **FAQs**: Go to **FAQs** in the left sidebar to add, edit, or reorder questions (`Order` attribute controls display order).
- **Knowledge Centre / Blog**: Go to **Posts** to edit, expand, or publish educational articles in the Knowledge Centre.

## 9. SEO, XML Sitemap, Robots.txt & Google Search Console
1. Install **Rank Math SEO** or **Yoast SEO** (free versions). The Bharat Cibil theme automatically detects either plugin and defers OpenGraph/meta tags so there are zero duplicate tags.
2. Enable XML Sitemaps inside Rank Math/Yoast (typically `/sitemap_index.xml`) and submit it in **Google Search Console**.
3. Ensure `robots.txt` allows crawling of public pages while disallowing `/wp-admin/`.
4. Connect **Google Analytics 4** via Google Site Kit or Rank Math/header script plugin.

## 10. Backup & Restoration on Hostinger
1. In **Hostinger hPanel → Files → Backups**, verify automatic weekly/daily backups are enabled.
2. Before updating WordPress core or plugins, create a manual backup in hPanel or using **UpdraftPlus** inside WordPress.
3. Keep `bharat-cibil-theme.zip` stored safely offline for instant re-upload if ever required.
