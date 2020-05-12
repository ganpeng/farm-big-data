<template>
    <div class="farm-edit-container">
        <div class="tab-bar-container">
            <ul class="tab-bar-list">
                <li @click="changeTab(index)" v-for="(item, index) in tabBarList"
                    :key="index" :class="['tab-bar-item', item.active && 'active']">
                    <span class="title">{{item.title}}</span>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <tab-content1 v-if="activeIndex === 0"></tab-content1>
            <tab-content2 v-if="activeIndex === 1"></tab-content2>
            <tab-content3 v-if="activeIndex === 2"></tab-content3>
            <tab-content4 v-if="activeIndex === 3"></tab-content4>
            <tab-content5 v-if="activeIndex === 4"></tab-content5>
            <tab-content6 v-if="activeIndex === 5"></tab-content6>
        </div>
    </div>
</template>
<script>
import {mapMutations} from 'vuex';
import TabContent1 from './farm_edit/TabContent1';
import TabContent2 from './farm_edit/TabContent2';
import TabContent3 from './farm_edit/TabContent3';
import TabContent4 from './farm_edit/TabContent4';
import TabContent5 from './farm_edit/TabContent5';
import TabContent6 from './farm_edit/TabContent6';
export default {
    name: 'FarmEdit',
    components: {
        TabContent1,
        TabContent2,
        TabContent3,
        TabContent4,
        TabContent5,
        TabContent6
    },
    data() {
        return {
            tabBarList: [
                {
                    title: '基本信息',
                    active: true
                },
                {
                    title: '成员管理',
                    active: false
                },
                {
                    title: '土地管理',
                    active: false
                },
                {
                    title: '农机具管理',
                    active: false
                },
                {
                    title: '经营管理',
                    active: false
                },
                {
                    title: '种植管理',
                    active: false
                }
            ]
        };
    },
    created() {
        let {id} = this.$route.params;
        this.setCurrentFarmById({id});
    },
    computed: {
        activeIndex() {
            return this.tabBarList.findIndex((item) => item.active);
        }
    },
    methods: {
        ...mapMutations({
            setCurrentFarmById: 'farm/setCurrentFarmById'
        }),
        changeTab(index) {
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
};
</script>
<style lang="scss" scoped>
.farm-edit-container {
    .tab-bar-container {
        position: absolute;
        top: 1px;
        left: 0;
        right: 0;
        background-color: #0F1623;
        z-index: 10;
        .tab-bar-list {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 80px;
            .tab-bar-item {
                display: flex;
                align-items: center;
                height: 80px;
                line-height: 80px;
                .title {
                    display: inline-block;
                    font-size: 27px;
                    font-weight: 400;
                    color:#667799 ;
                    height: 52px;
                    line-height: 52px;
                    padding: 0 28px;
                    cursor: pointer;
                }
                &.active {
                    .title {
                        color: #fff;
                        background-color: $mainColor;
                        border-radius: 27px;
                    }
                }
            }
            .tab-bar-item + .tab-bar-item {
                margin-left: 20px;
            }
        }
    }
    .tab-content {
        margin-top: 80px;
    }
}
</style>
