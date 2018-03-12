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
              <span>{{ user.name }}</span> <span style="padding-left: 5px">{{ user.sex }}</span>
            </div>
            <div class="view_phone">{{ user.phone }}</div>
            <div class="view_email">{{user.email}}</div>
            <div class="view_position">{{ user.education }}</div>
            <div class="view_introduce">{{ user.major }}</div>
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
          name: '',
          sex: '',
          phone: '',
          email: '',
          education: '',
          major: '软件工程'
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
        this.get()
      },
      get() {
        this.$axios.get(this.getUserByIdUrl + 1)
          .then(response => {
            this.user = response.data;
            this.user.sex = (response.data.sex == '1' ? '男' : '女');
            switch (response.data.education) {
              case 1: this.user.education = '本科'; break;
              case 2: this.user.education = '硕士'; break;
              case 3: this.user.education = '博士'; break;
              case 4: this.user.education = '高中'; break;
              case 5: this.user.education = '初中'; break;
              case 6: this.user.education = '大专'; break;
            }
            //TODO 专业
            //this.$axios.get('' + 1)
            this.user.major = "软件工程"
          })
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