import { h, App } from 'vue'
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'

export default {
  ...DefaultTheme,
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }
    // 扩展样式
    return h(DefaultTheme.Layout, props)
  }
}