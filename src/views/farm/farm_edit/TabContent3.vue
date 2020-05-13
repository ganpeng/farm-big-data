<template>
    <div class="tab-content-three">
        <div class="sub-tab-bar-container">
            <ul class="sub-tab-bar-list">
                <li @click="changeSubTab(index)" v-for="(item, index) in tabBarList"
                    :key="index" :class="['sub-tab-bar-item', item.active && 'active']">
                    <span class="title">{{item.title}}</span>
                </li>
            </ul>
        </div>
        <div class="sub-tab-content">
            <div v-if="activeIndex === 0" class="content-one">
                <cland-list></cland-list>
            </div>
            <div v-if="activeIndex === 1" class="content-two">
                <hland-list></hland-list>
            </div>
        </div>
    </div>
</template>
<script>
import ClandList from './components/ClandList';
import HlandList from './components/HlandList';
export default {
    name: 'TabContent3',
    components: {ClandList, HlandList},
    data() {
        return {
            tabBarList: [
                {
                    title: '耕地管理',
                    active: true
                },
                {
                    title: '宅基地管理',
                    active: false
                }
            ]
        };
    },
    computed: {
        activeIndex() {
            return this.tabBarList.findIndex((item) => item.active);
        }
    },
    methods: {
        changeSubTab(index) {
            this.tabBarList = this.tabBarList.map((item, _index) => {
                if (index === _index) {
                    item.active = true;
                } else {
                    item.active = false;
                }
                return item;
            });
        }
    }
}
</script>
<style lang="scss" scoped>
</style>
