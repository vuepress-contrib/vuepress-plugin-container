const name = 'vuepress-plugin-container'

module.exports = ({ isProd }) => ({
  base: `/${name}/`,

  theme: 'contrib',

  plugins: [
    ['container', {
      type: 'right',
      defaultTitle: '',
    }],
    ['container', {
      type: 'theorem',
      before: info => `<div class="theorem"><p class="title">${info}</p>`,
      after: '</div>',
    }],
  ],
  
  locales: {
    '/en/': {
      lang: 'en-US',
      title: name,
      description: 'A VuePress plugin that registers markdown containers',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: name,
      description: '一个用于注册 markdown 容器的 VuePress 插件',
    },
  },
  
  themeConfig: {
    sidebar: [
      '',
      'config.html',
    ],
  },

  evergreen: !isProd,
})
