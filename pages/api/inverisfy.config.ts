import { Container } from "inversify";
import { TYPES } from "./types";
import { SupportedCurrencyDAOInterface } from "./interfaces";
import { SupportedCurrencyDAO } from "./DAO/SupportedCurrencyDAO";

const myContainer = new Container();
myContainer.bind<SupportedCurrencyDAOInterface>(TYPES.SupportedCurrencyDAOInterface).to(SupportedCurrencyDAO);
// myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
// myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };