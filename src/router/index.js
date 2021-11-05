/* 
Imports and config
*/
    // Vue
    import Vue from 'vue';
    import VueRouter from 'vue-router';
    Vue.use(VueRouter);
//

/* 
Router definitions
*/
    // Routes collection
    const routes = [
        {
            path: '/',
            name: 'HomeView',
            component: () => import('../views/HomeView.vue'),
        },
    ]

    // Create router
    const router = new VueRouter({
        mode: 'history',
        routes
    })
//

/* 
Export Router
*/
    export default router
//