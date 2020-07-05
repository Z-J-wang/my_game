<template>
    <div id="Gluttonous_Snake">
        <div class="background">
            <p class="score">
                您的成绩：<span>{{ score }}</span>
            </p>
            <p class="grade">
                当前难度：<span>{{ diffculty }}</span>
            </p>
            <div
                class="snake start"
                v-show="showSnake"
            ></div>
        </div>
        <div
            class="begin"
            v-if="showMenu"
        >
            <ul>
                <li><input
                        type="button"
                        id="btn_begin"
                        value="开始"
                        @click="beginGame()"
                    /></li>
                <li>
                    <select v-model="diffculty">
                        <option
                            value="简单"
                            selected="selected"
                        >简单</option>
                        <option value="困难">困难</option>
                        <option value="地狱">地狱</option>
                    </select>
                </li>
                <li><input
                        type="button"
                        id="btn_exit"
                        value="退出"
                        @click="exit()"
                    /></li>
            </ul>
        </div>
        <div
            class="GameOver"
            v-show="showTmpMenu"
        >
            <div class="btnList">
                <input
                    type="button"
                    value="继续"
                    id="btn_togo"
                    @click="goTo()"
                />
                <input
                    type="button"
                    value="重新开始"
                    id="btn_restart"
                    @click="restart()"
                />
            </div>
        </div>
        <div class="music">
            <i
                v-if="isMusicPlay"
                @click="isMusicPlay = false"
                title="点击此处暂停音乐"
            >
                <img
                    class="play"
                    src="../../assets/images/Gluttonous_Snake/music_paly.svg"
                    width="30"
                    height="30"
                >
            </i>
            <i
                v-else
                @click="isMusicPlay = true"
                title="点击此处播放背景音乐"
            >
                <img
                    src="../../assets/images/Gluttonous_Snake/music_stop.svg"
                    width="30"
                >
            </i>
            <audio
                src="../../assets/陈洁仪 - 从前的我.mp3"
                autoplay
                loop
            ></audio>
        </div>
    </div>
</template>

<script lang="ts">
// import Vue from "vue";
import { Component, Vue, Watch } from "vue-property-decorator";
import Snake from "./snake";

declare var $: any;

@Component
export default class Gluttonous_Snake extends Vue {
    private showSnake: boolean = false; // 蛇头显示控制
    private showMenu: boolean = true; // 菜单显示控制
    private showTmpMenu: boolean = false; // 暂停菜单
    private diffculty: string = ""; // 游戏难度
    private score: number = 0; // 游戏得分
    private snake!: Snake;
    private isMusicPlay: boolean = true;

    mounted() {
        let $background = $(".background");
        this.diffculty = "简单";
        this.snake = new Snake($background, this.score, 500);
        $(window).keydown((event: any) => {
            //为窗口添加键盘事件，
            switch (event.keyCode) {
                case 38:
                    {
                        //判断单击按键是否为上
                        this.snake.move_top(); //为真，则向上移动
                        this.snake.eat(); //执行eat()函数，判断移动的新位置是否有食物
                        if (this.snake.status != "Bottom") {
                            //判断将要移动的方向是否与现在的移动方向相反，相反则status不变
                            this.snake.status = "Top";
                        }
                    }
                    break;
                case 40:
                    {
                        this.snake.move_bottom();
                        this.snake.eat();
                        if (this.snake.status != "Top") {
                            this.snake.status = "Bottom";
                        }
                    }
                    break;
                case 37:
                    {
                        this.snake.move_left();
                        this.snake.eat();
                        if (this.snake.status != "Right") {
                            this.snake.status = "Left";
                        }
                    }
                    break;
                case 39:
                    {
                        this.snake.move_right();
                        this.snake.eat();
                        if (this.snake.status != "Left") {
                            this.snake.status = "Right";
                        }
                    }
                    break;
                case 27:
                    {
                        this.esc();
                    }
                    break;
            }
        });
    }

    /**
     * 监听游戏难度切换操作
     */
    @Watch("diffculty")
    private changeDiffculty(val: string, oldVal: string) {
        const enum degreeOfDifficulty {
            "简单" = 500,
            "困难" = 200,
            "地狱" = 50
        }

        switch (val) {
            case "简单":
                this.snake.difficult = 500;
                break;
            case "困难":
                this.snake.difficult = 200;
                break;
            case "地狱":
                this.snake.difficult = 50;
                break;
        }
    }

    /**
     * 监听游戏难度切换操作
     */
    @Watch("isMusicPlay")
    private changeIsMusicPlay(val: string, oldVal: string) {
        const audioElem: any = document.querySelector(".music audio");
        if (val) {
            audioElem.play();
        } else {
            audioElem.pause();
        }
    }

    private beginGame(): void {
        this.showMenu = false;
        this.showSnake = true;
        this.snake.startGame();
    }

    /**
     * 退出游戏
     */
    private exit(): void {
        super.$router.push({ path: "/" });
    }

    /**
     * 重新开始游戏
     */
    private restart(): void {
        window.location.reload();
    }

    private esc(): void {
        this.showTmpMenu = true;
        this.snake.Stop_walk();
    }

    private goTo(): void {
        this.showTmpMenu = false;
        this.snake.Auto_walk();
    }
}
</script>

<style lang="less">
#Gluttonous_Snake {
    position: relative;
    margin: 20px auto;
    width: 1000px;
    .background {
        position: relative;
        z-index: -1;
        margin: 20px auto;
        width: 1000px;
        height: 600px;
        /*line-height: 600px;*/
        border: solid 2px;
        background-color: #8cc63e;
    }
    .snake {
        display: inline-block;
        border: solid 1px;
        width: 20px;
        height: 20px;
        background-color: gray;
        position: absolute;
        z-index: 10px;
    }
    .start {
        top: 300px;
        left: 100px;
    }
    .snake_boby {
        display: inline-block;
        border: solid 1px;
        width: 20px;
        height: 20px;
        background-color: #7dbb32;
        position: absolute;
        border-radius: 40%;
        z-index: 10px;
    }
    .foot {
        position: absolute;
        display: inline-block;
        width: 20px;
        height: 20px;
        background: url("../../assets/images/Gluttonous_Snake/food.png")
            no-repeat;
        background-size: 20px;
        position: absolute;
        border-radius: 40%;
        z-index: 10px;
    }
    .begin,
    .GameOver {
        position: absolute;
        border: solid 1px;
        background: url("../../assets/images/Gluttonous_Snake/贪吃蛇.jpg")
            no-repeat;
        background-size: 600px;
        width: 600px;
        height: 450px;
        top: 60px;
        left: 50%;
        transform: translateX(-50%);
    }
    .begin ul {
        position: absolute;
        top: 200px;
        left: 420px;
    }
    .begin ul li {
        margin-bottom: 20px;
        /*background: red;*/
    }
    .begin ul li input {
        width: 150px;
        height: 50px;
        line-height: 30px;
        border: none;
        background-color: #7dbb32;
        cursor: pointer;
        border-radius: 0.3em;
        box-shadow: 0 1px white inset;
        text-align: center;
        text-shadow: 0 1px 1px black;
        color: white;
        font-weight: bold;
        outline: none;
    }
    .begin ul li input:hover,
    .begin ul li select:hover,
    .GameOver .btnList input:hover {
        background: #a3d35b;
    }
    .begin ul li input:active,
    .begin ul li select:active,
    .GameOver input:active {
        box-shadow: 0.05em 0.1em 0.2em rgba(0, 0, 0, 0.6) inset;
    }
    .begin ul li select {
        width: 150px;
        height: 50px;
        line-height: 30px;
        /*padding-left: 55px;*/
        text-indent: 55px;
        background-color: #7dbb32;
        border-radius: 0.3em;
        box-shadow: 0 1px white inset;
        text-align: center;
        text-shadow: 0 1px 1px black;
        color: white;
        font-weight: bold;
        outline: none;
    }

    .GameOver {
        .btnList {
            position: absolute;
            top: 50%;
            right: 40px;
            transform: translateY(-50%);
            width: 180px;

            input {
                width: 100%;
                height: 60px;
                margin-top: 20px;
                line-height: 60px;
                border: none;
                background-color: #7dbb32;
                cursor: pointer;
                border-radius: 0.3em;
                box-shadow: 0 1px white inset;
                text-align: center;
                text-shadow: 0 1px 1px black;
                color: white;
                font-size: 20px;
                font-weight: bold;
                outline: none;
            }
        }
    }

    .score {
        position: absolute;
        font-size: 20px;
        top: -30px;
        left: 0px;
    }
    .grade {
        position: absolute;
        font-size: 20px;
        top: -30px;
        left: 800px;
    }
    .music {
        position: absolute;
        top: 0;
        right: -40px;
        i{
            cursor: pointer;
        }
        .play {
            animation: music_paly 3s linear infinite;
        }
    }
}

@keyframes music_paly {
    from {
        transform: rotate(0);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
