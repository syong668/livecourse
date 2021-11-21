$("#local_content").hide();
$("#local_btn").click(function(){
    $("#local_content").toggle();
})

$("#load_main").load("load_main.html",function(){
    $(".more").click(function(){
        $("#load_main").load("more_result.html")
    })
});

