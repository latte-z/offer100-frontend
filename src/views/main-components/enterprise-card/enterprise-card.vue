<style lang="less">
@import './enterprise-card.less';
</style>

<template>
<div class="company-item">
    <Card>
        <div class="top">
        <p><a href="" target="_blank">
            <img src="https://www.lgstatic.com/thumbnail_160x160/image1/M00/00/08/Cgo8PFTUWBCAcSJHAAB-yfiYxHM640.png"
                 alt="公司logo" width="80" height="80">
        </a></p>
        <p class="company-name wordcut">
            <a href="" target="_blank">{{enterprise.name}}</a>
        </p>
        <p class="indus-stage wordcut">
            <span>{{enterprise.industry}}</span>
            <span>{{enterprise.stage}}</span>
        </p>
        <p class="advantage wordcut">
            {{enterprise.des}}
        </p>
    </div>
    <div class="bottom clearfix">
        <a class="bottom-item bottom-1 f1" href="" target="_blank">
            <p class="green">{{enterprise.evaluate}}</p>
            <p class="grey">面试评价</p>
        </a>
        <a class="bottom-item bottom-2 f1" target="_blank">
            <p class="green">{{enterprise.numjobs}}</p>
            <p class="grey">在招职位</p>
        </a>
        <a class="bottom-item bottom-3 f1" target="_blank">
            <p class="green">{{enterprise.processrate}}</p>
            <p class="grey">简历处理率</p>
        </a>
    </div>
    
    </Card>
    </div>
</template>

<script>
export default {
  name: 'enterpriseCard',
  props: ['message'],
  data() {
    return {
      enterprise: {
        name: '',
        industry: '',
        stage: '',
        des: '',
        slogan: '',
        evaluate: '',
        numjobs: '',
        processrate: '',
        url: ''
      }
    }
  },
  methods: {
    init() {
      this.enterprise = this.message
    }
  },
  mounted() {
    this.init()
  }
}
</script>
