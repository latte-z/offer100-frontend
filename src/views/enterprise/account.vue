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
                                                <Button type="primary" @click="handleSubmitAcc()">更新</Button>
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
                                                <Button type="primary" @click="handleModify()">修改</Button>
                                            </FormItem>
                                        </Form>
                                    </TabPane>
                                    <TabPane label="单位信息" name="companyInfo">
                                        <Form ref="form" :model="form" :rules="ruleValidate" :label-width="80">
                                            <FormItem label="公司名称：" prop="companyName">
                                                <Input v-model="form.companyName"></Input>
                                            </FormItem>
                                            <!-- <FormItem label="所属行业：" prop="industry">
                                                <Cascader :data="data4" v-model="form.industry"></Cascader>
                                            </FormItem> -->
                                            <FormItem label="融资状态：" prop="companyStage">
                                                <Select v-model="form.companyStage">
                                                    <Option v-for="item in companystage" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                                </Select>
                                            </FormItem>
                                            <!-- <FormItem label="公司logo：" prop="companyLogo">
                                                <div class="company_logo">
                                                    <a href="#">
                                                        <Avatar shape="square" size="large">LOGO</Avatar>
                                                    </a>
                                                </div>
                                            </FormItem> -->
                                            <FormItem label="公司地址：" prop="companyAddress">
                                                <Input v-model="form.companyAddress"></Input>
                                            </FormItem>
                                            <FormItem>
                                                <Button type="primary" @click="modifyCompany()">更新</Button>
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
        const validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('密码不能为空'));
            } else {
                if (this.form.confirmPassword !== '') {
                    // 对第二个密码框单独验证
                    this.$refs.form.validateField('confirmPassword');
                }
                callback();
            }
        };
        const validatePassCheck = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.form.newPassword) {
                callback(new Error('两次输入的密码不相同'));
            } else {
                callback();
            }
        };
        return {
            updateUrl: '/enterprise',       //更新企业信息的url
            // updateUrl: '',         //维护账户安全的url
            // updateUrl: '',       //更新单位信息的url

            enterpriseId: '',
            pageName: 'account',
            rows: {},
            form: {
                login: '',
                name: '',
                mail: '',
                phone: '',
                oldPassword: '',
                newPassword: '',
                confirmPassword: '',
                companyName: '',
                industry: '',
                companystage: 0,
                companyAddress: ''

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
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' },
                    { validator: validatePass, trigger: 'blur' }
                ],
                confirmPassword: [
                    { required: true, message: 'The password cannot be empty', trigger: 'blur' },
                    { validator: validatePassCheck, trigger: 'blur' }
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
                    value: 0,
                    label: '未融资'
                },
                {
                    value: 1,
                    label: '天使轮融资'
                },
                {
                    value: 2,
                    label: 'A轮融资'
                },
                {
                    value: 3,
                    label: 'B轮融资'
                },
                {
                    value: 4,
                    label: 'C轮融资'
                },
                {
                    value: 5,
                    label: 'D轮融资'
                },
                {
                    value: 6,
                    label: '上市'
                }
            ]
        };
    },
    methods: {
        init () {
            this.enterpriseId = localStorage.getItem('userid');
            this.getCompanyInfo();            
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
        getCompanyInfo () {
            let getCompanyUrl = '/enterprise/' + this.enterpriseId;
            this.$axios.get(getCompanyUrl)
                .then(response => {
                    this.form.login = response.data.userName;
                    this.form.name = response.data.linkman;
                    this.form.mail = response.data.email;
                    this.form.phone = response.data.phone;
                    // this.form.oldPassword = response.data.userPassword;
                    this.form.companyName = response.data.name;
                    // this.form.industry = response.data.industryId;
                    this.form.companystage = response.data.stage;
                    this.form.companyAddress = response.data.address
                    // console.log(this.form);
                })
                .catch(function (error) {
                    console.log(error)
                })
        },
        buildAcc() {
            this.rows = {};

            this.rows.email = this.form.mail;
            this.rows.linkman = this.form.name;
        },
        //更新账户信息
        handleSubmitAcc () {
            this.updateUrl = '/enterprise';
            this.updateUrl += '/' + this.enterpriseId;
            this.buildAcc();
            this.$axios.put(this.updateUrl,this.rows)
                .then(response => {
                    this.$Message.info('提交成功！');
                })
                .catch(function (error) {
                    console.log(error)

                })

        },
        //修改账户密码
        handleModify() {
            this.updateUrl = '/enterprise';
            this.updateUrl += '/' + this.enterpriseId;

            this.rows = {};
            this.rows.userPassword = this.form.newPassword;

            this.$axios.put(this.updateUrl,this.rows)
                .then(response => {
                    this.$Message.info('提交成功！');
                    // console.log(this.form.newPassword);
                })
                .catch(function (error) {
                    console.log(error)

                })
        },
        buildCompany() {
            this.rows = {};

            this.rows.name = this.form.companyName;
            this.rows.address = this.form.companyAddress;
            this.rows.stage = this.form.companystage;
        },
        //修改企业地址信息等
        modifyCompany() {
            this.updateUrl = '/enterprise';
            this.updateUrl += '/' + this.enterpriseId;

            this.buildCompany();

            this.$axios.put(this.updateUrl,this.rows)
                .then(response => {
                    this.$Message.info('提交成功！');
                    // console.log(this.rows);
                })
                .catch(function (error) {
                    console.log(error)

                })
        }
    },
    computed: {

    },
    mounted () {
        this.init();
    }
};
</script>
