<template>
    <div class="section contact-section" id="contact">
        <div class="container">
            <div class="row">
                <div class="contact-item">
                    <div class="col-md-12">
                        <div class="section-title center">
                            <h3>Get in Touch</h3>
                        </div>
                    </div>
                    <div class="col-md-8 col-md-offset-2 col-sm-12">
                        <div class="row">
                            <form class="form-horizontal">
                                <div class="col-md-6 col-sm-12">
                                    <div class="input-group name-input wow fadeInDown animated">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="input-group wow fadeInDown animated">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="message-email"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="input-group wow fadeInDown animated">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="website"
                                            placeholder="Your Website"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12">
                                    <div class="input-group wow fadeInDown animated">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="subject"
                                            placeholder="Your Subject"
                                        />
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="input-group textarea-group wow fadeInDown animated">
                                        <textarea
                                            class="form-control message"
                                            rows="7"
                                            placeholder="Your Massage"
                                        ></textarea>
                                    </div>
                                </div>
                                <div class="col-sm-12 wow fadeInDown animated contact-btn">
                                    <button class="contact-submit">Send</button>
                                </div>
                            </form>
                            <!-- end of/. form -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p class="copyright">
                            Copyright &copy; 2020.Company name All rights reserved.
                            <a
                                target="_blank"
                                href="http://sc.chinaz.com/moban/"
                            >&#x7F51;&#x9875;&#x6A21;&#x677F;</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Contact extends Vue {
    mounted(){
        this.$commonFn.setScroll('.section');
    }
}
</script>