<template>
    <el-autocomplete
        v-model="qs"
        :fetch-suggestions="querySearchAsync"
        value-key="questionNo"
        placeholder="请选择题目"
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
            questionList: 'scale/questionList'
        })
    },
    methods: {
        querySearchAsync(queryString, cb) {
            let restaurants = this.questionList.map((item) => {
                item.questionNo = `${item.sort + 1}: ${item.title}`;
                return item;
            });
            var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants;
            cb(results);
        },
        createStateFilter(queryString) {
            return (state) => {
                return (state.title.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        selectHandler(data) {
            this.handleSelect(data);
            this.qs = '';
        }
    }
};
</script>
<style lang="scss" scoped>
</style>
