# Easier Deployment Options

GitHub Pages requires managing base paths, which can be tricky. Here are **much easier** alternatives:

## Option 1: Netlify (Recommended - Easiest!)

**Why it's better:**

- ✅ Auto-deploys on every git push
- ✅ No base path configuration needed
- ✅ Automatic HTTPS
- ✅ Better error pages
- ✅ Free tier

**Steps:**

1. Go to https://netlify.com and sign up/login with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository: `Nuria-16cr/Echos-of-Us-Desktop`
4. Netlify will auto-detect Vite:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click "Deploy site"
6. **Update vite.config.js**: Change `base: "/Echos-of-Us-Desktop/"` to `base: "/"`
7. Commit and push - Netlify will auto-deploy!

**That's it!** Your site will be live at `https://your-site-name.netlify.app`

### Setting Up the Backend API URL

After deploying the frontend to Netlify, you need to:

1. **Deploy your backend server** (choose one):
   - **Render**: Go to https://render.com → New Web Service → Connect GitHub → Select your repo → Use `render.yaml` config
   - **Railway**: Go to https://railway.app → New Project → Deploy from GitHub → Use `railway.json` config
   - **Heroku**: Use the `Procfile` for deployment

2. **Get your backend URL** (e.g., `https://your-backend.onrender.com` or `https://your-backend.railway.app`)

3. **Add environment variable in Netlify**:
   - Go to your Netlify site dashboard
   - Site settings → Environment variables
   - Add new variable:
     - **Key**: `VITE_API_URL`
     - **Value**: Your backend URL (e.g., `https://your-backend.onrender.com`)
   - Save and redeploy

4. **Set environment variables on backend**:
   - In Render/Railway/etc., add `OPENAI_API_KEY` environment variable
   - Set it to your OpenAI API key

**Important**: The frontend needs `VITE_API_URL` set in Netlify to connect to your backend!

---

## Option 2: Vercel (Also Easy!)

**Why it's better:**

- ✅ Zero configuration needed
- ✅ Auto-deploys on git push
- ✅ Global CDN
- ✅ Free tier

**Steps:**

1. Go to https://vercel.com and sign up/login with GitHub
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel auto-detects everything - just click "Deploy"
5. **Update vite.config.js**: Change `base: "/Echos-of-Us-Desktop/"` to `base: "/"`
6. Commit and push - done!

Your site will be at `https://your-site-name.vercel.app`

---

## Option 3: Cloudflare Pages

**Steps:**

1. Go to https://pages.cloudflare.com
2. Connect GitHub account
3. Select your repository
4. Set build command: `npm run build`
5. Set output directory: `dist`
6. Deploy!

---

## To Switch to Easier Deployment:

1. **Update vite.config.js** - Change base path:

```js
export default defineConfig({
  base: "/", // Change from "/Echos-of-Us-Desktop/"
  plugins: [react()],
});
```

2. **Commit the change:**

```bash
git add vite.config.js
git commit -m "Update base path for easier deployment"
git push
```

3. **Deploy to Netlify/Vercel** (they auto-detect everything!)

---

## Current GitHub Pages Issue

The `vite.svg` 404 error is likely browser cache. Try:

- Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- Clear browser cache
- Or just switch to Netlify/Vercel - it's much easier! 😊
