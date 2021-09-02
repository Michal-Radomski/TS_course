// console.log("Hello World!");
// console.log("Hej, hej");

import {Exchanger} from "./exchanger";
import * as _ from "lodash";

function initEventListener() {
  const btn: HTMLElement | null = document.getElementById("exchange");
  const resultText: HTMLElement | null = document.getElementById("result");

  const getInputNumberValue = (id: string): number => {
    const value: HTMLElement | null = document.getElementById(id);
    if (value !== null && value instanceof HTMLInputElement) {
      console.log("Copper:", value.valueAsNumber);
      return value.valueAsNumber;
    } else {
      throw new Error("HTML element is null or wrong type");
    }
  };

  if (btn !== null) {
    if (btn instanceof HTMLButtonElement) {
      btn.addEventListener<"click">("click", (event: MouseEvent) => {
        event.preventDefault();
        event.stopPropagation();
        // console.log("hello");

        // -Pierwotna wersja
        // const exchange: Exchanger = new Exchanger(getGold(), getSilver(), getCopper());

        const exchange: Exchanger = new Exchanger(
          getInputNumberValue("gold"),
          getInputNumberValue("silver"),
          getInputNumberValue("copper")
        );
        if (resultText !== null) {
          // -Pierwotna wersja przed lodash
          // resultText.innerText = `${exchange.toCopper()}`;

          resultText.innerText = _.padStart(`${exchange.toCopper()}`, 5, `-`);
        }
      });
    } else {
      throw new Error("HTML Element for exchange is not a button");
    }
  } else {
    throw new Error("Button for exchange not found");
  }
}
initEventListener();

// -Pierwotna wersja
// function getCopper(): number {
//   const copper: HTMLElement | null = document.querySelector("#copper");
//   if (copper !== null && copper instanceof HTMLInputElement) {
//     console.log("Copper:", copper.valueAsNumber);
//     return copper.valueAsNumber;
//   } else {
//     throw new Error("HTML element is null or wrong type");
//   }
// }

// function getSilver(): number {
//   const silver: HTMLElement | null = document.querySelector("#silver");
//   if (silver !== null && silver instanceof HTMLInputElement) {
//     console.log("Silver:", silver.valueAsNumber);
//     return silver.valueAsNumber;
//   } else {
//     throw new Error("HTML element is null or wrong type");
//   }
// }

// function getGold(): number {
//   const gold: HTMLElement | null = document.querySelector("#gold");
//   if (gold !== null && gold instanceof HTMLInputElement) {
//     console.log("Gold:", gold.valueAsNumber);
//     return gold.valueAsNumber;
//   } else {
//     throw new Error("HTML element is null or wrong type");
//   }
// }
