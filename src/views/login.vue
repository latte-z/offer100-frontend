<style lang="less">
@import './login.less';
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="bg-caption pull-bottom">
            <h1>
                Welcome
            </h1>
            <p>
                <br> Copyright of respective owner, otherwise © 2017-2018 Offer100.
            </p>
        </div>
        <!-- Login mod -->
        <div class="login-con">
            <Card :bordered="false" shadow>
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请使用邮箱登录">
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
                            <Button @click="handleSubmit" type="primary" style="margin-left:65px;">登录</Button>
                            <Button @click="registSwitch" type="success" style="margin-left:20px;">注册</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">测试：admin，enterprise，user对应三种用户；密码随意</p>
                    <p class="login-tip" v-show="!(this.status === 0)">{{ msg }}</p>
                </div>
            </Card>
        </div>

        <!-- Regist mod -->
        <div class="register-con" :class="{dn:!registToggle}" style="z-index:5">
            <Card :bordered="false" shadow>
                <p slot="title" style="height:auto;">
                    注册用户类型：
                    <RadioGroup v-model="usertype" type="button">
                        <Radio label="个人"></Radio>
                        <Radio label="企业"></Radio>
                    </RadioGroup>
                </p>
                <div class="form-con">
                    <Form :label-width="80" ref="registForm" :model="user" :rules="rulesReg">
                        <FormItem label="邮箱" prop="email">
                            <Input v-model="user.email" type="email" placeholder="example@abc.com"></Input>
                        </FormItem>
                        <FormItem label="密码" prop="password">
                            <Input v-model="user.password" type="password" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="密码确认" prop="repassword">
                            <Input v-model="user.repassword" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="用户名" prop="username">
                            <Input v-model="user.username" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="性别" prop="gender">
                            <RadioGroup v-model="user.gender">
                                <Radio label="男"></Radio>
                                <Radio label="女"></Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="手机" prop="phone">
                            <Input v-model="user.phone" placeholder=""></Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleRegist" type="success" style="margin-left:35px">注册</Button>
                            <Button @click="registSwitch" type="primary" style="margin-left:20px">返回</Button>
                        </FormItem>
                    </Form>
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
            // loginUrl: 'http://192.168.43.189:8080/templete-webmvc/login',
            loginUrl: 'http://www.mocky.io/v2/5a5ca3ff2e0000e4119f83a9',
            loginMsg: '',
            loginStatus: '',
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

            // 注册部分内容
            registToggle: false,
            usertype: '个人',
            userRegistUrl: '',
            enterpriseRegistUrl: '',
            registMsg: '',
            registStatus: '',
            user: {
                email: '',
                password: '',
                repassword: '',
                username: '',
                gender: '男',
                phone: ''
            },
            rulesReg: {
                email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' }
                ],
                repassword: [
                    { required: true, message: '' }
                ]
            }
        };
    },
    methods: {
        // 登录事件处理
        handleSubmit () {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    // 0:guest 1:admin 2:enterprise 3:user
                    // axios send login post request
                    this.$axios.post(this.loginUrl, qs.stringify(this.form))
                        .then(response => {
                            this.loginMsg = response.data.msg
                            this.loginStatus = response.data.status
                            if (this.loginStatus === 0) {
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
        },
        // 提交注册信息
        handleRegist () {
            var url = (usertype === '个人') ? this.userRegistUrl : this.enterpriseRegistUrl;
            this.$refs.registForm.validate((valid) => {
                if (valid) {
                    this.$axios.post(url, qs.stringify(this.user))
                        .then(response => {
                            this.registMsg = response.data.msg;
                            this.registStatus = response.data.registStatus;
                            if (this.registStatus === 0) {

                            }
                        })
                }
            })
        },
        // 切换注册mod显示状态
        registSwitch () {
            return this.registToggle = !this.registToggle;
        }
    }
};
</script>

<style>

</style>
