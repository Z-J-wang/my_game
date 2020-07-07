<template>
    <div class="section news-section" id="news">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title center">
                        <h3>latest news</h3>
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="news-item">
                        <div class="row">
                            <div class="col-sm-6">
                                <div
                                    class="news-items wow fadeInDown animated"
                                    data-wow-delay="0.2s"
                                >
                                    <a href="#">
                                        <img src="images/blog/1.jpg" width="540" height="303" alt />
                                    </a>
                                    <h3>Cum sociis natoque penatibus et magnis dis parturient montes</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,</p>
                                    <a href="#" class="read-more">Read More</a>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div
                                    class="news-items wow fadeInDown animated"
                                    data-wow-delay="0.2s"
                                >
                                    <a href="#">
                                        <img src="images/blog/2.jpg" width="540" height="303" alt />
                                    </a>
                                    <h3>Cum sociis natoque penatibus et magnis dis parturient montes</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,</p>
                                    <a href="#" class="read-more">Read More</a>
                                </div>
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
export default class News extends Vue {
    mounted() {
        this.$commonFn.setScroll(".section");
    }
}
</script>