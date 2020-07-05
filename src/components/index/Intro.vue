<template>
    <div
        class="section cover-section"
        id="home"
    >
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="profile-area">
                        <div
                            class="profile-content wow fadeInDown animated"
                            data-wow-delay="0.2s"
                        >
                            <h2>John Doe</h2>
                            <p>I am a <b> <span class="rotate">Graphics Designer, Web Designer</span> </b></p>
                            <div class="social-media">
                                <ul>
                                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="#"><i class="fa fa-codepen"></i></a></li>
                                    <li><a href="#"><i class="fa fa-github"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div><!-- END OF /. COVER SECTION -->
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
@Component
export default class intro extends Vue {}
</script>