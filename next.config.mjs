const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/index.html',
        permanent: true, // or false if you prefer 302
      },
      {
        source: '/',
        destination: '/index.html',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
