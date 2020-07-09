<template>
    <div
        class="section resume-section"
        id="resume"
    >
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="section-title center">
                        <h3>EDUCATION / EXPERIENCE</h3>
                    </div>
                </div>
                <div class="col-sm-6" v-for="item of experience" :key="item.title">
                    <div class="education-item">
                        <h3>{{ item.title }}</h3>
                        <i>{{ item.time }}</i>
                        <p>{{ item.details }}</p>
                    </div>
                </div>
            </div>
            <div class="row my-skill">
                <div class="col-md-12">
                    <div class="section-title center">
                        <h3>My Skill</h3>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="section-title secound-title">
                        <h4>Graphics SKILL</h4>
                    </div>
                    <div class="skill">
                        <p>Adobe PHOTOSHOP</p>
                        <div class="skill-bar skill1 wow slideInLeft animated">
                            <span class="skill-count1">90%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>adobe illustrator</p>
                        <div class="skill-bar skill2 wow slideInLeft animated">
                            <span class="skill-count2">80%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>adobe indesign</p>
                        <div class="skill-bar skill3 wow slideInLeft animated">
                            <span class="skill-count3">85%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>adobe after effects</p>
                        <div class="skill-bar skill4 wow slideInLeft animated">
                            <span class="skill-count4">75%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="section-title secound-title">
                        <h4>Graphics SKILL</h4>
                    </div>
                    <div class="skill">
                        <p>HTML5</p>
                        <div class="skill-bar skill1 wow slideInLeft animated">
                            <span class="skill-count1">90%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>css3</p>
                        <div class="skill-bar skill2 wow slideInLeft animated">
                            <span class="skill-count2">80%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>JAVASCRIPT</p>
                        <div class="skill-bar skill3 wow slideInLeft animated">
                            <span class="skill-count3">85%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                    <div class="skill">
                        <p>JQUERY</p>
                        <div class="skill-bar skill4 wow slideInLeft animated">
                            <span class="skill-count4">75%</span>
                            <div class="bg-border"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12">
                    <div class="section-title center">
                        <h3>service</h3>
                    </div>
                </div>
                <div class="col-sm-4" v-for="item of service" :key="item.postloge">
                    <div class="service-items">
                        <i class="fa" :class="item.postloge"></i>
                        <h4>{{ item.postName }}</h4>
                        <p>{{ item.postDetail }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Resume extends Vue {
    private experience: object = [];
    private skills: object = [];
    private service: object = [];
    created() {
        this.getExperience();
        this.getService();
    }

    private getExperience(): void {
        const experience = [
            {
                title: "High School - Themengraph",
                time: "January 2011 - Dec 2012",
                details:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,"
            },
            {
                title: "COLLAGE - Themengraph",
                time: "January 2012 - Dec 2014",
                details:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,"
            },
            {
                title: "WEB Designer - Themengraph",
                time: "January 2018 - Dec 2020",
                details:
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo,"
            }
        ];
        this.experience = experience;
    }

    private getSkills() :void {
        const skills = [
            {
                name:'',
                count:'',
            }

        ]
    }

    private getService(): void{
        const service = [
            {
                postName: 'Great Support',
                postloge: 'fa-support',
                postDetail:'Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat derit sit id dolor consectetur ut'
            },
                        {
                postName: 'service-items',
                postloge: 'fa-desktop',
                postDetail:'Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat derit sit id dolor consectetur ut'
            },
                        {
                postName: 'service-items',
                postloge: 'fa-code',
                postDetail:'Lorem ipsum Minim labore Ut cupidatat quis qui deserunt proident fugiat pariatur cillum cupidatat derit sit id dolor consectetur ut'
            }
        ]
        this.service = service;
    }
}
</script>