<template>
    <img v-show="waiting" :src="waitingImg.img">
</template>

<script>
export default {
    name: "waitingToLoad",
    props: {
        waiting: {
            type: Boolean,
            default() {
                return true
            }
        }
    },
    data() {
        return {
            waitingImg: {
                img: require("../../assets/imgs/loading.gif")
            }
        }
    },
    created() {

    }
}
</script>

<style lang="scss" scoped>
img {
    position: absolute;
    width: 100%;
    height: 100vh;
    z-index: 101;
}
</style>