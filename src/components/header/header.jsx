import style from "./header.module.css";
import { Stopwatch } from "./stopwatch/stopwatch";
import { NumberOfMines } from "./number-of-mines/number-of-mines";
import { useState } from "react";
import { newGame } from "../../services/reducers/field-reducers";
import { useDispatch } from "react-redux"; 
import { useSelector } from "react-redux";
import {emoticonType} from '../../consts'

export const Header = ({ img }) => {
  
  const { gameOver, gameWin } = useSelector((store) => store.madedField);

  const dispatch = useDispatch();
  const [imgDefault, setImgDefault] = useState(emoticonType.smile);

  const newGameFunc = () => {
    dispatch(newGame());
  };
  return (
    <div className={style.header}>
      <NumberOfMines />
      <div
        onMouseDown={() => setImgDefault(emoticonType.scared)}
        onMouseUp={() => setImgDefault(emoticonType.smile)}
        className={style.smiley}
        onClick={newGameFunc}
        style={{ backgroundPosition: gameWin ? emoticonType.win : gameOver ? emoticonType.dead :  img ? img : imgDefault }}
      ></div>
      <Stopwatch />
    </div>
  );
};
