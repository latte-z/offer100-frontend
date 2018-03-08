<style lang="less">
@import './styles/account.less';
</style>

<template>
    <div>
        <div class="main-container">
            <Tabs type="card">
                <TabPane label="账户信息">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                        <FormItem label="登录名：" prop="login">
                            <Input v-model="formValidate.login" readonly unselectable="on"></Input>
                        </FormItem>
                        <FormItem label="姓名：" prop="name">
                            <Input v-model="formValidate.name"></Input>
                        </FormItem>
                        <FormItem label="邮箱：" prop="mail">
                            <Input v-model="formValidate.mail"></Input>
                        </FormItem>
                        <FormItem label="手机：" prop="phone">
                            <Input v-model="formValidate.phone" readonly unselectable="on"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formValidate')">更新</Button>
                        </FormItem>
                    </Form>
                </TabPane>
                <TabPane label="账户安全">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
                        <FormItem label="原密码：" prop="oldPassword">
                            <Input type="password" v-model="formValidate.oldPassword" readonly unselectable="on"></Input>
                        </FormItem>
                        <FormItem label="新密码：" prop="newPassword">
                            <Input type="password" v-model="formValidate.newPassword"></Input>
                        </FormItem>
                        <FormItem label="确认新密码：" prop="confirmPassword">
                            <Input type="password" v-model="formValidate.confirmPassword"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formValidate')">修改</Button>
                        </FormItem>
                    </Form>
                </TabPane>
                <TabPane label="单位信息">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                        <FormItem label="公司名称：" prop="companyName">
                            <Input v-model="formValidate.companyName"></Input>
                        </FormItem>
                        <FormItem label="所属行业：" prop="industry">
                            <Cascader :data="data4" :load-data="loadData" v-model="formValidate.industry"></Cascader>
                        </FormItem>
                        <FormItem label="融资状态：" prop="companyStage">
                            <Select v-model="formValidate.companyStage">
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
                            <Input v-model="formValidate.companyAddress"></Input>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" @click="handleSubmit('formValidate')">更新</Button>
                        </FormItem>
                    </Form>
                </TabPane>
            </Tabs>
        </div>
    </div>
</template>

<script>
export default {
    name: 'enterprise_account',
    data () {
        return {
            formValidate: {
                login: 'yy',
                name: 'yunyun',
                mail: '12345@126.com',
                phone: '13112345678',
                oldPassword: '12345',
                newPassword: '1234',
                confirmPassword: '1234'

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
        handleSubmit (name) {
            this.$refs[name].validate((valid) => {
                if (valid) {
                    this.$Message.success('Success!');
                } else {
                    this.$Message.error('Fail!');
                }
            })
        }
    },
    computed: {

    }
};
</script>
