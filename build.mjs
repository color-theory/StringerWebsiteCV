import { build } from 'esbuild';
import { lessLoader } from 'esbuild-plugin-less';
import fs from 'fs';
import fse from 'fs-extra';

build({
  entryPoints: ['./src/index.js'],
  bundle: true,
  minify: true,
  outdir: 'dist',
  plugins: [lessLoader()],
  loader: {
    '.js': 'jsx',
  },
});

fs.copyFile( './src/index.html', './dist/index.html',0,()=>{})
fs.copyFile( './src/robots.txt', './dist/robots.txt',0,()=>{})
fse.copySync( './src/img', './dist/img',()=>{})
fs.copyFile( './src/img/john-sq.jpg', './dist/img/john-sq.jpg',0,()=>{})