import { atom } from "jotai";

export const countAtom = atom(0);

export const countryAtom = atom("Japan");

export const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);

export const mangaAtom = atom({
  DragonBall: 1984,
  OnePiece: 1997,
  Naruto: {
    name: "naruto",
    city: "seoul",
  },
});
