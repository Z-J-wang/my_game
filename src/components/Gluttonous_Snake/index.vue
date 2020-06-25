<template>
    <div class="hello">
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
        <div class="GameOver">
            <input
                type="button"
                value="重新开始"
                id="btn_restart"
                @click="restart()"
            />
        </div>
    </div>
</template>

<script lang="ts">
// import Vue from "vue";
import { Component, Vue, Watch } from "vue-property-decorator";

@Component
export default class Gluttonous_Snake extends Vue {
    private showSnake: boolean = false; // 蛇头显示控制
    private showMenu: boolean = true; // 菜单显示控制
    private diffculty: string = ""; // 游戏难度
    private score: number = 0; // 游戏得分

    created() {
        this.diffculty = "简单";
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
                console.log(degreeOfDifficulty.简单);
                break;
            case "困难":
                console.log(degreeOfDifficulty.困难);
                break;
            case "地狱":
                console.log(degreeOfDifficulty.地狱);
                break;
        }
    }

    /**
     * 退出游戏
     */
    private exit():void{
        super.$router.push({path:'/'})
    }

    /**
     * 重新开始游戏
     */
    private restart():void{
        window.location.reload();
    }
}
</script>

<style scoped>
.hello {
    position: relative;
}
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
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url("../../assets/image/Gluttonous_Snake/food.png") no-repeat;
    background-size: 20px;
    position: absolute;
    border-radius: 40%;
    z-index: 10px;
}
.begin,
.GameOver {
    position: absolute;
    border: solid 1px;
    background: url("../../assets/image/Gluttonous_Snake/贪吃蛇.jpg") no-repeat;
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
.GameOver input:hover {
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
    display: none;
}
.GameOver input {
    width: 180px;
    height: 60px;
    line-height: 60px;
    border: none;
    /*background-color: #7dbb32;*/
    background: transparent;
    cursor: pointer;
    border-radius: 0.3em;
    box-shadow: 0 1px white inset;
    text-align: center;
    text-shadow: 0 1px 1px black;
    color: white;
    font-size: 20px;
    font-weight: bold;
    outline: none;
    position: absolute;
    top: 220px;
    left: 400px;
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
</style>
