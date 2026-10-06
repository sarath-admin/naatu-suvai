# Naatu Suvai - Restaurant Website

A modern, mobile-first, and SEO-optimized website for Naatu Suvai, a South Indian restaurant. Built with Next.js (App Router), Tailwind CSS, and Framer Motion.

## Features
- **Responsive Design**: Mobile-first approach, looks great on all devices.
- **WhatsApp Integration**: Every order and reservation links directly to WhatsApp with pre-filled messages.
- **Smooth Animations**: Powered by Framer Motion.
- **Easy Content Management**: All data is centralized in `src/data/siteData.ts`.
- **SEO Ready**: Proper metadata, JSON-LD schema, and semantic HTML.

## Getting Started

### Prerequisites
- Node.js 18.17 or later

### Installation
1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to Edit Content

All text, images, links, menu items, and the WhatsApp number are stored in a single file: **`src/data/siteData.ts`**.

### Changing the WhatsApp Number
1. Open `src/data/siteData.ts`.
2. Locate the `whatsappNumber` property.
3. Change it to your new number (include country code without the '+' sign, e.g., "9197469204928").

### Updating the Menu
1. Open `src/data/siteData.ts`.
2. Scroll to `menuItems` array.
3. Add, edit, or remove objects in the array. Make sure the `category` matches one of the items in `menuCategories`.

## Deployment to Vercel

This project is configured and ready to be deployed on Vercel without any additional setup.

1. Create a GitHub repository and push this code to it.
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click on **Add New...** -> **Project**.
4. Import your GitHub repository.
5. Vercel will auto-detect Next.js. Leave all build settings as default.
6. Click **Deploy**.

Within minutes, your site will be live!

---
*Built by Antigravity*
