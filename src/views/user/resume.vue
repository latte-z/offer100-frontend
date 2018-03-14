<style lang="less">
@import '../../styles/common.less';
@import './styles/resume.less';
</style>

<template>
    <div class="container clearfix" id="container">
        <div>
            <input type="hidden" id="isShowDefault" value="1">
            <div class="clearfixs mr_created">
                <div class="mr_myresume_l">
                    <div id="mr_mr_head">

                        <!-- 设置头像 -->
                        <div class="mr_top_bg" id="baseinfo">
                            <Upload id="uploadHeadPic" action="//jsonplaceholder.typicode.com/posts/">
                                <Button type="ghost" icon="ios-cloud-upload-outline" style="border:0px">上传头像</Button>
                            </Upload>
                        </div>

                        <div class="mr_baseinfo">
                            <!-- 设置姓名 -->
                            <div v-show="!isShowNameForm" @mouseover="ShowNameEm()" @mouseout="ShowNameEm()" class="mr_p_name mr_w604 clearfixs">
                                <span v-show="isShowNameEm" class="mr_edit">
                                    <i></i>
                                    <em @click="showNameForm">编辑</em>
                                </span>
                                <span class="mr_name">{{ user.userName }}</span>
                            </div>
                            <form v-show="isShowNameForm" id="nameForm" novalidate="novalidate">
                                <div class="mr_name_edit" display="inline">
                                    <Input v-model="user.userName" placeholder="" style="width: 350px"></Input>
                                    <Button type="success" style="width: 60px">保存</Button>
                                    <Button type="error" style="width: 60px">取消</Button>
                                </div>
                            </form>
                            <!-- 设置介绍 -->

                            <div v-show="!isShowIntroduceForm" @mouseover="ShowIntroduceEm()" @mouseout="ShowIntroduceEm()" class="mr_p_introduce mr_w604 clearfixs">
                                <span v-show="isShowIntroduceEm" class="mr_edit" data-type="0">
                                    <i></i>
                                    <em @click="showIntroduceForm">编辑</em>
                                </span>
                                <span class="mr_intro mr_intro_normal">{{ user.introduce }}</span>
                            </div>
                            <form v-show="isShowIntroduceForm" id="introduceForm">
                                <div class="mr_intro_edit" display="inline">
                                    <Input v-model="user.introduce" placeholder="" style="width: 350px"></Input>
                                    <Button type="success" style="width: 60px">保存</Button>
                                    <Button type="error" style="width: 60px">取消</Button>
                                </div>
                            </form>

                            <!-- 个人信息 -->
                            <div v-show="!isShowPersonForm" @mouseover="ShowPersonEm()" @mouseout="ShowPersonEm()" class="mr_p_info mr_infoed mr_w604 clearfixs">
                                <div class="info_t">
                                    <span class="shenfen">
                                        <i></i>
                                        <em>{{ user.schoolTitle }}</em>
                                        <em>{{ user.major }}</em>
                                    </span>
                                </div>
                                <div class="info_j">
                                    <span class="base_info">
                                        <i></i>
                                        <em class="s">{{ user.sex }}</em>
                                        <em class="a">
                                            <span class="age">{{ user.age }}</span>
                                        </em>
                                        <em class="x">{{ user.education }}</em>

                                        <em class="mr0 d">{{ user.nativePlace }}</em>
                                    </span>
                                </div>
                                <div class="info_b">
                                    <span class="mobile">
                                        <i></i>
                                        <em>{{ user.telephone }}</em>
                                    </span>
                                    <span class="email">
                                        <i></i>
                                        <em>{{ user.email }}</em>
                                    </span>
                                </div>
                                <span v-show="isShowPersonEm" class="mr_edit mr_head_r mr_edit_on">
                                    <i></i>
                                    <em @click="showPersonForm">编辑</em>
                                </span>
                            </div>
                            <Form v-show="isShowPersonForm" id="olinfoForm" novalidate="novalidate">
                                <div class="mr_info_edit mr_info_on">
                                    <FormItem prop="user.schoolTitle">
                                        <label>学校</label>
                                        <Input v-model="user.schoolTitle" size="large" placeholder="请输入学校" style="width: 350px"></Input>
                                    </FormItem>

                                    <FormItem prop="user.major">
                                        <label>专业</label>
                                        <Input v-model="user.major" size="large" placeholder="请输入专业" style="width: 350px"></Input>
                                    </FormItem>

                                    <FormItem prop="user.sex" class="userinfo_sex input_box">
                                        <RadioGroup v-model="user.sex">
                                            <Radio label="男"></Radio>
                                            <Radio label="女"></Radio>
                                        </RadioGroup>
                                    </FormItem>

                                    <FormItem prop="user.age">
                                        <label>年龄</label>
                                        <InputNumber :max="30" :min="10" v-model="user.age" style="width: 350px"></InputNumber>
                                    </FormItem>

                                    <FormItem prop="user.education">
                                        <label>最高学历</label>
                                        <div class="form_wrap normal_s" style="*z-index:4;">
                                            <Select v-model="user.education" style="width:350px; height: 46px">
                                                <Option v-for="item in XLList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                            </Select>
                                        </div>
                                    </FormItem>

                                    <FormItem prop="user.nativePlace">
                                        <label>所在城市</label>
                                        <Cascader :data="city" v-model="user.nativePlace" style="width: 350px; height: 46px"></Cascader>
                                    </FormItem>

                                    <FormItem prop="user.telephone">
                                        <label>手机号码</label>
                                        <Input v-model="user.telephone" size="large" placeholder="请输入手机号" style="width: 350px"></Input>
                                    </FormItem>

                                    <FormItem prop="user.email">
                                        <label>联系邮箱</label>
                                        <Input v-model="user.email" size="large" placeholder="请输入邮箱" style="width: 350px"></Input>
                                    </FormItem>

                                    <div class="mr_ope">
                                        <Button type="success" style="width: 100px">保存</Button>
                                        <Button type="error" style="width: 100px">取消</Button>
                                    </div>
                                </div>
                            </Form>
                        </div>
                    </div>

                    <!-- 教育和实习经历 -->
                    <div class="mr_content">
                        <!-- 工作（实习）经历 -->
                        <div id="workExperience" class="item_container_target">
                            <div class="mr_moudle_head clearfixs mr_w604">
                                <div class="mr_head_l">
                                    <div class="mr_title">
                                        <span class="mr_title_l"></span>
                                        <span class="mr_title_c"> 项目经历 </span>
                                        <span class="mr_title_r"></span>
                                    </div>
                                </div>
                                <div class="mr_head_r" style="cursor: pointer;">
                                    <i></i>
                                    <em @click="showAddContent" v-model="addEm">{{ addEm }}</em>
                                </div>
                            </div>
                            <div class="mr_moudle_content mr_w604">
                                <Form v-show="isShowAddContent" class="jobExpForm" id="addJobForm" novalidate="novalidate">
                                    <!-- 实习经历添加页面 -->
                                    <div class="mr_add_work">
                                        <FormItem prop="projectExp.projectName">
                                            <label>项目名称</label>
                                            <div class="company">
                                                <Input v-model="projectExp.projectName" size="large" placeholder="请输入项目名称" style="width: 350px"></Input>
                                            </div>
                                        </FormItem>

                                        <FormItem prop="projectExp.job">
                                            <label>承担的职位</label>
                                            <div class="projectExp.job">
                                                <Input v-model="projectExp.job" size="large" placeholder="请输入所在职位" style="width: 350px"></Input>
                                            </div>
                                        </FormItem>
                                        <FormItem>
                                            <label>时间经历</label>
                                            <div class="workTime">
                                                <Row>
                                                    <Col span="12">
                                                    <DatePicker v-model="projectExp.startTime" :value="projectExp.startTime" format="yyyy年MM月dd日" type="date" placeholder="Select date" style="width: 150px"></DatePicker>
                                                    </Col>
                                                    <Col span="12">
                                                    <DatePicker v-model="projectExp.endTime" :value="projectExp.endTime" format="yyyy/MM/dd" type="daterange" placement="bottom-end" placeholder="Select date" style="width: 150px"></DatePicker>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </FormItem>

                                        <FormItem prop="projectExp.projectDesc">
                                            <label>具体描述</label>
                                            <Input v-model="projectExp.projectDesc" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                        </FormItem>

                                        <FormItem>
                                            <div class="mr_ope clearfixs">
                                                <Button type="success" style="width: 100px">保存</Button>
                                                <Button type="error" style="width: 100px">取消</Button>
                                            </div>
                                        </FormItem>
                                    </div>
                                    <textarea name="editorValue" id="ueditor_textarea_editorValue" style="display: none;" aria-invalid="false" class="valid"></textarea>
                                </Form>

                                <!-- 实习经历为空时显示 -->

                                <!-- 实习经历显示 -->
                                <div class="list_show" style="">
                                    <div class="dn new_addjob_hide">
                                        <div class="dn mr_jobe_list">
                                            <div class="clearfixs">
                                                <div class="mr_content_l clearfixs">
                                                    <div class="l1">
                                                        <img src="" alt="公司logo" class="my_company_logo dn" style="display: none;">
                                                    </div>
                                                    <div class="l2">
                                                        <h4>华中科技大学</h4>
                                                        <span>学生</span>
                                                    </div>
                                                </div>
                                                <div class="mr_content_r">
                                                    <div class="mr_edit mr_c_r_t" style="cursor: pointer;">
                                                        <i></i>
                                                        <em>编辑</em>
                                                    </div>
                                                    <span>2017.09</span>
                                                    <span>-</span>
                                                    <span>至今</span>
                                                </div>
                                            </div>
                                            <div class="dn mr_content_m ueditor_parse" style="display: block;">
                                                <p>学生<br></p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="updatejob_wrap" style="">
                                        <!-- 实习经历添加之后的页面显示 -->
                                        <div class="mr_jobe_list" style="display: block;">
                                            <div class="clearfixs">
                                                <div class="mr_content_l clearfixs">
                                                    <div class="l1">
                                                        <img src="" alt="公司logo" class="my_company_logo dn" style="display: none;">
                                                    </div>
                                                    <div class="l2">
                                                        <h4>{{ projectExp.projectName }}</h4>
                                                        <span>{{ projectExp.job }}</span>
                                                    </div>
                                                </div>
                                                <div class="mr_content_r">
                                                    <div class="mr_edit mr_c_r_t" style="cursor: pointer;">
                                                        <!--
                                                        <i></i>
                                                        <em>编辑</em>
                                                        -->
                                                        <span>2017</span>
                                                        <span>-</span>
                                                        <span>2018</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="dn mr_content_m ueditor_parse" style="display: flex; ">
                                                <p>{{ projectExp.projectDesc }}<br></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 教育经历添加 -->
                        <div id="educationalBackground" class="item_container_target">
                            <div class="mr_moudle_head clearfixs mr_w604">
                                <div class="mr_head_l">
                                    <div class="mr_title">
                                        <span class="mr_title_l"></span>
                                        <span class="mr_title_c">教育经历</span>
                                        <span class="mr_title_r"></span>
                                    </div>
                                </div>
                                <div class="mr_head_r" style="cursor: pointer;">
                                    <i></i>
                                    <em v-model="addEduExpEm" @click="addEducationExp">{{ addEduExpEm }}</em>
                                </div>
                            </div>
                            <div class="mr_moudle_content mr_w604">
                                <Form v-show="isShowAddEduExp" class="eduExpForm" id="addEduForm" novalidate="novalidate">
                                    <div class="mr_add_work">
                                        <label>学校名称</label>
                                        <Input v-model="educationExp.schoolTitle" placeholder="请输入学校名称" style="width: 350px"></Input>
                                        <label>所学专业</label>
                                        <Input v-model="educationExp.major" placeholder="请输入专业" style="width: 350px"></Input>
                                        <label>学历</label>
                                        <Select v-model="educationExp.education" style="width:350px; height: 46px">
                                            <Option v-for="item in XLList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                                        </Select>
                                        <label>入学与毕业年份</label>
                                        <Row>
                                            <Col span="12">
                                            <DatePicker v-model="educationExp.startTime" type="date" :start-date="new Date(1991, 4, 14)" placeholder="Select date" style="width: 200px"></DatePicker>
                                            </Col>
                                            <Col span="12">
                                            <DatePicker v-model="educationExp.endTime" type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
                                            </Col>
                                        </Row>
                                        <div class="mr_ope clearfixs">
                                            <Button type="success" style="width: 100px">保存</Button>
                                            <Button type="error" style="width: 100px">取消</Button>
                                        </div>
                                    </div>
                                </Form>

                                <!-- 教育经历显示 -->
                                <div class="list_show">
                                    <div class="clearfixs mb46 mr_jobe_list">
                                        <div class="mr_content_l">
                                            <!--
                                            <div class="l1">
                                                <img src="//www.lgstatic.com/i/image/M00/AD/4F/CgqKkVi1E5uAD0xGAAAZJHHiMms08.jpeg" alt="学校Logo">
                                            </div>
                                            -->
                                            <div class="l2">
                                                <h4>{{ educationExp.schoolTitle }}</h4>
                                                <span>{{ educationExp.major }}</span>
                                                <span>{{ educationExp.education }}</span>
                                            </div>
                                        </div>
                                        <div class="mr_content_r">
                                            <div class="mr_edit mr_c_r_t" style="cursor: pointer;">
                                                <!--
                                                <i></i>
                                                <em>编辑</em>
                                                -->
                                                <span>{{ educationExp.startTime }}</span>
                                                <span>-</span>
                                                <span>{{ educationExp.endTime }}</span>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 其他 -->
                        <div id="educationalBackground" class="item_container_target">
                            <div class="mr_moudle_head clearfixs mr_w604">
                                <div class="mr_head_l">
                                    <div class="mr_title">
                                        <span class="mr_title_l"></span>
                                        <span class="mr_title_c">其他经历</span>
                                        <span class="mr_title_r"></span>
                                    </div>
                                </div>
                                <div class="mr_head_r" style="cursor: pointer;">
                                    <i></i>
                                    <em v-model="addElseEm">{{ addElseEm }}</em>
                                </div>
                            </div>
                            <div class="mr_moudle_content mr_w604">
                                <Form v-show="isShowElse" class="eduElseForm" id="addElseForm" style="padding: 48px 48px;background-color:#fff4fcfd">
                                    <div class="mr_add_else">
                                        <FormItem>
                                            <label>专业技能</label>
                                            <Input v-model="user.professinalSkill" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                        </FormItem>

                                        <FormItem>
                                            <label>自我评价</label>
                                            <Input v-model="user.selfEvaluation" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                        </FormItem>

                                        <FormItem>
                                            <label>获奖情况</label>
                                            <Input v-model="user.reward" type="textarea" :rows="6" placeholder="输入工作内容"></Input>
                                        </FormItem>
                                        <div class="mr_ope clearfixs">
                                            <Button type="success" style="width: 100px">保存</Button>
                                            <Button type="error" style="width: 100px">取消</Button>
                                        </div>
                                    </div>
                                </Form>

                                <!-- 显示 -->
                                <div class="list_show">
                                    <Row>
                                        <Col span="20" style="margin-bottom: 5px">
                                        <Card dis-hover style="background-color: #fafafa; border: 0px">
                                            <p slot="title" style="border-bottom: 0px">专业技能</p>
                                            <p>{{ user.professinalSkill }}</p>
                                        </Card>
                                        </Col>
                                        <Col span="20" style="margin-bottom: 15px">
                                        <Card dis-hover style="border: 0px;background-color: #fafafa">
                                            <p slot="title" style="border-bottom: 0px">自我评价</p>
                                            <p>{{ user.selfEvaluation }}</p>z

                                        </Card>
                                        </Col>
                                        <Col span="20">
                                        <Card dis-hover style="border: 0px;background-color: #fafafa">
                                            <p slot="title" style="border-bottom: 0px">获奖情况</p>
                                            <p>{{ user.reward }}</p>
                                        </Card>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 页面右侧 -->
                <div class="mr_myresume_r">
                    <div class="mr_r_nav">
                        <ul class="clearfixs">
                            <!-- <li :class="[curPage === 'user_resume' ? curClass : '']"> -->
                            <li>
                                <a>投递箱</a>
                            </li>
                            <i class="td"></i>

                            <!-- <li :class="[curPage === 'user_resume' ? curClass : '']"> -->
                            <li>
                                <a>收藏夹</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mr_upload">
                        <Upload action="//jsonplaceholder.typicode.com/posts/">
                            <Button type="ghost" icon="ios-cloud-upload-outline" style="width: 288px; height: 56px">我要上传简历</Button>
                        </Upload>
                    </div>

                    <div class="scroll_fix">
                        <div class="mr_integrity">
                            <div class="mr_top clearfixs">
                                <span class="mr_tip_l">
                                    <em class="mr_tip">简历完整度：</em>
                                    <em class="mr_bfb">13%</em>
                                </span>
                                <a class="mr_tip_r" href="#">预览简历</a>
                            </div>
                            <div class="mr_integrity_m">
                                <div class="mr_solid" style="width: 32.5px;"></div>
                                <div class="mr_dashed" style="width: 7.5px;"></div>
                            </div>
                        </div>
                        <div class="mr_module">
                            <ul>
                                <li class="active md_flag" data-md="baseinfo">
                                    <a class="clearfixs">
                                        <i class="mr_base_i"></i>
                                        <span class="mr_m_name">基本信息</span>
                                    </a>
                                </li>
                                <li data-md="workExperience" class="md_flag">
                                    <a class="clearfixs">
                                        <span class="mr_require flag_work dn">必填</span>
                                        <i class="mr_works_i"></i>
                                        <span class="mr_m_name"> 项目经历 </span>
                                    </a>
                                </li>
                                <li data-md="educationalBackground" class="md_flag">
                                    <a class="clearfixs">
                                        <i class="mr_edu_i"></i>
                                        <span class="mr_m_name">教育经历</span>
                                    </a>
                                </li>
                                <li data-md="educationalBackground" class="md_flag">
                                    <a class="clearfixs">
                                        <i class="mr_edu_i"></i>
                                        <span class="mr_m_name">其他经历</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'user_resume',
    data () {
        return {
            user: {
                userName: '田永涛',
                graduatedSchool: '华中科技大学',
                profession: '', //专业
                sex: '男',
                age: '24',
                personPhoto: '',
                education: '',
                nativePlace: '',
                email: '',
                telephone: '',
                professinalSkill: "",
                reward: "",
                selfEvaluation: '',
                userId: '',
                scoreRank: '',
                majorCourse: '',
                id: '',
                communicationAddress: '',

            },

            projectExp: {
                projectName: 'offer-100',
                job: '前端',
                startTime: '2017.12.11',
                endTime: '2018.3.15',
                projectDesc: '课程：软件实训',
            },

            educationExp: {
                schoolTitle: '华中科技大学',
                major: '软件工程',
                education: '硕士',
                startTime: '2017-9',
                endTime: '2020-3',
                userId: 1,
                //userName: user.userName
            },
            addEduExpEm: '添加',
            addElseEm: '添加',
            addEm: '添加',
            isShowElse: false,
            isShowAddEduExp: false,
            isShowAddContent: false,
            isShowGznx: false,
            isShowEducation: false,
            isShowNameEm: false,
            isShowIntroduceEm: false,
            isShowPersonEm: false,
            isShowNameForm: false,
            isShowIntroduceForm: false,
            isShowPersonForm: false,
            city: [
                {
                    value: 'hubei',
                    label: '湖北',
                    children: [
                        {
                            value: 'wuhan',
                            label: '武汉',
                        },
                        {
                            value: 'huanggang',
                            label: '黄冈',
                        },
                        {
                            value: 'yichang',
                            label: '宜昌',
                        }
                    ]
                },
            ],
            XLList: [
                {
                    value: '大专',
                    label: '大专',
                },
                {
                    value: '本科',
                    label: '本科',
                },
                {
                    value: '硕士',
                    label: '硕士',
                },
                {
                    value: '博士',
                    label: '博士',
                },
                {
                    value: '其他',
                    label: '其他',
                },
            ],
            gznxList: [
                {
                    value: '应届毕业生',
                    label: '应届毕业生',
                },
                {
                    value: '1年',
                    label: '1年',
                },
                {
                    value: '2年',
                    label: '2年',
                },
                {
                    value: '3年',
                    label: '3年',
                },
                {
                    value: '4年',
                    label: '4年',
                },
                {
                    value: '5年',
                    label: '5年',
                },
                {
                    value: '6年',
                    label: '6年',
                },
                {
                    value: '7年',
                    label: '7年',
                },
                {
                    value: '8年',
                    label: '8年',
                },
                {
                    value: '9年',
                    label: '9年',
                },
                {
                    value: '10年',
                    label: '10年',
                },
                {
                    value: '10年以上',
                    label: '10年以上',
                },
            ],
        }

    },
    computed: {

    },
    mounted () {
        this.init()
    },
    methods: {
        init () {
            this.get()
        },
        get () {
            this.$axios.get('/resume/' + 12)
                .then(response => {
                    this.user = response.data;
                    this.user.sex = (response.data.sex == '1' ? '男' : '女');
                    switch (response.data.education) {
                        case 1: this.user.education = '本科'; break;
                        case 2: this.user.education = '硕士'; break;
                        case 3: this.user.education = '博士'; break;
                        case 4: this.user.education = '高中'; break;
                        case 5: this.user.education = '初中'; break;
                        case 6: this.user.education = '大专'; break;
                        default: this.user.education = response.data.education;
                    }
                    //TODO 专业
                    //this.$axios.get('' + 1)
                    this.user.major = "软件工程"
                })

            // this.$axios.get('/education/' + 1)
            //     .then(response => {
            //         this.educationExp = response.data;
            //     })
            this.$axios.get('/project_experience/' + 4)
                .then(response => {
                    this.projectExp = response.data;
                })
            // this.user = this.message
        },


        showNameForm: function () {
            this.isShowNameForm = !this.isShowNameForm
        },
        showIntroduceForm: function () {
            this.isShowIntroduceForm = !this.isShowIntroduceForm
        },
        showPersonForm: function () {
            this.isShowPersonForm = !this.isShowPersonForm
        },
        ShowNameEm: function () {
            this.isShowNameEm = !this.isShowNameEm
        },
        ShowIntroduceEm: function () {
            this.isShowIntroduceEm = !this.isShowIntroduceEm
        },
        ShowPersonEm: function () {
            this.isShowPersonEm = !this.isShowPersonEm
        },
        showXlList: function () {
            this.isshowXL = !this.isShowXL
        },
        showEducation: function () {
            this.isShowEducation = !this.isShowEducation
        },
        showGznx: function () {
            this.isShowGznx = !this.isShowGznx
        },
        showAddContent: function () {
            this.isShowAddContent = !this.isShowAddContent
            if (this.isShowAddContent) {
                this.addEm = "取消"
            } else {
                this.addEm = "添加"
            }
        },
        addEducationExp: function () {
            this.isShowAddEduExp = !this.isShowAddEduExp
            if (this.isShowAddEduExp) {
                this.addEduExpEm = "取消"
            } else {
                this.addEduExpEm = "添加"
            }
        },
        addElse: function () {
            this.isShowElse = !this.isShowElse
            if (this.isShowElse) {
                this.addElseEm = "取消"
            } else {
                this.addElseEm = "添加"
            }
        },
        handlePush (name) {
            this.$router.push({
                name: name
            })
        }

    }
};
</script>

<style>

</style>