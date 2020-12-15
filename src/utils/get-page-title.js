import defaultSettings from '@/settings'

const title = defaultSettings.title || '大数据期末汇报'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
