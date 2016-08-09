// JavaScript Document



$(function(){	
    var szyb = 0.4;
    var pokazujemy = true;
    TweenLite.to($(".pasek1"),0,{x:-830,ease:Sine.easeIn});
    TweenLite.to($(".pasek2"),0,{x:830,ease:Sine.easeIn});
    TweenLite.to($(".srodekczarny"),0,{alpha:0,ease:Sine.easeIn});
    TweenLite.killTweensOf($(".str1"));
    TweenLite.killTweensOf($(".str2"));
    TweenLite.killDelayedCallsTo($(".str2"));
    TweenLite.killDelayedCallsTo($(".str1"));
   // TweenLite.killTweensOf($(".str2"));
    TweenLite.to($(".str1"),0,{alpha:0,ease:Sine.easeIn,y:20,delay:0.2});
    TweenLite.to($(".str2"),0,{alpha:0,ease:Sine.easeIn,y:-20,delay:0.2});
   
    
    function koniecSkrolowania()
{
    pokazujemy = true;
    TweenLite.to($(".pasek1"),szyb,{x:0,ease:Sine.easeOut});
    TweenLite.to($(".pasek2"),szyb,{x:0,ease:Sine.easeOut});
    TweenLite.to($(".srodekczarny"),szyb,{alpha:1,ease:Sine.easeOut});
    if(window.pageYOffset>4)
        {
    TweenLite.to($(".str1"),szyb,{alpha:1,ease:Sine.easeOut,y:0});
            
            $(".str2").css("background-image","url(../images/strzalka_czerwona_d.png)");
}
   
    TweenLite.to($(".str2"),szyb,{alpha:1,ease:Sine.easeOut,y:0});
}
    

        var $window = $(window);
	var scrollTime = 0.6;
	var scrollDistance = 200;
    
 

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	
       if(pokazujemy)
            {
    pokazujemy = false;
    TweenLite.to($(".pasek1"),szyb,{x:-830,ease:Sine.easeIn});
    TweenLite.to($(".pasek2"),szyb,{x:830,ease:Sine.easeIn});
    TweenLite.to($(".srodekczarny"),szyb,{alpha:0,ease:Sine.easeIn});
    TweenLite.to($(".str1"),szyb,{alpha:0,ease:Sine.easeIn,y:20});
    TweenLite.to($(".str2"),szyb,{alpha:0,ease:Sine.easeIn,y:-20});
            }

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

        
		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 1,
            onComplete:koniecSkrolowania
			});
            

	});
	$window.on("scroll",function(event)
	{
        console.log("skroll");
         
        
		$(window).scrollLeft()>0
		{
			event.preventDefault();	
			$(window).scrollLeft(0);
		//TweenMax.to($window, 0, {
		//	scrollTo : { x: 0, autoKill:true }});
		}
	}
	);
	
	
});