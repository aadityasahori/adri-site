# Adrix Starter Site

A minimal static site for **adrix.shop**. Host on **GitHub Pages** for free.

## Quick Start
1. Create a GitHub repo (public). Name it anything, e.g. `adrix-site`.
2. Upload all files from this folder to the repo root.
3. In GitHub: **Settings → Pages → Build and deployment** → Source: *Deploy from a branch*; Branch: `main` and folder `/ (root)`; Save.
4. Custom domain: type `adrix.shop` in **Settings → Pages → Custom domain** and Save.
5. DNS (at your domain registrar/Hostinger DNS Zone):
   - A  | @   → 185.199.108.153
   - A  | @   → 185.199.109.153
   - A  | @   → 185.199.110.153
   - A  | @   → 185.199.111.153
   - CNAME | www → yourusername.github.io
6. Wait for DNS to propagate, then enable **Enforce HTTPS** in GitHub Pages.

Replace Buy/Demo links in `index.html` later.
