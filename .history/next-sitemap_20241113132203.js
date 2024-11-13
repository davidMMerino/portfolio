/* eslint-env node */
export const siteUrl = 'reactresume.com';
export const exclude = ['/404*', '/500*'];
export async function transform(config, path) {
  return {
    loc: path,
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
      disallow: ['/404', '/500'],
    },
  ],
};
