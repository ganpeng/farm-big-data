<template>
    <el-autocomplete
        v-model="qs"
        :fetch-suggestions="querySearchAsync"
        :trigger-on-focus="true"
        value-key="name"
        placeholder="请选择量表"
        @select="selectHandler"
    ></el-autocomplete>
</template>
<script>
export default {
    name: 'ScaleSearch',
    props: {
        handleSelect: {
            type: Function,
            default: () => {}
        }
    },
    data() {
        return {
            restaurants: [],
            qs: ''
        };
    },
    methods: {
        async querySearchAsync(name, cb) {
            try {
                let params = {
                    // keyword: name,
                    pageNum: 0,
                    pageSize: 400,
                    visible: true
                };
                let res = await this.$service.getScaleList(params);
                if (res && res.errorCode === 0) {
                    let list = res.body;
                    cb(list);
                }
            } catch (err) {
                console.log(err);
            }
        },
        selectHandler(scale) {
            this.handleSelect(scale);
            this.qs = '';
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
