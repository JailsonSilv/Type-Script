"use strict";
// Tipos básicos
let age = 10;
const firstName = "Jailson";
const isValid = true;
// let idk: any = 5   o idk acaba com a magia do TS 
// idk = "12"
// idk = true
const ids = [1, 2, 3, 4];
const booleans = [true, false, true, false];
const namesList = ["Silva", "Jailson", "João"];
// Tupla
const person = [10, "Jailson"];
// Lista de tuplas
const people = [
    [15, "João"],
    [23, "Ano novo"],
    [22, "Atual"],
];
// Intersections 
const productId = false;
// Enum  
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Dowm"] = 2] = "Dowm";
    Direction["Left"] = "Esquerda";
    Direction["Rigth"] = "Direita";
})(Direction || (Direction = {}));
const direction = Direction.Left;
console.log(direction);
