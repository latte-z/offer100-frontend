<style lang="less">
@import '../../styles/common.less';
@import './styles/account.less';
</style>

<template>
    <div id="editPage" style="width: 1024px; margin: 60px auto 0; padding-bottom: 80px">

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

        <div class="user_userinfo_content" id="userinfoEdit">
            <div class="c_section">
                <div class="userinfo_edit" id="userinfoEdit">
                    <Form :model="user" :rules="rules" ref="user" id="userinfoEditForm">
                        <FormItem class="avatar">
                            <img class="avatar_img" :src="pic" width="100" height="100" alt="田永涛">
                            <Upload action="//jsonplaceholder.typicode.com/posts/">
                                <Button type="ghost" icon="ios-cloud-upload-outline">上传头像</Button>
                            </Upload>
                        </FormItem>

                        <FormItem prop="name" class="username input_box">
                            <Input v-model="user.name" id="userinfoEditUserName" placeholder="请输入常用昵称"></Input>
                        </FormItem>

                        <FormItem prop="sex" class="userinfo_sex input_box">
                            <RadioGroup v-model="user.sex">
                                <Radio label="男"></Radio>
                                <Radio label="女"></Radio>
                            </RadioGroup>
                        </FormItem>

                        <FormItem prop="phone" class="userinfo_job input_box">
                            <Input v-model="user.phone" placeholder="输入手机号" style="width: 400px"></Input>
                        </FormItem>

                        <FormItem prop="email" class="userinfo_intro input_box">
                            <Input v-model="user.email" placeholder="输入邮箱" style="width: 400px"></Input>
                        </FormItem>
                        <FormItem class="toolbar">
                            <Button @click="handleEdit();handlePush('user_account')" type="success" style="width: 80px; margin-left:85px;margin-right: 60px">保存</Button>
                            <Button @click="handlePush('user_account')" type="error" style="width: 80px">返回</Button>
                        </FormItem>
                    </Form>
                </div>
                <p class="tips">* 此信息用于站内言职社区功能，不会同步修改简历</p>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'user_edit',
    data () {
        return {
            editInfoUrl: '/users/',
            pic: '',
            user: {
                name: '',
                sex: '男',
                phone: '',
                email: ''
            },
            rules: {
                name: [
                    { required: true, message: '昵称不能为空', trigger: 'blur' }
                ],
                phone: [
                    { required: true, message: '手机号不能为空', trigger: 'blur' }
                ],
                email: [
                    { required: true, message: '邮箱不能为空', trigger: 'blur' }
                ]

            },

        };
    },
    computed: {},
    methods: {
        init () {
            this.pic = localStorage.getItem('avatorImgPath');
            this.$axios.get(this.editInfoUrl + localStorage.getItem('userid'))
                .then(response => {
                    this.user.sex = (response.data.sex === 1 ? '男' : '女');
                    this.user.name = response.data.name;
                    this.user.phone = response.data.phone;
                    this.user.email = response.data.email;
                })
        },
        handlePush (name) {
            this.$router.push({
                name: name
            })
        },
        handleEdit () {
            this.$refs.user.validate((valid) => {
                if (valid) {
                    var url = this.editInfoUrl + localStorage.getItem('userid');
                    let gender = (this.user.sex === '男' ? 1 : 0);
                    let putData = {};
                    putData = {
                        'name': this.user.name,
                        'sex': gender,
                        'phone': this.user.phone,
                        'email': this.user.email
                    };
                    this.$axios.put(url, putData)
                        .then(response => {
                            this.$Message.info('修改成功');
                            handlePush('user_account');
                        });
                }
            });
        }
    },
    mounted () {
        this.init();
    }
};
</script>

<style>

</style>
