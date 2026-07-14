# FISH HWB — GitHub Pages site

A static recreation of fishhwb.weebly.com, restyled around a "descending through
the ocean" concept (the left-hand depth gauge tracks scroll position through
Surface → Twilight Zone → Midnight Zone → The Abyss).

## Files

- `index.html` — home page (hero, founder card, Twitch + Discord embeds, latest content)
- `dzofo.html` — the founder/about page (Ded Zed / Our Fish Overlord bio, contact form)
- `terms.html` / `privacy.html` — your CubeZ Terms of Service and Privacy Policy, linked from the footer
- `css/style.css`, `js/main.js` — shared styling and the ambient/depth-gauge script

## Publish it

1. Create a new GitHub repo (e.g. `fish-hwb`, or `yourname.github.io` if you want it at the root domain).
2. Push these files to the repo root (or to a `docs/` folder — just point Pages at whichever you use).
3. In the repo: **Settings → Pages → Source**, select the branch/folder, save.
4. Your site will be live at `https://<username>.github.io/<repo>/` (or `https://<username>.github.io/` for a user site).

## Things to swap in

- **Founder photo**: replace the "FOUNDER PHOTO" circle in `index.html` and `dzofo.html`
  with a real `<img>` tag pointing at an image you add to `assets/images/`.
- **Latest YouTube upload**: in `index.html`, replace the placeholder `<span>` in the
  first `.thumb` card with `<iframe src="https://www.youtube.com/embed/VIDEO_ID">`.
- **Latest Twitch clip**: same card pattern, using
  `https://clips.twitch.tv/embed?clip=CLIP_SLUG&parent=YOURDOMAIN`.
- **Twitch player parent**: already handled automatically — the page sets
  `parent=` to whatever domain it's served from, so it works on GitHub Pages
  without edits. If you later add a custom domain, this keeps working too.
- **Discord widget**: currently using server ID `1186424320428363887` (from the
  original site). Change it in `index.html` if needed — server widgets must be
  enabled in Discord's Server Settings → Widget.
- **Contact form**: it's static HTML, so GitHub Pages can't process submissions
  on its own. Point the `<form>` in `dzofo.html` at a service like Formspree or
  Getform, or swap it for a `mailto:` link.

## Notes

- Fonts (Space Grotesk / IBM Plex Sans / IBM Plex Mono) load from Google Fonts via CDN.
- Colors, type, and the depth-gauge concept live in `css/style.css` as CSS custom properties near the top — tweak `--glow` / `--lure` to retheme.
- Reduced-motion users automatically get the particles and gauge animation turned off.
