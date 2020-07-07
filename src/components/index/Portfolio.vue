<template>
    <div class="section portfolio-section" id="portfolio">
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
                            <li class="button active" data-category="all">All Works</li>
                            <li class="button" data-category="web-design">Graphics Design</li>
                            <li class="button" data-category="graphic-design">Web Design</li>
                            <li class="button" data-category="web-development">Web Devlopment</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="row work">
                <div class="work-item web-design col-sm-3">
                    <a href="images/portfolio/1.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/1.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item graphic-design col-sm-3">
                    <a href="images/portfolio/2.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/2.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-development col-sm-3">
                    <a href="images/portfolio/3.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/3.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-design col-sm-3">
                    <a href="images/portfolio/4.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/4.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-development col-sm-3">
                    <a href="images/portfolio/5.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/5.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item web-design col-sm-3">
                    <a href="images/portfolio/6.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/6.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item graphic-design web-development col-sm-3">
                    <a href="images/portfolio/7.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/7.jpg"
                            class="img-responsive"
                            width="254"
                            height="254"
                            alt
                        />
                    </a>
                </div>
                <div class="work-item graphic-design col-sm-3">
                    <a href="images/portfolio/8.jpg" data-gal="prettyPhoto[gallery2]">
                        <img
                            src="images/portfolio/8.jpg"
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
@Component
export default class Portfolio extends Vue {
    mounted() {
        this.$commonFn.setScroll(".section");
    }
}
</script>