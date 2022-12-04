import type { DefaultTheme } from 'vitepress'

export const jaSidebar: DefaultTheme.Sidebar = {
  '/ja/corporate/': [
    {
      text: 'Sidebar1',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Index',
          link: '/ja/corporate/',
        },
        {
          text: 'Page 1',
          link: '/ja/corporate/page1',
        },
      ],
    },
    {
      text: 'Sidebar2',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Page 2',
          link: '/ja/corporate/page2',
        },
        {
          text: 'Page 3',
          link: '/ja/corporate/page3',
        },
      ],
    },
  ],
  '/ja/sales-partner/': [
    {
      text: 'Sidebar1',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Index',
          link: '/ja/sales-partner/',
        },
        {
          text: 'Page 1',
          link: '/ja/sales-partner/page1',
        },
      ],
    },
    {
      text: 'Sidebar2',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Page 2',
          link: '/ja/sales-partner/page2',
        },
        {
          text: 'Page 3',
          link: '/ja/sales-partner/page3',
        },
      ],
    },
  ],
}
