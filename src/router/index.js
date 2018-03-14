import Vue from 'vue';
import iView from 'iview';
import Util from '../libs/util';
import VueRouter from 'vue-router';
import { routers, otherRouter, appRouter } from './router';

Vue.use(VueRouter);

// 路由配置
const RouterConfig = {
    // mode: 'history',
    routes: routers
};

export const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    const curRouterObj = Util.getRouterObjByName(
        [otherRouter, ...appRouter],
        to.name
    );
    if (curRouterObj && curRouterObj.access !== undefined) {
        // 需要判断权限的路由
        if (
            curRouterObj.access.indexOf(localStorage.getItem('usertype')) !== -1
        ) {
            Util.toDefaultPage(
                [otherRouter, ...appRouter],
                to.name,
                router,
                next
            ); // 如果在地址栏输入的是一级菜单则默认打开其第一个二级菜单的页面
        } else {
            next({
                replace: true,
                name: 'error-403'
            });
        }
    } else {
        if (localStorage.getItem('username') && localStorage.getItem('usertoken') && to.name === 'login') { // 判断是否已经登录且前往的是登录页
            Util.title();
            next({
                name: 'home_index'
            });
        }
        // 没有配置权限的路由, 直接通过
        Util.toDefaultPage([...routers], to.name, router, next);
    }
});

router.afterEach(to => {
    Util.openNewPage(router.app, to.name, to.params, to.query);
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});
