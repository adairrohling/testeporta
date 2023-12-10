/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      serverActions: {
        allowedOrigins: ["xxxx.com", "localhost:3000"],
      },
    },
  }
//  experimental.serverActions.allowedOrigins: ["https://nextjs-14-0-2-bug-report-4ea064a57303.herokuapp.com"]
//  serverActions: { allowedOrigins: ["xxxx.com", "localhost:3001"], }
// from https://github.com/vercel/next.js/issues/58295

module.exports = nextConfig