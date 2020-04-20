<template>
    <div class="myMenu">
        <ul>
            <li
                v-for="(item, index) in menu[2]"
                :key="index"
                :data-menuanchor="item.dataMenuanchor"
            >
                <a
                    :href="item.href"
                    :class="returnClass(urlHref)"
                    :style=" item.dataMenuanchor === urlHref ? 'color:rgb(23, 83, 214)' : ''"
                >
                    {{ item.value }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

export default {
    name: "leftMenu",
    props: {
        menu: {
            type: Array,
            default() {
                return [];
            }
        },
        urlHref: {
            type: [Number, String],
            default() {
                return [];
            }
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
             a {
                line-height: 30px;
                color: #fff;
            }
            .colorWhite {
                color: #fff;
            }
            .colorBlue {
                color: black;
            }
        }

    }
</style>