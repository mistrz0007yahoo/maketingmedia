
///<reference path='wielkosc.ts'/>
///<reference path='strona1.ts'/>
///<reference path='strona2.ts'/>
///<reference path='strona5.ts'/>
///<reference path='menu.ts'/>

///<reference path='skrolAnimacje.ts'/>
///<reference path='../lib/jquery.d.ts'/>
///<reference path='../lib/greensock.d.ts'/>

 var canvas, stage, exportRoot;
 
 
var klatka = -1;
var klasaRozmiar:wielkosc;
  var animjezyka;

    var polozenia:Array<any> = new Array()
var liczbaOtwartych:number = 0;
var dzielnik:number = 200;
var skrolA:skrolAnimacje;
var jestKanwas:boolean = true;
 
 var aktualnaStrona;
var stronkaDruga:strona2;
var piatastrona:strona5;
 var poczekaj = 200;
 var kontakt;
 var trwaAnimacjaintro:boolean = true;
 var wytrzalgotowy = true;
var brakKapelusza = true;
var menU:menu;
 var renderMyszka;
 var pozycjeKlatek = [[114,0],[0,0],[0,187],[228,0],[342,0],[228,187],[114,187],[342,187]];
 var szybkoscMyszki = 30;
 var poczekaj = true;
 var okresK = 0;

    $(document).ready(function(e)
        {
        
    menU = new menu(kliknietomenuTeraz);
    klasaRozmiar = new wielkosc(zmianawielkosci);
        
        init();
  
    
   
 
        });


/*
 
Pace.on("done", function(){
    

    init();

    
});
*/
 
    function zmianawielkosci()
    {
    console.log("zmiana wielkosci");
        TweenLite.to($(window),0,{scrollTo : {y:0}});
            if(skrolA != null)
            {
    skrolA.zmianaProporcji(klasaRozmiar.pobierzSkale());
                skrolA.resetSkrol();
                  $("#canvas").css("display","block");
                  $(".animacjapocztkowa").css("display","block");
    exportRoot.odnowa();
    
         jestKanwas = true;
            }
        
         for(var i = 0;i<4;i++)
                  {
                      TweenLite.to($("#pro" + i),0,{y:0,delay:0.1 * i,ease:Sine.easeIn});
                  }
              
    TweenLite.to($(".tytul_kontakt"),0,{y:0})
        $(".tlo_kontakt").css("visibility","hidden");
       // skrolA.resetSkrol();
        
    }


function init() {
	// --- write your JS code here ---
	
	canvas = document.getElementById("canvas");
	images = images||{};
	ss = ss||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadFile({src:"images/logo7_atlas_.json?1466780256618", type:"spritesheet", id:"logo7_atlas_"}, true);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == "image") { images[evt.item.id] = evt.result; }
}

function handleComplete(evt) {
    console.log("zaladowano");
	var queue = evt.target;
	ss["logo7_atlas_"] = queue.getResult("logo7_atlas_");
	exportRoot = new lib.logo7();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
    $(".str2").mousedown(function(e){
    console.log("druga");
    TweenLite.to($(window),0.6,{scrollTo : {y:window.pageYOffset + 400},onComplete:doGury,ease:Linear.easeNone});
    });
$(".str1").mousedown(function(e){
     console.log("pierwsza");
    TweenLite.to($(window),0.6,{scrollTo : {y:window.pageYOffset - 400},onComplete:doDolu,ease:Linear.easeNone});
    });
    $(".str1").mouseup(function(e){
        
    TweenLite.killTweensOf($(window));
        
        });
     $(".str2").mouseup(function(e){
        
    TweenLite.killTweensOf($(window));
        
         });
    $(".str1").mouseleave(function(e){
        
  //  TweenLite.killTweensOf($(window));
        
        });
    $(".str2").mouseleave(function(e){
        
   // TweenLite.killTweensOf($(window));
        
        });
    
    
    
    
    animjezyka = new TimelineLite();
    
    
var animJ1a;
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
  TweenMax.set($(".tablet"), {transformPerspective:1000});
    TweenLite.to($(".tablet"), 0, {x:-500,alpha:0});
         animJ1a = TweenLite.to($(".tablet"), 0, {alpha:0,rotationY:-65,x:600});
    }
else{
    TweenLite.to($(".tablet"), 0, {x:-500});
     animJ1a = TweenLite.to($(".tablet"), 0, {alpha:0,rotationY:-90,x:600});
    
}
  

    var animJ1 = TweenLite.to($(".jezyk"), 1, {x:1230,ease:Cubic.easeInOut,rotation:-4});
    var animJ3 = TweenLite.to($(".tablet"), 1, {x:0,alpha:1,ease:Sine.easeInOut,rotationY:0});
    var animJ2 = TweenLite.to($(".jezyk"), 1, {x:630,ease:Sine.easeInOut,rotation:0});
    

        
       animjezyka.add(animJ1a);
        animjezyka.add(animJ1);
       animjezyka.add(animJ3);
        animjezyka.add(animJ2,"-=1");

    aktywujListener();
    menU.pokazMenu();
}
    function kliknietomenuTeraz(numKKmenu:number)
    {
            if(numKKmenu == 6)
            {
                 pokazKontakt();
            }
else{
    skrolA.przewinNaStrone(numKKmenu);
}
         
    }

    
 

 
    function doGury()
    {
    console.log("dupa do gury");
        TweenLite.to($(window),0.6,{scrollTo : {y:window.pageYOffset+ 400},onComplete:doGury,ease:Linear.easeNone});
         
         TweenLite.to($(".str1"), 0.8,{alpha:1,ease:Sine.easeOut,y:0});
    }
 
  function doDolu()
    {
    console.log("dupa dupa");
      TweenLite.to($(window),0.6,{scrollTo : {y:window.pageYOffset - 400},onComplete:doDolu,ease:Linear.easeNone});
    }
    
    function schowajKontaktTeraz()
    {
         $(".tlo_kontakt").css("visibility","hidden");
    }
    function aktywujListener()
    {
        $("body").css("height","9730px");
        $("body").css("overflow-y","auto");
        var szyb = 0.5;
    TweenLite.to($(".pasek1"),szyb,{x:0,ease:Sine.easeOut});
    TweenLite.to($(".pasek2"),szyb,{x:0,ease:Sine.easeOut});
    TweenLite.to($(".srodekczarny"),szyb,{alpha:1,ease:Sine.easeOut});
   // TweenLite.to($(".str1"),szyb,{alpha:1,ease:Sine.easeOut,y:0});
    TweenLite.to($(".str2"),szyb,{alpha:1,ease:Sine.easeOut,y:0});
        TweenLite.fromTo($(".str2"),szyb * 0.8,{alpha:0,y:-30},{alpha:1,ease:Sine.easeOut,y:0,delay:szyb * 0.8});
        TweenLite.fromTo($(".str2"),szyb * 0.8,{alpha:0,y:-30},{alpha:1,ease:Sine.easeOut,y:0,delay:szyb * 2 * 0.8});
         TweenLite.fromTo($(".str2"),szyb * 0.8,{alpha:0,y:-30},{alpha:1,ease:Sine.easeOut,y:0,delay:szyb * 3 * 0.8});
         aktualnaStrona = new strona1();
        stronkaDruga = new strona2(klasaRozmiar.pobierzSkaleNormal());
    piatastrona = new strona5();
    

       TweenLite.to(window, 0, {scrollTo:{y:0}});
        
        skrolA = new skrolAnimacje(klasaRozmiar.pobierzSkale());
    
    window.addEventListener("scroll",przewijanie)
        
      //  TweenLite.set("body", {perspective:800});
//TweenLite.set(".body", {transformStyle:"preserve-3d"});
//TweenLite.set(".tlo_kontakt", {rotationY:-180});
//TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden"});
   var kierRuchu:number = 1;
          $(".close_kontakt").click(function(e){
  
                  for(var i = 0;i<4;i++)
                  {
                          if(i ==3)
                          {
                              TweenLite.to($("#pro" + i),0.8,{y:0,delay:0.1 * i,onComplete:schowajKontaktTeraz,ease:Sine.easeIn});   
                          }
else{
    TweenLite.to($("#pro" + i),0.8,{y:0,delay:0.1 * i,ease:Sine.easeIn});
}
                      
                  }
              
    TweenLite.to($(".tytul_kontakt"),0.5,{y:0})
              
        });
    
        
          wytrzalgotowy = true;
        animjezyka.restart();
        animjezyka.pause();
        
        if(klasaRozmiar.pobierzSkaleWys() >0.48)
            {
          $(".myszka").css("display","block");
             $(".myszka").css("visibility","visible");
    renderMyszka = setInterval(function()
        {
    renderowanieMyszy();
        },szybkoscMyszki);
            }
        
    }
 
    function pokazKontakt()
    {
        console.log("kontakt");
          $(".tlo_kontakt").css("visibility","visible");
        for(var i = 0;i<4;i++)
                  {
                if(i%2 ==0)
                {
                    kierRuchu = 1;
                }
else{
    kierRuchu = -1
}
    TweenLite.to($("#pro" + i),0.8,{y:wysokosc * kierRuchu,delay:0.1 * i,ease:Back.easeOut})
                  }
    TweenLite.to($(".tytul_kontakt"),0.8,{y:200 * (window.innerHeight/1080),delay:0.5,ease:Back.easeOut});
        
        
    }
    
    function renderowanieMyszy()
    {
            klatka++;
        
        okresK++
        
        
        if(poczekaj)
                    {
                if(okresK>21)
                {
                        poczekaj = false;
                    okresK = 0;
                }
                    }
else{
    if(okresK>7)
                {
    poczekaj = true;
        okresK = 0;
    }
}
        
        
            if(klatka>7)
            {
                
                klatka = 0;
                  
                    
            }
    console.log(klatka);
        var pOz = "-" + pozycjeKlatek[klatka][0] + "px -" + pozycjeKlatek[klatka][1] + "px";
    console.log("poz" + pOz);
      
 
            if(poczekaj)
            {
    $(".myszka").css("background-position",pOz);
            }
    }
    function pokazczerwony()
    {
       // $(".animacjapocztkowa").css("display","block");
         //$(".animacjapocztkowa").css("background-color","#E30613")
    }
    function pokazczarny()
    {
        
    }
 function pokazczeroneTlo()
 {
     $(".animacjapocztkowa").css("display","block");
 }
    function pokazAnimacjeDolnejStrzalki()
    {
    TweenLite.to($(".str1"),0.6,{alpha:0});
  //TweenLite.fromTo($(".str1"),0.6,{alpha:0,y:-50},{alpha:1,y:0,immediateRender:true,delay:0.6});
        
        var szyb = 1;
       
    
    $(".str2").css("background-image","url(../images/strzalka_czarna_d.png)");
       
        TweenLite.fromTo($(".str2"),szyb * 0.8,{alpha:0,y:-30},{alpha:1,ease:Sine.easeOut,y:0,delay:szyb * 0.8});
         
        TweenLite.fromTo($(".str2"),szyb * 0.8,{alpha:0,y:-30},{alpha:1,ease:Sine.easeOut,y:0,delay:szyb * 2 * 0.8});
           
         TweenLite.fromTo($(".str2"),szyb * 0.8,{alpha:0,y:-30},{alpha:1,ease:Sine.easeOut,y:0,delay:szyb * 3 * 0.8});
           
       
    }
    function pierwszyraz()
    {
        setTimeout(function(){ $(".animacjapocztkowa").css("display","none");},10)
    }
    function przewijanie(e)
    {
          console.log(window.pageYOffset);
    menU.schowajManu();
           
        
            if(jestKanwas)
            {
                 if(window.pageYOffset-poczekaj<=200)
            {
               dzielnik = 100;
                         if(wytrzalgotowy == false)
                         {
                       wytrzalgotowy = true;
        animjezyka.restart();
        animjezyka.pause();
                         }
                     
            }
    else if(window.pageYOffset-poczekaj<=400)
    {
        
        
dzielnik = 50 + ((400 - pageYOffset+poczekaj)/200) * 50;
    }
          else if(window.pageYOffset-poczekaj<=600)
    {
dzielnik = 25 +  ((600 - pageYOffset+poczekaj)/200) * 25;
    }
          else if(window.pageYOffset-poczekaj<=800)
    {
dzielnik = 10 +  ((800 - pageYOffset+poczekaj)/200) * 10;
    }
else{
    dzielnik = 10;
}
                   
                    if(trwaAnimacjaintro && pageYOffset>0)
                    {
    clearInterval(renderMyszka);
    $(".myszka").css("display","none");
    exportRoot.zacznijPowiekszac();
     trwaAnimacjaintro = false;
                        $(".str2").css("background-image","url(../images/strzalka_czerwona_d.png)");
                        TweenLite.to($(".str1"),0,{alpha:1});
                        TweenLite.to($(".str2"),0,{alpha:1});
        
                    }
    else if(trwaAnimacjaintro == false && pageYOffset<=1)
    {
            if(klasaRozmiar.pobierzSkaleWys() >0.48)
            {
          $(".myszka").css("display","block");
                
                  renderMyszka = setInterval(function()
        {
    renderowanieMyszy();
        },szybkoscMyszki);
            }
         exportRoot.odnowa();
        trwaAnimacjaintro = true;
    pokazAnimacjeDolnejStrzalki();
        
      
    }
    
    exportRoot.powiekLogoteraz(1 + (window.pageYOffset - poczekaj)/dzielnik);
    console.log(1 + (window.pageYOffset - poczekaj)/dzielnik);

                 if(window.pageYOffset-poczekaj>820)
            {
         jestKanwas = false;
    $("#canvas").css("display","none");
  //  $(".animacjapocztkowa").css("display","none");
                     
                     TweenLite.to($(".logo_mm"),0.5,{alpha:1});
                      TweenLite.to($(".tlopaska2"),0.5,{alpha:0});
            }
        
   
            }
else{
    
     if(window.pageYOffset-poczekaj<820)
            {
         TweenLite.to($(".logo_mm"),0.5,{alpha:0});
         $("#canvas").css("display","block");
       //  $(".animacjapocztkowa").css("display","block");
         TweenLite.to($(".tlopaska2"),0.5,{alpha:1});
          
    
         jestKanwas = true;
            }
    else if(window.pageYOffset>1100 && wytrzalgotowy)
    {
    animjezyka.play();
        wytrzalgotowy = false;
    }
    
    
        if(window.pageYOffset>4200 && brakKapelusza)
        {
                if( $(".kap2").css("display") =="none")
                {
            $(".kap2").css("display","block");
            TweenLite.to($(".kap2"),0,{y:-1080});
            TweenLite.to($(".kap2"),2,{y:0,ease:Bounce.easeOut,delay:0.5,onComplete:zakonczonoKapelusz});
                }
        }
else if(window.pageYOffset<3400 && brakKapelusza == false){
    
      TweenLite.to($(".kap2"),0,{y:-1080});
     $(".kap2").css("display","none");
       brakKapelusza = true;
    
}
    
    
}
        
           
    }
 
    function zakonczonoKapelusz()
    {
        brakKapelusza = false;
}