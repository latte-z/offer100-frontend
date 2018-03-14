<style lang="less">
    @import '../../styles/common.less';
    @import './styles/updatePWD.less';
</style>

<template>
<div class="container clearfix" id="container">
    <!--@require "common/widgets/account-c-sidebar/main.less"-->
    <div class="user_bindSidebar">
        <ul class="user_sideBarmenu">
            <li class="[curPage === 'user_account' ? curClass : '']">
                <a class="hover" @click="handlePush('user_account')" href="#">个人信息</a>
            </li>
            <li class="[curPage === 'user_resume' ? curClass : '']">
                <a @click="handlePush('user_resume')" href="#">我的简历</a>
            </li>
            <li class="[curPage === 'user_favorite' ? curClass : '']">
                <a @click="handlePush('user_favorite')" href="#">收藏夹</a>
            </li>
            <li class="[curPage === 'updatePWD' ? curClass : '']">
                <a @click="handlePush('user_updatePWD')" href="#">修改密码</a>
            </li>
        </ul>
    </div>

    <div class="user_modifyContent">
        <dl class="c_section">
            <dt>
                <p>登录帐号:{{ user.username }} </p>
            </dt>
            <dd>
                <Form :model="updatePwdForm" :rules="rules" ref="updateForm" class="ivu-form ivu-form-label-right" id="updatePwdForm">
                    <FormItem prop="password" class="input_item">
                        <Input v-model="updatePwdForm.password" type="password" id="newpassword" placeholder="请输入新密码">
                        </Input>
                    </FormItem>
                    <FormItem prop="repassword" class="input_item">
                        <Input v-model="updatePwdForm.repassword" type="password" id="comfirmpassword" placeholder="确认新密码">
                        </Input>
                    </FormItem>
                    
                    <FormItem class="input_item">
                        <Button @click="handleUpdatePwd();handlePush('user_account')" type="success" style="width: 80px;height: 40px;font-size:16px; margin-left:85px;margin-right: 60px">保存</Button>
                        <Button @click="handlePush('user_account')" type="error" style="width: 80px;height:40px;font-size:16px">返回</Button>
                    </FormItem>
                </Form>
            </dd>
        </dl>
    </div>
</div>
    
</template>

<script>
    import Vue from 'vue';
    import axios from 'axios';
    import qs from 'qs';
    export default {
        name: 'user_updatePWD',
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('密码不能为空'));
                } else {
                    if (this.updatePwdForm.repassword !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.updateForm.validateField('repassword');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.updatePwdForm.password) {
                    callback(new Error('两次输入的密码不相同！提交后无效！'));
                } else {
                    callback();
                }
            };    
            return {
                getUserByUrl: '/users/',
                user: {
                    username: '',
                },
                rules: {
                    password: [
                        { required: true, message: '6-16位密码，字母区分大小写', trigger: 'blur' },
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    repassword:[
                        { required: true, message: '再次输入密码', trigger: 'blur'},
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                },

                //修改密码的数据
                updatePwdUrl: '/users/',
                updatePwdForm: {
                    password: '',
                    repassword: ''
                },
            };
        },
        computed: {

        },
        methods: {
            handlePush(name) {
                this.$router.push({
                    name: name
                })
            },

            //更新密码
            handleUpdatePwd() {
                this.$refs.updateForm.validate((valid) => {
                    if (valid) {
                        var url = this.updatePwdUrl + localStorage.getItem('userid');
                        let putData = {};
                        putData = {
                            'password': this.updatePwdForm.password,
                        };
                        this.$axios.put(url, putData)
                            .then(response => {
                            });
                    }
                });
            },

            //获取显示的数据
            init() {
                this.get()
            },
            get() {
                this.$axios.get(this.getUserByUrl + localStorage.getItem('userid'))
                    .then(response => {
                        this.user = response.data;
                        this.user.username = response.data.username;
                    })
            }
        },
        mounted() {
            this.init()
        }
    };
</script>

<style>
</style>