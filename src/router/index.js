import modules from './modules/router.js'
import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store'

Vue.use(Router)

const router = new Router({
    routers: [...modules] // 路由表
})

routers.beforeEach((to, from, next) => {
    // if(store.state.userNmae)
})
routers.afterEach((to, from) => {

})

export default router
