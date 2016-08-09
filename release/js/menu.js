var pozycjaMenu = 0;
var menuboczbe = ['ma<span class="czer">mm</span>y to', 'stawiamy na ko<span class="czer">mm</span>unikacje', 'mamy <span class="czer">mm</span>ożliwości', 'daje<span class="czer">mm</span>y wybór', 'działa<span class="czer">mm</span>y w pełni', 'jesteś<span class="czer">mm</span>y dumni', 'ko<span class="czer">nn</span>takt'];
var menu = (function () {
    function menu(kliknietoMenu) {
        this.kliknietoMenu = kliknietoMenu;
        var zawartosc = "";
        for (var i = 0; i < menuboczbe.length; i++) {
            zawartosc += '<div class="bocznyprzycisk" id="mmB' + i + '">' + menuboczbe[i] + '</div>';
        }
        $(".menulista").html(zawartosc);
        $(".przyciskmenu").click(function (e) {
            if (pozycjaMenu == 0) {
                pozycjaMenu = -1;
                console.log("pozycjaMenu" + pozycjaMenu);
                TweenLite.to($(".menuboczne"), 0.8, { x: -parseFloat(window.innerWidth / 2) + 20, onComplete: koniecAnimacjimenu });
            }
            else if (pozycjaMenu == 1) {
                this.schowajManu();
            }
        }.bind(this));
        $(".bocznyprzycisk").click(function (e) {
            var numerSP = parseFloat(e.currentTarget.id.substr(3));
            console.log(numerSP);
            console.log("ID" + e.currentTarget.id);
            this.schowajManu();
            this.kliknietoMenu(numerSP);
        }.bind(this));
    }
    menu.prototype.schowajManu = function () {
        if (pozycjaMenu != -2 && pozycjaMenu != 0) {
            pozycjaMenu = -2;
            TweenLite.to($(".menuboczne"), 0.8, { x: 0, onComplete: koniecAnimacjimenu });
        }
    };
    menu.prototype.pokazMenu = function () {
        $(".przyciskmenu").css("visibility", "visible");
    };
    return menu;
}());
function koniecAnimacjimenu() {
    console.log("koniecAnimacji");
    if (pozycjaMenu == -1) {
        pozycjaMenu = 1;
    }
    else {
        pozycjaMenu = 0;
    }
}
