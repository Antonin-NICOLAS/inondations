import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
const isCodeSandbox = 'SANDBOX_URL' in process.env || 'CODESANDBOX_HOST' in process.env

export default {
    root: 'src/',
    publicDir: './src/medias/',
    base: './',
    server:
    {
        host: true,
        open: !isCodeSandbox // Open if it's not a CodeSandbox
    },
    plugins: [reactRefresh()],
    build: {
        outDir: resolve(__dirname, 'dist'),
        assetsDir: 'medias',
        emptyOutDir: true,
        chunkSizeWarningLimit: 2500,
        rollupOptions: {
          input: {
            main: resolve(__dirname, 'src/index.html'),
            inondations: resolve(__dirname, 'src/inondations.html'),
            apropos: resolve(__dirname, 'src/a-propos.html'),
            contact: resolve(__dirname, 'src/contacts.html'),
            error404: resolve(__dirname, 'src/404.html')
          },
        },
    },
}