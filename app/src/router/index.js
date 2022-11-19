import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Main from '../views/Main'
import Mall from '../views/Mall'
import PageOne from '../views/PageOne'
import PageTwo from '../views/PageTwo'

const routes = [

    {
        path: '/',
        redirect: '/home',
        component: Main,
        children: [
            { path: 'home', name: 'home', component: Home, },
            { path: 'user', name: 'user', component: User },
            { path: 'mall', name: 'mall', component: Mall },
            { path: 'page1', name: 'page1', component: PageOne },
            { path: 'page2', name: 'page2', component: PageTwo },
        ]
    }



]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter)

export default router