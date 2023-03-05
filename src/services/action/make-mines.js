import { putTheBombInCell} from "../reducers/field-reducers";

export const makeMines = (NumOfMines, idOfCell) => (dispatch) => {
  let Mines = [];

  for (let m = 0; m < NumOfMines; m++) {
    let idCellForMine = Math.floor(Math.random() * 256);

    if (idCellForMine === idOfCell) {
      
      m = m - 1;
      
      continue;
    }

    Mines.push(idCellForMine);
  }
  for (let id = 0; id < Mines.length; id++) {
    dispatch(putTheBombInCell(Mines[id])); 
  } 
};
