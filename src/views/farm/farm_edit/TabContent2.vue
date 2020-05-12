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
            growerSearchField: {
                keyword: '',
                type: ''
            },
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
<style lang="scss">
.sub-tab-bar-container {
    position: absolute;
    display: flex;
    align-items: center;
    height: 68px;
    padding: 0 40px;
    background-color: #0F1623;
    border-radius: 5px;
    .sub-tab-bar-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 35px;
        .sub-tab-bar-item {
            padding: 0 18px;
            height: 35px;
            line-height: 35px;
            font-size: 20px;
            font-weight: 400;
            color: #667799;
            cursor: pointer;
            border-radius: 26px;
            background-color: transparent;
            &.active {
                color: #fff;
                background-color: $mainColor;
            }
        }
    }
}
.sub-tab-content {
    padding-top: 100px;
}
</style>
