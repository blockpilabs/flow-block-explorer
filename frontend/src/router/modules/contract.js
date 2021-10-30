
import Layout from '@/layout';
export default {
  path: '/contract',
  component: Layout,
  hidden: true,
  meta: { title: 'Contract' },
  children: [
    {
      path: ':contract_id',
      name: 'Contract',
      component: () => import('@/views/contract'),
      meta: { title: 'Contract' }
    },
    { path: '*', redirect: '/404', hidden: true }
  ]
};
