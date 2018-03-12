<style lang="less">
     @import '../../styles/common.less';
  @import './styles/delivery.less';
</style>

<template>
    <div id="deliveryPage">
        <!-- 页面左侧 -->
        <div class="deliveryL">
            <div class="deliveryList">
                <Card :bordered="false">
                    <p slot="title" style="font-size: 20px; height: 40px">已投递简历状态
                        <Select v-model="model1" style="width:150px">
                            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                        </Select>
                    </p>
                    <!-- 导航菜单 -->
                    <Menu mode="horizontal" :theme="theme1" active-name="1">
                        <MenuItem name="1">
                            <Icon type="navicon-round"></Icon>
                            全部
                        </MenuItem>
                        <MenuItem name="2">
                            <Icon type="checkmark"></Icon>
                            投递成功
                        </MenuItem>
                        <MenuItem name="3">
                            <Icon type="eye"></Icon>
                            被查看
                        </MenuItem>
                        <MenuItem name="4">
                            <Icon type="load-a"></Icon>
                            待沟通
                        </MenuItem>
                        <MenuItem name="5">
                            <Icon type="paper-airplane"></Icon>
                            邀请面试
                        </MenuItem>
                        <MenuItem name="6">
                            <Icon type="close"></Icon>
                            不合适
                        </MenuItem>
                    </Menu>
                    <div style="background:#eee; padding: 5px">
                        <Card :bordered="false" style="">
                            <p class="jobName" slot="title">
                                <a href="#" style="color:#0d9572">java高级开发工程师
                                    <span style="color:#e6775c">（10k-20k）</span>
                                    <Poptip title="HR:赵钱孙李" content="phone:18330107774" style="float: right">
                                        <span>直接联系HR</span>
                                    </Poptip>
                                </a>
                            </p>
                            <div class="d_company">
                                <a href="#" title="offer-100">offer-100
                                    <span>[武汉]</span>
                                </a>
                            </div>
                            <div class="d_resume">
                                使用简历：
                                <span class="d_resume_type">
                                    在线简历
                                </span>
                                <a href="#" style="float: right;padding-left: 5px">
                                    <span @click="showSteps" style="color:#0d9572">
                                        投递成功
                                    </span>
                                </a>
                                <span class="d_time" style="float: right">2018-03-10 10:05</span>
                            </div>
                        </Card>
                    </div>  
                    <div style="background:#eee; padding: 5px">
                        <Card :bordered="false" style="">
                            <p class="jobName" slot="title">
                                <a href="#" style="color:#0d9572">java高级开发工程师
                                    <span style="color:#e6775c">（10k-20k）</span>
                                    <Poptip title="HR:周吴郑王" content="pthone:18330107775" style="float: right">
                                        <span>直接联系HR</span>
                                    </Poptip>
                                </a>
                            </p>
                            <div class="d_company">
                                <a href="#" title="offer-100">offer-100
                                    <span>[武汉]</span>
                                </a>
                            </div>
                            <div class="d_resume">
                                使用简历：
                                <span class="d_resume_type">
                                    在线简历
                                </span>
                                <a href="#" style="float: right;padding-left: 5px">
                                    <span @click="showSteps" style="color:#0d9572">
                                        投递成功
                                    </span>
                                </a>
                                <span class="d_time" style="float: right">2018-03-10 10:05</span>
                            </div>
                        </Card>
                    </div>
                </Card>

                <!-- 投递简历的进度 -->
                <Steps :current="1" v-show="isShowSteps">
                    <Step title="投递成功" content="这里是该步骤的描述信息"></Step>
                    <Step title="简历被查看" content="这里是该步骤的描述信息"></Step>
                    <Step title="待沟通" content="这里是该步骤的描述信息"></Step>
                    <Step title="邀请面试" content="这里是该步骤的描述信息"></Step>
                </Steps>
            </div>


            <dl class="c_delivery">
                <dd>
                    <Form id="deliveryForm">
                        <ul class="reset my_delivery">
                            <li class="">                   
                                        <!-- 显示公司的hr的信息
                                        <input type="hidden" class="hr_portrait" value="i/image/M00/65/73/CgpEMlmb37-AN1wHAAAtq750_yk178.jpg">
                                        <input type="hidden" class="hr_name" value="王蕾">
                                        <input type="hidden" class="hr_position" value="HRBP">
                                        <input type="hidden" class="target_hr" value="8320031">
                                        <input type="hidden" class="target_position" value="3322221">
                                        <div class="chat_me" data-lg-tj-id="2df0" data-lg-tj-no="0101" data-lg-tj-cid="3322221"></div>
                                        -->
                                <div class="progress_status dn" style="display: none;">
                                    <ul class="status_steps">
                                        <li class="status_done status_1">1</li>
                                        <li class="status_line status_line_grey">
                                            <span></span>
                                        </li>
                                        <li class="status_grey">
                                            <span>2</span>
                                        </li>
                                        <li class="status_line status_line_grey">
                                            <span></span>
                                        </li>
                                        <li class="status_grey">
                                            <span>3</span>
                                        </li>
                                        <li class="status_line status_line_grey">
                                            <span></span>
                                        </li>
                                        <li class="status_grey">
                                            <span>4</span>
                                        </li>
                                    </ul>
                                    <ul class="status_text clearfix">
                                        <li>投递成功</li>
                                        <li class="status_text_2">简历被查看</li>
                                        <li class="status_text_3">待沟通</li>
                                        <li class="status_text_4 status_text_6">面试</li>
                                    </ul>
                                    <ul class="status_list" data-id="972292213215092736">
                                        <li class="top1">
                                            <div class="list_time">
                                                <em></em>2018-03-10 10:05</div>
                                            <div class="list_body">
                                                <!-- 1.如果是通知面试，无举报入口 -->

                                                <img src="//www.lgstatic.com/i/image/M00/65/73/CgpEMlmb37-AN1wHAAAtq750_yk178.jpg" style="border-radius:50%;" width="60"
                                                    heigth="60">
                                                <h3 class="contact_title" style="position:relative;z-index:2;display:inline-block;">

                                                    王蕾&nbsp;已成功接收你的简历
                                                </h3>

                                            </div>
                                        </li>
                                    </ul>
                                    <a href="javascript:;" class="btn_closeprogress"></a>
                                </div>
                            </li>
                        </ul>
                        <input type="hidden" name="tag" value="-1">
                        <input type="hidden" name="r" value="">
                    </Form>
                </dd>
            </dl>
        </div>
        <!-- 页面右侧 -->
        <div class="deliveryR">
            <div class="deliveries_nav_button">
                <div class="mr_r_nav">
                    <ul class="clearfix">
                        <li class="[curPage === 'user_delivery' ? curClass : '']">
                            <a class="hover" @click="handlePush('user_favorite')" href="#">
                                收藏夹
                                <i class="td"></i>
                            </a>
                        </li>

                        <li class="[curPage === 'user_delivery' ? curClass : '']">
                            <a class="hover" @click="handlePush('user_delivery')" href="#">投递箱
                                <i class="sc"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    export default {
        name: 'user_delivery',
        data() {
            isShowSteps: false;
            return {

            };
        },
        computed: {

        },
        methods: {
            handlePush(name) {
                this.$router.push({
                    name: name
                })
            },
            showSteps: function() {
                this.isShowSteps = !this.isShowSteps
            }

        }
    };
</script>

<style>
</style>