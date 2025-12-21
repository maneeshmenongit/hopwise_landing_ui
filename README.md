# Hopwise Landing Page

Marketing landing page for the Hopwise project.

## Project Structure

```
hopwise_landing_page/
├── site/                  # Website source code
│   ├── index.html        # Main HTML file
│   ├── css/              # Stylesheets
│   │   └── style.css
│   ├── js/               # JavaScript files
│   │   └── script.js
│   └── assets/           # Static assets
│       ├── brand/        # Brand logos
│       ├── domains/      # Domain images
│       ├── images/       # Image files
│       ├── videos/       # Video files
│       └── fonts/        # Custom fonts
├── .gitignore           # Git ignore rules
├── .env.example         # Environment variables template
└── README.md            # This file
```

## Getting Started

1. Clone the repository
2. Copy `.env.example` to `.env` and configure as needed
3. Open `site/index.html` in your browser or serve with a local server

## Development

To serve the site locally, you can use any static file server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server site

# Using PHP
php -S localhost:8000 -t site
```

Then visit `http://localhost:8000`

## Deployment

This is a static site and can be deployed to any static hosting service:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## Assets

Place your marketing assets in the `site/assets/` directory:
- **brand/**: Brand logos and identity assets
- **domains/**: Domain-specific images (rides, dining, activities, stays)
- **images/**: General images, hero images, screenshots, etc.
- **videos/**: Product demos, promotional videos
- **fonts/**: Custom web fonts
