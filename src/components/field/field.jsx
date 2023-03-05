import style from "./field.module.css";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { Cell } from "./cells/cell";
import { emoticonType } from '../../consts'

export const Field = ({ setImg }) => {
  const { fieldMap, gameOver } = useSelector((store) => store.madedField);

  const rows = useMemo(() => {
    let rowArr = [];

    for (let r = 0; r < fieldMap.length; r++) {
      let cellsR = [];
      for (let c = 0; c < fieldMap.length; c++) {
        cellsR.push(<Cell key={fieldMap[r][c].id} cellDate={fieldMap[r][c]} />);
      }
      rowArr.push(cellsR);
    }
    return rowArr;
  }, [fieldMap]);

  const onMouseDown = () => {
    if (!gameOver) setImg(emoticonType.scared);
  };
  const onMouseUp = () => {
    if (!gameOver) setImg(false);
  };

  return (
    <div
      className={style.field}
      onMouseDown={() => onMouseDown()}
      onMouseUp={() => onMouseUp()}
    >
      {rows.map((row, index) => (
        <div key={index}>{row}</div>
      ))}
    </div>
  );
};
