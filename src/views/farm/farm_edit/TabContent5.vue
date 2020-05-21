<template>
    <div class="tab-content-five">
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
                <government-projects-list></government-projects-list>
            </div>
            <div v-if="activeIndex === 1" class="content-two">
                <special-sub-list></special-sub-list>
            </div>
            <!--
            <div v-if="activeIndex === 2" class="content-three">
                <revenue-information></revenue-information>
            </div>
            -->
            <div v-if="activeIndex === 2" class="content-four">
                <tracing-product></tracing-product>
            </div>
            <div v-if="activeIndex === 3" class="content-five">
                <farm-service></farm-service>
            </div>
        </div>
    </div>
</template>
<script>
import FarmService from './business/FarmService';
import GovernmentProjectsList from './business/GovernmentProjectsList';
// import RevenueInformation from './business/RevenueInformation';
import SpecialSubList from './business/SpecialSubList';
import TracingProduct from './business/TracingProduct';
export default {
    name: 'TabContent5',
    components: {
        FarmService,
        GovernmentProjectsList,
        // RevenueInformation,
        SpecialSubList,
        TracingProduct
    },
    data() {
        return {
            tabBarList: [
                {
                    title: '政府项目',
                    active: true
                },
                {
                    title: '专项补贴',
                    active: false
                },
                // {
                //     title: '营收信息',
                //     active: false
                // },
                {
                    title: '溯源农品',
                    active: false
                },
                {
                    title: '农业社会化服务',
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
