import { myContainer } from "./inversify.config";
import { TYPES } from "./types";
import {Warrior, Weapon} from "./interfaces";

const ninja = myContainer.get<Warrior>(TYPES.Warrior);

console.log(ninja.fight());
console.log(ninja.sneak());

const katana = myContainer.getNamed<Weapon>(TYPES.Weapon, "japanese");
const shuriken = myContainer.getNamed<Weapon>(TYPES.Weapon, "chinese");

console.log(katana.hit());
console.log(shuriken.hit());

