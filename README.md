# PDF Quick Convert

A free, secure, browser-based PDF converter that transforms PDF files into PNG, JPG, Text, and Word documents. All processing happens locally in the browser - your files never leave your device.

## Features

- **100% Browser-Based**: All PDF processing happens in your browser using JavaScript
- **Privacy-First**: No file uploads to any server - your documents stay on your device
- **Multiple Formats**: Convert to PNG, JPG, TXT, or DOCX
- **No Registration**: Start converting immediately without signing up
- **Mobile Responsive**: Works on desktop, tablet, and mobile devices
- **AdSense Ready**: Prepared for Google AdSense monetization

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **PDF Processing**: PDF.js (pdfjs-dist)
- **Word Documents**: docx library
- **File Handling**: react-dropzone, file-saver, jszip
- **Deployment**: Optimized for Cloudflare Pages (static export)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment to Cloudflare Pages

1. Push your code to a GitHub repository
2. Connect your repository to Cloudflare Pages
3. Configure build settings:
   - Framework preset: Next.js (Static HTML Export)
   - Build command: `npm run build`
   - Build output directory: `out`
4. Deploy!

## Google AdSense Integration

The application includes placeholder ad components ready for AdSense integration:

1. Apply for AdSense at [google.com/adsense](https://www.google.com/adsense)
2. Once approved, add your AdSense script to `app/layout.tsx`
3. Create ad units and update `components/ads/AdBanner.tsx` with your ad codes

## Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Homepage
│   ├── pdf-to-png/              # PNG conversion page
│   ├── pdf-to-jpg/              # JPG conversion page
│   ├── pdf-to-text/             # Text conversion page
│   ├── pdf-to-word/             # Word conversion page
│   ├── privacy/                 # Privacy policy (AdSense required)
│   ├── terms/                   # Terms of service (AdSense required)
│   ├── about/                   # About page
│   ├── contact/                 # Contact page
│   ├── faq/                     # FAQ page
│   └── how-it-works/            # How it works page
├── components/
│   ├── layout/                  # Header, Footer, Navigation
│   ├── converter/               # PDF converter components
│   ├── ads/                     # AdSense components
│   └── ui/                      # Reusable UI components
├── lib/
│   ├── conversion/              # PDF conversion logic
│   └── utils/                   # Helper functions
└── public/                      # Static assets
```

## Conversion Features

### PDF to PNG
- High-quality 2x scale output (retina quality)
- Transparency support
- Individual page downloads or ZIP archive

### PDF to JPG
- Optimized 92% quality compression
- Smaller file sizes
- Universal compatibility

### PDF to Text
- Full text extraction
- Preserves page structure
- Plain text output

### PDF to Word
- Editable DOCX format
- Text content preserved
- Compatible with all word processors

## Configuration

### Update Domain
Before deployment, update the domain in:
- `public/robots.txt`
- `public/sitemap.xml`

### AdSense Setup
1. Uncomment the AdSense script in `app/layout.tsx`
2. Replace `ca-pub-XXXXXXXXXXXXXXXX` with your publisher ID
3. Update `AdBanner.tsx` with actual ad unit codes

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please use the contact form on the website or open an issue on GitHub.
