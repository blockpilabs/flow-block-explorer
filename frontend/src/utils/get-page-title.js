import defaultSettings from '@/settings';

const title = defaultSettings.title || 'Flow';

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
