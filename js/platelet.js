$(".close").bind("click", function(e) { 
    e.preventDefault();
    $(this).parent().animate({ height: "toggle", opacity: "toggle" }, "slow");
});

$(".colapse").bind("click", function(e) { 
    e.preventDefault();
	$(this).toggleClass("minus plus");
    $(this).parent().find("p").animate({ height: "toggle"}, "slow");
});
