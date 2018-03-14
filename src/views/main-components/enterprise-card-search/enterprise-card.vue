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
                    <a @click="goDetail" target="_blank">{{enterprise.name}}</a>
                </p>
                <p class="indus-stage wordcut">
                    <!-- <span>{{enterprise.industryName}}</span> -->
                    <span>{{stage}}</span>
                </p>
                <p class="advantage wordcut">
                    {{enterprise.description}}
                </p>
            </div>
            <!-- <div class="bottom clearfix"> -->
                <!-- <a class="bottom-item bottom-1 f1" href="" target="_blank">
                    <p class="green">{{enterprise.evaluate}}</p>
                    <p class="grey">面试评价</p>
                </a> -->
                <!-- <a class="bottom-item bottom-2 f1" target="_blank">
                    <p class="green">{{enterprise.jobCount}}</p>
                    <p class="grey">在招职位</p>
                </a> -->
                <!-- <a class="bottom-item bottom-3 f1" target="_blank">
                    <p class="green">{{enterprise.resumeHanderRate}}</p>
                    <p class="grey">简历处理率</p>
                </a> -->
            <!-- </div> -->

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
                industryName: '',
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
    computed: {
        stage: function () {
            switch(this.enterprise.stage) {
                case 0: return '未融资';break;
                case 1: return 'A轮';break;
                case 2: return 'B轮';break;
                case 3: return 'C轮';break;
                case 4: return 'D轮';break;
                case 5: return 'D轮以上';break;
            }
        }
    },
    methods: {
        init () {
            this.enterprise = this.message
        },
        goDetail () {
            let argu = { company_id: this.enterprise.id };
            this.$router.push({
                name: 'companys',
                params: argu
            });
        }
    },
    mounted () {
        this.init()
    }
}
</script>
