import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import ViewRecord from '@/components/ViewRecord'
import NewRecord from '@/components/NewRecord'
import EditRecord from '@/components/EditRecord'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard 
    },
    {
      path: '/new',
      name: 'new-record',
      component: NewRecord 
    },
    {
      path: '/:farmer_id',
      name: 'view-record',
      component: ViewRecord 
    },
    {
      path: '/edit/:farmer_id',
      name: 'edit-record',
      component: EditRecord 
    }
  ]
})
