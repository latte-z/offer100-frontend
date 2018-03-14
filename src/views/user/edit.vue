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
                <Form :model="user" :rules="rules" ref="editForm" id="userinfoEditForm">
                    <FormItem class="avatar">
                        <img class="avatar_img" src="@/images/default_headpic.png" width="100" height="100" alt="田永涛"> 
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                            <Button type="ghost" icon="ios-cloud-upload-outline">上传头像</Button>
                        </Upload>
                    </FormItem>
  
                    <FormItem prop="name" class="username input_box" >
                        <Input v-model="user.name" id="userinfoEditUserName" placeholder="请输入常用昵称"></Input>         
                    </FormItem>

                    <FormItem prop="sex" class="userinfo_sex input_box">
                        <RadioGroup v-model="user.sex">
                            <Radio label="男"></Radio>
                            <Radio label="女"></Radio>
                        </RadioGroup>
                    </FormItem>

                    <FormItem prop="position" class="userinfo_job input_box">
                        <Input v-model="user.position" placeholder="输入职业信息" style="width: 400px"></Input>   
                    </FormItem>

                    <FormItem prop="introduce" class="userinfo_intro input_box">
                        <Input v-model="user.introduce" placeholder="输入个人介绍" style="width: 400px"></Input> 
                    </FormItem>
                    <FormItem class="toolbar">
                        <Button type="success" long>保存</Button>
                    </FormItem>
                </Form>
            </div>
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
            user: {
                name: '',
                sex: '',
                position: '',
                introduce: ''
            },
            rules: {
                name: [
                    { required: true, message: '昵称不能为空', trigger: 'blur' }
                ],
                sex: [
                    { required: true, message: '性别不能为空', trigger: 'blur' }
                ],
                position: [
                    { required: true, message: '职业不能为空', trigger: 'blur' }
                ],
                introduce: [
                    { required: true, message: '个人介绍不能为空', trigger: 'blur' }
                ]

            },

        };
    },
    computed: {},
    methods: {
        handlePush(name) {
            this.$router.push({
                name: name
            })
        },
        handleSubmit() {
            this.$refs.loginForm.validate((valid) => {
                if (valid) {
                    this.$axios.post(this.loginUrl, qs.stringify(this.form))
                        .then(response => {
                            
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
