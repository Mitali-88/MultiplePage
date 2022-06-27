$(document).ready(function () {
    // $("p").on({
    // mouseenter:function(){
    //     $(this).css("background-color","red");
    // },
    // mouseleave:function(){
    //     $(this).css("background-color","yellow");
    // },
    // click:function(){
    //     $(this).css("background-color","blue");
    // }
    // });


    // $("p").each(function(i){
    //     $(this).on("click",{x:i},function(event){
    //         alert("The " + $(this).index() + ".paragraph has data: "+ event.data.x);
    //     });
    // });


    // $("div").on("dblclick",function(event){
    //     $(event.delegateTarget).css("background-color","lightgreen");
    // });
    // $("div,p").mouseenter(function(event){
    // $("msg").html("related target is : " + event.relatedTarget.nodeName);
    // });
    $("p:first").dblclick(function () {
        // $("p").hide(1000);
        $("s").fadeOut(5000);
    });
});