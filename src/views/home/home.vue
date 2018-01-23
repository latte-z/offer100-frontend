<style lang="less">
@import './home.less';
@import '../../styles/common.less';
</style>
<template>
    <div class="home-main">
      <!-- 职位分类+AD Banner -->
      <Row :gutter="10" style="margin-bottom:10px">
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
              <Carousel autoplay v-model="carouselstart" :autoplay-speed="4000" style="margin-top:10px" loop>
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
      <Row :gutter="10">
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
                <Col :md="24" :lg="8">
                  <Row :gutter="5">
                    <div v-for="(enterprise,index) in enterprises" v-if="index<3" style="padding:5px">
                      <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                    </div>
                  </Row>
                </Col>
                <Col :md="24" :lg="8">
                  <Row :gutter="5">
                    <div v-for="(enterprise,index) in enterprises" v-if="index>=3 && index <6" style="padding:5px">
                      <enterpriseCard :message="enterprise" style="width:100%;height:100%"></enterpriseCard>
                    </div>
                  </Row>
                </Col>
                <Col :md="24" :lg="8">
                  <Row :gutter="5">
                    <div v-for="(enterprise,index) in enterprises" v-if="index>=6 && index <9" style="padding:5px">
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
      carouselstart: 0,
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
          name: '1',
          des: '游戏，文化娱乐',
          slogan: 'slogan',
          evaluate: '46',
          numjobs: '5',
          processrate: '87%',
          url: '#'
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
    }
  },
  mounted() {
    this.init()
  }
}
</script>
