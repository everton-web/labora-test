/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site estático: `npm run build` gera a pasta `out/`, que sobe na Hostinger (public_html).
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
