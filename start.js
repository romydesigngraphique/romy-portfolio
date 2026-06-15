import { serve } from "bun";
import { join } from "path";
import { existsSync } from "fs";

const clientDir = join(import.meta.dir, "dist/client");

serve({
  port: process.env.PORT || 3000,
  async fetch(req) {
    const url = new URL(req.url);
    const filePath = join(clientDir, url.pathname);
    
    if (existsSync(filePath) && !url.pathname.endsWith("/")) {
      return new Response(Bun.file(filePath));
    }
    
    // Fall through to SSR
    const { default: server } = await import("./dist/server/server.js");
    return server.fetch(req);
  }
});