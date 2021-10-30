import Layout from '@/layout';
export default {
  path: '/accounts',
  component: Layout,
  meta: {
    title: 'My Accounts',
    icon: 'icon-qianbao2'
  },
  children: [
    {
      path: '',
      name: 'Accounts',
      component: () => import('@/views/accounts'),
      meta: { title: 'Accounts' }
    },
    {
      path: ':accountId',
      name: 'AccountInfo',
      component: () => import('@/views/accounts/pages/info'),
      meta: { title: 'AccountInfo' }
    }
  ]
};
