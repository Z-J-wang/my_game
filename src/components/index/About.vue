<template>
    <div class="section about-section" id="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="about-item">
                        <div class="row">
                            <div class="col-sm-6 wow fadeInDown animated" data-wow-delay="0.2s">
                                <div class="section-title">
                                    <h3>About me</h3>
                                </div>
                                <div class="about-content">
                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ullamcorper quam leo. Aenean sodales, id eleifend massa posuere sed. Phasellus feugiat at orci vel rhoncus. Ut malesuada magna sed arcu finibus auctor ut a turpis. Sed vulputate ullamcorper nisi, non egestas enim ut. Praesent vel pellentesque Suspendisse tincidunt, et condimentum condimentum, nisi lectus rutrum enim, vulputate luctus nulla turpis id magna. Pellentesque at elit ut lacus viverra sollicitudin ut ac mi. Pellentesque mollis faucibus aliquam.</p>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeInDown animated" data-wow-delay="0.2s">
                                <div class="section-title">
                                    <h3>PERSONAL INFO</h3>
                                </div>
                                <div class="personal-info-content">
                                    <p>
                                        <b>Name</b>
                                        <span>Carlos Smith</span>
                                    </p>
                                    <p>
                                        <b>Birthday</b>
                                        <span>1982.04.09 (year/day/month)</span>
                                    </p>
                                    <p>
                                        <b>Place of Birth</b>
                                        <span>Sydney</span>
                                    </p>
                                    <p>
                                        <b>Nationality</b>
                                        <span>Australian</span>
                                    </p>
                                    <p>
                                        <b>Marital Status</b>
                                        <span>Single</span>
                                    </p>
                                    <p>
                                        <b>Freelance</b>
                                        <span>Available</span>
                                    </p>
                                    <p>
                                        <b>Vacation</b>
                                        <span>Till April 25, 2016</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="row personal-area">
                            <div class="col-md-12">
                                <div class="section-title center">
                                    <h3>INSTAGRAM</h3>
                                </div>
                            </div>
                            <div
                                class="col-sm-2"
                                v-for="(item, index) of instagramList"
                                :key="index"
                            >
                                <a :href="item.href">
                                    <img
                                        :src="item.imgSrc"
                                        class="img-responsive"
                                        width="190"
                                        height="190"
                                        alt
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class About extends Vue {
    private instagramList!: Array<object>;

    created() {
        this.setInstagramList();
    }

    mounted() {
        // this.$commonFn.setScroll(".section");
    }

    /**
     * 赋值 instagramList
     */
    private setInstagramList(): void {
        const list = [
            {
                href: "#",
                imgSrc: require(`@/assets/images/instragram/instragram1.jpg`)
            },
            {
                href: "#",
                imgSrc: require("@/assets/images/instragram/instragram2.jpg")
            },
            {
                href: "#",
                imgSrc: require("@/assets/images/instragram/instragram3.jpg")
            },
            {
                href: "#",
                imgSrc: require("@/assets/images/instragram/instragram4.jpg")
            },
            {
                href: "#",
                imgSrc: require("@/assets/images/instragram/instragram5.jpg")
            },
            {
                href: "#",
                imgSrc: require("@/assets/images/instragram/instragram6.jpg")
            }
        ];

        this.instagramList = list;
    }
}
</script>

<style lang="less" scoped>
p {
    text-align: left;
}
</style>