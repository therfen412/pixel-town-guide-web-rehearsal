export const siteConfig = {
  resident: {
    name: "星野",
    role: "像素园艺师",
    plot: {
      town: "像素小镇",
      number: "12",
      coordinates: "X12, Y08",
      type: "花园地块",
      phase: "开放参观",
    },
    status: "正在种植会发光的像素花",
    introduction:
      "这是用于建站指南技术预演的虚构居民资料，只展示公开的示例内容。",
  },
  navigation: [
    { label: "首页", href: "/" },
    { label: "文章", href: "/#posts" },
    { label: "建站指南", href: "/guide/" },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/" },
    { label: "返回像素小镇", href: "https://example.com/" },
  ],
  seo: {
    title: "星野的像素花园",
    description: "建站指南网页路线的公开技术预演网站。",
  },
} as const;

export type SiteConfig = typeof siteConfig;
