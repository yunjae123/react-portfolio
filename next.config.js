/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
    webpack: (config) => {
      config.resolve.fallback = {
        fs: false,   // Prevents `fs` module resolution issues (used for file system)
        path: false, // Prevents `path` resolution issues
        os: false,   // Prevents `os` resolution issues
      };
      return config;
    },
  };
  
  module.exports = nextConfig;
  