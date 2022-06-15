import { Priest } from "./priest";
import { Warrior } from "./warrior";
import { Mage } from "./mage";
import { Personagem } from "./personagem";

let mage: Personagem = new Mage("Angelo mage");
let warrior: Personagem = new Warrior("Angelo warrior");
let priest: Personagem = new Priest("Angelo priest");

console.log("mage :>> ", mage);
console.log("warrior :>> ", warrior);
console.log("priest :>> ", priest);