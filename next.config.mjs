/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        'lh3.googleusercontent.com',  // For Google profile pictures
        `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.appspot.com`,  // For Firebase Storage
      ],
    },
  }
  
  export default nextConfig;