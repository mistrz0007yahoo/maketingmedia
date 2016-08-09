///<reference path='../lib/jquery.d.ts'/>
///<reference path='../lib/greensock.d.ts'/>
var controller;
var caloscTa = this;
var proporcja = 1;
var tablicaPoziomowStron;
var scena1;
var scena2;
var scena3;
var scena4;
var scena5;
var scena6;
var scena7;
var scena8;
var animLiter;
var skrolAnimacje = (function () {
    function skrolAnimacje(daneprop) {
        proporcja = daneprop[1];
        console.log("proporcja: " + proporcja);
        //proporcja = 1;
        //ustwaLitery();
        ustawSkrolMagiczny();
        animujLoga();
    }
    skrolAnimacje.prototype.przewinNaStrone = function (num) {
        console.log("#strona" + num);
        // controller.scrollTo("#strona" + num);
        console.log("y :" + tablicaPoziomowStron[num]);
        var odlegloscStrony = Math.abs(tablicaPoziomowStron[num] - window.pageYOffset);
        var czasPowrotu = (odlegloscStrony / wysokosc) * 0.8;
        TweenLite.to(window, czasPowrotu, {
            scrollTo: {
                y: tablicaPoziomowStron[num],
                autoKill: true // allows user to kill scroll action smoothly
            },
            ease: Cubic.easeOut
        });
    };
    skrolAnimacje.prototype.zmianaProporcji = function (daneprop) {
        proporcja = daneprop[1];
    };
    skrolAnimacje.prototype.resetSkrol = function () {
        if (window.pageYOffset == 0) {
            controller.scrollTo(1);
        }
        else {
            controller.scrollTo(0);
        }
        controller = controller.destroy(true);
        console.log("wysokosc:" + wysokosc);
        setTimeout(function () {
            TweenLite.to($(".strona1"), 0, { scale: skala, y: 0 });
            TweenLite.to($(".strona2"), 0, { scale: skala, y: skala * 1080 });
            TweenLite.to($(".strona3"), 0, { scale: skala, y: wysokosc });
            TweenLite.to($(".strona4"), 0, { scale: skala, y: wysokosc });
            TweenLite.to($(".strona5"), 0, { scale: skala, y: wysokosc });
            TweenLite.to($(".strona6"), 0, { scale: skala, y: wysokosc + skala * 1080 });
            ustawSkrolMagiczny();
        }, 100);
    };
    return skrolAnimacje;
}());
function zacznijAnimacjeIgiel() {
    for (var g = 1; g < 4; g++) {
        var oile = 10 - Math.random() * 20;
        var kierunek = 1;
        if (oile < 0) {
            kierunek = -1;
        }
        var czasR = Math.abs(oile) * 0.05 + 0.1;
        TweenLite.to($("#zaI" + g), czasR, { rotation: oile, transformOrigin: "45px 160px", ease: Sine.easeInOut });
        TweenLite.to($(".igla" + g), czasR, { rotation: oile, onComplete: znowumachnij, onCompleteParams: [$(".igla" + g), $("#zaI" + g), oile, kierunek], transformOrigin: "45px 160px", ease: Sine.easeInOut });
    }
}
function zapiszPozycjeStrony() {
    var sortedX = this._targets[0]._gsTransform.y.toFixed(2);
    window.poz2S = sortedX;
    console.log("wartosc:" + sortedX);
}
function znowumachnij(obiekt, obiekt2, rot, kie) {
    var oile2 = -Math.random() * 10 * kie;
    var czasR2 = Math.abs(oile2 - rot) * 0.05 + 0.1;
    TweenLite.to(obiekt, czasR2, { rotation: oile2, transformOrigin: "45px 160px", ease: Sine.easeInOut });
    TweenLite.to(obiekt2, czasR2, { rotation: oile2, onComplete: znowumachnij, onCompleteParams: [obiekt, obiekt2, oile2, -kie], transformOrigin: "45px 160px", ease: Sine.easeInOut });
}
function animujkapelusz() {
    if ($(".kap2").css("display") == "none") {
        $(".kap2").css("display", "block");
        TweenLite.to($(".kap2"), 0, { y: -1080 });
        TweenLite.to($(".kap2"), 2, { y: 0, ease: Bounce.easeOut, delay: 0.5, onComplete: zakonczonoKapelusz });
    }
}
function ruchloga(logo, rzadL) {
    TweenLite.to($(logo), 0, { x: 0 });
    if (caloscTa["numeRzedu" + rzadL] < (caloscTa["rzad" + rzadL]).length - 1) {
        caloscTa["numeRzedu" + rzadL] = caloscTa["numeRzedu" + rzadL] + 1;
    }
    else {
        caloscTa["numeRzedu" + rzadL] = 0;
    }
    var numerWrzedzie = caloscTa["numeRzedu" + rzadL];
    var kolLoga = (caloscTa["rzad" + rzadL])[numerWrzedzie];
    //  console.log("kolLoga:" + kolLoga);
    TweenLite.to($("#lo" + kolLoga), 10 * (3 - rzadL), { x: -2500, onComplete: ruchloga, ease: Linear.easeNone, onCompleteParams: [$("#lo" + kolLoga), rzadL] });
}
function ustwaLitery() {
    var kontent6 = $(".tekst6").html();
    var czerwonytekst = $(".czerwony5").html();
    czerwonytekst = czerwonytekst.split("<br>").join("$");
    var zawrtoscbezBR = kontent6.split("<br>").join("$");
    //console.log("zawrtoscbezBR:" + zawrtoscbezBR);
    var czesci = zawrtoscbezBR.split('<spam');
    var czesci2 = czesci[1];
    var reszta = czesci2.split("</spam>");
    var wyrazy1 = czesci[0];
    var wyrazy2 = czerwonytekst;
    var wyrazy3 = reszta[1];
    var animacjamalychLogow = new TimelineLite();
    function dodajLitery(wyraz, klasadod) {
        var nowazawartoscA = "";
        for (var i = 0; i < wyraz.length; i++) {
            var litera = wyraz[i];
            if (litera == "$") {
                nowazawartoscA += '<br>';
            }
            else if (litera != " ") {
                nowazawartoscA += '<span class="literka wr' + numLitery + klasadod + '">' + litera + '</span>';
            }
            else {
                nowazawartoscA += litera;
            }
            numLitery++;
        }
        return nowazawartoscA;
    }
    var wszytskieLitery = "";
    wszytskieLitery += dodajLitery(wyrazy1, '');
    wszytskieLitery += dodajLitery(wyrazy2, ' czerwony5');
    wszytskieLitery += dodajLitery(wyrazy3, '');
    $(".tekst6").html(wszytskieLitery);
    animLiter = new TimelineLite();
    for (var h = 0; h < numLitery; h++) {
        animLiter.from($(".wr" + h), 1.2, { alpha: 0, ease: Expo.easeIn }, "-=1");
    }
}
function animujLoga() {
    caloscTa.rzad0 = new Array();
    caloscTa.rzad1 = new Array();
    caloscTa.rzad2 = new Array();
    caloscTa.numeRzedu1 = 0;
    caloscTa.numeRzedu2 = 0;
    caloscTa.numeRzedu3 = 0;
    var numLitery = 0;
    var rzad = 0;
    for (var i = 0; i < 28; i++) {
        $("#lo" + i).css("left", "1920px");
        var wysokoscLoga = parseFloat($("#lo" + i).css("height")) * 0.5;
        $("#lo" + i).css("top", -wysokoscLoga + "px");
        (caloscTa["rzad" + rzad]).push(i);
        TweenLite.to($("#lo" + i), 0, { y: rzad * 220 - 100 });
        if (i < 15) {
            caloscTa["numeRzedu" + rzad]++;
            TweenLite.to($("#lo" + i), 10 * (3 - rzad), { x: -2500, ease: Linear.easeNone, delay: 2 * ((caloscTa["rzad" + rzad]).length - 1) * (3 - rzad), onComplete: ruchloga, onCompleteParams: [$("#lo" + i), rzad] });
        }
        if (rzad < 2) {
            rzad++;
        }
        else {
            rzad = 0;
        }
    }
}
function ustawSkrolMagiczny() {
    tablicaPoziomowStron = new Array();
    TweenLite.to($(".tyt1"), 0, { y: 500, alpha: 0 });
    TweenLite.to($(".tekst1"), 0, { y: 500, alpha: 0 });
    TweenLite.to($(".lat"), 0, { y: 500, alpha: 0 });
    TweenLite.to($(".kamel"), 0, { x: -1600 });
    TweenLite.to($(".jezyk"), 0, { x: -600 });
    TweenLite.to($(".tekst8"), 0, { x: -400 });
    TweenLite.to($(".strona3"), 1, { y: 1080 * skala });
    // TweenLite.to($(".loga"), 0, {x:50});
    //  var animacjaTla =TweenLite.to($(".animacjapocztkowa"),1,{alpha:0});
    var animacjanapisow1 = TweenLite.to($(".tyt1"), 1, { y: 0, alpha: 1 });
    var animacjanapisow2 = TweenLite.to($(".tekst1"), 1, { y: 0, alpha: 1 });
    var animacjanapisow3 = TweenLite.to($(".lat"), 1, { y: 0, alpha: 1 });
    var animacjanapisow4 = TweenLite.to($(".kamel"), 1, { x: 0 });
    var animacjanapisow8 = TweenLite.to($(".tekst8"), 1, { x: 0 });
    //  var animacjanapisow9 = TweenLite.to($(".loga"), 1, {x:3261});
    zacznijAnimacjeIgiel();
    //  var animacjanapisow5 = TweenLite.to($(".tekst3"), 1, {x:0,alpha:1});
    //  var animacjanapisow6 = TweenLite.to($(".tekst4"), 1, {x:0,alpha:1});
    //var animacjanapisow7 = TweenLite.to($(".tekst5"), 1, {x:0,alpha:1});
    var animSlajd1 = TweenLite.to($(".strona1"), 1, { y: -1080 * skala, ease: Linear.easeNone });
    var kompasRotacja = TweenLite.to($(".kompas"), 1, { rotation: 270 });
    var animSlajd2 = TweenLite.to($(".strona2"), 1, { y: -1080 * skala, onUpdate: zapiszPozycjeStrony, onUpdateParams: ["{self}"], ease: Linear.easeNone });
    var animSlajd3 = new TimelineLite();
    var animSlajd3a = TweenLite.to($(".strona3"), 1, { y: 0, ease: Linear.easeNone });
    var animSlajd3b = TweenLite.to($(".strona3"), 1, { y: -1080 * skala, ease: Linear.easeNone });
    animSlajd3.add(animSlajd3a);
    animSlajd3.add(animSlajd3b);
    var animSlajd4 = TweenLite.to($(".strona4"), 1, { y: -1080 * skala, ease: Linear.easeNone });
    var animSlajd5 = new TimelineLite();
    var animSlajd5a = TweenLite.to($(".strona5"), 1, { y: 0, ease: Linear.easeNone, onStart: animujkapelusz });
    var animSlajd5b = TweenLite.to($(".strona5"), 1, { y: -1080 * skala, ease: Linear.easeNone });
    //  animSlajd5.add(animSlajd5a);
    // animSlajd5.add(animSlajd5b);
    var animSlajd6 = new TimelineLite();
    var animSlajd6a = TweenLite.to($(".strona6"), 1, { y: skala * 0, ease: Linear.easeNone });
    var animSlajd6b = TweenLite.to($(".strona6"), 1, { y: 0, ease: Linear.easeNone });
    var animSlajd6c = TweenLite.to($(".strona6"), 1, { y: -1080 * skala, ease: Linear.easeNone });
    animSlajd6.add(animSlajd6a);
    animSlajd6.add(animSlajd6b);
    animSlajd6.add(animSlajd6c);
    animacjamarketing = TweenLite.to($(".ladowanieLogo"), 1, { y: -580 * skala, ease: Linear.easeNone });
    var animacjaSkrolX = TweenLite.to($(".skrolcorobimy"), 1, { x: -9050 });
    controller = new ScrollMagic.Controller();
    scena1 = new ScrollMagic.Scene({
        offset: 200 / proporcja + poczekaj,
        duration: 700 }).setTween(animacjanapisow1).addTo(controller);
    scena2 = new ScrollMagic.Scene({
        offset: 350 / proporcja + poczekaj,
        duration: 700 }).setTween(animacjanapisow2).addTo(controller);
    scena3 = new ScrollMagic.Scene({
        offset: 500 / proporcja + poczekaj,
        duration: 700 }).setTween(animacjanapisow3).addTo(controller);
    scena4 = new ScrollMagic.Scene({
        offset: 550 / proporcja,
        duration: 700 }).setTween(animacjanapisow4).addTo(controller);
    scena5 = new ScrollMagic.Scene({
        offset: 1080 / proporcja + poczekaj,
        duration: 2000 }).setTween(animSlajd1).addTo(controller);
    tablicaPoziomowStron.push(1080 / proporcja + poczekaj);
    scena6 = new ScrollMagic.Scene({
        offset: 1080 / proporcja + poczekaj,
        duration: 2000 }).setTween(animSlajd2).addTo(controller);
    tablicaPoziomowStron.push(1080 / proporcja + poczekaj + 1000);
    scena7 = new ScrollMagic.Scene({
        offset: 1080 / proporcja + poczekaj,
        duration: 2000 }).setTween(kompasRotacja).addTo(controller);
    scena8 = new ScrollMagic.Scene({
        offset: 1080 / proporcja + poczekaj,
        duration: 4000 }).setTween(animSlajd3).addTo(controller).setClassToggle(".strona3", "aktywna");
    tablicaPoziomowStron.push(1080 / proporcja + poczekaj + 2000);
    var liczbaWy = (1080) / proporcja + 2000 + (1080 - wysokosc / skala) + poczekaj;
    if (proporcja > 1) {
        liczbaWy = liczbaWy - (1080 - wysokosc / skala);
        var nowaWysokosc = wysokosc / skala;
        $(".strona3").css("height", nowaWysokosc + "px");
    }
    console.log("liczbaWy" + liczbaWy);
    //liczbaWy = 4000;
    new ScrollMagic.Scene({
        offset: liczbaWy,
        duration: 2000 }).setTween(animSlajd4).addTo(controller).setClassToggle(".strona4", "aktywna");
    //  var calkowitaOdleglosc = 1080 + wysokosc;
    tablicaPoziomowStron.push(liczbaWy + (2000 * wysokosc) / (wysokosc + 1080 * skala));
    new ScrollMagic.Scene({
        offset: liczbaWy,
        duration: 1000 }).setTween(animLiter).addTo(controller);
    new ScrollMagic.Scene({
        offset: liczbaWy,
        duration: 2000 }).setTween(animSlajd5a).addTo(controller).setClassToggle(".strona5", "aktywna");
    new ScrollMagic.Scene({
        offset: liczbaWy + 2000,
        duration: 4000 }).setTween(animacjaSkrolX).addTo(controller).setClassToggle(".strona5", "aktywna");
    tablicaPoziomowStron.push(liczbaWy + 2000);
    new ScrollMagic.Scene({
        offset: liczbaWy + 3000,
        duration: 2000 }).setTween(animSlajd5b).addTo(controller);
    new ScrollMagic.Scene({
        offset: liczbaWy + 3000,
        duration: 4000 }).setTween(animSlajd6).addTo(controller).setClassToggle(".strona6", "aktywna");
    tablicaPoziomowStron.push(8316);
    new ScrollMagic.Scene({
        offset: liczbaWy + 3000,
        duration: 4000 }).setTween(animacjanapisow8).addTo(controller);
    /*
    new ScrollMagic.Scene({
     offset:liczbaWy + 5500,
    duration:4000}).setTween(animacjanapisow9).addTo(controller).setClassToggle(".strona6","aktywna");
   */
}
