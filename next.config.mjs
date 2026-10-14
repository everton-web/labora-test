/** @type {import('next').NextConfig} */
const nextConfig = {
  // Site estático: `npm run build` gera a pasta `out/`, que sobe na Hostinger (public_html).
  output: 'export',
  // Vazio no site próprio. Em subpasta (ex.: relatório na Asymmetrics), BASE_PATH=/caminho.
  basePath: process.env.BASE_PATH || '',
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
