# Haris Ahmer Khan — Portfolio

A responsive, single-page portfolio built from scratch with React, Vite, CSS, Framer Motion, and Lucide React.

## 1. Run locally

Install a current Node.js LTS version, then run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## 2. Personalize before publishing

- **Professional photo:** Add your image as `public/haris-photo.jpg`. In `src/App.jsx`, uncomment the `<img>` line inside `.photo-frame` and remove the placeholder div. Use a photo you are comfortable making public.
- **GitHub / LinkedIn:** Add your real profile links to the social links in `src/App.jsx`. The icons are currently intentionally not linked to invented profiles.
- **Project links:** Add real demo/repository links when ready. The project cards currently do not claim demos exist.
- **Project details:** Update descriptions to match what you actually built and the tools you used.
- **Email:** The portfolio uses the email supplied in your CV.
- **CV download:** Not included yet; add an updated PDF in `public/` if you want a downloadable CV.

## 3. Deploy to GitHub Pages

1. Create a GitHub repository named `haris-portfolio` (or choose another name).
2. In `vite.config.js`, set `base` to `"/haris-portfolio/"` to match the repository name. If you use a repository named `YOUR-REPO`, set `base: "/YOUR-REPO/"`.
3. Push the project files to the repository.
4. Run:

   ```bash
   npm install
   npm run deploy
   ```

5. In GitHub, open **Settings → Pages** and select the `gh-pages` branch as the publishing source if it is not selected automatically.
6. Wait for the Pages deployment to finish. Your project-site URL will typically be `https://YOUR-USERNAME.github.io/YOUR-REPO/`.

For a user/organization repository named `YOUR-USERNAME.github.io`, set `base: "/"` instead.

## Notes

- This is a front-end-only site; it has no backend or database.
- Google Fonts are loaded over the internet. System fallbacks are included.
- Do not publish a home address or other private details in a public portfolio.
