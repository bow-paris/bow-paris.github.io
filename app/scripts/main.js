"use strict";

$(".nav a").on("click", function(){
   $(".nav").find(".active").removeClass("active");
   $(".nav").find(".active-re").removeClass("active-re");
   $(this).parent().addClass("active");
   $(this).parent().addClass("active-re");
});

var hash = location.hash;
if(hash!==""){
var a = $("a[href="+hash+"]");
$(".nav").find(".active").removeClass("active");
$(".nav").find(".active-re").removeClass("active-re");
a.parent().addClass("active");
a.parent().addClass("active-re");
}
$('.nav a').on('click', function(){
   if($(".navbar-toggle").is(":visible")){
    $(".navbar-toggle").click();
   }
   });
