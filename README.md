# GapDon — Legal &amp; Support site

Static site served by GitHub Pages. Two pages Google Play requires:

| Page | Path | Used for |
|---|---|---|
| Privacy Policy | `/privacy/` | Play Console → App content → Privacy policy URL |
| Support &amp; Account Deletion | `/support/` | Play Console → App content → Data deletion URL (`/support/#delete`) |

Each page carries the same text in **English, Uzbek and Russian**, toggled client-side
(`assets/lang.js`, choice remembered in `localStorage`).

## Deploy

Push to `main`, then in the repo: **Settings → Pages → Source: Deploy from a branch →
`main` / `/ (root)`**. The site appears at `https://<user>.github.io/<repo>/`.

`.nojekyll` is present so GitHub serves the files as-is.

## Notes

- **No payment/billing content anywhere** — in-app coin purchases do not exist yet. When
  billing ships, the Privacy Policy needs a payments section (what the payment provider
  receives, purchase history, refunds) before the store listing can advertise purchases.
- Contact address used on both pages: `shaxriyortursunaliyev17@gmail.com`. Change it in
  all three language blocks of `privacy/index.html` and `support/index.html` if it moves to
  a domain mailbox.
- Adding a custom domain later: put the hostname in a `CNAME` file at the repo root and
  point DNS at GitHub Pages.
