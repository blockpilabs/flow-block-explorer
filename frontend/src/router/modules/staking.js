import Layout from '@/layout';
export default {
  path: '/staking',
  component: Layout,
  meta: { title: 'Staking' },
  children: [
    {
      path: '',
      name: 'Staking',
      component: () => import('@/views/staking'),
      meta: { title: 'Staking' }
    }
  ]
};
