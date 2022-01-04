<template>
    <view class="container">
        <view class="tabbox">
            <view v-for="(item, index) in tablist" :key="index" @tap.stop="() => $emit('update:activeTab', item[valueKey] + '')">
                <slot name="tab" :item="item">
                    <view class="item" :class="{ active: activeTab === item[valueKey] + '' }">{{ item[labelKey] }}</view>
                </slot>
            </view>
        </view>
        <swiper v-if="tablist.length > 0" class="content" :current-item-id="activeTab" :style="{ height: `${swiperHeight}px` }" @change="({ detail: { currentItemId, current }  }) => {
            $emit('update:activeTab', currentItemId + '');
            $emit('change', { currentItemId, index: current });
        }">
            <swiper-item :item-id="tablist[index][valueKey] + ''" v-for="(item, index) in contentlist" :key="index">
                <scroll-view :scroll-y="canScroll" scroll-with-animation :scroll-top="scrollTop" style="height: 100%" @scroll="(event) => $emit('scroll', { event, index })" @scrolltolower="() => $emit('scrolltolower')" :refresher-enabled="canRefresh" :refresher-triggered="isRefresh" @refresherrefresh="() => {
                    if (isRefresh) return // 避免多次触发
                    $emit('update:isRefresh', true)
                    $emit('refresherrefresh') // 刷新后记得置isRefresh为false
                }">
                    <!-- <view class="scrollview-top-placeholder" v-if="canRefresh"></view> -->
                    <slot name="content" :item="item" :index="index"></slot>
                </scroll-view>
            </swiper-item>
        </swiper>
        <!-- 单个swiperitem则和scrollview一样 -->
<!--      <view v-else class="content" :style="{ height: `${swiperHeight}px` }">
            <scroll-view :scroll-y="canScroll" scroll-with-animation :scroll-top="scrollTop" style="height: 100%" @scroll="(event) => $emit('scroll', { event, index })" @scrolltolower="() => $emit('scrolltolower')" :refresher-enabled="canRefresh" :refresher-triggered="isRefresh" @refresherrefresh="() => {
                if (isRefresh) return // 避免多次触发
                $emit('update:isRefresh', true)
                $emit('refresherrefresh') // 刷新后记得置isRefresh为false
            }">
                <slot name="content" :item="undefined" :index="undefined"></slot>
            </scroll-view>
        </view> -->
    </view>
</template>

<script>
export default {
    props: {
        tablist: {
            type: Array,
            default: () => []
        },
        contentlist: {
            type: Array,
            default: () => []
        },
        valueKey: {
            type: String,
            default: 'value'
        },
        labelKey: {
             type: String,
             default: 'label'
        },
        activeTab: { // sync
            type: String,
            default: ''
        },
        canScroll: {
            type: Boolean,
            default: true
        },
        canRefresh: {
            type: Boolean,
            default: false
        },
        isRefresh: { // sync
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            swiperHeight: 0,
            scrollTop: 0
        };
    },
    mounted () {
        this.render();
    },
    computed: {
        currentIndex () {
            return this.tablist.findIndex(_ => _[this.valueKey] + '' === this.activeTab);
        }
    },
    methods: {
        render () {
            const query = uni.createSelectorQuery().in(this);
            Promise.all([
                new Promise(resolve => {
                    query.select('.container').boundingClientRect(data => {
                        resolve(data);
                    }).exec();
                }),
                new Promise(resolve => {
                    if (this.tablist.length > 0) {
                        query.select('.tabbox').boundingClientRect(data => {
                            resolve(data);
                        }).exec();
                    } else {
                        resolve({ height: 0 });
                    }
                })
            ]).then(([container, tabbox]) => {
                // console.log(container, tabbox);
                this.swiperHeight = container.height - tabbox.height;
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.container {
    .tabbox {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        .item {
            font-size: 34rpx;
            color: #979797;
            padding: 36rpx 23rpx;
        }
        .active {
            color: #141414;
        }
    }
    // .content {
    //     width: 100%;
    //     margin-top: -100rpx; // 负外边距刚好和顶部tabbar一样高，让顶部tabbar挡住scrollview
    //     .scrollview-top-placeholder {
    //         height: 100rpx;
    //     }
    // }
}
</style>
