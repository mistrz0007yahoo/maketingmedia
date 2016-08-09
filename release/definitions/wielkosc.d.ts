declare var szerokosc: number;
declare var skala: number;
declare var wysokosc: number;
declare var skalaWysokosci: number;
declare var proporcje: number;
declare class wielkosc {
    zmienWielkosc: any;
    skalaWys: number;
    constructor(zmienWielkosc: any);
    pobierzSkaleWys(): number;
    pobierzSkaleNormal(): Number;
    pobierzSkale(): Array<any>;
}
declare function koniecCanwas(): void;
