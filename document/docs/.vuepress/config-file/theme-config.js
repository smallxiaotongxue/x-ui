module.exports = {
  nav: [
    { text: "主页", link: "/" },
  ], // 添加导航栏
  sidebar: {
    '/pages/': [
      '',
      {
        title:'组件 Components',
        collapsable: true,
        children:[
          'button'
        ]
      },

    ]
  },
  sidebarDepth: 2,
  // 最后更新时间
  lastUpdated: "Last Updated", // string | boolean
}
