export default {
  title: 'Guard UI',
  base: '/test-vitepress/',
  themeConfig: {
    siteTitle: 'Guard UI',

    algolia: {
      appId: 'XO4ITI7GEQ',
      apiKey: '7175502f11c76d375047ebea8b71e9ac',
      indexName: 'guardui'
    },

    nav: [
      { text: 'Guide', link: '/guide/'},
      { text: 'Component', link: '/component/' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lancemao/guardui' }
    ],

    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Playground', link: '/guide/playground' },
            { text: 'Background Image', link: '/guide/background-image' },
            { text: 'Accent Color', link: '/guide/accent-color' },
          ]
        },
        {
          text: 'More Pages',
          items: [
            { text: 'Guard Router', link: '/guide/router' },
            { text: 'Register', link: '/guide/register' },
            { text: 'Reset Password', link: '/guide/reset-password' },
            { text: 'Advanced Login', link: '/guide/advanced-login' },
            { text: 'Advanced Register', link: '/guide/advanced-register' },
          ]
        },
        {
          text: 'Methods',
          collapsible: true,
          items: [
            { text: 'Initialize', link: '/guide/methods/initialize' },
            { text: 'Logout', link: '/guide/methods/logout' },
            { text: 'Handle Events', link: '/guide/methods/handle-events' },
            { text: 'Get User Info', link: '/guide/methods/get-user-info' },
            { text: 'Check Login Status', link: '/guide/methods/check-login-status' },
            { text: 'Change Language', link: '/guide/methods/change-language' },
          ]
        },
        {
          text: 'Case Study',
          items: [
            { text: 'Coca-Cola', link: '/guide/case-study/coca-cola' },
          ]
        },
      ],

      '/component/': [
        {
          text: 'General',
          collapsible: true,
          items: [
            {
              text: 'Element', link: '/component/element'
            },
            {
              text: 'Text', link: '/component/text'
            },
            {
              text: 'Button', link: '/component/button'
            },
            {
              text: 'Input', link: '/component/input'
            },
            {
              text: 'Image', link: '/component/image'
            }
          ]
        },
        {
          text: 'Authentication',
          collapsible: true,
          items: [
            {
              text: 'Guard', link: '/component/guard'
            },
            {
              text: 'GuardContainer', link: '/component/guard-container'
            },
            {
              text: 'AppLogo', link: '/component/app-logo'
            },
            {
              text: 'AppName', link: '/component/app-name'
            },
            {
              text: 'AccountInput', link: '/component/account-input'
            },
            {
              text: 'PasswordInput', link: '/component/password-input'
            },
            {
              text: 'LoginButton', link: '/component/login-button'
            },
            {
              text: 'ErrorText', link: '/component/error-text'
            }
          ]
        }
      ],

      '/apis/': [
        {
          text: 'Authentication',
          collapsible: true,
          items: [
            {
              text: 'Login by Username', link: ''
            },
            {
              text: 'Login by Email', link: ''
            },
            {
              text: 'Login by Phone Number', link: ''
            }
          ]
        },
        {
          text: 'Social',
          collapsible: true,
          items: [
            {
              text: 'Login by Wechat', link: ''
            }
          ]
        },
        {
          text: 'Scan',
          collapsible: true,
          items: [
            {
              text: 'Generate QR code', link: ''
            }
          ]
        },
        {
          text: 'MFA',
          collapsible: true,
          items: [
            {
              text: 'Email Verification', link: ''
            }
          ]
        }
      ]
    },

    footer: {
      message: 'Released under the MIT License.'
    }
  }
}
