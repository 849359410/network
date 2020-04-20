<template>
    <div class="navWidth">
        <div class="logoType">
            <div class="nav_logo">
                <a href="">
                    <img :src="this.Switch === 0 ? menu[0].img1 : menu[0].img2" alt="">
                </a>
                <span :class="returnClass(urlHref)">彩票包网 赢在EG</span>
            </div>
        </div>
        <div class="wapNav" >
            <ul>
                <li v-for="(item, index) of menu[1]" :key="index" :data-menuanchor="item.dataMenuanchor">
                    <a :href="item.href" :class="returnClass(urlHref)">{{ item.value }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: "topMenu",
    props: {
        page: {
            type: Array,
            default() {
                return [];
            }
        },
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
    data() {
      return {
          Switch: 0
      }
    },
    watch: {
        menu: {
            handler(val) {
                console.log(val[0].img1)
            },
            deep: true,
            immediate: true
        }
    },
	methods: {
		returnClass(page) {
			let white = [1, 2, 4, 6];
			if (white.some(i => i === page)){
                this.Switch = 0;
                return "colorWhite";
            } else {
                this.Switch = 1;
                return "colorBlue";
            }
		}
	}
}

</script>

<style lang="scss">
    a {
        text-decoration:none
    }
    #fullPageMenu {
        color: #fff;
        position: absolute;
        top: 0;
        width: 100%;
        height: 74px;
        background: rgba(57, 129, 228, 0.3);
        z-index: 100;
        ul {
            display: inline-flex;
            list-style: none;
            padding-left: 200px;
            li {
                font-size: 20px;
                margin: 0 20px;
                color: red;
            }
            li:hover {
                font-weight: 800;
            }
        }
        .navWidth {
            max-width: 1600px;
            text-align: center;
            display: flex;
            justify-content: center;
            margin: 10px auto;

            .logoType {
                padding-top: 6px;
                font-size: 18px;
            }
        }
        .colorBlue {
            color: rgb(63, 134, 233);
        }
        .colorWhite {
            color: #fff
        }
    }



    #fp-nav ul li a span, .fp-slidesNav ul li a span {
        color: #fff;
    }
    .changeHidden {
        display: none;
    }
    nav .active {
        font-weight: 800;
    }

</style>
