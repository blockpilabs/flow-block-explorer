import Layout from '@/layout';
export default {
  path: '/dashboard',
  component: Layout,
  meta: { title: 'Dashboard' },
  children: [
    {
      path: '',
      name: 'Dashboard',
      component: () => import('@/views/home'),
      meta: { title: 'Dashboard' }
    }
  ]
};
