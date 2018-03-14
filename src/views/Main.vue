<style lang="less">
@import './main.less';
</style>
<template>
  <div class="main">
    <div class="main-header-con">
      <div class="main-header">
        <div style="width:1200px;margin:0 auto">
          <!-- left navbar -->
          <div class="logo">
            <a href="#" title="offer100" src="@/images/logo.png">
              <span>Offer 100</span>
            </a>
          </div>
          <div class="nav">
            <ul>
              <li>
                <a @click="handlePush('home_index')">首页</a>
              </li>
              <li>
                <a @click="handlePush('enterprise_list')">公司</a>
              </li>
              <!-- <li :class="[curPage === 'job_index' ? curClass : '']">
                <a @click="handlePush('job_index')" href="#">求职</a>
              </li> -->
              <li>
                <a @click="handlePush('information_index')">资讯</a>
              </li>
            </ul>
          </div>
          <!-- right avator con -->
          <div class="user-nav">
            <ul>
              <li>
                <message-tip v-model="mesCount" :class="{'dn':!isLogin}"></message-tip>
              </li>
              <li>
                <div class="user-dropdown-menu-con" :class="{'dn':!isLogin}">
                  <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
                    <Dropdown transfer trigger="hover" @on-click="handleClickUserDropdown">
                      <a href="javascript:void(0)">
                        <span class="main-user-name">{{ userName }}</span>
                      </a>
                      <DropdownMenu slot="list">
                        <DropdownItem name="ownSpace" v-if="seen === 'user'">个人中心</DropdownItem>
                        <DropdownItem name="userResume" v-if="seen === 'user'">我的简历</DropdownItem>
                        <DropdownItem name="userFavorite" v-if="seen === 'user'">收藏夹</DropdownItem>
                        <DropdownItem name="userDelivery" v-if="seen === 'user'">投递箱</DropdownItem>
                        <DropdownItem name="enterprise" v-if="seen === 'enterprise'">企业管理</DropdownItem>
                        <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                    <Avatar icon="person" :src="avatorPath" style="background: #619fe7;margin-left: 10px;"></Avatar>
                  </Row>
                </div>
                <div class="user-dropdown-menu-con" :class="{'dn':isLogin}">
                  <a @click="goLogin">前往登录/注册</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="single-page-con">
      <div class="single-page">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import messageTip from './main-components/message-tip.vue';
import util from '@/libs/util.js';

export default {
  components: {
    messageTip
  },
  data () {
    return {
      userName: '',
      seen: false,
      curPage: '',
      curClass: 'cur',
      isLogin: false
    };
  },
  computed: {
    avatorPath () {
      return localStorage.avatorImgPath;
    },
    mesCount () {
      return this.$store.state.app.messageCount;
    }
  },
  methods: {
    init () {
      // set curPage name
      this.curPage = this.$route.name;
      // 如果登录是用户，那么显示个人中心按钮
      if (localStorage.getItem('usertype') !== 'visitor' && localStorage.getItem('usertype') !== 'enterprise') {
        this.seen = 'user';
      } else if (localStorage.getItem('usertype') === 'enterprise') {
        this.seen = 'enterprise';
      } else {
        this.seen = 'visitor';
      }

      if (localStorage.getItem('username')) {
        this.userName = localStorage.getItem('username');
        this.isLogin = true;
      }

      // 获取通知数目
      let messageCount = 0;
      this.$axios.get('/notification?pageSize=100&pageNumber=1&type=2&recieverId=' + localStorage.getItem('userid'))
        .then(response => {
          messageCount = response.data.total;
          this.messageCount = messageCount.toString();
          this.$store.commit('setMessageCount', messageCount);
        })
    },
    handleClickUserDropdown (name) {
      if (name === 'ownSpace') {
        util.openNewPage(this, 'user_account');
        this.$router.push({
          name: 'user_account'
        });
        // TODO
      } else if (name === 'enterprise') {
        util.openNewPage(this, 'enterprise_account')
        this.$router.push({
          name: 'enterprise_account'
        })
      } else if (name === 'userResume') {
        util.openNewPage(this, 'user_resume')
        this.$router.push({
          name: 'user_resume'
        })
        // TODO
      } else if (name === 'userFavorite') {
        util.openNewPage(this, 'user_favorite')
        this.$router.push({
          name: 'user_favorite'
        })
        // TODO
      } else if (name === 'userDelivery') {
        util.openNewPage(this, 'user_resume_post_record')
        this.$router.push({
          name: 'user_resume_post_record'
        })
        // TODO 
      } else if (name === 'loginout') {
        // 退出登录
        this.$store.commit('logout', this);
        this.isLogin = false;
        this.$Message.info('退出登录成功');
        this.$router.push({
          name: 'home_index'
        });
      }
    },
    handlePush (name) {
      this.$router.push({
        name: name
      });
    },
    goLogin () {
      this.$router.push({
        name: 'login'
      });
    }
  },
  watch: {
    $route (to) {
      this.$store.commit('setCurrentPageName', to.name);
      localStorage.currentPageName = to.name;
    }
  },
  mounted () {
    this.init();
  },
  created () {
  }
};
</script>
