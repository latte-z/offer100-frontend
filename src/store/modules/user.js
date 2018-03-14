const user = {
    state: {
        userid: '',
        usertype: 'visitor',
        username: '',
        usertoken: ''
    },
    mutations: {
        setUserId (state, id) {
            localStorage.setItem('userid', id);
        },
        setUserType (state, type) {
            // visitor user enterprise
            localStorage.setItem('usertype', type);
        },
        setUserName (state, name) {
            localStorage.setItem('username', name);
        },
        setUserToken (state, token) {
            localStorage.setItem('usertoken', token);
        },
        getUser () {
            // 用户id
            localStorage.getItem('userid');
            // 用户type visitor user enterprise
            localStorage.getItem('usertype');
            // 用户账户
            localStorage.getItem('username');
            // 用户token
            localStorage.getItem('usertoken');
        },
        logout (state, vm) {
            localStorage.removeItem('userid');
            localStorage.setItem('usertype', 'visitor');
            localStorage.removeItem('username');
            localStorage.removeItem('usertoken');
            // this.$axios.post('/login/exit/' + state.username);
        }
    }
};

export default user;
