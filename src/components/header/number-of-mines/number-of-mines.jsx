import style from "./number-of-mines.module.css";
import { numbersForstopwatch } from "../../../consts"; 
import { useSelector } from "react-redux";

export const NumberOfMines = () => {
  const { NumOfMines } = useSelector((store) => store.madedField);
   
  return (
    <div className={style.NumberOfMines}>
      <div
        className={style.number}
        style={{ backgroundPosition: numbersForstopwatch[Number(`${NumOfMines * 0.01 + 0.0001}`[0])] }}
      ></div>
      <div
        className={style.number}
        style={{ backgroundPosition: numbersForstopwatch[Number(`${NumOfMines * 0.01 + 0.0001}`[2])] }}
      ></div>
      <div
        className={style.number}
        style={{ backgroundPosition: numbersForstopwatch[Number(`${NumOfMines * 0.01 + 0.0001}`[3])] }}
      ></div>
    </div>
  );
};
