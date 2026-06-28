# A Little Gift

Static HTML/CSS/JavaScript gift page for Vercel.

## Deploy

Use Vercel as a static site:

- Framework preset: `Other`
- Build command: leave empty
- Output directory: `.`

## Security Notes

This is still a static frontend site, so it is not backend-grade authentication. The note payload is encrypted in the client bundle and only rendered after the correct password decrypts it. Vercel headers in `vercel.json` add CSP, clickjacking protection, noindex headers, and reduced browser permissions.

Do not commit real secrets to `.env` files. `.env` and `.env.*` are ignored; `.env.example` is only documentation.
