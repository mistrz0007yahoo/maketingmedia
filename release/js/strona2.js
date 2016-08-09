var katN = 0;
var polX = 0;
var polY = 0;
var strona2 = (function () {
    function strona2(skala) {
        polY = parseFloat($(".kompas").css("top")) + parseFloat($(".kompas").css("height")) / 2;
        polX = parseFloat($(".kompas").css("left")) + parseFloat($(".kompas").css("width")) / 2;
        console.log("polY:" + polY + " polX:" + polX);
        console.log("wysokosc: " + parseFloat($(".kompas").css("height")));
        $(".strona2").on("mousemove", function (e) {
            //var position1 = $('.strona2').position();
            console.log("transformY" + window.poz2S);
            console.log("e.pageY " + e.pageY);
            console.log("window.pageYOffset:" + window.pageYOffset);
            console.log(skala);
            console.log(1920 / window.innerWidth);
            console.log((e.pageY - window.pageYOffset) * skala + ":" + e.pageX * skala);
            var angleDeg = Math.atan2((e.pageY - window.pageYOffset) * skala
                -
                    window.poz2S - polY, e.pageX * skala - polX) * 180 / Math.PI;
            console.log("angleDeg:" + angleDeg);
            TweenLite.to($(".kompas"), 0.3, { shortRotation: angleDeg + 70 });
            //  var nachylenie = 
        });
    }
    return strona2;
}());
