<template>
    <div class="myMenu" :class="returnClass(urlHref)">
        <ul>
            <li v-for="(item, index) in menu[2]" :key="index" :data-menuanchor="item.dataMenuanchor">
                <a :href="item.href">{{ item.value }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
import {Bus} from "@/main";

export default {
    name: "leftMenu",
    props: {
        menu: {
            type: Array,
            default() {
                return [];
            }
        }
    },
    data() {
        return {
            urlHref: 1
        }
    },
    watch: {
        menu: {
            handler(val) {
                console.log(val)
            }
        }
    },
    created() {
        Bus.$emit("loction");
        window.onhashchange = (e) => {
            this.urlHref = Number(e.newURL.split("#")[1]);
        }
    },
    methods: {
        returnClass(page) {
            let white = [1, 2, 4, 6];
            if (white.some(i => i === page)) return "colorWhite";
            else return "colorBlue";
        }
    }
}
</script>

<style lang="scss">
    .myMenu {
        position: fixed;
        top: 340px;
        left: -15px;
        z-index: 100;
        font-size: 12px;
        color: #1753d6;
        ul {
            list-style: none;
            li a {
                line-height: 30px;
                color: #fff;
            }
        }
    }
</style>