declare var controller: any;
declare var caloscTa: any;
declare var proporcja: number;
declare var tablicaPoziomowStron: Array<any>;
declare var scena1: any;
declare var scena2: any;
declare var scena3: any;
declare var scena4: any;
declare var scena5: any;
declare var scena6: any;
declare var scena7: any;
declare var scena8: any;
declare var animLiter: any;
declare class skrolAnimacje {
    przewinNaStrone(num: number): void;
    constructor(daneprop: Array<any>);
    zmianaProporcji(daneprop: Array<any>): void;
    resetSkrol(): void;
}
declare function zacznijAnimacjeIgiel(): void;
declare function zapiszPozycjeStrony(): void;
declare function znowumachnij(obiekt: any, obiekt2: any, rot: number, kie: any): void;
declare function animujkapelusz(): void;
declare function ruchloga(logo: any, rzadL: Number): void;
declare function ustwaLitery(): void;
declare function animujLoga(): void;
declare function ustawSkrolMagiczny(): void;
