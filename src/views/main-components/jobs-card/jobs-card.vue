<style lang="less">
@import './jobs-card.less';
</style>

<template>
  <Card class="card">
    <div slot="title" class="title">
      <p style="font-size:18px">{{ job.title }}&nbsp;
        <span class="starttime" style="font-size:15px">[{{ job.effectiveTime }}]</span>
      </p>
    </div>
    <p slot="extra" class="extra" style="font-size: 18px">
      {{ job.wage/1000 + 'k' }}
    </p>
    <div>
      <div class="left" style="color:#495060">
        <p>{{ job.serviceYear !== '无' ? job.serviceYear + '年经验' : '无' }}&nbsp;/&nbsp;{{ job.education }}</p>
        <p>{{ job.welfare }}</p>
        <span class="jobcategory">{{job.industryName}}</span>
      </div>
      <div class="right">
        <a @click="goDetail">查看详情</a>
        <Icon type="android-chat" style="color:#54BF8E"></Icon>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  name: 'jobsCard',
  props: ['message'],
  data () {
    return {
      job: {
        id: '',
        title: '',
        wage: '',
        effectiveTime: '',
        description: '',
        industryName: '',
        serviceYear: '',
        education: '',
        welfare: '',
        url: ''
      }
    }
  },
  methods: {
    init () {
      this.job = this.message
      this.handleTime()
    },
    handleTime () {
      var today = new Date()
      var startTime = new Date(this.job.effectiveTime)
      var gapTime = today.getTime() - startTime.getTime()
      var gapDays = Math.floor(gapTime / (24 * 3600 * 1000))
      this.job.effectiveTime = gapDays + '天前'
    },
    goDetail () {
      let argu = { job_id: this.job.id };
      this.$router.push({
        name: 'jobs',
        params: argu
      });
    }
  },
  mounted () {
    this.init()
  }
}
</script>
