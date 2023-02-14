import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = './dist';
const srcFolder = './src';

export const path = {
  build: {
    images: `${buildFolder}/img/`,
    js: `${buildFolder}/js/`,
    css: `${buildFolder}/css/`,
    files: `${buildFolder}/files`,
    html: `${buildFolder}/`,
    fonts: `${buildFolder}/fonts/`,
  },
  src: {
    images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${srcFolder}/img/**/*.svg`,
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/style.scss`,
    html: `${srcFolder}/*.html`,
    files: `${srcFolder}/files/**/*.*`,
    svgsprite: `${srcFolder}/svgicons/**/*.svg`,
  },
  watch: {
    js: `${srcFolder}/js/**/*.js`,
    scss: `${srcFolder}/scss/*.scss`,
    images: `${srcFolder}/img/**/*.{svg,ico,jpg,jpeg,png,gif,webp}`,
    html: `${srcFolder}/**/*.html`,
    files: `${srcFolder}/files/**/*.*`,
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  srcFolder: srcFolder,
  rootFolder: rootFolder,
  ftp: 'project_folder_on_server',
};
