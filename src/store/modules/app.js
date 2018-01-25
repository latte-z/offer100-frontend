import {otherRouter, appRouter} from '@/router/router';

const app = {
    state: {
        currentPageName: '',
        routers: [
            otherRouter,
            ...appRouter
        ],
        messageCount: 0
    },
    mutations: {
        setCurrentPageName (state, name) {
            state.currentPageName = name;
        },
        setAvator (state, path) {
            localStorage.avatorImgPath = path;
        },
        setMessageCount (state, count) {
            state.messageCount = count;
        }
    }
};

export default app;
