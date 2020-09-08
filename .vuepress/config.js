module.exports = {
  "title": "blog",
  "description": "博客",
  "dest": "dist",
  "base": "/blog/",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ]
  ],
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文档",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          },
          {
            "text": "学习",
            "link": "/docs/study/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-account",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/wyh1",
            "icon": "reco-github"
          },
          {
            "text": "GitEE",
            "link": "https://gitee.com/wyh2",
            "icon": "reco-mayun"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    "friendLink": [
      {
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      },
      {
        "title": "vuepress-theme-reco",
        "desc": "A simple and beautiful vuepress Blog & Doc theme.",
        "avatar": "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        "link": "https://vuepress-theme-reco.recoluan.com"
      }
    ],
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "user",
    "authorAvatar": "/avatar.png",
    "record": "xxxx",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
  plugins: [
    [
      "cursor-effects",
      {
        size: 2,            // size of the particle, default: 2
        shape: 'star',      // shape of the particle, default: 'star'
        zIndex: 9   // z-index property of the canvas, default: 999999999
      }
    ],
    [
      'vuepress-plugin-comment',
      {
        choosen: 'valine', 
        // options选项中的所有参数，会传给Valine的配置
        options: {
          el: '#valine-vuepress-comment',
          appId: 'JvtyXrKh59qScmPsHd0BlVw1-gzGzoHsz',
          appKey: 'J2MwtLKTTFyz8fCe8kPkYi51'
        }
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/favicon.ico",
        showText: "(/≧▽≦/)喔哟,你回来了！",
        hideIcon: "/favicon.ico",
        hideText: "(●—●)咦,人去哪啦?",
        recoverTime: 2000
      }
    ]
  ]
}