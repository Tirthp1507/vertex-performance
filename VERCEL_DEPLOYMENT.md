# Vercel Deployment Guide

## Files Included

- **vercel.json** - Vercel deployment configuration with routing rules
- **.vercelignore** - Files to ignore during deployment

## Deployment Steps

### 1. Using Git (Recommended)

1. Push your code to GitHub, GitLab, or Bitbucket
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import your repository
5. Vercel will auto-detect the build configuration from `vercel.json`
6. Click "Deploy"

### 2. Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project directory
vercel

# Deploy to production
vercel --prod
```

## Configuration Details

### Build Command
```
pnpm install && pnpm run build
```
This installs dependencies and builds both client and server.

### Output Directory
```
dist
```
Both client and server output are in this directory.

### Routing Rules

The `vercel.json` includes routing rules that:
- Serve `/index.js` (the bundled server) for API requests
- Redirect all non-file routes to `/index.html` for client-side routing
- Serve static assets (images, CSS, JS, etc.)

## Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

```
NODE_ENV=production
```

Add any other environment variables your app needs (API keys, database URLs, etc.)

## Important Notes

1. **Port Configuration**: The app listens on the `PORT` environment variable (default 3000). Vercel sets this automatically.

2. **Static Files**: Ensure all static assets are in the `public/` folder in your client directory.

3. **Build Time**: The first build may take a few minutes. Subsequent builds are faster.

4. **Logs**: View deployment logs in Vercel Dashboard → Deployments.

5. **Size Limits**: Keep your bundle under 50MB for optimal performance.

## Troubleshooting

### Build Fails
- Check the build logs in Vercel Dashboard
- Ensure all dependencies are in `package.json`
- Run `pnpm run build` locally to test

### Routes Not Working
- Verify `vercel.json` routing rules are correct
- Check that static files are being served correctly
- Review server logs for errors

### Port Issues
- Vercel automatically sets the PORT environment variable
- Your app already listens on `process.env.PORT || 3000`

## Redeploying

Changes are automatically deployed when you push to your repository:
1. Make changes locally
2. Push to your Git repository
3. Vercel automatically detects and deploys changes
4. View deployment status in Vercel Dashboard
