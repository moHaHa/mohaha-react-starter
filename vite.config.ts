import React from '@vitejs/plugin-react';
import Unocss from 'unocss/vite';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [Unocss(), React(), checker({ typescript: true })],
});
