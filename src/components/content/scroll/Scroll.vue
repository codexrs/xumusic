<template>
    <div class="wrapper" ref="wrapper">
        <div class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    name: 'Scroll',
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            scroll: null
        }
    },
    mounted() {
        this.scroll = new BScroll(this.$refs.wrapper, {
            //根据需要 实时监听滚动位置
            probeType: this.probeType,
            click: true,
            //上拉加载更多
            pullUpLoad: this.pullUpLoad,
        })


        //回到顶部
        //this.scroll.scrollTo(0, 0, 500)

        //2.监听滚动位置
        if( this.probeType ===2 || this.probeType ===3) {
                this.scroll.on('scroll', (position) => {
                //向外传递事件
                this.$emit('scroll',position)
            })
        }
        


        //scrollerHeight可滚动区域
        //console.log(this.scroll.scrollerHeight);


        //重新计算高度，当加载完成之后
        //this.scroll.refresh()

    },
    methods: {

        //滚动到顶部
       scrollTo(x, y, time = 300) {
            this.scroll && this.scroll.scrollTo(x, y,time)
        },

        //加载更多之后需要调用该方法
        finishPullUp() {
            this.scroll && this.scroll.finishPullUp()
        },
        //定义refresh方法
        refresh() {
            this.scroll && this.scroll.refresh()
            //console.log('---');
        },

        //定义组件离开时的滚动位置方法
        getScrollY() {
            return this.scroll && this.scroll.scrollTo()
        }

    }
}
</script>

<style scoped>
    .wrapper {
        overflow: hidden;
    }
</style>