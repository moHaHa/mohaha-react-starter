import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import presetAttributify from '@unocss/preset-attributify'
import presetIcons from '@unocss/preset-icons'
import presetUno from '@unocss/preset-uno'
import checker from 'vite-plugin-checker'
import presetTheme from 'unocss-preset-theme'
import type { Theme } from 'unocss/preset-uno'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS<Theme>({
      shortcuts: [
        { logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180' },
      ],
      presets: [
        presetUno(),
        presetTheme<Theme>({
          theme: {
            // Configure dark themes
            dark: {
              colors: {
                'primary': '#fd1ddc',
                'primary-border': '#d668dc',
                'border': '#888888',
                'container': '#141414',
                'text': 'rgba(255, 255, 255, 0.85)',
              },
            },
            light: {
              colors: {
                'primary': '#15736c',
                'primary-border': '#25736c',
                'border': '#666666',
                'container': '#eaeaea',
                'text': '#222222',
              },
            },
            sky: {
              colors: {
                'primary': '#156fec',
                'primary-border': '#1283dc',
                'border': '#666666',
                'container': '#eaeaea',
                'text': '#222222',
              },
            },
            // Configure compact themes
            compact: {
              spacing: {
                xss: '2px',
                xs: '4px',
                sm: '6px',
                base: '8px',
                lg: '12px',
                xl: '16px',
              },
            }
          }
        }),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            'display': 'inline-block',
            'vertical-align': 'middle',
          },
        }),
      ],
    }),
    React(),
    checker({typescript : true}),
  ],
})
