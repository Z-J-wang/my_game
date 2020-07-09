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
                                    <p>{{ myInfos.introducts }}</p>
                                </div>
                            </div>
                            <div class="col-sm-6 wow fadeInDown animated" data-wow-delay="0.2s">
                                <div class="section-title">
                                    <h3>PERSONAL INFO</h3>
                                </div>
                                <div class="personal-info-content">
                                    <p>
                                        <b>姓名：</b>
                                        <span>{{ myInfos.name }}</span>
                                    </p>
                                    <p>
                                        <b>出生日期：</b>
                                        <span>{{ myInfos.birthday }} (year/day/month)</span>
                                    </p>
                                    <p>
                                        <b>籍贯：</b>
                                        <span>{{ myInfos.placeOfBirth }}</span>
                                    </p>
                                    <p>
                                        <b>国籍：</b>
                                        <span>{{ myInfos.nationality }}</span>
                                    </p>
                                    <p>
                                        <b>现居地：</b>
                                        <span>{{ myInfos.presentAddress }}</span>
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
    private myInfos: object = {};

    created() {
        this.setInstagramList();
        this.getMyInfos();
    }

    private getMyInfos(){
        const infos = {
            name: '王xx',
            birthday: '1996.10.04',
            placeOfBirth: '广东湛江',
            nationality: '中国',
            presentAddress: '深圳龙华',
            introducts:'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nullam ullamcorper quam leo. Aenean sodales, id eleifend massa posuere sed. Phasellus feugiat at orci vel rhoncus. Ut malesuada magna sed arcu finibus auctor ut a turpis. Sed vulputate ullamcorper nisi, non egestas enim ut. Praesent vel pellentesque Suspendisse tincidunt, et condimentum condimentum, nisi lectus rutrum enim, vulputate luctus nulla turpis id magna. Pellentesque at elit ut lacus viverra sollicitudin ut ac mi. Pellentesque mollis faucibus aliquam.'
        }
        this.myInfos = infos;
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