declare let $: any;

export default class CommonFn{
    
    public textrotator($textElem:any):void {
        $($textElem).textrotator({
            animation: "flipUp",
            speed: 1750
        });
    }

    public setScroll($scrollContainer:any):void {
        $($scrollContainer).niceScroll({
            cursorborder:"",
            boxzoom:false,
            scrollspeed:60,
            cursorcolor: "#52e5ab",
            cursorwidth: "5px",
            zindex: "99999999999",
            mousescrollstep:40,
            enablemousewheel: true,
        });
    }
}