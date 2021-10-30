import Layout from '@/layout';
export default {
  path: '/settings',
  component: Layout,
  meta: { title: 'Settings', icon: 'icon-shezhi' },
  children: [
    {
      path: '',
      name: 'Settings',
      component: () => import('@/views/settings'),
      meta: { title: 'Settings' }
    },
    {
      path: 'logs',
      name: 'Logs',
      component: () => import('@/views/settings/pages/logs'),
      meta: { title: 'Logs' }
    }
  ]
};
