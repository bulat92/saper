import style from "./cell.module.css";
import { useState, useEffect } from "react";
import { 
  increaseNumOfMines,
  decreaseNumOfMines,
  startPlay,
  openCellreducers,
  gameOverReducer,  
} from "../../../services/reducers/field-reducers";
import { useDispatch, useSelector } from "react-redux";
import { cellIcons, numbersForCell, minesType } from "../../../consts";
import { makeMines } from "../../../services/action/make-mines";

export const Cell = ({ cellDate }) => {
  const { play, NumOfMines, gameOver, newGameStarted } =
    useSelector((store) => store.madedField);

  const dispatch = useDispatch();

  const [iconNumber, setIconNumber] = useState(0);
  const [id, setId] = useState(cellDate.id);
  const [explodedMine, setExplodedMine] = useState(0);

  const startPlayFunc = () => {
    dispatch(makeMines(40, id)); 
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
        dispatch(gameOverReducer());
      }
    } 
  };

  useEffect(() => { 
    if (iconNumber === 1) {
       
      dispatch(increaseNumOfMines());
    }
  }, [cellDate.cellOpen]);

  useEffect(() => {
    setIconNumber(0);
    setExplodedMine(0);
  }, [newGameStarted]);
 
  return (
    <div
      className={style.cell}
      onClick={onClick}
      onContextMenu={onContextMenu}
      style={{
        backgroundPosition: numbersForCell[5]}}
    ></div>
  );
};
