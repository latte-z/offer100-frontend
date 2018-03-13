<template>
    <div><Cascader :data="data" :load-data="loadData" :render-format="format" change-on-select></Cascader>
    <div>{{cunrrentId}}</div>
    </div>
    
</template>
<script>
export default {
    data () {
        return {
            cunrrentId: 1,
            getUrl: 'http://localhost:8081/zone/getZoneByParentId/',
            data: []
        }
    },
    methods: {
        init () {
            this.$axios.get(this.getUrl + 1)
                .then(response => {
                    this.data=response.data;
                    this.data.forEach(element=>{
                        element.label = element.name
                        if(element.level<4){element.children=[]}
                        element.loading=false
                    })
                })
        },
        format (labels, selectedData) {
                const index = labels.length - 1
                const data = selectedData[index] || false
                this.cunrrentId = data.id
                return labels.join('-')
            },
        loadData (item, callback) {
            item.loading = true;
            this.$axios.get(this.getUrl + item.id)
                .then(response => {
                    item.children=response.data;
                    item.children.forEach(element=>{
                        element.label = element.name
                        if(element.level<3){
                            element.children=[]
                            element.loading=false
                        }
                    })
                })
            item.loading = false
            callback()
        }

    },
    mounted () {
        this.init();
    }
}
</script>