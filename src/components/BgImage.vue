<template>
    <div :class="['bg-img-container', myStyle]">
        <div v-if="uri" :style="bgImageStyle" class="bg-img">
            <span class="delete-btn">
                <svg-icon className="hover_icon" icon-class="remove_image_hover"></svg-icon>
                <svg-icon className="defatul_icon" icon-class="remove_image_default"></svg-icon>
            </span>
        </div>
        <div class="add-btn">
            <i class="el-icon-plus"></i>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BgImage',
    props: {
        myStyle: {
            type: String,
            default: 'style1'
        },
        uri: {
            type: String,
            default: ''
        }
    },
    computed: {
        bgImageStyle() {
            return `background-image: url(${this.uri});`
        }
    }
};
</script>
<style lang="scss" scoped>
.bg-img-container {
    display: flex;
    margin-bottom: 20px;
    .bg-img {
        position: relative;
        height: 100px;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.5);
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        overflow: hidden;
        .delete-btn {
            position: absolute;
            top: 6px;
            right: 6px;
            cursor: pointer;
            .defatul_icon {
                display: block;
            }
            .hover_icon {
                display: none;
            }
            .svg-icon {
                width: 20px;
                height: 20px;
            }
            &:hover {
                .defatul_icon {
                    display: none;
                }
                .hover_icon {
                    display: block;
                }
            }
        }
    }
    .add-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100px;
        font-size: 20px;
        color: #3E495E;
        border: 1px solid #3E495E;
        border-radius: 4px;
        margin-left: 20px;
        cursor: pointer;
        &:hover {
            color: $mainColor;
            border-color: $mainColor;
        }
    }
    &.style1 {
        .bg-img {
            width: 100px;
        }
        .add-btn {
            width: 100px;
        }
    }
    &.style2 {
        .bg-img {
            width: 170px;
        }
        .add-btn {
            width: 170px;
        }
    }
}
</style>
