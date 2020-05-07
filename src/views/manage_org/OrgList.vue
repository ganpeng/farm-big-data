<template>
    <div class="org-list-container">
        <el-row>
            <el-col :span="6">
                <div class="org-tree-wrapper">
                    <v-tree
                        ref="tree"
                        :canDeleteRoot="true"
                        :data="orgTree"
                        :draggable="true"
                        :tpl="tpl"
                        :halfcheck="true"
                        :multiple="true"
                        @node-expand="expandHandler"
                        @drag-node-end="dragNodeEndHandler"
                    />
                    <el-button @click="addRootNode" class="init-node-btn my-add-cycle">
                        <svg-icon icon-class="add"/>
                    </el-button>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="org-info-container">
                    <div class="org-basic-info">
                        <h5 class="org-name">名称: {{selectedNode.title}}</h5>
                        <span class="org-code">机构代码：{{selectedNode.code}}</span>
                    </div>
                    <div class="created-at">
                        {{selectedNode.createdAt | dateFormat}} 创建
                    </div>
                </div>
                <div class="org-admin-table-container">
                    <div class="table-operator-field clearfix">
                        <div class="float-left">
                        </div>
                        <div class="float-right">
                            <el-button
                                class="btn-style-two contain-svg-icon"
                                @click="createOrgAdmin">
                                <svg-icon icon-class="add"/>
                                添加
                            </el-button>
                        </div>
                    </div>
                    <div class="tabel-field">
                        <el-table header-row-class-name="common-table-header" class="my-table-style" :data="adminList.data" border>
                            <el-table-column prop="name" align="center" min-width="120px" label="账号"></el-table-column>
                            <el-table-column align="center" min-width="120px" label="密码">
                                <template slot-scope="scope">
                                    <span @click="resetPassword(scope.row.id)">重置密码</span>
                                </template>
                            </el-table-column>
                            <el-table-column min-width="120px" align="center" label="创建日期">
                                <template slot-scope="scope">
                                    {{scope.row.createdAt | dateFormat}}
                                </template>
                            </el-table-column>
                            <el-table-column align="center" min-width="120px" label="操作">
                                <template slot-scope="scope">
                                    <input
                                        class="my-switch switch-anim"
                                        type="checkbox"
                                        :checked="scope.row.visible"
                                        @click.prevent="toggleAdminStatus(scope.row)"/>
                                    <i v-if="scope.row.visible" class="on-the-shelf">正常</i>
                                    <i v-else class="off-the-shelf">禁用</i>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import _ from 'lodash';
export default {
    name: "OrgList",
    data() {
        return {
            searchword: "",
            orgTree: [],
            selectedNode: {},
            adminList: {
                data: []
            }
        };
    },
    async created() {
        try {
            let res = await this.$service.getOrgRootList();
            if (res && res.errorCode === 0) {
                if (!_.isNull(res.body)) {
                    this.orgTree = res.body.map((item) => {
                        item.children = [];
                        return item;
                    });
                }
            }
        } catch (err) {
            console.log(err);
        }
    },
    methods: {
        // tpl (node, ctx, parent, index, props) {
        tpl(...args) {
            let { 0: node, 2: parent, 3: index } = args;
            let titleClass = node.selected
                ? "node-title node-selected"
                : "node-title";
            if (node.searched) titleClass += " node-searched";
            return (
                <div class="tpl-container">
                    <i class="el-icon-circle-plus-outline" onClick={() => this.addNode(node)}></i>
                    <span
                        class={titleClass}
                        domPropsInnerHTML={node.title}
                        onClick={() => { this.selectedNodeHandler(node); }}
                    />
                    <span onClick={() => this.editNodeHandler(node)} class="">
                        <svg-icon icon-class="edit"/>
                    </span>
                    <i class="el-icon-delete" onClick={() => this.deleteNodeHandler(node, parent, index)}></i>
                </div>
            );
        },
        async selectedNodeHandler(node) {
            try {
                let {id} = node;
                let res = await this.$service.getOrgAdminListById(id);
                if (res && res.errorCode === 0) {
                    this.$refs.tree.nodeSelected(node);
                    this.adminList.data = res.body;
                    console.log(node);
                    this.selectedNode = node;
                }
            } catch (err) {
                console.log(err);
            }
        },
        async addNode(node) {
            try {
                let {value} = await this.$prompt('请输入机构名称', '新增', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                });

                let res = await this.$service.postInstitute({
                    title: value,
                    parentInstituteId: node.id
                });

                if (res && res.errorCode === 0) {
                    this.$refs.tree.addNode(node, res.body);
                }
            } catch (err) {
                console.log(err);
            }
        },
        async addRootNode() {
            try {
                let {value} = await this.$prompt('请输入机构名称', '新增', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消'
                });

                let res = await this.$service.postInstitute({
                    title: value,
                    parentInstituteId: 0
                });

                if (res && res.errorCode === 0) {
                    this.orgTree.push(Object.assign({}, res.body, {children: []}));
                }
            } catch (err) {
                console.log(err);
            }
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
                        // this.$set(node, 'children', res.body);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        async editNodeHandler(node) {
            try {
                let {value} = await this.$prompt('请输入机构名称', '编辑', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    inputValue: node.title
                });

                let {id, parentInstituteId} = node;

                let res = await this.$service.putInstitute({id, parentInstituteId, title: value});

                if (res && res.errorCode === 0) {
                    this.$set(node, "title", value);
                }
            } catch (err) {
                console.log(err);
            }
        },
        async deleteNodeHandler(node, parent, index) {
            try {
                let confirm = await this.$confirm('你确定要删除该机构吗, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                });
                if (confirm) {
                    let res = await this.$service.deleteInstitute(node.id);
                    if (res && res.errorCode === 0) {
                        this.$refs.tree.delNode(node, parent, index);
                    }
                }
            } catch (err) {
                console.log(err);
            }
        },
        async dragNodeEndHandler(obj) {
            try {
                let id = obj.dragNode.id;
                let parentInstituteId = obj.targetNode.id;
                let res = await this.$service.putInstitute({id, parentInstituteId});

                if (res && res.errorCode === 0) {
                    this.$message.success('修改成功');
                }
            } catch (err) {
                console.log(err);
            }
        },
        async asyncLoad1(node) {
            const { checked = false } = node;
            this.$set(node, "loading", true);
            let pro = new Promise(resolve => {
                setTimeout(resolve, 2000, ["async node1", "async node2"]);
            });
            this.$refs.tree.addNodes(node, await pro);
            this.$set(node, "loading", false);
            if (checked) {
                this.$refs.tree.childCheckedHandle(node, checked);
            }
        },
        async asyncLoad2(node) {
            const { checked = false } = node;
            this.$set(node, "loading", true);
            let pro = await new Promise(resolve => {
                setTimeout(resolve, 2000, [
                    { title: "test1", async: true },
                    { title: "test2", async: true },
                    { title: "test3" }
                ]);
            });
            if (!node.hasOwnProperty("children")) {
                this.$set(node, "children", []);
            }
            node.children.push(...pro);
            this.$set(node, "loading", false);
            if (checked) {
                this.$refs.tree2.childCheckedHandle(node, checked);
            }
        },
        search() {
            this.$refs.tree.searchNodes(this.searchword);
        },
        resetPassword(id) {
            console.log(id);
        },
        toggleAdminStatus() {

        },
        createOrgAdmin() {

        }
    }
};
</script>
<style lang="scss" scoped>

.org-info-container {
    display: flex;
    background: #2A3040;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 20px;
    .org-basic-info {
        flex: 1;
        text-align: left;
        .org-name {
        }
        .org-code {
        }
    }
    .craeted-at {
        width: 300px;
    }
}
</style>
<style lang="scss">

</style>
