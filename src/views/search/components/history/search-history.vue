<style lang="less">
@import './search-history.less';
</style>

<template>
    <div class="history">
        <div class="title">最近浏览过</div>
        <ul class="history_position_list" id="history_position_list">
            <li class="p_list_item" data-positionid="3382067" data-salary="15k-30k" data-company="点我达" data-positionname="Java开发">
                <div class="position_link">
                    <div class="name" title="Java开发">{{job.title}}</div>
                    <div class="salary">{{wage}}</div>
                    <a @click="goDetail" class="c_name" title="点我达">点我达</a>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'search_history',
    data () {
        return {
            job: {
                id: '',
                title: '',
                wage: '',
            },
            wage: ''
        };
    },
    computed: {

    },
    methods: {
        init () {
            this.job.id = localStorage.getItem('recentJobid');
            this.job.title = localStorage.getItem('recentJobtitle');
            this.job.wage = localStorage.getItem('recentJobwage');
            this.wage = this.job.wage / 1000 + 'k';
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
        this.init();
    }
};
</script>

<style>

</style>
