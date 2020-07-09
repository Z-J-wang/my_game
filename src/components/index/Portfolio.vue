<template>
    <div
        class="section portfolio-section"
        id="portfolio"
    >
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title center">
                        <h3>PORTFOLIO</h3>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="filter-menu">
                        <ul class="button-group sort-button-group">
                            <li
                                class="button"
                                :class="filterMenuActive === 'all works'?'active':''"
                                data-category="all"
                                @click="filtersAll"
                            >All Works</li>
                            <li
                                class="button"
                                :class="filterMenuActive === 'web-design'?'active':''"
                                data-category="web-design"
                                @click="filtersWD"
                            >Web-Design</li>
                            <li
                                class="button"
                                :class="filterMenuActive === 'graphic-design'?'active':''"
                                data-category="graphic-design"
                                @click="filtersGD"
                            >Graphic-Design</li>
                            <li
                                class="button"
                                :class="filterMenuActive === 'web-development'?'active':''"
                                data-category="web-development"
                                @click="filtersWebD"
                            >Web Devlopment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row work">
                <transition-group
                    name="custom-classes-transition"
                    leave-active-class="animated zoomOut "
                    enter-active-class="animated zoomIn"
                >
                    <div
                        class="work-item col-sm-3"
                        :class="item.className"
                        v-for="item of portfolioList"
                        :key="item.imgSrc"
                    >
                        <a
                            :href="item.url"
                            data-gal="prettyPhoto[gallery2]"
                        >
                            <img
                                :src="item.imgSrc"
                                class="img-responsive"
                                width="254"
                                height="254"
                                alt
                            />
                        </a>
                    </div>
                </transition-group>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// import PorfolioFn from './Porfolio'

@Component
export default class Portfolio extends Vue {
    private portfolioList: Array<object> = [];
    private portfolioData: Array<object> = [];
    private filterMenuActive: string = 'all works';

    created() {
        this.getPortfolios();
    }

    private getPortfolios() {
        const dataList = [
            {
                className: "web-design",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/1.jpg")
            },
            {
                className: "graphic-design",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/2.jpg")
            },
            {
                className: "web-development",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/3.jpg")
            },
            {
                className: "web-design",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/4.jpg")
            },
            {
                className: "web-development",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/5.jpg")
            },
            {
                className: "web-design",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/6.jpg")
            },
            {
                className: "graphic-design",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/7.jpg")
            },
            {
                className: "graphic-design",
                url: "#",
                imgSrc: require("@/assets/images/portfolio/8.jpg")
            }
        ];

        this.portfolioList = dataList;
        this.portfolioData = dataList;
    }

    private filtersAll(): void {
        this.portfolioList = this.portfolioData.filter((item: any) => {
            return item;
        });
        this.filterMenuActive = "all works"
    }

    private filtersWD(): void {
        this.portfolioList = this.portfolioData.filter((item: any) => {
            return item.className == "web-design";
        });
        this.filterMenuActive = "web-design"
    }

    private filtersGD(): void {
        this.portfolioList = this.portfolioData.filter((item: any) => {
            return item.className == "graphic-design";
        });
        this.filterMenuActive = "graphic-design"
    }

    private filtersWebD(): void {
        this.portfolioList = this.portfolioData.filter((item: any) => {
            return item.className == "web-development";
        });
        this.filterMenuActive = "web-development"
    }
}
</script>