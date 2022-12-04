import type { DefaultTheme } from 'vitepress'

export const enSidebar: DefaultTheme.Sidebar = {
  '/en/corporate/': [
    {
      text: 'Sidebar1',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Index',
          link: '/en/corporate/',
        },
        {
          text: 'Page 1',
          link: '/en/corporate/page1',
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
          link: '/en/corporate/page2',
        },
        {
          text: 'Page 3',
          link: '/en/corporate/page3',
        },
      ],
    },
  ],
  '/en/sales-partner/': [
    {
      text: 'Sidebar1',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Index',
          link: '/en/sales-partner/',
        },
        {
          text: 'Page 1',
          link: '/en/sales-partner/page1',
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
          link: '/en/sales-partner/page2',
        },
        {
          text: 'Page 3',
          link: '/en/sales-partner/page3',
        },
      ],
    },
  ],
}
