"use strict";

var $navLinks = $(".nav a"),
    $nav = $(".nav");

$navLinks.on("click", function(){
    // Toggle active link in nav
    $nav.find(".active").removeClass("active");
    $nav.find(".active-re").removeClass("active-re");
    $(this).parent().addClass("active active-re");

    // Hide navbar toggle if visible
    var $navbarToggle = $(".navbar-toggle");
    if ($navbarToggle.is(":visible")) {
        $navbarToggle.click();
    }
});

var hash = location.hash;

if (hash !== "") {
    var $a = $("a[href="+hash+"]");
    $nav.find(".active").removeClass("active");
    $nav.find(".active-re").removeClass("active-re");
    $a.parent().addClass("active active-re");
}
