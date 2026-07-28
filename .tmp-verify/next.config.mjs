/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Turbopack's on-disk dev cache (default-on in Next 16) goes stale on
    // this WSL2 + Windows-drive (/mnt/d) setup: drvfs emits no file-change
    // events, so after sources change between runs the cache references
    // chunks that no longer exist and every restart hits
    // "ChunkLoadError: Failed to load chunk server/chunks/ssr/...".
    // Cold-compiling each `next dev` start is a few seconds slower but
    // never corrupts.
    turbopackFileSystemCacheForDev: false,
  },
};

export default nextConfig;
