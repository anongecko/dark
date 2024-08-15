/** @type {import('next').NextConfig} */
const nextConfig = {
  serverRuntimeConfig: {
    PORT: 3000,
  },

  // No longer needed with Next.js App Router
  // experimental: {
  //   appDir: true,
  // },

  // Removed since routing is automatically handled in the app directory
  // routes: async () => {
  //   return [
  //     {
  //       src: '/',
  //       page: '/app/page', 
  //     },
  //     {
  //       src: '/sign-in',
  //       page: '/app/sign-in/page',
  //     },
  //   ];
  // },
};

export default nextConfig;
