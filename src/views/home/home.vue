<style lang="less">
@import './home.less';
@import '../../styles/common.less';
</style>
<template>
  <div class="home-main" @keydown.enter="handleSubmit">
    <!-- 搜索bar -->
    <Row style="margin-top:20px">
      <div class="content-header">
        <div class="search-wrapper">
          <div class="search_box">
            <Form ref="searchForm" class="search_form" :model="searchForm">
              <FormItem prop="searchInput">
                <input v-model="searchForm.input" class="search_input" tabindex="1" maxlength="64" autocomplete="off" placeholder="搜索职位或公司" type="text">
                <input @click="handleSubmit" type="button" class="search_button" value="搜索">
              </FormItem>
            </Form>
          </div>
          <dl class="hotSearch">
            <dt>热门搜索：</dt>
            <dd>
              <a href="#" class="highlight" target="_self">UI设计师</a>
            </dd>
            <dd>
              <a href="#" class="highlight" target="_self">Java</a>
            </dd>
            <dd>
              <a href="#" class="highlight" target="_self">网络推广</a>
            </dd>
            <dd>
              <a href="#" class="highlight" target="_self">PHP</a>
            </dd>
            <dd>
              <a href="#" class="highlight" target="_self">销售经理</a>
            </dd>
          </dl>
        </div>
      </div>
    </Row>
    <!-- 职位分类+AD Banner -->
    <Row>
      <div class="banner">
        <Row :gutter="10" style="width:1200px;margin:0 auto;">
          <jobNav></jobNav>
          <!-- AD Banner -->
          <Col :md="24" :lg="16">
          <Carousel class="carousel" v-model="value" :autoplay="setting.autoplay" :autoplay-speed="setting.autoplaySpeed" :dots="setting.dots" :radius-dot="setting.radiusDot" :trigger="setting.trigger" :arrow="setting.arrow">
            <CarouselItem>
              <div>
                <img class="banner-img" src="@/views/home/images/banner1.jpg">
              </div>
            </CarouselItem>
            <CarouselItem>
              <div>
                <img class="banner-img" src="@/views/home/images/banner2.jpg">
              </div>
            </CarouselItem>
          </Carousel>
          </Col>
        </Row>
      </div>
    </Row>
    <!-- 热门职位Card -->
    <div class="banner">
      <Row style="width:1200px;margin:0 auto">
        <Tabs value="hotjobs">
          <TabPane label="热门职位" icon="fireball" name="hotjobs">
            <Row :gutter="5">
              <Col :md="24" :lg="8">
              <Row :gutter="5">
                <div v-for="(job,index) in jobs" v-if="index === (0 || 3 || 6)" style="padding:5px">
                  <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                </div>
              </Row>
              </Col>
              <Col :md="24" :lg="8">
              <Row :gutter="5">
                <div v-for="(job,index) in jobs" v-if="index === (1 || 4 || 7)" style="padding:5px">
                  <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                </div>
              </Row>
              </Col>
              <Col :md="24" :lg="8">
              <Row :gutter="5">
                <div v-for="(job,index) in jobs" v-if="index === (2 || 5 || 8)" style="padding:5px">
                  <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                </div>
              </Row>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
        <div style="display:flex;margin-top:20px">
          <Button type="success" style="margin:auto;width:200px;font-size:15px">查看更多</Button>
        </div>
      </Row>
    </div>
    <!-- 热门公司Card -->
    <div class="banner">
      <Row style="width:1200px;margin:0 auto">
        <Tabs value="hotcompany">
          <TabPane label="热门公司" icon="briefcase" name="hotcompany" style="margin-bottom:5px;">
            <Row :gutter="5">
              <Col :md="24" :lg="6">
              <Row :gutter="5">
                <div v-for="(enterprise,index) in enterprises" v-if="index === (0 || 4 || 8)" style="padding:5px">
                  <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                </div>
              </Row>
              </Col>
              <Col :md="24" :lg="6">
              <Row :gutter="5">
                <div v-for="(enterprise,index) in enterprises" v-if="index === (1 || 5 || 9)" style="padding:5px">
                  <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                </div>
              </Row>
              </Col>
              <Col :md="24" :lg="6">
              <Row :gutter="5">
                <div v-for="(enterprise,index) in enterprises" v-if="index === (2 || 6 || 10)" style="padding:5px">
                  <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                </div>
              </Row>
              </Col>
              <Col :md="24" :lg="6">
              <Row :gutter="5">
                <div v-for="(enterprise,index) in enterprises" v-if="index === (3 || 7 || 11)" style="padding:5px">
                  <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                </div>
              </Row>
              </Col>
            </Row>
          </TabPane>
        </Tabs>
        <div style="display:flex;margin-top:20px">
          <Button type="success" style="margin:auto;width:200px;font-size:15px">查看更多</Button>
        </div>
      </Row>
    </div>
    <Row>
      <footerDiv></footerDiv>
    </Row>
  </div>
</template>

<script>
import jobsCard from '@/views/main-components/jobs-card/jobs-card.vue'
import enterpriseCard from '@/views/main-components/enterprise-card/enterprise-card.vue'
import footerDiv from '@/views/main-components/footer/footer.vue'
import jobNav from './components/job-nav/job-nav.vue'
import qs from 'qs'
export default {
  name: 'home',
  components: {
    jobsCard,
    enterpriseCard,
    footerDiv,
    jobNav
  },
  data () {
    return {
      value: 0,
      search: '',
      jobs: [],
      enterprises: [],
      jobsUrl: 'http://localhost:8081/mainpage/hotJob',
      enterprisesUrl: 'http://localhost:8081/mainpage/hotEnterprise',
      setting: {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover',
        // height: '385px'
      },
      searchForm: {
        input: ''
      }
    }
  },
  computed: {
    avatorPath () {
      return localStorage.avatorImgPath
    }
  },
  methods: {
    init () {
      this.userName = localStorage.getItem('username')
      this.getJobs()
      this.getEnterprises()
    },
    handleSubmit () {
      this.$router.push({
        name: 'search_index',
        params: {searchInput: this.searchForm.input}
      })
    },
    getJobs () {
      this.$axios.get(this.jobsUrl)
        .then(response => {
          this.jobs = response.data
        })
    },
    getEnterprises () {
      this.$axios.get(this.enterprisesUrl)
        .then(response => {
          this.enterprises = response.data
        })
    }
  },
  mounted () {
    this.init()
  }
}
</script>
