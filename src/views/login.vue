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
                <RadioGroup v-model="logintype" type="button">
                    <Radio label="个人"></Radio>
                    <Radio label="企业"></Radio>
                </RadioGroup>
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
                    <!-- <p class="login-tip">测试：admin，enterprise，user对应三种用户；密码随意</p> -->
                    <p class="login-tip" v-show="!(this.loginStatus === 0)">{{ loginMsg }}</p>
                </div>
            </Card>
        </div>

        <!-- Regist mod -->
        <div class="register-con" :class="{dn:!registToggle}" style="z-index:5">
            <Card :bordered="false" shadow>
                <p slot="title" style="height:auto;">
                    注册用户类型：
                    <RadioGroup v-model="usertype" type="button" @on-change="setGender">
                        <Radio label="个人"></Radio>
                        <Radio label="企业"></Radio>
                    </RadioGroup>
                </p>
                <div class="form-con">
                    <Form :label-width="80" label-position="left" ref="registForm" :model="user" :rules="rulesReg">
                        <FormItem label="邮箱" prop="email">
                            <Input v-model="user.email" type="email" placeholder="example@abc.com"></Input>
                        </FormItem>
                        <FormItem label="密码" prop="password">
                            <Input v-model="user.password" type="password" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="密码确认" prop="repassword">
                            <Input v-model="user.repassword" type="password" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="用户名" prop="username">
                            <Input v-model="user.username" placeholder=""></Input>
                        </FormItem>
                        <FormItem label="性别" prop="gender" :class="{'dn':hasGender}">
                            <RadioGroup v-model="user.gender">
                                <Radio label="男"></Radio>
                                <Radio label="女"></Radio>
                            </RadioGroup>
                        </FormItem>
                        <FormItem label="手机" prop="phone">
                            <Input v-model="user.phone" placeholder=""></Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleRegist" type="success">注册</Button>
                            <Button @click="handleReset" type="warning" style="position:relative;margin-left:20px;">重置</Button>
                            <Button @click="registSwitch" type="primary" style="position:relative;margin-left:20px">返回</Button>
                        </FormItem>
                    </Form>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
export default {
    data () {
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('密码不能为空'));
            } else {
                if (this.user.repassword !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.registForm.validateField('repassword');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.user.password) {
                callback(new Error('两次输入的密码不相同'));
            } else {
                callback();
            }
        };
        return {
            loginUrl: 'http://localhost:8081/login/user/login',
            loginMsg: '',
            loginStatus: '',
            logintype: '个人',
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
            hasGender: false,
            userRegistUrl: 'http://localhost:8081/users',
            enterpriseRegistUrl: 'http://localhost:8081/enterprise/admin/enterprise',
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
                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
                    { type: 'email', message: '邮件格式不正确', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                repassword: [
                    { required: true, message: '重复输入密码不能为空', trigger: 'blur' },
                    { validator: validatePassCheck, trigger: 'blur' }
                ],
                username: [
                    { required: true, message: '用户名不能为空', trigger: 'blur' }
                ],
                gender: [
                    { required: true }
                ],
                phone: [
                    { required: true, message: '手机不能为空', trigger: 'blur' }
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
                    let usertype = this.logintype === '个人' ? 'user' : 'enterprise';
                    let postData = {
                        "type": usertype,
                        "username": this.form.userName,
                        "password": this.form.password
                    }
                    this.$axios.post(this.loginUrl, postData)
                        .then(response => {
                            this.loginMsg = response.data.msg;
                            // this.loginStatus = response.data.status;
                            if (response.data.msg !== '此用户不存在，请先注册') {
                                // set user token
                                // localStorage.setItem('token', response.data.msg);
                                localStorage.setItem('username', this.form.userName);
                                this.$store.commit('setAvator', 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3448484253,3685836170&fm=27&gp=0.jpg');
                                // set user role
                                if (response.data.type === 'admin') {
                                    localStorage.setItem('access', 1);
                                } else if (response.data.type === 'enterprise') {
                                    localStorage.setItem('access', 2);
                                } else {
                                    localStorage.setItem('access', 3);
                                }
                                this.$store.commit('setUserId', response.data.id);
                                this.$store.commit('setCurrentPageName', response.data.type);
                                this.$router.push({
                                    name: 'home_index'
                                });
                            } else {
                                this.$Message.info('登录失败，请检查用户名或密码');
                            }
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
                }
            });
        },
        // 提交注册信息
        handleRegist () {
            this.$refs.registForm.validate((valid) => {
                if (valid) {
                    var url = (this.usertype === '个人') ? this.userRegistUrl : this.enterpriseRegistUrl;
                    let postData = {};
                    if (this.usertype === '个人') {
                        postData = {
                            'email': this.user.email,
                            'password': this.user.password,
                            'username': this.user.username,
                            'sex': this.user.gender === '男' ? 0 : 1,
                            'phone': this.user.phone
                        };
                    } else {
                        postData = {
                            'email': this.user.email,
                            'userPassword': this.user.password,
                            'userName': this.user.username,
                            // "sex": this.user.gender === '男' ? 0 : 1,
                            'phone': this.user.phone
                        };
                    }
                    this.$axios.post(url, postData)
                        .then(response => {
                            this.$Message.info('注册成功');
                            this.registSwitch();
                            // console.log(postData);
                            // this.registMsg = response.data.msg;
                            // this.registStatus = response.data.registStatus;
                            // if (this.registStatus === 0) {

                            // }
                        });
                }
            });
        },
        setGender () {
            return this.hasGender = !this.hasGender;
        },
        // 切换注册mod显示状态
        registSwitch () {
            return this.registToggle = !this.registToggle;
        },
        handleReset () {
            this.$refs.registForm.resetFields();
        }
    }
};
</script>

<style>

</style>
