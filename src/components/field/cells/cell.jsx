import style from "./cell.module.css";
import { useState, useEffect } from "react";
import {
  increaseCellsStateInFieldMap,
  increaseNumOfMines,
  decreaseNumOfMines,
  startPlay,
  openCellreducers,
  gameOverReduser,
  openNeighboringCells,
  gameWinReduser,
} from "../../../services/reducers/field-reducers";
import { useDispatch, useSelector } from "react-redux";
import { cellIcons, numbersForCell, minesType } from "../../../consts";
import { makeMines } from "../../../services/action/make-mines";

export const Cell = ({ cellDate }) => {
  const { play, NumOfMines, gameOver, newGameStarted, emptyCells } =
    useSelector((store) => store.madedField);

  const dispatch = useDispatch();

  const [iconNumber, setIconNumber] = useState(0);
  const [id, setId] = useState(cellDate.id);
  const [explodedMine, setExplodedMine] = useState(0);

  const startPlayFunc = () => {
    dispatch(makeMines(NumOfMines, id));
    dispatch(increaseCellsStateInFieldMap());
    dispatch(startPlay());
  };

  const onContextMenu = () => {
    if (!gameOver) {
      setIconNumber(
        iconNumber !== 2
          ? NumOfMines !== 0
            ? iconNumber + 1
            : iconNumber !== 1
            ? iconNumber + 2
            : iconNumber + 1
          : 0
      );
      if (!play) {
        startPlayFunc();
      }
      if (iconNumber === 0) {
        dispatch(decreaseNumOfMines());
      }
      if (iconNumber === 1) {
        dispatch(increaseNumOfMines());
      }
    }
  };

  const onClick = () => {
    if (!gameOver) {
      if (!play) {
        startPlayFunc();
      }
      if (iconNumber !== 1) {
        dispatch(openCellreducers(id));
      }
      if (cellDate.cellState === -1) {
        setExplodedMine(1);
        dispatch(gameOverReduser());
      }
    }
    if (!gameOver) {
      if (cellDate.cellState === 0) {
        dispatch(openNeighboringCells(id));
      }
    }
  };

  useEffect(() => {
    setIconNumber(0);
    setExplodedMine(0);
  }, [newGameStarted]);

  useEffect(() => {
    if (emptyCells === 0) {
      dispatch(gameWinReduser());
    }
  }, [emptyCells]);

  return (
    <div
      className={style.cell}
      onClick={onClick}
      onContextMenu={onContextMenu}
      style={{
        backgroundPosition: cellDate.cellOpen
          ? cellDate.cellState === -1
            ? iconNumber === 1
              ? minesType[2]
              : minesType[explodedMine]
            : numbersForCell[cellDate.cellState]
          : cellIcons[iconNumber],
      }}
    ></div>
  );
};
