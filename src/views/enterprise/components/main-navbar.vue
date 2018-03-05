<style lang="less">
@import './styles/main-navbar.less';
</style>

<template>
    <div class="mr_myresume_r">
        <div class="mr_r_nav">
            <ul class="clearfixs">
                <li>
                    <a href="" target="_blank">投递箱
                        <i class="td"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">邀请函
                        <i class="yq"></i>
                    </a>
                </li>
                <li>
                    <a href="" target="_blank">收藏夹
                        <i class="sc"></i>
                    </a>
                </li>
                <li class="mr_none">
                    <a href="" target="_blank">订阅栏
                        <i class="dy"></i>
                    </a>
                </li>
            </ul>
        </div>
        <div class="mr_upload">
            <i></i>
            <a class="inline cboxElement" href="#" title="上传附件简历">我要上传附件简历</a>
        </div>

        <div class="mr_uploaded clearfixs dn">
            <a href="javascript:;" class="mr_del"></a>
            <div class="mr_up_main">
                <a href="" title=""></a>
                <p></p>
            </div>
            <div class="mr_set_default">
                <div class="set_default_wrap">
                    <input id="default_resume" type="button" class="mr_button" value="默认投递：在线简历">
                    <span>
                        <i class="mr_sj"></i>
                    </span>
                    <div class="xl_list dn" style="display: none;">
                        <ul class="ul_resume_type">
                            <li data-type="1">默认投递：在线简历</li>
                            <li data-type="0">默认投递：附件简历</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div class="scroll_fix">
            <div class="mr_integrity">
                <div class="mr_top clearfixs">
                    <span class="mr_tip_l">
                        <em class="mr_tip">简历完整度：</em>
                        <em class="mr_bfb">28%</em>
                    </span>
                    <a class="mr_tip_r" target="_blank" href="">预览简历</a>
                </div>
                <div class="mr_integrity_m">
                    <div class="mr_solid" style="width: 70px;"></div>
                    <div class="mr_dashed" style="width: 70px;"></div>
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
                            <span class="mr_m_name"> 实习经历 </span>
                        </a>
                    </li>
                    <li data-md="educationalBackground" class="md_flag">
                        <a class="clearfixs">

                            <span class="mr_require flag_edu dn">必填</span>

                            <i class="mr_edu_i"></i>
                            <span class="mr_m_name">教育经历</span>
                        </a>
                    </li>
                    <li data-md="projectExperience" class="dn m_hide">
                        <a class="clearfixs">
                            <span class="mr_hide_del"></span>
                            <i class="mr_project_i"></i>
                            <span class="mr_m_name">项目经验</span>
                        </a>
                    </li>
                    <li data-md="worksShow" class="dn m_hide">
                        <a class="clearfixs">
                            <span class="mr_hide_del"></span>
                            <i class="mr_production_i"></i>
                            <span class="mr_m_name">作品展示</span>
                        </a>
                    </li>
                    <li data-md="selfDescription" class="dn m_hide">
                        <a class="clearfixs">
                            <span class="mr_hide_del"></span>
                            <i class="mr_self_i"></i>
                            <span class="mr_m_name">自我描述</span>
                        </a>
                    </li>
                    <li data-md="expectJob" class="dn m_hide">
                        <a class="clearfixs">
                            <!-- <span class="mr_hide_del"></span>                       -->
                            <i class="mr_hopework_i"></i>
                            <span class="mr_m_name">期望工作</span>
                        </a>
                    </li>
                    <li data-md="skillsAssess" class="dn m_hide">
                        <a class="clearfixs">
                            <span class="mr_hide_del"></span>
                            <i class="mr_skill_i"></i>
                            <span class="mr_m_name">技能评价</span>
                        </a>
                    </li>
                    <li data-md="customBlock" class="dn m_hide">
                        <a class="clearfixs">
                            <span class="mr_hide_del"></span>
                            <i class="mr_moudle_i"></i>
                            <span class="mr_m_name">自定义板块</span>
                        </a>
                    </li>
                    <li class="mr_module_add">
                        <a>
                            <span class="mr_hide_addic"></span>
                            <i class="mr_addmd_i"></i>
                            <span class="mr_m_name">添加板块</span>
                        </a>
                    </li>
                    <li data-md="projectExperience" class="hide_md dn">
                        <a class="clearfixs">
                            <span class="mr_hide_addic"></span>
                            <i class="mr_project_i"></i>
                            <span class="mr_m_name">项目经验</span>
                        </a>
                    </li>
                    <li data-md="worksShow" class="hide_md dn">
                        <a class="clearfixs">
                            <span class="mr_hide_addic"></span>
                            <i class="mr_production_i"></i>
                            <span class="mr_m_name">作品展示</span>
                        </a>
                    </li>
                    <li data-md="selfDescription" class="hide_md dn">
                        <a class="clearfixs">
                            <span class="mr_hide_addic"></span>
                            <i class="mr_self_i"></i>
                            <span class="mr_m_name">自我描述</span>
                        </a>
                    </li>
                    <li data-md="expectJob" class="hide_md dn">
                        <a class="clearfixs">
                            <span class="mr_hide_addic"></span>
                            <i class="mr_hopework_i"></i>
                            <span class="mr_m_name">期望工作</span>
                        </a>
                    </li>
                    <li data-md="skillsAssess" class="hide_md dn">
                        <a class="clearfixs">
                            <span class="mr_hide_addic"></span>
                            <i class="mr_skill_i"></i>
                            <span class="mr_m_name">技能评价</span>
                        </a>
                    </li>
                    <li data-md="customBlock" class="hide_md dn">
                        <a class="clearfixs">
                            <span class="mr_hide_addic"></span>
                            <i class="mr_moudle_i"></i>
                            <span class="mr_m_name">自定义板块</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'main_navbar',
    data () {
        return {

        };
    },
    methods: {

    },
    computed: {

    }
};
</script>
