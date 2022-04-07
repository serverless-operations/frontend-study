import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        // デフォルト値はViteの特別な値'modules'
        // 他に設定可能な値はesbuildに準拠
        // https://esbuild.github.io/api/#target
        // target: 'modules',
        target: 'chrome54',
    },
});
