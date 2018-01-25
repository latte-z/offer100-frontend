const user = {
    state: {},
    mutations: {
        logout (state, vm) {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            localStorage.removeItem('access');
        }
    }
};

export default user;
