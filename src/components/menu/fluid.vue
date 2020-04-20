<template>
    <div class="dialog" v-show="closeImg">
        <div>
            <a href="javascript:;" class="close_dialog" @click="closeDialog()">
                <img :src="dialogImg.closeBtn" />
            </a>
            <img :src="dialogImg.img" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "fluid",
        data() {
            return {
                dialogImg: {
                    closeBtn: require("../../assets/imgs/fill2.png"),
                    img: require("../../assets/imgs/dialog.jpg")
                },
                closeImg: true
            }
        },

        methods: {
            closeDialog() {
                this.closeImg = false
            }
        }
    }
</script>

<style lang="scss">
    .dialog {
        background: rgba(0, 0, 0, 0.9);
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 0;
        z-index: 90;
        div {
            width: 600px;
            margin: 290px auto 0;
            position: relative;
        }
        img:first-child {
            position: absolute;
            right: 55px;
            top: 5px;
        }
    }
</style>