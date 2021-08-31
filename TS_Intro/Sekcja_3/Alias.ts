{
  // Aliasy
  type d6 = 1 | 2 | 3 | 4 | 5 | 6;
  let dice: d6 = 5;
  let dice2: d6 = 3;

  type basicType = number | string | boolean;
  let someArray: basicType[] = [];
  type d8 = d6 | 7 | 8;
  let dice3: d8 = 8;

  type extendedType = boolean | "Yes" | "No" | 0 | 1;
  let YesOrNo: extendedType = 1;
}
