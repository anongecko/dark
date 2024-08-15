/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enable strict mode for React
  swcMinify: true, // Use SWC for faster builds
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: 'ts-loader',
          options: {
            transpileOnly: true, // Faster builds, but disables type checking during build
          },
        },
      ],
      exclude: /node_modules/,
    });

    config.resolve.extensions = ['.tsx', '.ts', '.js']; 
    config.resolve.modules.push('./src');
    return config;
  },
};

// Export the nextConfig object
export default nextConfig;
