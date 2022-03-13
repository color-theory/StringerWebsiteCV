import { build } from 'esbuild';
import { lessLoader } from 'esbuild-plugin-less';

build({
  entryPoints: ['src/index.js'],
  bundle: true,
  outdir: 'dist/output.js',
  plugins: [lessLoader()],
  loader: {
    '.js': 'jsx',
  },
});