// import { defineConfig, loadEnv } from 'vite';
// import react from '@vitejs/plugin-react-swc';
// import svgr from 'vite-plugin-svgr';

// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');

//   return {
//     define: {
//       'process.env.BASE_URL': JSON.stringify(env.BASE_URL),
//     },
//     plugins: [react(), svgr()],
//     resolve: {
//       alias: {
//         src: '/src',
//         components: '/src/components',
//       },
//     },
//     base: '/easy-drive-ua',
//   };
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import 'dotenv/config';

export default defineConfig({
  define: {
    'process.env': process.env,
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
    },
  },
  base: '/easy-drive-ua',
});
