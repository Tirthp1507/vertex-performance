import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Create Express app
const app = express();

// Serve static files from public folder
const publicPath = path.join(__dirname, "../public");
app.use(express.static(publicPath));

// SPA fallback - serve index.html for all non-file routes
app.get("*", (_req, res) => {
  const indexPath = path.join(publicPath, "index.html");
  res.sendFile(indexPath, (err) => {
    if (err) {
      console.error("Error serving index.html:", err);
      res.status(404).send("Page not found");
    }
  });
});

// Vercel serverless handler
export default function handler(req: VercelRequest, res: VercelResponse) {
  return app(req as any, res as any);
}
