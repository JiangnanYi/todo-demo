import Vue from 'vue'
import Router from 'vue-router'
import upt from './components/uptate/upt'
import insert from './components/insert/insert'

Vue.use(Router)

export default new Router({
  routes: [
    {
      	path: '/upt',
      	name: 'upt',
      	component: upt
    },
		{
				path: '/insert',
				name: 'insert',
				component: insert
		}
  ]
})
