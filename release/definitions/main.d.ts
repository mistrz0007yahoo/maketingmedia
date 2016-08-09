/// <reference path="wielkosc.d.ts" />
/// <reference path="strona1.d.ts" />
/// <reference path="strona2.d.ts" />
/// <reference path="strona5.d.ts" />
/// <reference path="menu.d.ts" />
/// <reference path="skrolAnimacje.d.ts" />
declare var canvas: any, stage: any, exportRoot: any;
declare var klasaRozmiar: wielkosc;
declare var animjezyka: any;
declare var polozenia: Array<any>;
declare var liczbaOtwartych: number;
declare var dzielnik: number;
declare var skrolA: skrolAnimacje;
declare var jestKanwas: boolean;
declare var aktualnaStrona: any;
declare var stronkaDruga: strona2;
declare var piatastrona: strona5;
declare var poczekaj: number;
declare var kontakt: any;
declare var trwaAnimacjaintro: boolean;
declare var wytrzalgotowy: boolean;
declare var brakKapelusza: boolean;
declare var menU: menu;
declare function zmianawielkosci(): void;
declare function init(): void;
declare function handleFileLoad(evt: any): void;
declare function handleComplete(evt: any): void;
declare function kliknietomenuTeraz(numKKmenu: number): void;
declare function doGury(): void;
declare function doDolu(): void;
declare function schowajKontaktTeraz(): void;
declare function aktywujListener(): void;
declare function pokazKontakt(): void;
declare function pokazczerwony(): void;
declare function pokazczarny(): void;
declare function pokazczeroneTlo(): void;
declare function pokazAnimacjeDolnejStrzalki(): void;
declare function pierwszyraz(): void;
declare function przewijanie(e: any): void;
declare function zakonczonoKapelusz(): void;
