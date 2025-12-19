# Markhor Extreme Inc. - Portfolio & Catalog Website

A professional portfolio website for Markhor Extreme Inc., showcasing collectibles and electronics to overseas clients. Inquiry-only, no ecommerce functionality.

## Features

- **No Ecommerce**: Inquiry-only system
- **No Email**: Submissions stored locally
- **Scalable Inventory**: Easy to add/remove items via JSON
- **SEO-Friendly**: Optimized URLs and metadata
- **Mobile Responsive**: Works on all devices
- **Modern Design**: Clean, professional, trust-focused

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:8050](http://localhost:8050) in your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── api/               # API routes (inquiries)
│   ├── inventory/         # Inventory pages
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── InquiryForm.tsx
├── data/                 # Data files
│   └── inventory.json   # Inventory items (edit this to add/remove items)
├── lib/                  # Utility functions
│   ├── inventory.ts     # Inventory management functions
│   └── inquiries.ts     # Inquiry storage functions
├── public/              # Static assets (images)
└── types/               # TypeScript type definitions
```

## Adding Inventory Items

Edit `data/inventory.json` to add, update, or remove items. The structure is:

```json
{
  "id": "unique-id",
  "title": "Item Title",
  "category": "Collectibles" | "Electronics",
  "condition": "New" | "Like New" | "Used" | "Sealed",
  "availability": "Available" | "Sold",
  "images": ["image1.jpg", "image2.jpg"],
  "description": "Item description",
  "specifications": {
    "Key": "Value",
    "Another Key": "Another Value"
  },
  "tags": ["tag1", "tag2"]
}
```

### Important Notes:
- **Images**: Place all images in the `public/` directory and reference them by filename (e.g., `"images": ["my-image.jpg"]`)
- **ID**: Must be unique and URL-friendly (use hyphens, no spaces)
- **Categories**: Must be exactly "Collectibles" or "Electronics"
- **Condition**: Must be "New", "Like New", "Used", or "Sealed"
- **Availability**: Must be "Available" or "Sold"

## Inquiry Submissions

Inquiries are stored in the `/inquiries` directory as JSON files. Each submission includes:
- Full name
- Country
- Preferred contact method
- Item of interest (if specified)
- Message
- Timestamp

No email functionality is included. You can access submissions by reading the JSON files in the `/inquiries` directory.

## Pages

- **Home** (`/`): Landing page with value proposition and category entry points
- **Inventory** (`/inventory`): Grid view of all items with filtering and search
- **Item Detail** (`/inventory/[id]`): Individual item page with full details and inquiry form
- **About** (`/about`): Business information and value propositions
- **Contact** (`/contact`): General inquiry form

## SEO & Metadata

- All pages include proper metadata for SEO
- Dynamic metadata for item pages
- Sitemap automatically generated at `/sitemap.xml`
- Robots.txt included in `/public/robots.txt`

**Note**: Update the base URL in `app/sitemap.ts` with your actual domain before deployment.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **Any Node.js hosting** that supports Next.js

Make sure to:
1. Update the sitemap base URL
2. Ensure the `/inquiries` directory has write permissions
3. Set up proper environment variables if needed

## Future Enhancements (Optional)

The architecture supports easy migration to:
- CMS-based inventory management (e.g., Contentful, Sanity)
- Database storage for inquiries
- Multi-language support
- Private client views
- Admin dashboard for inventory management
