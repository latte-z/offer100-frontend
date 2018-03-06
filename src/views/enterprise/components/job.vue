<style lang="less">
@import './styles/job.less';
</style>

<template>
    <div>
        <div class="main-cont clearfix">
            <div class="top-fn clearfix">
                <a class="publishjob" href="/job/jobadd.html">
                    <i class="ico icon-add"></i>&nbsp;&nbsp;发布职位</a>
                <div class="vip-info" style="display: none;">
                    <div class="vip-total">
                        <span class="fl">今日可发布在线职位数：</span>
                        <span id="totalJobTimes" class="totalJobTimes fl"></span>
                        <div class="timesIconBox fl">
                            <i class="ico timesIcon icon-question-ls"></i>
                            <div class="jobtimeTip">
                                <p>
                                    同时在线职位数
                                    <span id="totalTimes">10</span>个；<br> 每日发布职位次数不超过
                                    <span id="dayTimes">10</span>个；<br> 以上数据均以公司为单位计算，在线职位数可升级。
                                </p>
                                <a href="/systemhelp/#vip" target="_blank">升级会员</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s clearfix">
                    <input v-model="job_name" placeholder="输入职位名搜索"></input>
                    <a class="s-btn" href="javascript:;">
                        <i class="ico ico-search"></i>
                    </a>
                </div>
            </div>
            <div class="jobTabs">
                <a class="fs18 jobTab on" href="javascript:;" data-tab="manage">管理职位</a>
            </div>
            <div class="jobListWrap" style="display: block;">
                <!-- <div style="display: block;" class="category fl">
                    <a class="upline on" href="javascript:;" data-reviewtype="0,20" data-vid="30">在线中（
                        <span>0</span>）</a>
                    <a class="freerefresh" href="javascript:;" data-reviewtype="0,20" data-vid="30,40" style="display: none;">免费刷新职位（
                        <span>0</span>）</a>
                    <a class="downline" href="javascript:;" data-reviewtype="" data-vid="40,80">已下线（
                        <span>0</span>）</a>
                    <a class="uplineend" href="javascript:;" data-reviewtype="0,20" data-vid="10">未上线（
                        <span>0</span>）</a>
                    <a class="reviewing" href="javascript:;" data-reviewtype="10" data-vid="10" style="display: none;">审核中（
                        <span>0</span>）</a>
                    <a class="reviewend" href="javascript:;" data-reviewtype="30" data-vid="10" style="display: none;">审核未通过（
                        <span>0</span>）</a>
                </div> -->
                <Tabs value="name1">
                    <TabPane :label="label1" name="name1">
                        <!-- <div class="joblist">
                            <div class="empty-box">
                                <div class="common-empty-1 clearfix">
                                    <img width="177" height="177" class="pic" src="//img03.zhaopin.cn/IHRNB/ui/img/girl01.png">
                                    <div class="txt">
                                        <p>发布职位后，系统会为您推荐高质量简历，<br>面试不用愁～</p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <job_table></job_table>
                    </TabPane>
                    <TabPane :label="label2" name="name2">
                        <!-- <div class="joblist">
                            <div class="empty-box">
                                <div class="common-empty-1 clearfix">
                                    <img width="177" height="177" class="pic" src="//img03.zhaopin.cn/IHRNB/ui/img/girl01.png">
                                    <div class="txt">
                                        <p>发布职位后，系统会为您推荐高质量简历，<br>面试不用愁～</p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <job_table></job_table>
                    </TabPane>
                    <TabPane :label="label3" name="name3">
                        <!-- <div class="joblist">
                            <div class="empty-box">
                                <div class="common-empty-1 clearfix">
                                    <img width="177" height="177" class="pic" src="//img03.zhaopin.cn/IHRNB/ui/img/girl01.png">
                                    <div class="txt">
                                        <p>发布职位后，系统会为您推荐高质量简历，<br>面试不用愁～</p>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                        <job_table></job_table>
                    </TabPane>
                </Tabs>

                <!-- <div class="selectItems clearfix">
                    <span class="fl word">每页显示</span>
                    <div class="comboBox fl">
                        <Dropdown trigger="click" style="padding-left: 5px">
                            <a href="javascript:void(0)">
                                &nbsp;10&nbsp;
                                <Icon type="arrow-down-b"></Icon>
                            </a>
                            <DropdownMenu slot="list">
                                <DropdownItem>20</DropdownItem>
                                <DropdownItem>30</DropdownItem>
                                <DropdownItem>50</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <span class="fl word">条职位</span>
                </div> -->
                <div style="clear: both;"></div>
                <div style="display: none;" class="bottom-fn clearfix">
                    <div class="checkall">
                        <i class="ico icon-check"></i>
                        <span class="txt">全选</span>
                    </div>
                    <div class="fn-c-1">
                        <a onclick="dyweTrackEvent('autorefresh','jm009')" class="onlytext" href="javascript:;" id="smartRefreshButton">智能刷新</a>
                        <i class="vline">|</i>
                        <a onclick="dyweTrackEvent('refresh','jm008')" class="onlytext" href="javascript:;" id="normalRefreshButton">普通刷新</a>
                        <i class="vline">|</i>
                        <a class="onlytext" href="javascript:;" id="downLineButton">下线职位</a>
                    </div>
                    <div style="display: none" class="fn-c-2">
                        <a class="onlytext _deletejobs" href="javascript:;">删除</a>
                    </div>
                </div>

                <!-- <div class="paging"></div> -->
            </div>
            <!-- <div class="jobRankWrap" style="display: none;">
                <div class="fs14 rankdingTip">选择或输入一个关键词，即可查询求职者搜索该关键词时，您职位的实时排名情况。
                    <a class="tipBtn" href="javascript:;">知道了</a>
                </div>
                <div class="listRule clearfix">
                    <span class="fl fs14 onlineJob">在线中（
                        <span class="fs14 onlineNums">0</span>）</span>
                    <div class="fr pageOptin">
                        <span class="fl fs14 col666">每页显示</span>
                        <div class="comboBox fl">
                            <input type="button" value="10" class="comboBoxInput" id="pageSize">
                            <input type="hidden" value="10">
                            <b class="arrow"></b>
                            <ul class="comboBoxUl" style="display: none;">
                                <li title="10" data-code="10" class="cur">10</li>
                                <li title="20" data-code="20" class="">20</li>
                                <li title="50" data-code="50" class="">50</li>
                                <li title="100" data-code="100" class="">100</li>
                            </ul>
                        </div>
                        <span class="fl fs14 col666">条职位</span>
                    </div>
                </div>
                <div class="jobRanklist">
                    <ul>
                        <div class="empty-box">
                            <div class="common-empty-1 clearfix">
                                <img width="177" height="177" class="pic" src="//img03.zhaopin.cn/IHRNB/ui/img/girl01.png">
                                <div class="txt">
                                    <p>发布职位后，智联会为您推荐高质量简历，<br>面试不用愁～</p>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
                <div class="rankPage" style="display: none;"></div>
            </div> -->
            <!--新增外网职位lhs-->
            <!-- <div class="jobOuterNet" style="display: none;">
            </div> -->
            <!--新增外网职位lhs-->
        </div>
    </div>
</template>

<script>
import job_table from './sub_components/job_table.vue'

export default {
    name: 'enterprise_job',
    components: {
        job_table
    },
    data () {
        return {
            job_name: '',
            label1: (h) => {
                return h('div', [
                    h('span', '在线中'),
                    h('Badge', {
                        props: {
                            count: 3
                        }
                    })
                ])
            },
            label2: (h) => {
                return h('div', [
                    h('span', '已下线'),
                    h('Badge', {
                        props: {
                            count: 2
                        }
                    })
                ])
            },
            label3: (h) => {
                return h('div', [
                    h('span', '未上线'),
                    h('Badge', {
                        props: {
                            count: 4
                        }
                    })
                ])
            },

        };
    },
    methods: {

    },
    computed: {

    }
};
</script>
