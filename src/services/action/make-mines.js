import {
  putTheBombInCell,
  increaseCellsStateInFieldMap,
} from "../reducers/field-reducers";

export const makeMines = (NumOfMines, idOfCell) => (dispatch) => {
  let Mines = [];

  while (Mines.length !== NumOfMines) {
    let idCellForMine = Math.floor(Math.random() * 256);

    if (idCellForMine !== idOfCell) {
      Mines.push(idCellForMine);
    } 
    if (Mines.length === NumOfMines) {
      Mines = [...new Set(Mines)];
      Mines = Mines.sort();
    }
  } 
  for (let id = 0; id < Mines.length; id++) { 
    dispatch(putTheBombInCell(Mines[id]));
  }
  dispatch(increaseCellsStateInFieldMap());
};
