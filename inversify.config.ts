// file inversify.config.ts

import { Container } from "inversify";
import { TYPES } from "./types";
import { Warrior, Weapon, ThrowableWeapon } from "./interfaces";
import {Ninja, Katana, Shuriken, Nunchaku} from "./entities";

const myContainer = new Container();
myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
// Error: Ambiguous match found for serviceIdentifier: Symbol(Weapon)
// myContainer.bind<Weapon>(TYPES.Weapon).to(Katana2);
myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

// myContainer.bind<Weapon>("Weapon").to(Nunchaku).whenTargetNamed("chinese");
// myContainer.bind<Weapon>("Weapon").to(Katana).whenTargetNamed("japanese");

export { myContainer };

let container = new Container({ defaultScope: "Singleton" });
