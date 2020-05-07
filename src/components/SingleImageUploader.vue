<template>
    <div class="single-image-uploader-container">
        <div class="wrapper">
            <div :style="styleStr" v-show="uri" class="img-wrapper">
                <img :style="styleStr" :src="imageUrl" alt="">
            </div>
            <div class="uploader-wrapper">
                <div class="uploader" :style="styleStr">
                    <label class="ui_button ui_button_primary" :for="id">
                        <i class="el-icon-plus"></i>
                    </label>
                    <input name="file" ref="singleImageUploader" :disabled="isUploading" class="el-upload__input"
                           type="file" :id="id" accept="image/*">
                </div>
                <p class="image-dimension">{{allowResolutions[0].width}}*{{allowResolutions[0].height}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    import {uploadRequest, promiseImageSize, filterSizeMatchFiles} from '@/util/upload';
    import _ from 'lodash';

    export default {
        name: 'SingleImageUploader',
        props: {
            id: {
                type: String,
                default: 'single-image-uploader'
            },
            allowFileList: {
                type: Function
            },
            uri: {
                type: String,
                default: ''
            },
            allowResolutions: {
                type: Array,
                default: () => []
            },
            uploadSuccessHandler: {
                type: Function,
                default: () => {}
            }
        },
        data() {
            return {
                progress: 0,
                isUploading: false
            };
        },
        created() {
            this.$nextTick(() => {
                let testUpload = document.querySelector(`#${this.id}`);
                testUpload.addEventListener('change', this.uploadChangeHandler.bind(this));
            });
        },
        computed: {
            styleStr() {
                let width = _.get(this.allowResolutions, '0.width');
                let height = _.get(this.allowResolutions, '0.height');
                let style = '';
                if (width && height) {
                    style =  `width:${width * 0.3}px;height:${height * 0.3}px;`;
                }
                return style;
            },
            imageUrl() {
                return `${process.env.VUE_APP_IMAGE_ROOT}${this.uri}`;
            }
        },
        methods: {
            async uploadChangeHandler(e) {
                let images = await promiseImageSize(e.target.files);
                let fileList = [];
                if (this.allowFileList) {
                    fileList = this.allowFileList(images);
                } else {
                    fileList = filterSizeMatchFiles(images, this.allowResolutions);
                }
                if (fileList.length === 0) {
                    this.$message.error('本次选择图片不符合尺寸要求');
                    this.$refs.singleImageUploader.value = null;
                    return false;
                } else {
                    if (!this.isUploading) {
                        try {
                            let {file} = fileList[0];
                            let formData = new FormData();
                            formData.append('file', file);
                            let options = {
                                formData,
                                uri: `${process.env.VUE_APP_UPLOAD_API_ROOT}/v1/file/upload`,
                                progressHandler: (event) => {
                                    let percent = event.loaded / event.total * 100;
                                    this.progress = Math.round(percent);
                                }
                            };
                            this.isUploading = true;
                            let data = await uploadRequest(options);
                            let res = JSON.parse(data);
                            if (res && res.errorCode === 0) {
                                this.uploadSuccessHandler(res.body);
                            } else {
                                this.$message.error('图片上传失败');
                            }
                            this.isUploading = false;
                            this.$refs.singleImageUploader.value = null;
                        } catch (err) {
                            console.log(err);
                            this.isUploading = false;
                            this.$refs.singleImageUploader.value = null;
                        }
                    }
                }
            }
        }
    };
</script>
<style lang="scss" scoped>
    .wrapper {
        display: flex;
    }

    .img-wrapper {
        position: relative;
        margin-right: 10px;
        cursor: pointer;
        img {
            display: inline-block;
            border: 1px solid #3E495E;
            border-radius: 8px;
            box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.50);
        }
        span.delete-icon {
            display: none;
            position: absolute;
            top: 8px;
            right: 8px;
            cursor: pointer;
            z-index: 1000000;
            .svg-icon-remove_image_default,
            .svg-icon-remove_image_hover {
                width: 23px;
                height: 23px;
            }
            .svg-icon-remove_image_default {
                display: block;
            }
            .svg-icon-remove_image_hover {
                display: none;
            }
            &:hover {
                .svg-icon-remove_image_hover {
                    display: block;
                }
                .svg-icon-remove_image_default {
                    display: none;
                }
            }
        }
        &.hover {
            &:hover {
                background: #293550;
                opacity: 0.8;
                border-radius: 8px;
                span.delete-icon {
                    display: block;
                }
            }
        }
    }

    .uploader {
        label {
            &:hover {
                border-color: $mainColor;
                .el-icon-plus {
                    color: $mainColor;
                }
            }
        }
    }

    .image-dimension {
        font-size: 12px;
        height: 22px;
        line-height: 22px;
        color: #6F7480;
        text-align: center;
    }
</style>
