// ==========================================
// 后端数据配置中心
// 修改此处即可更新网站内容，无需触碰前端代码
// ==========================================

const BackendData = {
    // 1. 网站基础设置
    siteConfig: {
        title: "我的极简导航",
        description: "极速、清爽的个人起始页",
        defaultSearch: "baidu", // 默认搜索引擎: google, bing, baidu
        theme: "auto" // auto, light, dark
    },

    // 2. 搜索引擎配置
    searchEngines: [
        { key: "baidu", name: "百度", url: "https://www.baidu.com/s?wd=", placeholder: "百度一下，你就知道" },
        { key: "google", name: "Google", url: "https://www.google.com/search?q=", placeholder: "Google 搜索" },
        { key: "bing", name: "Bing", url: "https://www.bing.com/search?q=", placeholder: "微软 Bing 搜索" },
        { key: "github", name: "GitHub", url: "https://github.com/search?q=", placeholder: "搜索代码仓库" }
    ],

    // 3. 导航数据 (分类 -> 链接列表)
    categories: [
        {
            id: "recommend",
            name: "常用推荐",
            links: [
                { title: "Google", url: "https://www.google.com", desc: "全球搜索", icon: "🔍" },
                { title: "GitHub", url: "https://github.com", desc: "开源社区", icon: "💻" },
                { title: "YouTube", url: "https://www.youtube.com", desc: "视频平台", icon: "▶️" },
                { title: "ChatGPT", url: "https://chatgpt.com", desc: "AI 智能助手", icon: "🤖" }
            ]
        },
        {
            id: "dev",
            name: "开发工具",
            links: [
                { title: "StackOverflow", url: "https://stackoverflow.com", desc: "技术问答", icon: "S" },
                { title: "MDN Web Docs", url: "https://developer.mozilla.org", desc: "Web 开发文档", icon: "M" },
                { title: "Vercel", url: "https://vercel.com", desc: "前端部署", icon: "▲" },
                { title: "Figma", url: "https://www.figma.com", desc: "在线协作设计", icon: "F" }
            ]
        },
        {
            id: "media",
            name: "娱乐媒体",
            links: [
                { title: "Bilibili", url: "https://www.bilibili.com", desc: "弹幕视频网", icon: "B" },
                { title: "Netflix", url: "https://www.netflix.com", desc: "流媒体剧集", icon: "N" },
                { title: "Spotify", url: "https://open.spotify.com", desc: "音乐流媒体", icon: "S" },
                { title: "Twitter", url: "https://twitter.com", desc: "实时热点", icon: "X" }
            ]
        }
    ]
};