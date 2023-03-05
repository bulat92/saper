import { createSlice } from "@reduxjs/toolkit";
import { openField } from "../../consts";
import { increaseCellsStateInFieldMapFunc } from "./increase-cells-state-in-field-map-func";
import { countOpenCells } from "./count-open-cells";
import { openNeighboringCellsFunc } from "./open-neighboring-cells";

export const initialState = {
  fieldMap: openField(),
  NumOfMines: 40,
  play: false,
  gameOver: false,
  gameWin: false,
  newGameStarted: false,
  startTime: 0,
  emptyCells: 255,
};

const fieldReducers = createSlice({
  name: "fieldReducers",
  initialState,
  reducers: {
    increaseCellsStateInFieldMap: (state) => {
      state.fieldMap = increaseCellsStateInFieldMapFunc(state.fieldMap);
    },
    putTheBombInCell: (state, action) => {
      state.fieldMap = state.fieldMap.map((cellRow) =>
        cellRow.map((cell) =>
          cell.id !== action.payload ? cell : { ...cell, cellState: -1 }
        )
      );
    },
    increaseNumOfMines: (state) => {
      state.NumOfMines = state.NumOfMines + 1;
    },
    decreaseNumOfMines: (state) => {
      state.NumOfMines = state.NumOfMines !== 0 ? state.NumOfMines - 1 : 0;
    },
    startPlay: (state) => {
      state.play = true;
      state.startTime = Date.now();
    },
    newGame: (state) => {
      state.play = false;
      state.fieldMap = openField();
      state.NumOfMines = 40;
      state.gameOver = false;
      state.gameWin = false;
      state.startTime = 0;
      state.newGameStarted = !state.newGameStarted;
    },
    gameOverReduser: (state) => {
      state.play = false;
      state.gameOver = true;
      state.fieldMap = state.fieldMap.map((row) =>
        row.map((cell) =>
          cell.cellState !== -1 ? cell : { ...cell, cellOpen: true }
        )
      );
    },
    gameWinReduser: (state) => {
      state.play = false;
      state.gameOver = true;
      state.gameWin = true;
    },
    openCellreducers: (state, action) => {
      state.fieldMap = state.fieldMap.map((row) =>
        row.map((cell) =>
          cell.id !== action.payload ? cell : { ...cell, cellOpen: true }
        )
      ); 
    },
    openNeighboringCells: (state, action) => {
      state.fieldMap = openNeighboringCellsFunc(state.fieldMap, action.payload);
      state.emptyCells = countOpenCells(state.fieldMap);
    },
  },
});

export const {
  putTheBombInCell,
  increaseCellsStateInFieldMap,
  increaseNumOfMines,
  decreaseNumOfMines,
  startPlay,
  newGame,
  gameOverReduser,
  openCellreducers,
  openNeighboringCells,
  decreaseEmptyCells,
  gameWinReduser,
} = fieldReducers.actions;
export default fieldReducers.reducer;
