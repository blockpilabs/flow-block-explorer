import Layout from '@/layout';
export default {
  path: '/transactions',
  component: Layout,
  meta: { title: 'Transactions' },
  children: [
    {
      path: '',
      name: 'Transactions',
      component: () => import('@/views/transactions'),
      meta: { title: 'Transactions' }
    },
    {
      path: ':transactionId',
      name: 'TransactionInfo',
      component: () => import('@/views/transactions/pages/info'),
      meta: { title: 'TransactionInfo' }
    }
  ]
};
