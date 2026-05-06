# Portfolio

Personal portfolio site for `arrkpong.github.io`.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Create a local env file:

```bash
copy .env.example .env
```

3. Set `VITE_CONTACT_FORM_ENDPOINT` to a real form endpoint.

Recommended option:

- Create a form with [Formspree](https://formspree.io/)
- Paste the form endpoint into `.env`
- The contact form will POST `subject`, `email`, `notes`, and `name`

## Development

```bash
npm run dev
```

## Check

```bash
npm run lint
npm run build
```

## Deploy

This repo is set up to deploy from GitHub Actions on every push to `main`.

In GitHub repository settings:

1. Open `Settings` > `Pages`
2. Set `Source` to `GitHub Actions`
3. Open `Settings` > `Secrets and variables` > `Actions` > `Variables`
4. Add `VITE_CONTACT_FORM_ENDPOINT` with your form provider endpoint
5. Push to `main`

If you use the contact form locally, keep `VITE_CONTACT_FORM_ENDPOINT` in your local `.env`.
For GitHub Actions deploys, the same value must also exist as a repository variable so the production build can read it.

The public assets include:

- `resume.pdf` for the download button
- `robots.txt` and `sitemap.xml` for SEO
