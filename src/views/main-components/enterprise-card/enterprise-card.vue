<style lang="less">
@import './enterprise-card.less';
</style>

<template>
    <div class="company-item">
        <Card>
            <div class="top">
                <p>
                    <a href="" target="_blank">
                        <img :src="enterprise.imageLog" :alt="enterprise.name" width="80" height="80">
                    </a>
                </p>
                <p class="company-name wordcut">
                    <a href="" target="_blank">{{enterprise.name}}</a>
                </p>
                <p class="indus-stage wordcut">
                    <span>{{enterprise.industry}}</span>
                    <span>{{enterprise.stage}}</span>
                </p>
                <p class="advantage wordcut">
                    {{enterprise.description}}
                </p>
            </div>
            <div class="bottom clearfix">
                <!-- <a class="bottom-item bottom-1 f1" href="" target="_blank">
                    <p class="green">{{enterprise.evaluate}}</p>
                    <p class="grey">面试评价</p>
                </a> -->
                <a class="bottom-item bottom-2 f1" target="_blank">
                    <p class="green">{{enterprise.jobCount}}</p>
                    <p class="grey">在招职位</p>
                </a>
                <a class="bottom-item bottom-3 f1" target="_blank">
                    <p class="green">{{enterprise.resumeHanderRate}}</p>
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
    data () {
        return {
            enterprise: {
                id: '',
                name: '',
                industry: '',
                stage: '',
                description: '',
                imageLog: '',
                // evaluate: '',
                jobCount: '',
                resumeHanderRate: '',
                url: ''
            }
        }
    },
    methods: {
        init () {
            this.enterprise = this.message
        }
    },
    mounted () {
        this.init()
    }
}
</script>
