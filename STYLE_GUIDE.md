# Style Guide — Portfolio Site

A terminal / archived-document aesthetic: cream paper, near-black ink,
sharp edges, thin rule lines, and a single worn-gold accent.

All values below live as CSS custom properties at the top of
`css/style.css`, so changing a value there updates it site-wide.

---

## Color Palette

| Token | Hex | Usage |
|---|---|---|
| `--bg` | `#ece7d8` | Page background (cream paper) |
| `--panel` | `#f4f0e4` | Sidebar, cards, bracket-frame panels (lighter than bg) |
| `--panel-alt` | `#e2ddca` | Nested/inset surfaces — thumbnails, skill chips, form fields |
| `--border` | `#1c1a15` | Primary borders, dividers, inverted/active fills (near-black) |
| `--border-faint` | `#b8b19c` | Secondary dividers, dashed placeholders, dot-grid texture |
| `--text` | `#17150f` | Primary text (near-black) |
| `--text-dim` | `#4d4a3d` | Body copy, secondary text |
| `--text-faint` | `#8a8471` | Meta labels, timestamps, placeholder captions |
| `--accent` | `#9c7a24` | Worn gold — active states, eyebrows, bracket-frame corners |
| `--accent-warm` | `#8c3a2b` | Rust red — hover states, secondary emphasis |

**Usage pattern:** the site is almost entirely black-on-cream. Gold
(`--accent`) marks *default/passive* emphasis (active nav item,
section labels). Rust (`--accent-warm`) marks *interactive* emphasis
(hover states, link hovers). Don't use both accents in the same
element at once.

---

## Typography

| Token | Font | Fallback | Where it's loaded from |
|---|---|---|---|
| `--font-display` | Space Mono (700) | Courier New, monospace | Google Fonts |
| `--font-body` | IBM Plex Mono (400/500/600) | Courier New, monospace | Google Fonts |
| `--font-mono` | Space Mono (400) | Courier New, monospace | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
```

**Weights in use:**
- `400` — body copy, mono labels
- `500` / `600` — emphasis within body text (IBM Plex Mono)
- `700` — all headings (`h1`–`h4`), brand title, buttons

**Text treatment rules:**
- All headings (`h1`–`h4`) are **uppercase** with slight negative letter-spacing (`-0.01em`).
- All mono/label elements (nav, tags, eyebrows, filter buttons, form labels, footer) are **uppercase** with **wide positive letter-spacing** (`0.04em`–`0.18em`).
- Body paragraphs stay lowercase/sentence case for readability — the all-caps treatment is reserved for UI chrome, not prose.
- Eyebrow labels get an automatic `// ` prefix via CSS (`content: '// '`).
- Buttons get automatic `[ ` / ` ]` bracket wrapping via CSS.

**Base sizing:**
- Body: `15.5px` / line-height `1.7`
- H1 (page title): `clamp(1.9rem, 4vw, 2.4rem)`
- H1 (hero): `clamp(2rem, 5vw, 2.9rem)`
- Mono labels: `0.65rem`–`0.8rem`

---

## Shape & Structure

| Token | Value | Notes |
|---|---|---|
| `--radius` | `0px` | No rounded corners anywhere on the site |
| Border width | `1px` | Standard dividers/panels |
| Border width (accent) | `2px` | Bracket-frame corner marks only |
| `--sidebar-w` | `264px` | Fixed sidebar width above 800px viewport |

Every panel, card, button, tag, and input uses a hard 1px border in
`--border` or `--border-faint` — no drop shadows except the mobile
sidebar's slide-out shadow, and no rounded corners anywhere.

---

## Background Texture

The page background is layered:
```css
background-color: var(--bg);
background-image: radial-gradient(var(--border-faint) 0.6px, transparent 0.6px);
background-size: 26px 26px;
```
A faint dot-grid, like grid paper, sitting under all content.

---

## Signature Components

### Bracket-frame (`.bracket-frame`)
Sharp corner marks (2px, `--accent`) that appear on hover, or always-on
via the `.always-on` modifier. Used on the hero panel and every project
card. Reads like a targeting-reticle highlight rather than a soft glow.

### Inverted active/hover states
Instead of color-only hover states, interactive chrome **inverts**:
background flips to `--border` (near-black) and text flips to `--bg`
(cream). Applied to: active sidebar link, active filter button,
`.btn--ghost` hover, `.btn--primary` default.

### Glitch-flicker (nav hover)
A short (0.35s, 2-step) opacity/position flicker on the nav label
text when hovering a sidebar link — a brief nod to corrupted-text UI
motifs, kept subtle rather than decorative:
```css
@keyframes glitch-flicker {
  0%   { opacity: 1; }
  30%  { opacity: 0.35; transform: translateX(1px); }
  60%  { opacity: 1; transform: translateX(-1px); }
  100% { opacity: 1; transform: translateX(0); }
}
```

### Status pulse (sidebar footer dot)
A slow 2.4s opacity pulse on the small square status indicator —
signals "live/online" without being distracting.

---

## Motion

- Transitions: `0.1s`–`0.25s`, mostly `ease`
- Nothing longer than 0.35s (glitch-flicker) — this is a snappy,
  utilitarian UI, not a cinematic one
- All animations respect `prefers-reduced-motion: reduce`

---

## Quick Reference: Applying This Style Elsewhere

To reuse this system in a new component:
1. Border: `1px solid var(--border)`, no `border-radius`
2. Labels/meta text: `var(--font-mono)`, uppercase, `letter-spacing: 0.06em`–`0.1em`, `color: var(--text-faint)` or `var(--accent)`
3. Interactive hover: invert background/text rather than just changing color
4. Keep accent colors to one at a time — gold for passive state, rust for interactive/hover
