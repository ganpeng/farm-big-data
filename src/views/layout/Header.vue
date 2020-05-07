<!-- 头部导航 -->
<template>
    <div class="header-container">
        <div class="logo">
            <img src="" alt="">
        </div>
        <ul class="header-nav-list">
            <li v-for="(item, index) in nav_data" :key="index" :class="['header-nav-item', item.active ? 'active' : '']" @click="navChange(index)">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
import _ from 'lodash';
import {nav_data} from '@/util/constants';
export default {
    name: 'Header',
    data() {
        return {
            nav_data
        };
    },
    created() {
        console.log(this.nav_data);
    },
    computed: {},
    methods: {
        navChange(index) {
            this.nav_data = this.nav_data.map((item, _index) => {
                if (index === _index) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            });

            let path = _.get(this.nav_data, `${index}.path`);
            this.$router.push(path);
        }
    }
};
</script>
<style lang="scss" scoped>
.header-container {
    display: flex;
    height: 60px;
    background: red;
    .header-nav-list {
        display: flex;
        align-items: center;
        .header-nav-item {
            color: #fff;
            padding: 0 30px;
            cursor: pointer;
            &.active {
                color: blue;
            }
        }
    }
}
</style>
