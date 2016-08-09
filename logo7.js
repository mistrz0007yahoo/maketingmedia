(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 

// library properties:
lib.properties = {
	width: 1920,
	height: 800,
	fps: 60,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.intro0 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.intro10 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.intro11 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.intro12 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.intro13 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.intro14 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.intro2 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.intro3 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.intro4 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.intro5 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.intro6 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.intro7 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.intro8 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.intro9 = function() {
	this.spriteSheet = ss["logo7_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.kolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Warstwa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E30713").s().p("EjqXDqYMAAAnUvMHUvAAAMAAAHUvgAh/TpQg4Aig5AcIgEACIgGACIgEACIgbAMQCIAbCRAAQBPAABKgIIiii1QhPA5gnAZgAJvA6QgOENhCC5IgBACIAAABQhGC+iMCRIE7FhQCohdCTiSQGNmQAAo0QAAmdjWlFQhNh2hqhrQmPmPozgBQlWAAkbCVQg6Afg2AkIAGAAIA7gEQE/AADBCoQC7ClAAEGQAACLhLBvQhDBiiJBbQh/BXhGAoIHMH0QBDhTAhhtQAhhtAHiXgAwlGlQhOBgAAB+QAAAbAEAZQAJA/AgA0QAbAjAdAjQAKAKAMAJQAnAgAuAXQBcArB1AAQB4AABhgjIAUgIIABgBQBVgjBVhGIojpRQiNBbg7BLgA1OAAQgBBDAHBBIAegaQBWhGBqg+QhAhDgpgzQgqg1gegzIgYgnQgbCLAACUgAtKq6Qg5A4AABbQgBA9A4BNQAfAsBeBlIACgBQAmgWBNgwQBKgvAlguQAvg5gBg+QABhag9g5Qg/g8hoABQhtgBg9A8g");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1500,-1500,3000,3000);


// stage content:
(lib.logo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{zacznij:1,poczatek:2,koniec:174,powrut:179});

	// timeline functions:
	this.frame_0 = function() {
		var calosc = this;
		
		var kolocz = this["kolo"];
		
		kolocz.visible = false;
		trzebaPokazac = false;
		
		
		
		this.odnowa = function() 
		{
			calosc.gotoAndPlay("powrut");
			trzebaPokazac = false;
			createjs.Tween.get(kolocz).to({scaleX:1 ,scaleY:1}, 0);
			
			
				
		}
		
		this.zacznijPowiekszac = function() 
		{
			
			//trzebaPokazac = true;
			
			this["kolo"].visible = true;
			createjs.Tween.get(this["kolo"]).to({scaleX:1 ,scaleY:1}, 0);
			window.pierwszyraz();
			this.gotoAndPlay("koniec");
			
				
		}
		
		this.powiekLogoteraz = function(ile)
		{
			
			if(ile>=1)
			{
			createjs.Tween.get(kolocz).to({scaleX:ile ,scaleY:ile}, 100);
		}
		}
	}
	this.frame_1 = function() {
		this["kolo"].visible = false;
	}
	this.frame_173 = function() {
		if(trzebaPokazac)
		{
			
		}
		else
		{
			this.gotoAndPlay("poczatek")
		}
	}
	this.frame_174 = function() {
		this["kolo"].visible = true;
	}
	this.frame_178 = function() {
		this.stop()
	}
	this.frame_180 = function() {
		window.pokazczeroneTlo();
	}
	this.frame_184 = function() {
		this.gotoAndPlay("zacznij");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(172).call(this.frame_173).wait(1).call(this.frame_174).wait(4).call(this.frame_178).wait(2).call(this.frame_180).wait(4).call(this.frame_184).wait(1));

	// Warstwa 24
	this.kolo = new lib.kolo3();
	this.kolo.setTransform(945.3,351.1);

	this.timeline.addTween(cjs.Tween.get(this.kolo).wait(185));

	// Warstwa 18
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egk3Ad1MAAAg7pMBJvAAAMAAAA7pg");
	this.shape.setTransform(945,353);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(174).to({_off:false},0).to({_off:true},4).wait(1).to({_off:false},0).wait(6));

	// Warstwa 20
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AkZU4IAbgLIAEgCIAGgDIAEgCQA5gaA4gkQAngYBPg5ICiC1QhKAHhPAAQiRAAiIgbgAFMNSQCMiRBGi+IAAgBIABgCQBCi5AOkNInYAAQgHCYghBsQghBuhDBSInMnzQBGgpB/hXQCJhbBDhjQBLhuAAiLQgBkGi6ilQjBipk/ABIg7AEIgGAAQA2gkA6gfQEbiVFWAAQIzAAGPGQQBqBqBNB3QDWFFAAGdQAAI0mNGQQiTCSioBcgAujO6QgugXgnggQgMgKgKgKQgdgigbgjQggg0gJg/QgEgZAAgbQAAh+BOhgQA7hMCNhaIIjJRQhVBGhVAjIgBABIgUAIQhhAjh4AAQh1AAhcgrgA1OAAQAAiUAbiLIAYAnQAfA0ApAzQApAzBABEQhqA/hWBFIgeAaQgHhBABhDgAtMmdQg4hNABg+QgBhaA6g4QA9g8BtAAQBoAAA/A8QA9A5gBBZQABA/gvA4QgmAwhJAuQhNAxgmAWIgCABQhehngfgrg");
	this.shape_1.setTransform(945,351.6);
	this.shape_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(172).to({_off:false},0).to({_off:true},2).wait(11));

	// Warstwa 13
	this.instance = new lib.intro14();
	this.instance.setTransform(480.5,50.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(161).to({_off:false},0).to({_off:true},13).wait(11));

	// Warstwa 12
	this.instance_1 = new lib.intro13();
	this.instance_1.setTransform(480.5,50.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(153).to({_off:false},0).to({_off:true},10).wait(22));

	// Warstwa 2
	this.instance_2 = new lib.intro12();
	this.instance_2.setTransform(480.5,50.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(144).to({_off:false},0).to({_off:true},11).wait(30));

	// Warstwa 22
	this.instance_3 = new lib.intro11();
	this.instance_3.setTransform(480.5,50.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(135).to({_off:false},0).to({_off:true},11).wait(39));

	// Warstwa 23
	this.instance_4 = new lib.intro10();
	this.instance_4.setTransform(480.5,50.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(125).to({_off:false},0).to({_off:true},12).wait(48));

	// Warstwa 9
	this.instance_5 = new lib.intro9();
	this.instance_5.setTransform(480.5,50.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(114).to({_off:false},0).to({_off:true},13).wait(58));

	// Warstwa 8
	this.instance_6 = new lib.intro8();
	this.instance_6.setTransform(480.5,50.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(103).to({_off:false},0).to({_off:true},13).wait(69));

	// Warstwa 15
	this.instance_7 = new lib.intro7();
	this.instance_7.setTransform(480,130);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(92).to({_off:false},0).to({_off:true},13).wait(80));

	// Warstwa 11
	this.instance_8 = new lib.intro6();
	this.instance_8.setTransform(480,130);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(80).to({_off:false},0).to({_off:true},14).wait(91));

	// Warstwa 7
	this.instance_9 = new lib.intro5();
	this.instance_9.setTransform(480,130);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(67).to({_off:false},0).to({_off:true},15).wait(103));

	// Warstwa 10
	this.instance_10 = new lib.intro4();
	this.instance_10.setTransform(480,130);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(57).to({_off:false},0).to({_off:true},12).wait(116));

	// Warstwa 6
	this.instance_11 = new lib.intro3();
	this.instance_11.setTransform(480,130);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(43).to({_off:false},0).to({_off:true},16).wait(126));

	// Warstwa 5
	this.instance_12 = new lib.intro2();
	this.instance_12.setTransform(480,130);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(29).to({_off:false},0).to({_off:true},16).wait(140));

	// Warstwa 4
	this.instance_13 = new lib.intro0();
	this.instance_13.setTransform(480,130);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(15).to({_off:false},0).to({_off:true},16).wait(154));

	// Warstwa 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AkZU4IAbgLIAEgCIAGgDIAEgCQA5gaA4gkQAngYBPg5ICiC1QhKAHhPAAQiRAAiIgbgAFMNSQCMiRBGi+IAAgBIABgCQBCi5AOkNInYAAQgHCYghBsQghBuhDBSInMnzQBGgpB/hXQCJhbBDhjQBLhuAAiLQgBkGi6ilQjBipk/ABIg7AEIgGAAQA2gkA6gfQEbiVFWAAQIzAAGPGQQBqBqBNB3QDWFFAAGdQAAI0mNGQQiTCSioBcgAujO6QgugXgnggQgMgKgKgKQgdgigbgjQggg0gJg/QgEgZAAgbQAAh+BOhgQA7hMCNhaIIjJRQhVBGhVAjIgBABIgUAIQhhAjh4AAQh1AAhcgrgA1OAAQAAiUAbiLIAYAnQAfA0ApAzQApAzBABEQhqA/hWBFIgeAaQgHhBABhDgAtMmdQg4hNABg+QgBhaA6g4QA9g8BtAAQBoAAA/A8QA9A5gBBZQABA/gvA4QgmAwhJAuQhNAxgmAWIgCABQhehngfgrg");
	this.shape_2.setTransform(945,351.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).to({_off:true},17).wait(168));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.3,-748.9,3000,3000);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;