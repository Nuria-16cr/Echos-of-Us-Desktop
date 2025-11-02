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

⚠️ **IMPORTANT**: You need to set **TWO DIFFERENT** environment variables in **TWO DIFFERENT** places!

---

## Step 1: Deploy Backend Server

**Choose one platform:**

### Option A: Render (Recommended)
1. Go to https://render.com and sign up/login with GitHub
2. Click **"New Web Service"**
3. Connect your GitHub repository and select your repo
4. Render will auto-detect `render.yaml` config
5. **Add Environment Variable** in Render:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key (starts with `sk-...`)
6. Click **"Create Web Service"**
7. Wait for deployment to complete
8. **Copy your backend URL** (e.g., `https://echos-backend.onrender.com`)

### Option B: Railway
1. Go to https://railway.app and sign up/login with GitHub
2. Click **"New Project"** → **"Deploy from GitHub"**
3. Select your repository
4. **Add Environment Variable** in Railway:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Your OpenAI API key
5. Railway will auto-deploy using `railway.json`
6. **Copy your backend URL** (e.g., `https://echos-backend.up.railway.app`)

---

## Step 2: Set Frontend Environment Variable in Netlify

1. Go to your **Netlify dashboard**
2. Select your site
3. Go to **Site settings** → **Environment variables**
4. Click **"Add variable"**
5. Add:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL from Step 1 (e.g., `https://echos-backend.onrender.com`)
   - ⚠️ **Make sure there's NO trailing slash!**
6. Click **"Save"**
7. Go to **Deploys** tab → Click **"Trigger deploy"** → **"Clear cache and deploy site"**

---

## Quick Checklist

- ✅ Backend server deployed (Render/Railway)
- ✅ `OPENAI_API_KEY` set on **backend server** (Render/Railway)
- ✅ Backend URL copied (e.g., `https://your-backend.onrender.com`)
- ✅ `VITE_API_URL` set on **Netlify** (pointing to backend URL)
- ✅ Netlify site redeployed after adding `VITE_API_URL`

---

## Troubleshooting

**If you still see "trouble connecting" error:**

1. **Check browser console** (F12 → Console) - you should see `API_URL: https://your-backend-url.com`
2. **If API_URL shows `http://localhost:3001`**: `VITE_API_URL` is not set in Netlify or build didn't include it
3. **If API_URL shows your backend URL but still fails**: 
   - Check backend logs to see if requests are arriving
   - Make sure backend URL has no trailing slash
   - Verify `OPENAI_API_KEY` is set on backend server

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
