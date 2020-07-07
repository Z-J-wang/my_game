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
                                class="button active"
                                data-category="all"
                                @click="filtersAll"
                            >All Works</li>
                            <li
                                class="button"
                                data-category="web-design"
                                @click="filtersWD"
                            >Graphics Design</li>
                            <li
                                class="button"
                                data-category="graphic-design"
                                @click="filtersGD"
                            >Web Design</li>
                            <li
                                class="button"
                                data-category="web-development"
                            >Web Devlopment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row work">
                <div class="work-item web-design col-sm-3">
                    <a
                        href="@/assets/images/portfolio/1.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/1.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item graphic-design col-sm-3">
                    <a
                        href="@/assets/images/portfolio/2.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/2.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-development col-sm-3">
                    <a
                        href="@/assets/images/portfolio/3.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/3.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-design col-sm-3">
                    <a
                        href="@/assets/images/portfolio/4.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/4.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-development col-sm-3">
                    <a
                        href="@/assets/images/portfolio/5.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/5.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-design col-sm-3">
                    <a
                        href="@/assets/images/portfolio/6.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/6.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item graphic-design web-development col-sm-3">
                    <a
                        href="@/assets/images/portfolio/7.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/7.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item graphic-design col-sm-3">
                    <a
                        href="@/assets/images/portfolio/8.jpg"
                        data-gal="prettyPhoto[gallery2]"
                    >
                        <img
                            src="@/assets/images/portfolio/8.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// import PorfolioFn from './Porfolio'

declare let $:any;

@Component
export default class Portfolio extends Vue {

    mounted() {
        // this.$commonFn.setScroll(".section");
    }

    filtersAll(){
        // $('.work').isotope({filter: '*'})
    }

    filtersGD(){
        $('.work').isotope({filter: '.graphic-design'})
    }

    filtersWD(){
        $('.work').isotope({filter: '.web-development'})
    }
}
</script>