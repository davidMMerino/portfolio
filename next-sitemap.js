/* eslint-env node */
export const siteUrl = 'https://davidmmerino.github.io/portfolio'; // Ajusta con la URL de tu despliegue en GitHub Pages.
export const exclude = ['/404*', '/500*'];

export async function transform(config, path) {
  return {
    loc: `${siteUrl}${path}`, // Asegura que las rutas completas incluyan el siteUrl.
    changefreq: config.changefreq,
    priority: path === '/' ? 1 : config.priority,
    lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
  };
}

export const generateRobotsTxt = true;

export const robotsTxtOptions = {
  policies: [
    {
      userAgent: '*',
      allow: '/',
    },
    {
      userAgent: '*',
      disallow: ['/404', '/500'], // Excluye estas páginas de los robots.
    },
  ],
};
