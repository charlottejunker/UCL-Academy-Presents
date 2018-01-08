//hide nav and show menu icon below 768px
$("#heading").before('<div id="menu">☰</div>');
//when click on menu icon...
$("#menu").click(function(){
  //toggle nav
  $("#nav").insertAfter("#heading");
  $("#nav").toggleClass("mobile");
  $("#title").slideToggle();
  $("#nav").css({
    "width": "100%"
  });
  $("#nav li").css({
    "display": "block",
    "text-align": "center",
  });
  $(".dropdown-content").css({
    "position": "relative",
    "display": "block",
    "left": "0",
  });
  $(".dropdown-content a").css({
    "text-align": "center",
    "padding": "0",
    "margin": "0",
    "border-bottom": "none"
  });

  $("#nav").slideToggle();

});

$(window).resize(function(){
	if(window.innerWidth > 768) {
		$("#nav").removeAttr("style").insertAfter("#title");
    $("#nav li").removeAttr("style");
    $(".dropdown-content").removeAttr("style");
    $(".dropdown-content a").removeAttr("style");
    $("#title").show();

	}
});


// progressive disclosure

$(".disclose-heading").click(function(){
  $(this).next().slideToggle();
});
