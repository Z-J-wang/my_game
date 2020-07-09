<template>
    <div
        class="section news-section"
        id="news"
    >
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
                            <div class="col-sm-6" v-for="item of blogs" :key="item.id">
                                <div
                                    class="news-items wow fadeInDown animated"
                                    data-wow-delay="0.2s"
                                >
                                    <a href="#">
                                        <img
                                            :src="item.imgSrc"
                                            width="540"
                                            height="303"
                                            alt
                                        />
                                    </a>
                                    <h3>{{ item.title }}</h3>
                                    <p>{{ item.digest }}</p>
                                    <a
                                        :href="item.href"
                                        class="read-more"
                                    >Read More</a>
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
    private blogs: object = [];

    created() {
       this.getBlogs() 
    }
    
    getBlogs(): void {
        const blogs = [
            {
                id: 1,
                title:
                    "Cum sociis natoque penatibus et magnis dis parturient montes",
                href: "#",
                imgSrc: require("@/assets/images/blog/1.jpg"),
                digest:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,"
            },
            {
                id: 2,
                title:
                    "Cum sociis natoque penatibus et magnis dis parturient montes",
                href: "#",
                imgSrc: require("@/assets/images/blog/2.jpg"),
                digest:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,"
            }
        ];
        this.blogs = blogs;
    }
}
</script>