///<reference path='opis.ts'/>
var trwaAnimacja = false;
var klasaOpis;
var ostatniKlikniety;
var strona5 = (function () {
    function strona5() {
        klasaOpis = new opis();
        polozenia = klasaOpis.pobiezPol();
        $(".strzalkaskrol").click(function (e) {
            var klikN = parseInt($(e.currentTarget).parent()[0].id.substr(4));
            console.log(klikN);
            console.log(trwaAnimacja);
            if (trwaAnimacja == false) {
                if (klasaOpis.wcisniete[klikN] == 1) {
                    przesun(klikN, -1);
                    klasaOpis.wcisniete[klikN] = 0;
                }
                else {
                    przesun(klikN, 1);
                    klasaOpis.wcisniete[klikN] = 1;
                }
            }
        });
    }
    return strona5;
}());
function przesun(kt, kierunek) {
    if (trwaAnimacja == false) {
        trwaAnimacja = true;
        liczbaOtwartych += kierunek;
        for (var i = 0; i < klasaOpis.liczbaikon; i++) {
            if (i > kt) {
                TweenMax.to($("#opSk" + i), 0.6, { x: polozenia[i] + 376 * kierunek });
                polozenia[i] += 376 * kierunek;
            }
        }
        if (kierunek == 1) {
            $("#opSk" + kt).append('<div class="bialydodatek" id="bia' + kt + '"><div class="opisBialy">' + klasaOpis.pobierzopis(kt) + '</div></div>');
            TweenMax.to($("#bia" + kt), 0, { alpha: 0 });
            TweenMax.to($("#bia" + kt), 0.7, { alpha: 1, delay: 0.6, onComplete: skaczorozjazd });
            TweenMax.to($("#opSk" + kt + " .strzalkaskrol"), 0.6, { scaleX: -1, delay: 0.6 });
        }
        else {
            $("#bia" + kt).remove();
            TweenMax.to($("#opSk" + kt + " .strzalkaskrol"), 0.7, { scaleX: 1, delay: 0.6, onComplete: skaczorozjazd });
        }
    }
}
function skaczorozjazd() {
    console.log("skaczonoa");
    trwaAnimacja = false;
}
