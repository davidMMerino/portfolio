const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  output: 'export',
  basePath: isProd ? '/portfolio' : '',  // Ajusta la ruta base si es necesario
  assetPrefix: isProd ? '/portfolio/' : '',  // También ajusta el prefijo de los assets
  images: {
    unoptimized: true, // Desactiva la optimización de imágenes si es necesario
  },
};