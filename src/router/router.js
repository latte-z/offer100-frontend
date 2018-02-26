import Main from '@/views/Main.vue';

// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: 'Login - 登录'
    },
    component: () => import('@/views/login.vue')
};

export const page404 = {
    path: '/*',
    name: 'error-404',
    meta: {
        title: '404-页面不存在'
    },
    component: () => import('@/views/error-page/404.vue')
};

export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        //  home index
        {
            path: 'home',
            title: '首页',
            name: 'home_index',
            component: () => import('@/views/home/home.vue')
        },
        // private message page
        {
            path: 'message',
            title: '消息中心',
            name: 'message_index',
            component: () => import('@/views/message/message.vue')
        },
        // main page search component
        {
            path: 'search',
            name: 'search_index',
            title: '搜索',
            component: () => import('@/views/search/search.vue')
        }
    ]
};

// 作为Main组件的子页面展示并且在左侧菜单显示的路由写在appRouter里
export const appRouter = [
    {
        path: '/enterprise',
        icon: 'briefcase',
        title: '企业管理',
        access: 2,
        name: 'enterprise',
        component: Main,
        children: [
            {
                path: 'register',
                icon: 'plus',
                title: '企业注册',
                access: 0,
                name: 'enterprise_register',
                component: () => import('@/views/enterprise/register.vue')
            },
            {
                path: 'account',
                icon: 'locked',
                title: '账户管理',
                name: 'enterprise_account',
                component: () => import('@/views/enterprise/account.vue')
            },
            {
                path: 'qualification',
                icon: 'ribbon-b',
                title: '资质认证',
                name: 'enterprise_qualification',
                component: () => import('@/views/enterprise/qualification.vue')
            },
            {
                path: 'enterprise_resume',
                icon: 'ios-paper',
                title: '简历管理',
                name: 'enterprise_resume',
                component: () => import('@/views/enterprise/resume.vue')
            },
            {
                path: 'job',
                icon: 'social-codepen',
                title: '岗位管理',
                name: 'enterprise_job',
                component: () => import('@/views/enterprise/job.vue')
            }
        ]
    },
    {
        path: '/user',
        icon: 'person',
        title: '用户中心',
        access: 3,
        name: 'user',
        component: Main,
        children: [
            {
                path: 'register',
                icon: 'plus',
                title: '用户注册',
                name: 'user_register',
                access: 0,
                component: () => import('@/views/user/register.vue')
            },
            {
                path: 'account',
                icon: 'locked',
                title: '账户管理',
                name: 'user_account',
                component: () => import('@/views/user/account.vue')
            },
            {
                path: 'resume',
                icon: 'ios-paper',
                title: '个人简历',
                name: 'user_resume',
                component: () => import('@/views/user/resume.vue')
            },
            {
                path: 'favorite',
                icon: 'android-star',
                title: '个人收藏',
                name: 'user_favorite',
                component: () => import('@/views/user/favorite.vue')
            }
        ]
    },
    {
        path: '/proservice',
        icon: 'cube',
        title: '职场服务',
        access: 3,
        name: 'proservice',
        component: Main,
        children: [
            {
                path: 'write',
                icon: 'edit',
                title: '简历编写',
                name: 'resume_write',
                component: () => import('@/views/proservice/resume_write.vue')
            },
            {
                path: 'guide',
                icon: 'help-buoy',
                title: '简历指导',
                name: 'resume_guide',
                component: () => import('@/views/proservice/resume_guide.vue')
            },
            {
                path: 'experience',
                icon: 'lightbulb',
                title: '个人案例',
                name: 'personal_experience',
                component: () =>
                    import('@/views/proservice/personal_experience.vue')
            },
            {
                path: 'qna',
                icon: 'ios-help',
                title: '问题咨询',
                name: 'question_answer',
                component: () =>
                    import('@/views/proservice/question_answer.vue')
            }
        ]
    },
    {
        path: '/system',
        icon: 'settings',
        title: '系统管理',
        access: 1,
        name: 'system',
        component: Main,
        children: [
            {
                path: 'enterprise-manager',
                icon: 'close',
                title: '企业管理',
                name: 'enterprise_manager',
                component: () => import('@/views/system/enterprise_manager.vue')
            },
            {
                path: 'message',
                icon: 'chatbox',
                title: '消息管理',
                name: 'message_manager',
                component: () => import('@/views/system/message_manager.vue')
            },
            {
                path: 'analysis',
                icon: 'ios-analytics',
                title: '数据分析',
                name: 'data_analysis',
                component: () => import('@/views/system/data_analysis.vue')
            }
        ]
    }
];

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
    loginRouter,
    otherRouter,
    ...appRouter,
    page500,
    page403,
    page404
];
