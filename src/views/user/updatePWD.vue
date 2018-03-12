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
                <p>登录帐号:18330107775 </p>
            </dt>
            <dd>
                <Form :model="form" :rules="rules" class="ivu-form ivu-form-label-right" id="updatePswForm">
                    <FormItem prop="password" class="input_item">
                        <Input v-model="form.password" type="password" id="newpassword" placeholder="请输入新密码">
                        </Input>
                    </FormItem>
                    <FormItem prop="confirmPassword" class="input_item">
                        <Input v-model="form.confirmPassword" type="password" id="comfirmpassword" placeholder="确认新密码">
                        </Input>
                    </FormItem>
                    
                    <FormItem class="input_item">
                        <Input type="submit" value="保 存"></Input>
                    </FormItem>
                </Form>
            </dd>
        </dl>
    </div>
</div>
    
</template>

<script>
    export default {
        name: 'user_updatePWD',
        data() {
            return {
                form: {
                    password: '',
                    confirmPassword: ''
                },
            rules: {
                password: [
                    { required: true, message: '6-16位密码，字母区分大小写', trigger: 'blur' }
                ],
                confirmPassword:[
                    {required: true, message: '再次输入密码', trigger: 'blur'}
                ]
            }

            };
        },
        computed: {

        },
        methods: {
            handlePush(name) {
                this.$router.push({
                    name: name
                })
            }

        }
    };
</script>

<style>
</style>