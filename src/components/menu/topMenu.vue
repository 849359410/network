<template>
    <div class="navWidth">
        <div class="logoType">
            <div class="nav_logo">
                <a href="">
                    <img :src="menu[0].img1" alt="">
                </a>
                <span>彩票包网 赢在EG</span>
            </div>
        </div>
        <div class="wapNav">
            <ul>
                <li v-for="(item, index) of menu[1]" :key="index" :data-menuanchor="item.dataMenuanchor">
                    <a :href="item.href" :style="item.style">{{ item.value }}</a>
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
	    colorClass: {
        	type: String,
		    default() {
        		return "";
		    }
	    }
    },
    watch: {
        menu: {
            handler(val) {
                console.log(val[0].img1)
            },
            deep: true,
            immediate: true
        },
	    colorClass(n) {
        	console.log(n);
	    }
    }
}

</script>

<style lang="scss">
    a {
        text-decoration:none
    }
    #fullPageMenu {
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
                color: #fff;
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
                color: #fff;
                padding-top: 6px;
                font-size: 18px;
            }
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
