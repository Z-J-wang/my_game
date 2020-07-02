declare let $: any;

export default class Snake {
    private _main: any;   // 游戏主体容器
    private _coordinate_x: Array<string> = new Array<string>();      //创建一个数组，用于存放蛇的每个身体节点的x坐标值
    private _coordinate_y: Array<string> = new Array<string>();	    //创建一个数组，用于存放蛇的每个身体节点的y坐标值
    private _status: string = "Right";							//该全局变量用于存放贪吃蛇行走的方向，默认为向右走
    private _time: any;										//该全局变量用于存放setInterval(Auto_walk,_difficult)，用于游戏停止
    private _difficult: number = 500;										//该全局变量用于存在游戏等级的数字变量，主要用于设置行走的快慢
    private _score: number = 0;                                 //建个全局变量用于存放分数
    private _foot_x!: number;
    private _foot_y!: number;

    public get difficult(): number {
        return this._difficult;
    }

    public set difficult(difficult: number) {
        this._difficult = difficult;
    }

    public get status(): string {
        return this._status;
    }

    public set status(status: string) {
        this._status = status;
    }

    /**
     * 构造函数
     * @param $background 游戏主体容器
     * @param score 
     * @param difficulty 
     */
    constructor(container: any, score: number, difficulty: number) {
        this._main = container;
        this._score = score;
        this._difficult = difficulty;
    }

    public startGame(): void {
        this.Crate_start_snake_boby();
        this.create_foot();
        this.Auto_walk()
    }

    //创建一节蛇身
    public Crate_start_snake_boby(): void {
        let $newSnake_boby = $("<div class='snake_boby'></div>");					//创建一个新节点（蛇身）
        let $snakes = this._main.children('div').first();										//获取全部的蛇身
        let L_left = parseInt($snakes.eq($snakes.length - 1).css("left")) - 20 + 'px';	//查到蛇尾节点，获取x,y坐标值，赋给新建的蛇身节点
        let L_Top = $snakes.eq($snakes.length - 1).css("top");
        $newSnake_boby.css("left", L_left);
        $newSnake_boby.css("top", L_Top);
        this._main.append($newSnake_boby);											//把新建的蛇身节点添加到背景中
    }

    public Crate_snake_boby(): void {
        let $newSnake_boby = $("<div></div>");
        let $snakes = this._main.children('div').first();
        let Last_boby_x = parseInt($snakes.eq($snakes.length - 1).css("left"));		//获取蛇尾的坐标
        let LastButOne_boby_x = parseInt($snakes.eq($snakes.length - 2).css("left")); //获取倒数第二节蛇身的坐标
        let Last_boby_y = parseInt($snakes.eq($snakes.length - 1).css("top"));
        let LastButOne_boby_y = parseInt($snakes.eq($snakes.length - 2).css("top"));
        if (Last_boby_x == LastButOne_boby_x) {										//判断最后两节蛇身是否处在垂直
            if (Last_boby_y > LastButOne_boby_y) {									//通过判断最后两节蛇身的y坐标来确定新蛇身的添加方向
                $newSnake_boby.css("left", Last_boby_x);
                $newSnake_boby.css("top", Last_boby_y + 20 + 'px');
            } else if (Last_boby_y < LastButOne_boby_y) {
                $newSnake_boby.css("left", Last_boby_x);
                $newSnake_boby.css("top", Last_boby_y - 20 + 'px');
            }
        } else if (Last_boby_y == LastButOne_boby_y) {
            if (Last_boby_x > LastButOne_boby_x) {
                $newSnake_boby.css("left", Last_boby_x + 20 + 'px');
                $newSnake_boby.css("top", Last_boby_y);
            } else if (Last_boby_x < LastButOne_boby_x) {
                $newSnake_boby.css("left", Last_boby_x - 20 + 'px');
                $newSnake_boby.css("top", Last_boby_y);
            }
        }
        this._main.append($newSnake_boby);
        setTimeout(() => {
            $newSnake_boby.addClass("snake_boby")
        }, 200)
    }

    public create_foot(): void {
        let _status = true;											//新建一个变量用来判断是否生成新的食物
        const $snakes = $(".background>div");
        do {
            this._foot_x = Math.floor(Math.random() * 50) * 20;			//随机生成一个坐标值
            this._foot_y = Math.floor(Math.random() * 30) * 20;
            for (let i = 0; i < $snakes.length; i++) {
                this._coordinate_y[i] = $snakes.eq(i).css("top");
                this._coordinate_x[i] = $snakes.eq(i).css("left");
                if (this._foot_x != parseInt(this._coordinate_x[i]) && this._foot_y != parseInt(this._coordinate_y[i])) {		//判断新坐标值是否跟蛇身重叠
                    _status = false;														//不存在重叠，转化status的值，跳出循环
                }
            }
        } while (_status)
        let $foot = $("<span class='foot'></span>");
        $foot.css("top", this._foot_y + "px");
        $foot.css("left", this._foot_x + "px");
        this._main.append($foot);
    }

    public eat(): void {
        let $snakes = $(".background>div");
        let $H_Top1 = parseInt($snakes.eq(0).css("top"));				//获取蛇头的坐标
        let $H_Left1 = parseInt($snakes.eq(0).css("left"));
        if ($H_Top1 == this._foot_y && $H_Left1 == this._foot_x) {	                //判断蛇头的坐标和食物的坐标是否重叠，重叠，添加一节蛇身，新建一个食物，分数加一，刷新分数
            $(".foot").remove();
            this.Crate_snake_boby();
            this.create_foot();
            ++this._score;
            $(".score span").html(this._score);
        }

    }

    public move_right():void {
        let $snakes = $(".background>div");
        let $H_Top = parseInt($snakes.eq(0).css("top"));
        let $H_Left = parseInt($snakes.eq(0).css("left"));
        for (let i = 0; i < $snakes.length; i++) {
            this._coordinate_y[i] = $snakes.eq(i).css("top");
            this._coordinate_x[i] = $snakes.eq(i).css("left");
        }
        if (!($H_Top == parseInt(this._coordinate_y[1]) && ($H_Left + 20) == parseInt(this._coordinate_x[1]))) {
            $snakes.eq(0).css("left", $H_Left + 20 + 'px');
            for (let i = 1; i < $snakes.length; i++) {
                $snakes.eq(i).css("top", this._coordinate_y[i - 1]);
                $snakes.eq(i).css("left", this._coordinate_x[i - 1]);
            }
            this.collide_dead();
        } 
    }

    public move_left():void {
        let $snakes = $(".background>div");
        let $H_Top = parseInt($snakes.eq(0).css("top"));
        let $H_Left = parseInt($snakes.eq(0).css("left"));
        for (let i = 0; i < $snakes.length; i++) {
            this._coordinate_y[i] = $snakes.eq(i).css("top");
            this._coordinate_x[i] = $snakes.eq(i).css("left");
        }
        if (!($H_Top == parseInt(this._coordinate_y[1]) && ($H_Left - 20) == parseInt(this._coordinate_x[1]))) {
            $snakes.eq(0).css("left", $H_Left - 20 + 'px');
            for (let i = 1; i < $snakes.length; i++) {
                $snakes.eq(i).css("top", this._coordinate_y[i - 1]);
                $snakes.eq(i).css("left", this._coordinate_x[i - 1]);
            }
            this.collide_dead();
        }
    }

    public move_top(): void {
        let $snakes = $(".background>div");
        let $H_Top = parseInt($snakes.eq(0).css("top"));
        let $H_Left = parseInt($snakes.eq(0).css("left"));
        for (let i = 0; i < $snakes.length; i++) {
            this._coordinate_y[i] = $snakes.eq(i).css("top");
            this._coordinate_x[i] = $snakes.eq(i).css("left");
        }
        if (!(($H_Top - 20) == parseInt(this._coordinate_y[1]) && $H_Left == parseInt(this._coordinate_x[1]))) {
            $snakes.eq(0).css("top", $H_Top - 20 + 'px');
            for (let i = 1; i < $snakes.length; i++) {
                $snakes.eq(i).css("top", this._coordinate_y[i - 1]);
                $snakes.eq(i).css("left", this._coordinate_x[i - 1]);
            }
            this.collide_dead();
        }
    }

    public move_bottom(): void {
        let $snakes = $(".background>div");
        let $H_Top = parseInt($snakes.eq(0).css("top"));
        let $H_Left = parseInt($snakes.eq(0).css("left"));
        for (let i = 0; i < $snakes.length; i++) {
            this._coordinate_y[i] = $snakes.eq(i).css("top");
            this._coordinate_x[i] = $snakes.eq(i).css("left");
        }
        if (!(($H_Top + 20) == parseInt(this._coordinate_y[1]) && $H_Left == parseInt(this._coordinate_x[1]))) {
            $snakes.eq(0).css("top", $H_Top + 20 + 'px');
            for (let i = 1; i < $snakes.length; i++) {
                $snakes.eq(i).css("top", this._coordinate_y[i - 1]);
                $snakes.eq(i).css("left", this._coordinate_x[i - 1]);
            }
            this.collide_dead();
        }
    }

    public collide_dead() {
        let $snakes = $(".background>div");
        let $H_Top1 = parseInt($snakes.eq(0).css("top"));			//获取蛇头坐标					
        let $H_Left1 = parseInt($snakes.eq(0).css("left"));
        //		console.log($H_Left1,$H_Top1)
        for (let i = 0; i < $snakes.length; i++) {						//遍历全部蛇身节点坐标
            this._coordinate_y[i] = $snakes.eq(i).css("top");
            this._coordinate_x[i] = $snakes.eq(i).css("left");
        }
        for (let j = 1; j < $snakes.length; j++) {
            //			console.log(parseInt(_coordinate_x[j]),parseInt(_coordinate_y[j]));
            if ($H_Top1 == parseInt(this._coordinate_y[j]) && $H_Left1 == parseInt(this._coordinate_x[j])) { //判断蛇头坐标是否跟蛇身任意节点坐标重叠，重叠则认为吃到自己，清空setInterval，显示GameOver
                alert("Game Over");
                clearTimeout(this._time);
                $("#btn_togo").hide()
                $(".GameOver").show();
                //				$("#btn_begin").focus();
                return false;
            }
            if ($H_Top1 > 580 || $H_Top1 < 0 || $H_Left1 > 980 || $H_Left1 < 0) {			//判断是否超出边界
                alert("Game Over");
                clearTimeout(this._time);
                $("#btn_togo").hide()
                $(".GameOver").show();
                return false;
            }
        }
    }

    public Walk(): void {
        if (this._status == "Right") {
            this.move_right();
            this.eat();
        } else if (this._status == "Left") {
            this.move_left();
            this.eat();
        } else if (this._status == "Top") {
            this.move_top();
            this.eat();
        } else if (this._status == "Bottom") {
            this.move_bottom();
            this.eat();
        }
    }


    public Auto_walk(): void {
        this._time = setInterval((): any => {
            this.Walk();
        }, this._difficult)
    }

    public Stop_walk(): void {
        clearInterval(this._time)
    }
}
