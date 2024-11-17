// next.config.js

const isProd = process.env.NODE_ENV === 'production';
module.exports = {
    output: 'export',  // Activa la exportación estática
    images: {
      unoptimized: true,  // Desactiva la optimización de imágenes (si es necesario)
    },
    basePath: isProd ? '/portfolio' : '',
    assetPrefix: isProd ? '/portfolio' : '',
  };
  