// Hover Mode Function

$("#v-icon").addClass("hs-icon");


$(".hover-color").on("mouseover",function(){
    $(".v-icon-div").show();
    $("#v-icon").removeClass("hs-icon");
});

$(".hover-color").on("mouseleave",function(){
    $(".v-icon-div").hide();
  
});
