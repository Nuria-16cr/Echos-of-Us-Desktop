# Deployment Guide

This guide will help you deploy both the frontend and backend so the chat function works.

## Frontend (GitHub Pages)

The frontend is already set up to deploy to GitHub Pages at: https://nuria-16cr.github.io/Echos-of-Us-Desktop/

To redeploy after making changes:

```bash
npm run deploy
```

## Backend Deployment Options

The backend needs to be deployed separately since GitHub Pages only serves static files. Here are two easy options:

### Option 1: Render (Recommended - Free)

1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `echos-backend` (or any name)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Plan**: Free
5. Add Environment Variable:
   - Key: `OPENAI_API_KEY`
   - Value: Your OpenAI API key (from your `.env` file)
6. Click "Create Web Service"
7. Wait for deployment (usually 2-5 minutes)
8. Copy the service URL (e.g., `https://echos-backend.onrender.com`)
9. Update the frontend to use this URL (see below)

### Option 2: Railway

1. Go to https://railway.app and sign up/login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Railway will auto-detect it's a Node.js app
5. Add Environment Variable:
   - `OPENAI_API_KEY` = Your OpenAI API key
6. Railway will automatically deploy
7. Copy the service URL from the deployment
8. Update the frontend to use this URL (see below)

## Updating Frontend to Use Deployed Backend

Once you have your backend URL (e.g., `https://echos-backend.onrender.com`):

1. Create a `.env` file in the root of your project:

```bash
VITE_API_URL=https://echos-backend.onrender.com
```

2. Rebuild and redeploy:

```bash
npm run build
npm run deploy
```

**Note**: Environment variables starting with `VITE_` are available to the frontend at build time.

## Troubleshooting

### White Screen Issue

If you see a white screen:

1. Open browser console (F12) and check for errors
2. Clear browser cache and hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
3. Check that all assets are loading correctly
4. Verify the build succeeded: `npm run build`

### Backend Not Working

1. Check that `OPENAI_API_KEY` is set in your deployment platform
2. Verify the backend URL is correct in your frontend `.env`
3. Check backend logs in Render/Railway dashboard
4. Test the backend URL directly: `https://your-backend-url.com/chat` (should return an error about missing prompt, not a connection error)
