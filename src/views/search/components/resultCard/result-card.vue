<style lang="less">
@import './result-card.less';
</style>

<template>
    <div class="s_position_list">
        <div class="con_list_item first_row default_list">
            <div class="list_item_top">
                <div class="position">
                    <div class="p_top">
                        <a class="position_link" href="#" target="_blank">
                            <h3 style="max-width: 180px;">{{job.title}}</h3>
                            <span class="add">[{{job.zone}}]</span>
                        </a>
                        <span class="format-time">{{job.publishDaysBefore}}</span>
                        <!-- <div class="chat_me"></div> -->
                    </div>
                    <div class="p_bot">
                        <div class="li_b_l">
                            <span class="money">{{job.wage}}</span>
                            <!--<i></i>-->{{job.serviceYear}} / {{job.education}}
                        </div>
                    </div>
                </div>
                <div class="company">
                    <div class="company_name">
                        <a href="#" target="_blank">{{job.enterprise}}</a>
                        <i class="company_mark">
                            <span style="display: none;">该企业已上传营业执照并通过资质验证审核</span>
                        </i>
                    </div>
                    <div class="industry">
                        {{job.enterpriseCategory}} / 在招{{job.peopleNumber}}人
                    </div>
                </div>
                <div class="com_logo">
                    <a href="#" target="_blank"><img :src="job.enterpriseLogo" :alt="job.enterprise" width="60" height="60"></a>
                </div>
            </div>
            <div class="list_item_bot">
                <div class="li_b_l">
                    <span v-for="(cy,index) in job.category">{{cy}}</span>
                </div>
                <div class="li_b_r">{{job.welfare}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'result-card',
    props: ['message'],
    data () {
        return {
            job: {
                id: '',
                enterprise: '',
                title: '',
                nature: '',
                zone: '',
                category: [],
                wage: '',
                education: '',
                enterpriseLogo: '',
                rank: '',
                publishDaysBefore: '',
                serviceYear: '',
                enterpriseCategory: '',
                welfare: '',
                peopleNumber: '',
                key: ''
            }
        };
    },
    computed: {

    },
    methods: {
        init () {
            this.job = this.message
        }
    },
    mounted () {
        this.init()
    }
};
</script>

<style>

</style>
