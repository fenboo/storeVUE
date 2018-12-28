import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import IndexPage from '../pages/index'
import DeTailPage from '../pages/detail'
import OrderListPage from '../pages/orderList'
import DetailAnaPage from '../pages/detail/analysis'
import DetailCouPage from '../pages/detail/count'
import DetailForPage from '../pages/detail/forecast'
import DetailPubPage from '../pages/detail/publish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/',
      name: 'index',
      component: IndexPage	
    },
    {
		path: '/orderList',
		name: 'orderList',
		component: OrderListPage
	},
    {
      path: '/detail',
      name: 'detail',
      component: DeTailPage,
      redirect: '/detail/analysis',
	  children: [
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]

    }

  ]
})
