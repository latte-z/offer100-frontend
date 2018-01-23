<style lang="less">
@import './enterprise-card.less';
</style>

<template>
    <Card>
        <div class="line-gray"></div>
        <div>
            <div class="bottom">
                <span class="bottom-top">{{ enterprise.evaluate }}</span>
                <span class="bottom-bottom"><br>面试评价</span>
            </div>
            <div class="line-gray-vertical"></div>
            <div class="bottom">
                <span class="bottom-top">{{ enterprise.evaluate }}</span>
                <span class="bottom-bottom"><br>面试评价</span>
            </div>
            <div class="line-gray-vertical"></div>
            <div class="bottom">
                <span class="bottom-top">{{ enterprise.evaluate }}</span>
                <span class="bottom-bottom"><br>面试评价</span>
            </div>
        </div>
    </Card>
</template>

<script>
export default {
  name: 'enterpriseCard',
  props: ['message'],
  data() {
    return {
      enterprise: {
        name: '',
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
