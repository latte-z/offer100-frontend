<style lang="less">
@import './account.less';
</style>

<template>
    <div>
        <div class="row-wrapper">
            <Row :gutter="10" style="width:1200px;margin:0 auto;overflow:hidden;">
                <div class="container clearfix">
                    <div class="clearfixs mr_created">
                        <!-- <account class="mr_myresume_l"></account> -->
                        <div class="mr_myresume_l">
                            <div class="main-container">
                                <Tabs type="card">
                                    <TabPane label="账户信息" name="accountInfo">
                                        <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
                                            <FormItem label="登录名：" prop="login">
                                                <Input v-model="form.login" readonly unselectable="on"></Input>
                                            </FormItem>
                                            <FormItem label="姓名：" prop="name">
                                                <Input v-model="form.name"></Input>
                                            </FormItem>
                                            <FormItem label="邮箱：" prop="mail">
                                                <Input v-model="form.mail"></Input>
                                            </FormItem>
                                            <FormItem label="手机：" prop="phone">
                                                <Input v-model="form.phone" readonly unselectable="on"></Input>
                                            </FormItem>
                                            <FormItem>
                                                <Button type="primary" @click="handleSubmit('form')">更新</Button>
                                            </FormItem>
                                        </Form>
                                    </TabPane>
                                    <TabPane label="账户安全" name="accountSec">
                                        <Form ref="form" :model="form" :rules="ruleValidate" :label-width="100">
                                            <FormItem label="原密码：" prop="oldPassword">
                                                <Input type="password" v-model="form.oldPassword" readonly unselectable="on"></Input>
                                            </FormItem>
                                            <FormItem label="新密码：" prop="newPassword">
                                                <Input type="password" v-model="form.newPassword"></Input>
                                            </FormItem>
                                            <FormItem label="确认新密码：" prop="confirmPassword">
                                                <Input type="password" v-model="form.confirmPassword"></Input>
                                            </FormItem>
                                            <FormItem>
                                                <Button type="primary" @click="handleSubmit('form')">修改</Button>
                                            </FormItem>
                                        </Form>
                                    </TabPane>
                                    <TabPane label="单位信息" name="companyInfo">
                                        <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
                                            <FormItem label="公司名称：" prop="companyName">
                                                <Input v-model="form.companyName"></Input>
                                            </FormItem>
                                            <FormItem label="所属行业：" prop="industry">
                                                <Cascader :data="data4" v-model="form.industry"></Cascader>
                                            </FormItem>
                                            <FormItem label="融资状态：" prop="companyStage">
                                                <Select v-model="form.companyStage">
                                                    <Option v-for="item in companystage" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="公司logo：" prop="companyLogo">
                                                <div class="company_logo">
                                                    <a href="#">
                                                        <Avatar shape="square" size="large">LOGO</Avatar>
                                                    </a>
                                                </div>
                                            </FormItem>
                                            <FormItem label="公司地址：" prop="companyAddress">
                                                <Input v-model="form.companyAddress"></Input>
                                            </FormItem>
                                            <FormItem>
                                                <Button type="primary" @click="handleSubmit('form')">更新</Button>
                                            </FormItem>
                                        </Form>
                                    </TabPane>
                                </Tabs>
                            </div>
                        </div>

                        <main-navbar :message="pageName"></main-navbar>
                    </div>
                </div>
            </Row>
        </div>
        <Row>
            <footerDiv></footerDiv>
        </Row>
    </div>
</template>

<script>
import mainNavbar from './components/main-navbar.vue'
// import account from './components/account.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
import axios from 'axios'
import qs from 'qs'

export default {
    name: 'enterprise_account',
    components: {
        mainNavbar,
        // account,
        footerDiv
    },
    data () {
        return {
            pageName: 'account',
            getCompanyUrl: 'http://47.93.20.40:8081/enterprise',      //获取企业信息的url
            updateAccountUrl: '',       //更新账户信息的url
            updateSecuUrl: '',         //维护账户安全的url
            updateCompanyUrl: '',       //更新单位信息的url

            enterpriseId: 2,
            form: {
                login: '',
                name: '',
                mail: '',
                phone: '',
                oldPassword: '',
                newPassword: '',
                confirmPassword: ''

            },
            ruleValidate: {
                name: [
                    { required: true, message: 'The name cannot be empty', trigger: 'blur' }
                ],
                mail: [
                    { required: true, message: 'Mailbox cannot be empty', trigger: 'blur' },
                    { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                ],
                oldPassword: [
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' }
                ],
                newPassword: [
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' }
                ],
                confirmPassword: [
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' }
                ]

            },
            data4: [
                {
                    value: 'beijing',
                    label: '北京',
                    children: [],
                    loading: false
                },
                {
                    value: 'hangzhou',
                    label: '杭州',
                    children: [],
                    loading: false
                }
            ],
            companystage: [
                {
                    value: '0',
                    label: '未融资'
                },
                {
                    value: '1',
                    label: '天使轮融资'
                },
                {
                    value: '2',
                    label: 'A轮融资'
                },
                {
                    value: '3',
                    label: 'B轮融资'
                },
                {
                    value: '4',
                    label: 'C轮融资'
                },
                {
                    value: '5',
                    label: 'D轮融资'
                },
                {
                    value: '6',
                    label: '上市'
                }
            ]
        };
    },
    methods: {
        init() {
            // this.$nextTick(function(){
                 this.getCompanyInfo();
            // })
           
        },
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        },
        buildUrl () {
            this.getCompanyUrl = 'http://47.93.20.40:8081/enterprise';
            this.getCompanyUrl += '/' + this.enterpriseId;
        },
        getCompanyInfo () {
            // alert(1234); 
            this.buildUrl();
            console.log(this.getCompanyUrl);
            this.$axios.get(this.getCompanyUrl)
                .then(response => {
                    this.form.login = response.data.userName;
                    this.form.name = response.data.linkman;
                    this.form.mail = response.data.email;
                    this.form.phone = response.data.phone;
                    this.form.oldPassword = response.data.userPassword;
                })
                .catch(function (error) {
                    console.log(error)

                })
        }
    },
    computed: {

    },
    mounted() {
        this.init();
    }
};
</script>
