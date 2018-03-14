<style lang="less">
@import './message.less';
</style>

<template>
    <div class="message-main-con">
        <div class="message-mainlist-con">
            <div>
                <Button @click="setCurrentMesType('unread')" size="large" long type="text">
                    <transition name="mes-current-type-btn">
                        <Icon v-show="currentMessageType === 'unread'" type="checkmark"></Icon>
                    </transition>
                    <span class="mes-type-btn-text">未读消息</span>
                    <Badge class="message-count-badge-outer" class-name="message-count-badge" :count="unreadCount"></Badge>
                </Button>
            </div>
            <div>
                <Button @click="setCurrentMesType('hasread')" size="large" long type="text">
                    <transition name="mes-current-type-btn">
                        <Icon v-show="currentMessageType === 'hasread'" type="checkmark"></Icon>
                    </transition>
                    <span class="mes-type-btn-text">已读消息</span>
                    <Badge class="message-count-badge-outer" class-name="message-count-badge" :count="hasreadCount"></Badge>
                </Button>
            </div>
            <div>
                <Button @click="setCurrentMesType('recyclebin')" size="large" long type="text">
                    <transition name="mes-current-type-btn">
                        <Icon v-show="currentMessageType === 'recyclebin'" type="checkmark"></Icon>
                    </transition>
                    <span class="mes-type-btn-text">回收站</span>
                    <Badge class="message-count-badge-outer" class-name="message-count-badge" :count="recyclebinCount"></Badge>
                </Button>
            </div>
        </div>
        <div class="message-content-con">
            <transition name="view-message">
                <div v-if="showMesTitleList" class="message-title-list-con">
                    <Table ref="messageList" :columns="mesTitleColumns" :data="currentMesList" :no-data-text="noDataText"></Table>
                </div>
            </transition>
            <transition name="back-message-list">
                <div v-if="!showMesTitleList" class="message-view-content-con">
                    <div class="message-content-top-bar">
                        <span class="mes-back-btn-con">
                            <Button type="text" @click="backMesTitleList">
                                <Icon type="chevron-left"></Icon>&nbsp;&nbsp;返回</Button>
                        </span>
                        <h3 class="mes-title">{{ mes.title }}</h3>
                    </div>
                    <p class="mes-time-con">
                        <Icon type="android-time"></Icon>&nbsp;&nbsp;{{ mes.sendTime }}</p>
                    <div class="message-content-body">
                        <p class="message-content">{{ mes.context }}</p>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    name: 'message_index',
    data () {
        const markAsreadBtn = (h, params) => {
            return h('Button', {
                props: {
                    size: 'small'
                },
                on: {
                    click: () => {
                        this.hasreadMesList.unshift(this.currentMesList.splice(params.index, 1)[0]);
                        this.$store.commit('setMessageCount', this.unreadMesList.length);
                        let putData = {
                            "type": 1
                        }
                        this.$axios.put('/notification/' + params.row.id, putData)
                            .then(response => {
                                this.$Message.info('已读')
                            })
                    }
                }
            }, '标为已读');
        };
        const deleteMesBtn = (h, params) => {
            return h('Button', {
                props: {
                    size: 'small',
                    type: 'error'
                },
                on: {
                    click: () => {
                        this.recyclebinList.unshift(this.hasreadMesList.splice(params.index, 1)[0]);
                        let putData = {
                            "type": 3
                        }
                        this.$axios.put('/notification/' + params.row.id, putData)
                            .then(response => {
                                this.$Message.info('已删除')
                            })
                    }
                }
            }, '删除');
        };
        const restoreBtn = (h, params) => {
            return h('Button', {
                props: {
                    size: 'small'
                },
                on: {
                    click: () => {
                        this.hasreadMesList.unshift(this.recyclebinList.splice(params.index, 1)[0]);
                        let putData = {
                            "type": 1
                        }
                        this.$axios.put('/notification/' + params.row.id, putData)
                            .then(response => {
                                this.$Message.info('已还原')
                            })
                    }
                }
            }, '还原');
        };
        return {
            currentMesList: [],
            unreadMesList: [],
            hasreadMesList: [],
            recyclebinList: [],
            currentMessageType: 'unread',
            showMesTitleList: true,
            unreadCount: 0,
            hasreadCount: 0,
            recyclebinCount: 0,
            noDataText: '暂无未读消息',
            mes: {
                title: '',
                sendTime: '',
                context: ''
            },
            mesTitleColumns: [
                // {
                //     type: 'selection',
                //     width: 50,
                //     align: 'center'
                // },
                {
                    title: ' ',
                    key: 'title',
                    align: 'left',
                    ellipsis: true,
                    render: (h, params) => {
                        return h('a', {
                            on: {
                                click: () => {
                                    this.showMesTitleList = false;
                                    this.mes.title = params.row.title;
                                    this.mes.sendTime = this.formatDate(params.row.sendTime);
                                    this.getContent(params.row.id);
                                }
                            }
                        }, params.row.title);
                    }
                },
                {
                    title: ' ',
                    key: 'time',
                    align: 'center',
                    width: 180,
                    render: (h, params) => {
                        return h('span', [
                            h('Icon', {
                                props: {
                                    type: 'android-time',
                                    size: 12
                                },
                                style: {
                                    margin: '0 5px'
                                }
                            }),
                            h('span', {
                                props: {
                                    type: 'android-time',
                                    size: 12
                                }
                            }, this.formatDate(params.row.sendTime))
                        ]);
                    }
                },
                {
                    title: ' ',
                    key: 'asread',
                    align: 'center',
                    width: 100,
                    render: (h, params) => {
                        if (this.currentMessageType === 'unread') {
                            return h('div', [
                                markAsreadBtn(h, params)
                            ]);
                        } else if (this.currentMessageType === 'hasread') {
                            return h('div', [
                                deleteMesBtn(h, params)
                            ]);
                        } else {
                            return h('div', [
                                restoreBtn(h, params)
                            ]);
                        }
                    }
                }
            ]
        };
    },
    methods: {
        formatDate (time) {
            let date = new Date(time);
            let year = date.getFullYear();
            let month = date.getMonth() + 1;
            let day = date.getDate();
            let hour = date.getHours();
            let minute = date.getMinutes();
            let second = date.getSeconds();
            return year + '/' + month + '/' + day + '  ' + hour + ':' + minute + ':' + second;
        },
        backMesTitleList () {
            this.showMesTitleList = true;
        },
        setCurrentMesType (type) {
            if (this.currentMessageType !== type) {
                this.showMesTitleList = true;
            }
            this.currentMessageType = type;
            if (type === 'unread') {
                this.noDataText = '暂无未读消息';
                this.currentMesList = this.unreadMesList;
            } else if (type === 'hasread') {
                this.noDataText = '暂无已读消息';
                this.currentMesList = this.hasreadMesList;
            } else {
                this.noDataText = '回收站无消息';
                this.currentMesList = this.recyclebinList;
            }
        },
        getContent (id) {
            this.$axios.get('/notification/getNotification/' + id)
                .then(response => {
                    this.mes.context = response.data.context;
                })
        }
    },
    mounted () {
        // 1已读，2未读，回收站3
        this.$axios.get('/notification?pageSize=10&pageNumber=1&type=2&recieverId=' + localStorage.getItem('userid'))
            .then(response => {
                this.currentMesList = this.unreadMesList = response.data.rows;
            })
        this.$axios.get('/notification?pageSize=10&pageNumber=1&type=1&recieverId=' + localStorage.getItem('userid'))
            .then(response => {
                this.hasreadMesList = response.data.rows;
            })
        this.$axios.get('/notification?pageSize=10&pageNumber=1&type=3&recieverId=' + localStorage.getItem('userid'))
            .then(response => {
                this.recyclebinList = response.data.rows;
            })
        this.unreadCount = this.unreadMesList.length;
        this.hasreadCount = this.hasreadMesList.length;
        this.recyclebinCount = this.recyclebinList.length;
    },
    watch: {
        unreadMesList (arr) {
            this.unreadCount = arr.length;
        },
        hasreadMesList (arr) {
            this.hasreadCount = arr.length;
        },
        recyclebinList (arr) {
            this.recyclebinCount = arr.length;
        }
    }
};
</script>

