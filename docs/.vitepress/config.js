// @ts-check

/** @type {import('vitepress').UserConfig} */

import { enNavbar } from './config/navbar/en'
import { jaNavbar } from './config/navbar/ja'
import { enSidebar } from './config/sidebar/en'
import { jaSidebar } from './config/sidebar/ja'

const config = {
  title: 'VitePress Playground',
  themeConfig: {
    nav: jaNavbar,
    sidebar: jaSidebar,
    locales: {
      '/en/': {
        nav: enNavbar,
        sidebar: enSidebar,
      }
    },
    localeLinks: {
      text: 'Language',
      items: [
        { text: 'English', link: '/en/' },
        { text: '日本語', link: '/' },
      ]
    }
  },

  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'VuePressJP',
      description: 'ドキュメント'
    },
    '/en/': {
      lang: 'en-US',
      title: 'VuePress',
      description: 'Documentation'
    }
  }
}

module.exports = config
