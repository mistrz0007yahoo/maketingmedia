///<reference path='../lib/jquery.d.ts'/>
///<reference path='../lib/greensock.d.ts'/>
var szerokosc = 1900;
var skala = 1;
var wysokosc = 800;
var skalaWysokosci = 1;
var wielkosc = (function () {
    function wielkosc(zmienWielkosc) {
        this.zmienWielkosc = zmienWielkosc;
        TweenLite.set('.stronka', { transformOrigin: "0% 0%" });
        TweenLite.set('#canvas', { transformOrigin: "0% 0%" });
        TweenLite.set('.logozaslepka', { transformOrigin: "0% 0%" });
        TweenLite.set('.pasekmenu', { transformOrigin: "0% 100%" });
        TweenLite.set('.ladowanieLogo', { transformOrigin: "0% 100%" });
        TweenLite.set('.tytul_kontakt', { transformOrigin: "0% 100%" });
        TweenLite.set('.ramkaKK', { transformOrigin: "0% 100%" });
        TweenLite.set('.koperta', { transformOrigin: "0% 100%" });
        TweenLite.set('.przyciskmenu', { transformOrigin: "100% 50%" });
        TweenLite.set('.menulista', { transformOrigin: "0% 50%" });
        function dostosujRozmiar() {
            szerokosc = parseInt(window.innerWidth);
            wysokosc = parseInt(window.innerHeight);
            skala = szerokosc / 1920;
            skalaWysokosci = wysokosc / 1080;
            // TweenMax.killAll($(".stronka"));
            TweenLite.to($(".strona1"), 0, { scale: skala, y: 0 });
            TweenLite.to($(".strona2"), 0, { scale: skala, y: skala * 1080 });
            TweenLite.to($(".strona3"), 0, { scale: skala, y: wysokosc });
            TweenLite.to($(".strona4"), 0, { scale: skala, y: wysokosc });
            TweenLite.to($(".strona5"), 0, { scale: skala, y: wysokosc });
            TweenLite.to($(".strona6"), 0, { scale: skala, y: wysokosc + skala * 1080 });
            var odleglosc = (skalaWysokosci) * 1200;
            console.log("odleglosc: " + odleglosc);
            // $(".strona2").css("top",1080 * skala + "px");
            TweenLite.to($("#canvas"), 0, { scale: skala });
            TweenLite.to($(".pasekmenu"), 0, { scale: skala });
            TweenLite.to($(".ramkaKK"), 0, { scale: skala, y: -skala * 215, x: 85 * skala });
            TweenLite.to($(".koperta"), 0, { scale: skala, y: -skala * 140, x: 10 * skala });
            TweenLite.to($('.ladowanieLogo'), 0, { scale: skala });
            TweenLite.to($('.tytul_kontakt'), 0, { scale: skala });
            TweenLite.to($('.przyciskmenu'), 0, { scale: skala });
            TweenLite.to($('.menulista'), 0, { scale: skala, y: wysokosc / 2 - parseFloat($('.menulista').height()) / 2 });
            $("#canvas").attr("height", wysokosc / skala);
            $("#canvas").attr("width", szerokosc / skala);
            zmienWielkosc();
            // zmianawielkosci();
        }
        dostosujRozmiar();
        $(window).resize(dostosujRozmiar);
    }
    wielkosc.prototype.pobierzSkaleNormal = function () {
        return 1920 / szerokosc;
    };
    wielkosc.prototype.pobierzSkale = function () {
        var tabSkala = new Array();
        tabSkala.push(skala);
        var proporcjaWysokosci = (1920 / 1080) / (szerokosc / wysokosc);
        tabSkala.push(proporcjaWysokosci);
        return tabSkala;
    };
    return wielkosc;
}());
function koniecCanwas() {
    // TweenLite.to($(".logozaslepka"),0.2,{alpha:1});
    TweenLite.to($("#canvas"), 0.8, { alpha: 0 });
    TweenLite.to($(".centralny"), 0.2, { alpha: 1 });
    $(".prawy").remove();
    $(".lewy").remove();
    TweenLite.to($(".centralny"), 0.8, { rotation: -170, x: -250, delay: 0.8 });
    TweenLite.to($(".centralny"), 0.8, { scaleX: 10, scaleY: 10, delay: 1.6 });
}
