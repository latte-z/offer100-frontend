<style lang="less">
@import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="bg-caption pull-bottom">
            <h1>
                这里是大标题 H1
            </h1>
            <p>
                <br> Copyright of respective owner, otherwise © 2017-2018 Offer100.
            </p>
        </div>
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                            <span slot="prepend">
                                <Icon :size="16" type="person"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                            <span slot="prepend">
                                <Icon :size="14" type="locked"></Icon>
                            </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">测试：admin，enterprise，user对应三种用户；密码随意</p>
                    <p class="login-tip" v-show="!(this.status === 0)">{{ msg }}</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
export default {
    data () {
        return {
            form: {
                userName: '',
                password: ''
            },
            rules: {
                userName: [
                    { required: true, message: '账号不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ]
            },
            // loginUrl: 'http://192.168.43.189:8080/templete-webmvc/login',
            loginUrl: 'http://www.mocky.io/v2/5a5ca3ff2e0000e4119f83a9',
            msg: '',
            status: ''
        };
    },
    methods: {
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    // 0:guest 1:admin 2:enterprise 3:user
                    // axios send login post request
                    this.$axios.post(this.loginUrl, qs.stringify(this.form))
                        .then(response => {
                            this.msg = response.data.msg
                            this.status = response.data.status
                            if (this.status === 0) {
                                // set user token
                                localStorage.setItem('token', response.data.msg)
                                localStorage.setItem('username', this.form.userName)
                                this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg')
                                // set user role
                                if (response.data.accsss === 'admin') {
                                    localStorage.setItem('access', 1)
                                } else if (response.data.accsss === 'enterprise') {
                                    localStorage.setItem('access', 2)
                                } else {
                                    localStorage.setItem('access', 3)
                                }
                                this.$router.push({
                                    name: 'home_index'
                                });
                            }
                        })
                        .catch(function (error) {
                            console.log(error)
                        })
                }
            });
        }
    }
};
</script>

<style>

</style>
