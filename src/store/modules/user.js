const user = {
    state: {
        userid: '',
        usertype: ''
    },
    mutations: {
        setUserId (state, id) {
            state.userid = id;
        },
        setUserType (state, type) {
            state.usertype = type;
        },
        logout (state, vm) {
            localStorage.removeItem('username');
            localStorage.removeItem('token');
            localStorage.removeItem('access');
        }
    }
};

export default user;
