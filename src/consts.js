export const numbersForstopwatch = [
  "13px .5px",
  "0 .5px",
  "-14px .5px",
  "-28px .5px",
  "-42px .5px",
  "-56px .5px",
  "-70px .5px",
  "-85px .5px",
  "-98px .5px",
  "-112px .5px",
  "-126px .5px",
];
export const cellIcons = [
  "0px -51px",
  "-34px -51px",
  "-51px -51px", 
];
export const numbersForCell = [
  "-17px -51px",
  "0px -68px",
  "-17px -68px",
  "-34px -68px",
  "-51px -68px",
  "-68px -68px",
  "-85px -68px",
  "-102px -68px",
  "-119px -68px", 
];
export const emoticonType = {
  smile: "-1px -25px",
  scared: "-55px -25px",
  dead: "-109px -25px",
  win: "-80px -25px",
};
export const minesType = [
   "-85px -51px",
   "-102px -51px",
   "-119px -51px",
]
export const openField = (x = 16, y = 16) => {
  const cells = [];
  let id = 0;

  for (let i = 0; i < y; i++) {
    let row = [];
    for (let l = 0; l < x; l++) {
      row.push({ id: id, cellState: 0, cellOpen: false });
      id++;
    }
    cells.push(row);
  }

  return cells;
};
