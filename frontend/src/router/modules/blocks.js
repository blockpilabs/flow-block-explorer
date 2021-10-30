import Layout from '@/layout';
export default {
  path: '/blocks',
  component: Layout,
  meta: { title: 'Blocks' },
  children: [
    {
      path: '',
      name: 'Blocks',
      component: () => import('@/views/blocks'),
      meta: { title: 'Blocks' }
    },
    {
      path: ':blockId',
      name: 'BlockInfo',
      component: () => import('@/views/blocks/pages/info'),
      meta: { title: 'BlockInfo' }
    }
  ]
};
