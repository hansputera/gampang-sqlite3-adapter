import {defineConfig} from 'tsup';

export default defineConfig({
    entry: ['./src/index.ts'],
    bundle: true,
    minify: true,
    target: ['node14', 'node16'],
    platform: 'node',
    dts: true,
    outDir: 'dist',
});
