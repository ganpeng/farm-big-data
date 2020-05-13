<template>
    <div class="tab-content-two">
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
                <management-list></management-list>
            </div>
            <div v-if="activeIndex === 1" class="content-two">
                <grower-list></grower-list>
            </div>
        </div>
    </div>
</template>
<script>
import ManagementList from './components/ManagementList';
import GrowerList from './components/GrowerList';
export default {
    name: 'TabContent2',
    components: {ManagementList, GrowerList},
    data() {
        return {
            tabBarList: [
                {
                    title: '经营人员',
                    active: true
                },
                {
                    title: '种植人员',
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
