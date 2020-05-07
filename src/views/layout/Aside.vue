<!-- 侧边栏 -->
<template>
    <div class="aside-container">
        <ul class="aside-list">
            <li v-for="(item, index) in aside_data" :key="index" :class="['aside-item', item.active ? 'active' : '']">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import _ from 'lodash';
import {nav_data} from '@/util/constants';
export default {
    name: 'Aside',
    data() {
        return {
            nav_data,
            redirectedFrom: ''
        };
    },
    computed: {
        aside_data() {
            let aside = this.nav_data.find((item) => item.path === this.redirectedFrom);
            return _.get(aside, 'aside');
        }
    },
    watch: {
        '$route' (to) {
            let {redirectedFrom} = to;
            this.redirectedFrom = redirectedFrom;
        }
    },
    created() {
        console.log(this.$route);
    }
}
</script>
<style lang="scss" scoped>
.aside-item {
    &.active {
        color: green;
    }
}
</style>
