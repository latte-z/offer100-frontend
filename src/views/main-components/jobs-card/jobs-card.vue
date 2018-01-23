<style lang="less">
@import './jobs-card.less';
</style>

<template>
    <Card class="card">
        <div slot="title" class="title">
            <p style="font-size:18px">{{ job.name }}&nbsp;<span class="starttime" style="font-size:15px">[{{ job.starttime }}]</span></p>
        </div>
        <p slot="extra" class="extra" style="font-size: 18px">
            {{ job.salary }}
        </p>
        <div>
            <div class="left" style="color:#495060">
                <p>{{ job.worktime }}&nbsp;/&nbsp;{{ job.education }}</p>
                <p>{{ job.des }}</p>
            </div>
            <div class="right">
                <a :href="job.url">查看详情</a>
                <Icon type="android-chat" style="color:#54BF8E"></Icon>
            </div>
        </div>
    </Card>
</template>

<script>
export default {
  name: 'jobsCard',
  props: ['message'],
  data() {
    return {
      job: {
        name: '',
        salary: '',
        starttime: '',
        des: '',
        worktime: '',
        education: '',
        url: ''
      }
    }
  },
  methods: {
    init() {
      this.job = this.message
    }
  },
  mounted() {
    this.init()
  }
}
</script>
