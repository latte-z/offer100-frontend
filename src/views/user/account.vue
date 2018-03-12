<style lang="less">
  @import '../../styles/common.less';
  @import './styles/account.less';
</style>

<template>
  <div id="mainPage" style="width: 1024px; margin: 60px auto 0; padding-bottom: 80px">

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

    <div class="user_userinfo_content">
      <div class="c_section">
        <div class="userinfo_edit" id="userinfoEdit">
          <div class="hadInfo">
            <span class="edit_link" @click="handlePush('user_edit')" href="#">编辑</span>
            <div class="view_avatar">
              <img class="avatar_img" src="@/images/default_headpic.png" width="100" height="100" alt="田永涛">
            </div>
            <div class="view_nickname" style="display: inline">
              <span>{{ user.userName }}</span> <span style="padding-left: 5px">{{ user.userSex }}</span>
            </div>
            <div class="view_phone">{{ user.userPhone }}</div>
            <div class="view_email">{{user.userEmail}}</div>
            <div class="view_position">{{ user.userPosition }}</div>
            <div class="view_introduce">{{ user.userIntroduce }}</div>
          </div>
          <p class="tips">* 此信息用于站内言职社区功能，不会同步修改简历</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'user_account',
    data() {
      return {
        getUserByIdUrl: 'http://47.93.20.40:8081/users/',
        user: {
          userName: '田永涛',
          userSex: '男',
          userPhone: '18330107775',
          userEmail: 't2292453850@163.com',
          userPosition: '学生',
          userIntroduce: '做项目创建'
        }

      };
    },
    computed: {},
    methods: {
      handlePush(name) {
        this.$router.push({
          name: name
        })
      },
      init() {
        // this.get()
        // this.user = this.message
      }
    },
    mounted() {
        this.init()
        }
    };
</script>

<style>
</style>