import Layout from '@/layout';
export default {
  path: '/faucet',
  component: Layout,
  meta: { title: 'Faucet', icon: 'icon-faucet' },
  children: [
    {
      path: '',
      name: 'Faucet',
      component: () => import('@/views/faucet'),
      meta: { title: 'Faucet' }
    }
  ]
};
