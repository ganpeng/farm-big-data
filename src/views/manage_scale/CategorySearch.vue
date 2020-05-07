<template>
    <el-autocomplete
        v-model="qs"
        :fetch-suggestions="querySearchAsync"
        value-key="name"
        placeholder="请选择分类"
        @select="selectHandler"
    ></el-autocomplete>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'CategorySearch',
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
    computed: {
        ...mapGetters({
            categoryList: 'common/categoryList'
        })
    },
    methods: {
        querySearchAsync(queryString, cb) {
            let restaurants = this.categoryList;
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
            cb(results);
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        selectHandler(category) {
            this.handleSelect(category);
            this.qs = '';
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
