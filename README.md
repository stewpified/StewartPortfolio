# Portfolio Site

A static 4-page portfolio (Home, Work, Resume, Contact) with a fixed
sidebar nav, built in plain HTML/CSS/JS — no build step required.

## Structure

```
index.html      Home
work.html       Work (filterable project grid)
resume.html     Resume
contact.html    Contact
css/style.css   All styles
js/main.js      Sidebar toggle + work filter logic
assets/         Put your images, clips, and resume.pdf here
```

## Customize

1. **Text** — swap the placeholder copy (name, bio, project
   descriptions, resume entries, email/social links) for your own.
2. **Project thumbnails** — each `.card__thumb` div is a placeholder.
   Drop images/gifs into `assets/`, then replace, e.g.:
   ```html
   <div class="card__thumb">
     <img src="assets/recipe-system.gif" alt="Recipe crafting UI in action" style="width:100%;height:100%;object-fit:cover;border-radius:3px;">
   </div>
   ```
3. **Resume PDF** — add your resume as `assets/resume.pdf`; the
   download button on resume.html already points there.
4. **Colors/fonts** — all design tokens live at the top of
   `css/style.css` under `:root`.

## Asset tips

- Prefer short `.mp4`/`.webm` clips (5–15s) over large `.gif` files
  for gameplay footage — smaller and smoother.
- Compress screenshots before committing (keep them under ~500KB each).
- If any single file is over ~50MB, set up
  [Git LFS](https://git-lfs.com/) before committing it.

## Deploy to GitHub Pages

1. Create a new GitHub repo — name it `yourusername.github.io` if you
   want it at the root domain, or anything else if you're fine with
   `yourusername.github.io/reponame`.
2. Push these files to the repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/yourusername.github.io.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**, set Source to the `main`
   branch and `/ (root)` folder, save.
4. Your site goes live at `https://yourusername.github.io` (or with
   `/reponame` appended) within a minute or two.

## Local preview

Just open `index.html` in a browser, or serve it locally:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.
