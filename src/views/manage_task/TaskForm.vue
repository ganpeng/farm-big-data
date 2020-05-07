<template>
    <div class="task-form-container">
        <el-form :model="task"
            :rules="valueRules"
            status-icon
            ref="taskForm"
            label-width="100px"
            @submit.native.prevent
            class="my-form">
            <el-col :span="8">
                <el-form-item label="名称" prop="name">
                    <el-input
                        maxlength="20"
                        :value="task.name"
                        @input="inputHandler($event, 'name')"
                        placeholder="请输入名称"
                    ></el-input>
                </el-form-item>
                <el-form-item label="量表">
                    <div class="my-tags">
                        <el-tag
                            :key="index"
                            v-for="(scale, index) in task.questionSheetList"
                            closable
                            :disable-transitions="false"
                            @close="deleteScaleHandler(scale.id)">
                            {{scale.name}}
                        </el-tag>
                    </div>
                    <scale-search
                        :handleSelect="scaleSearchHandler"
                    ></scale-search>
                </el-form-item>
                <el-form-item label="应测人数" prop="testAmount">
                    <el-input
                        :value="task.testAmount"
                        type="number"
                        @input="inputHandler($event, 'testAmount')"
                        placeholder="请输入人数"
                    ></el-input>
                </el-form-item>
                <el-form-item label="有效期" prop="expirationDateRange">
                    <el-date-picker
                        :value="task.expirationDateRange"
                        type="datetimerange"
                        @input="inputHandler($event, 'expirationDateRange')"
                        value-format="timestamp"
                        :unlink-panels="true"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="选择机构">
                    <div class="org-tree-wrapper">
                        <v-tree
                            ref="tree"
                            :canDeleteRoot="false"
                            :data="orgTree"
                            :draggable="false"
                            :tpl="tpl"
                            :halfcheck="true"
                            :multiple="true"
                            @node-expand="expandHandler"
                            @node-check="nodeCheckedHandler"
                        />
                    </div>
                </el-form-item>
            </el-col>
        </el-form>
    </div>
</template>
<script>
import {mapGetters, mapMutations} from 'vuex';
import ScaleSearch from '@/components/ScaleSearch';
export default {
    name: 'TaskForm',
    components: {ScaleSearch},
    data() {
        return {
            orgTree: [],
            valueRules: {
                name: [
                    { required: true, message: '请输入名称' }
                ]
            }
        };
    },
    computed: {
        ...mapGetters({
            task: 'task/currentTask'
        })
    },
    async created() {},
    methods: {
        ...mapMutations({
            updateCurrentTask: 'task/updateCurrentTask',
            addScaleToScaleList: 'task/addScaleToScaleList',
            deleteScaleFromScaleList: 'task/deleteScaleFromScaleList'
        }),
        setOrgTree() {
            this.orgTree = JSON.parse(this.task.instituteJson);
        },
        inputHandler(value, key) {
            this.updateCurrentTask({key, value});
        },
        scaleSearchHandler(scale) {
            this.addScaleToScaleList({scale});
        },
        deleteScaleHandler(id) {
            this.deleteScaleFromScaleList({id});
        },
        tpl(...args) {
            let { 0: node } = args;
            let titleClass = node.selected
                ? "node-title node-selected"
                : "node-title";
            if (node.searched) titleClass += " node-searched";
            return (
                <div class="tpl-container">
                    <span
                        class={titleClass}
                        domPropsInnerHTML={node.title}
                        onClick={() => {
                            this.$refs.tree.nodeSelected(node);
                        }}
                    />
                </div>
            );
        },
        async expandHandler(...args) {
            try {
                let {0: node, 1: expand} = args;
                if (expand) {
                    let res = await this.$service.getOrgChildren(node.id);
                    if (res && res.errorCode === 0) {
                        let children = res.body.map((item) => {
                            item.async = true;
                            return item;
                        });
                        this.$set(node, 'children', children);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        async nodeCheckedHandler() {
            try {
                let value = JSON.stringify(this.orgTree);
                this.updateCurrentTask({key: 'instituteJson', value});
            } catch (err) {
                console.log(err);
            }
        }
    }
}
</script>
<style lang="scss" scoped>
.org-tree-wrapper {
    width: auto;
}

.el-date-editor.el-range-editor.el-input__inner.el-date-editor--datetimerange {
    width: 400px;
}
</style>
<style lang="scss">
.el-picker-panel.el-date-range-picker.el-popper.has-time {
    .el-picker-panel__footer {
        background-color: transparent!important;
        .el-button.el-picker-panel__link-btn.el-button--default.el-button--mini.is-plain {
            height: 34px;
            line-height: 34px;
            color: $btnText;
            border: 1px solid #64A4E5;
            background: transparent;
            &:hover {
                background: #4987C6;
                border: 1px solid #4987C6;
            };
        }
    }
}
</style>

