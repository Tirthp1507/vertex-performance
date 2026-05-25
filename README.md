# Vertex Clinic - Full Stack Application

A modern full-stack healthcare application built with React, TypeScript, Express.js, and Tailwind CSS.

## 🚀 Project Features

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Express.js with Node.js
- **Styling**: Tailwind CSS + Radix UI Components
- **State Management**: React Form Hooks
- **Type Safety**: Full TypeScript support
- **Build Tool**: Vite for blazing fast development

## 📋 Prerequisites

- Node.js 18+ (recommended: Node.js 20)
- pnpm (or npm/yarn)
- Git

## 🔧 Installation

### 1. Clone the Repository
```bash
git clone https://github.com/Tirthp1507/vertex-performance.git
cd vertex-clinic
```

### 2. Install Dependencies
```bash
pnpm install
# or
npm install
```

### 3. Build the Project
```bash
pnpm run build
# or
npm run build
```

## 🏃 Running Locally

### Development Mode
```bash
pnpm run dev
```
Starts both Vite dev server and watches for changes.

### Production Build
```bash
pnpm run build
```
Builds the client and server for production.

### Start Production Server
```bash
pnpm start
```
Runs the production build on `http://localhost:3000`

## 📦 Project Structure

```
.
├── client/               # React frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── index.html
├── server/              # Express backend
│   └── index.ts
├── shared/              # Shared code/types
├── vercel.json          # Vercel deployment config
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies and scripts
```

## 🔗 API Integration

The server serves the client build in production and provides API endpoints for your application.

**Static Files**: All frontend assets are served from `dist/public`
**SPA Routing**: All non-file requests are redirected to `index.html` for client-side routing

## 📡 Vercel Deployment

This project is configured for **seamless Vercel deployment**.

### One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FTirthp1507%2Fvertex-performance&project-name=vertex-clinic&repo-name=vertex-performance)

### Manual Deployment via Git

1. **Connect Repository**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" → "Project"
   - Select "Import Git Repository"
   - Paste: `https://github.com/Tirthp1507/vertex-performance`

2. **Configure**:
   - Vercel will auto-detect settings from `vercel.json`
   - Framework: (Auto-detected)
   - Build Command: `pnpm install && pnpm run build`
   - Output Directory: `dist`

3. **Deploy**:
   - Click "Deploy"
   - Wait for build completion
   - Visit your live URL!

### Deployment via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel --prod
```

## 🔧 Vercel Configuration

The `vercel.json` file includes:

- **Build Command**: `pnpm install && pnpm run build`
- **Output Directory**: `dist`
- **Routing Rules**:
  - API requests → `/index.js` (Express server)
  - SPA routes → `/index.html` (React routing)
  - Static assets → Served directly

### Environment Variables

Set these in Vercel Dashboard → Settings → Environment Variables:

```
NODE_ENV=production
```

Add any API keys or database URLs your app needs.

## 🛠️ Build Configuration

### Build Process

The build script in `package.json`:
```bash
vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist
```

This:
1. Builds React frontend with Vite
2. Bundles Express server with esbuild
3. Outputs everything to `dist/`

### Output Structure

```
dist/
├── index.js              # Express server (entry point)
├── public/               # Static assets
│   ├── index.html
│   ├── assets/
│   └── ... (CSS, JS files)
└── ... (other chunks)
```

## 🚀 Performance Tips

1. **Use pnpm**: Faster and more efficient than npm
2. **Lazy Load Routes**: Code-split React routes
3. **Optimize Images**: Use modern formats (WebP)
4. **Cache Headers**: Configure Vercel caching

## 🐛 Troubleshooting

### Build Fails on Vercel
1. Check build logs in Vercel Dashboard
2. Ensure all dependencies are in `package.json`
3. Run `pnpm run build` locally to test
4. Check Node version (use 18+ in Vercel settings)

### Routes Not Working
1. Verify `vercel.json` routing rules
2. Check that static files are in `public/` folder
3. Ensure Express server is bundling correctly

### Port/Connection Issues
- Vercel sets `PORT` environment variable automatically
- App defaults to port 3000 locally
- No need to hardcode port number

## 📝 Scripts

```bash
pnpm run dev      # Start development server
pnpm run build    # Build for production
pnpm start        # Start production server
pnpm run preview  # Preview production build locally
pnpm run check    # TypeScript type checking
pnpm run format   # Format code with Prettier
```

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Express.js Documentation](https://expressjs.com)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org)

## 📄 License

MIT

## 👤 Author

Tirth

---

## ✅ Ready to Deploy?

Your project is configured and ready for Vercel deployment. Simply:

1. ✅ Code is on GitHub
2. ✅ `vercel.json` configured
3. ✅ Build scripts ready
4. ✅ Environment variables set in Vercel

**Next Steps**:
1. Go to https://vercel.com/dashboard
2. Import this repository
3. Click Deploy!

Your app will be live in minutes. 🎉
