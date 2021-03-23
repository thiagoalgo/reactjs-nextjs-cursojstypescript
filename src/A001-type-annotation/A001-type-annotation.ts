/* eslint-disable */
// Foi desabilitado o eslint porque ele vai reclamar que a inferência de tipo é óvia nos exemplos abaixo

// Tipos básicos (aqui ocorre a inferência de tipos)
let nome: string = 'Thiago';
let idade: number = 38;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
// let big: bigint = 10n;

// Array
let arrayDeNumeros: Array<number> = [1, 2, 3];
let arrayDeNumeros2: number[] = [1, 2, 3];
let arrayDeString: Array<string> = ['a', 'b'];
let arrayDeString2: string[] = ['a', 'b'];

// Object
let pessoa: { nome: string, idade: number, adulto?: boolean } = {
  nome: 'Thiago',
  idade: 38
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
