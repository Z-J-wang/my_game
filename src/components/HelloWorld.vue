<template>
    <div class="hello">
        <!-- <div class="section"> -->
            <proloader v-if="proloader"></proloader>
            <!-- END PRELOADER -->

            <intro :class="selectSection == 'intro'?'active':''"></intro>
            <!-- END INTRO -->
            <about :class="selectSection == 'about'?'active':''"></about>
            <!-- END ABOUT -->
            <resume :class="selectSection == 'resume'?'active':''"></resume>
            <portfolio :class="selectSection == 'portfolio'?'active':''"></portfolio>
            <news :class="selectSection == 'news'?'active':''"></news>
            <contact :class="selectSection == 'contact'?'active':''"></contact>
        <!-- </div> -->

        <nav class="header-section navbar navbar-default">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <!-- Brand and toggle get grouped for better mobile display -->
                        <div class="navbar-header">
                            <button
                                type="button"
                                class="navbar-toggle collapsed"
                                data-toggle="collapse"
                                data-target="#bs-example-navbar-collapse-1"
                                aria-expanded="false"
                            >
                                <span class="sr-only">Toggle navigation</span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>

                        <!-- Collect the nav links, forms, and other content for toggling -->
                        <div
                            class="collapse navbar-collapse"
                            id="bs-example-navbar-collapse-1"
                        >
                            <ul
                                class="nav navbar-nav"
                                id="top-menu"
                            >
                                <li :class="selectSection == 'intro'?'active':''">
                                    <a @click="selectSection = 'intro'">
                                        <img
                                            src="../assets/images/profile-pic.jpg"
                                            class="img-responsive"
                                            width="190"
                                            height="190"
                                            alt=""
                                        >
                                    </a>
                                </li>
                                <li :class="selectSection == 'about'?'active':''">
                                    <a @click="selectSection = 'about'">
                                        <i
                                            class="fa fa-user"
                                            aria-hidden="true"
                                        ></i>
                                        <span>about me</span>
                                    </a>
                                </li>
                                <li :class="selectSection == 'resume'?'active':''">
                                    <a @click="selectSection = 'resume'">
                                        <i
                                            class="fa fa-briefcase"
                                            aria-hidden="true"
                                        ></i>
                                        <span>resume</span>
                                    </a>
                                </li>
                                <li :class="selectSection == 'portfolio'?'active':''">
                                    <a @click="selectSection = 'portfolio'">
                                        <i
                                            class="fa fa-camera"
                                            aria-hidden="true"
                                        ></i>
                                        <span>portfolio</span>
                                    </a>
                                </li>
                                <li :class="selectSection == 'news'?'active':''">
                                    <a  @click="selectSection = 'news'">
                                        <i
                                            class="fa fa-comments"
                                            aria-hidden="true"
                                        ></i>
                                        <span>blog</span>
                                    </a>
                                </li>
                                <li :class="selectSection == 'contact'?'active':''">
                                    <a  @click="selectSection = 'contact'">
                                        <i
                                            class="fa fa-phone"
                                            aria-hidden="true"
                                        ></i>
                                        <span>Contact us</span>
                                    </a>
                                </li>
                            </ul>
                        </div><!-- /.navbar-collapse -->
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Proloader from "./common/Preloader.vue";
import Intro from './index/Intro.vue'
import About from './index/About.vue'
import Resume from './index/Resume.vue'
import Portfolio from './index/Portfolio.vue'
import News from './index/News.vue'
import Contact from './index/Contact.vue'

declare let $: any;

@Component({
    // name: 'EditArticle',
    components: {
        Proloader,
        Intro,
        About,
        Resume,
        Portfolio,
        News,
        Contact
    }
})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string;

    private selectSection:string = 'intro';
    private proloader:boolean = true;

    mounted() {
        this.proloader = false;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    cursor: pointer;
}
</style>
