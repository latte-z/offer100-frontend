<style lang="less">
@import './home.less';
@import '../../styles/common.less';
</style>
<template>
    <div class="home-main">
      <!-- 搜索bar -->
      <Row :gutter="10" style="margin-bottom:5px">
        <Card dis-hover style="position:relative">
          <div class="search-wrapper">
            <div class="search_box">
              <Form ref="searchForm" class="search_form" :model="searchForm">
                <FormItem prop="searchInput">
                  <input v-model="searchForm.input" class="search_input" tabindex="1" maxlength="64" autocomplete="off" placeholder="搜索职位、公司或地点" type="text">
                  <input type="submit" class="search_button" value="搜索">
                </FormItem>
              </Form>
            </div>
            <dl class="hotSearch">
              <dt>热门搜索：</dt>
              <dd><a href="#" class="highlight" target="_self">UI设计师</a></dd>
              <dd><a href="#" class="highlight" target="_self">Java</a></dd>
              <dd><a href="#" class="highlight" target="_self">网络推广</a></dd>
              <dd><a href="#" class="highlight" target="_self">PHP</a></dd>
              <dd><a href="#" class="highlight" target="_self">销售经理</a></dd>
            </dl>
          </div>
        </Card>
      </Row>
      <!-- 职位分类+AD Banner -->
      <Row :gutter="10" style="margin-bottom:5px">
        <Card dis-hover>
          <Row :gutter="10">
            <Col :md="24" :lg="8">
              <Row :gutter="5">
                    <div v-for="(job,index) in jobs" v-if="index<2" style="padding:5px">
                      <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                    </div>
                  </Row>
            </Col>
            <!-- AD Banner -->
            <Col :md="24" :lg="16">
              <Carousel 
                v-model="value"
                :autoplay="setting.autoplay"
                :autoplay-speed="setting.autoplaySpeed"
                :dots="setting.dots"
                :radius-dot="setting.radiusDot"
                :trigger="setting.trigger"
                :arrow="setting.arrow">
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
        </Card>
      </Row>
      <!-- 热门职位Card -->
      <Row :gutter="10" style="margin-bottom:5px">
        <Card dis-hover>
          <Tabs value="hotjobs">
            <TabPane label="热门职位" icon="fireball" name="hotjobs">
              <Row :gutter="5">
                <Col :md="24" :lg="8">
                  <Row :gutter="5">
                    <div v-for="(job,index) in jobs" v-if="index<3" style="padding:5px">
                      <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                    </div>
                  </Row>
                </Col>
                <Col :md="24" :lg="8">
                  <Row :gutter="5">
                    <div v-for="(job,index) in jobs" v-if="index>=3 && index <6" style="padding:5px">
                      <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                    </div>
                  </Row>
                </Col>
                <Col :md="24" :lg="8">
                  <Row :gutter="5">
                    <div v-for="(job,index) in jobs" v-if="index>=6 && index <9" style="padding:5px">
                      <jobsCard :message="job" style="width:100%;height:100%"></jobsCard>
                    </div>
                  </Row>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
          <div style="display:flex;margin-top:10px">
            <Button type="primary" style="margin:auto;width:200px;font-size:15px">查看更多</Button>
          </div>
        </Card>
      </Row>
      <!-- 热门公司Card -->
      <Row :gutter="10">
        <Card dis-hover>
          <Tabs value="hotcompany">
            <TabPane label="热门公司" icon="briefcase" name="hotcompany">
              <Row :gutter="5">
                <Col :md="24" :lg="6">
                  <Row :gutter="5">
                    <div v-for="(enterprise,index) in enterprises" v-if="index<3" style="padding:5px">
                      <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                    </div>
                  </Row>
                </Col>
                <Col :md="24" :lg="6">
                  <Row :gutter="5">
                    <div v-for="(enterprise,index) in enterprises" v-if="index>=3 && index <6" style="padding:5px">
                      <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                    </div>
                  </Row>
                </Col>
                <Col :md="24" :lg="6">
                  <Row :gutter="5">
                    <div v-for="(enterprise,index) in enterprises" v-if="index>=6 && index <9" style="padding:5px">
                      <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                    </div>
                  </Row>
                </Col>
                <Col :md="24" :lg="6">
                  <Row :gutter="5">
                    <div v-for="(enterprise,index) in enterprises" v-if="index>=9 && index <12" style="padding:5px">
                      <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                    </div>
                  </Row>
                </Col>
              </Row>
            </TabPane>
          </Tabs>
          <div style="display:flex;margin-top:10px">
            <Button type="primary" style="margin:auto;width:200px;font-size:15px">查看更多</Button>
          </div>
        </Card>
      </Row>
    </div>
</template>

<script>
import jobsCard from '@/views/main-components/jobs-card/jobs-card.vue'
import enterpriseCard from '@/views/main-components/enterprise-card/enterprise-card.vue'
export default {
  name: 'home',
  components: {
    jobsCard,
    enterpriseCard
  },
  data() {
    return {
      value: 0,
      search: '',
      setting: {
        autoplay: true,
        autoplaySpeed: 4000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'hover'
      },
      searchForm: {
        input: ''
      },
      jobs: [
        {
          name: '1',
          salary: '5K-10K',
          starttime: '3天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验1-3年',
          education: '本科以上',
          url: '#'
        },
        {
          name: '2',
          salary: '8K-15K',
          starttime: '1天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验5-7年',
          education: '硕士以上',
          url: '#'
        },
        {
          name: '3',
          salary: '8K-15K',
          starttime: '1天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验5-7年',
          education: '硕士以上',
          url: '#'
        },
        {
          name: '4',
          salary: '5K-10K',
          starttime: '3天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验1-3年',
          education: '本科以上',
          url: '#'
        },
        {
          name: '5',
          salary: '8K-15K',
          starttime: '1天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验5-7年',
          education: '硕士以上',
          url: '#'
        },
        {
          name: '6',
          salary: '8K-15K',
          starttime: '1天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验5-7年',
          education: '硕士以上',
          url: '#'
        },
        {
          name: '7',
          salary: '5K-10K',
          starttime: '3天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验1-3年',
          education: '本科以上',
          url: '#'
        },
        {
          name: '8',
          salary: '8K-15K',
          starttime: '1天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验5-7年',
          education: '硕士以上',
          url: '#'
        },
        {
          name: '9',
          salary: '8K-15K',
          starttime: '1天前发布',
          des: '游戏，文化娱乐',
          worktime: '经验5-7年',
          education: '硕士以上',
          url: '#'
        }
      ],
      enterprises: [
        {
          name: 'offer100',
          industry: '移动互联网',
          stage: '上市公司',
          des: '游戏，文化娱公司专注于互联网、移动互联网与信息化互动社区，致力并服务于推动手机用户的沟通和娱乐。乐',
          slogan: 'slogan',
          evaluate: '46',
          numjobs: '5',
          processrate: '87%',
          url: 'https://www.lgstatic.com/thumbnail_160x160/image1/M00/00/08/Cgo8PFTUWBCAcSJHAAB-yfiYxHM640.png'
        }
      ]
    }
  },
  computed: {
    avatorPath() {
      return localStorage.avatorImgPath
    }
  },
  methods: {
    init() {
      this.userName = localStorage.getItem('username')
    },
    handleSubmit() {
      this.$refs.validate(valid => {
        if (valid) {
          console.log('Success')
        }
      })
    }
  },
  mounted() {
    this.init()
  }
}
</script>
