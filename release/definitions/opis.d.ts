declare var naszopis: string;
declare var tabIkony: Array;
declare var opisy: Array<any>;
declare var nowytab: Array<any>;
declare var polozeniaT: Array<any>;
declare var noweW: Array<any>;
declare class opis {
    liczbaikon: number;
    wcisniete: Array<any>;
    constructor();
    pobierzopis(num: number): string;
    pobiezPol(): Array<any>;
}
declare function generujOpis(): void;
