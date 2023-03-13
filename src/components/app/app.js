import style from "./app.module.css";
import { Header } from "../header/header";
import { Field } from "../field/field";
import { useState } from "react";  
import { useEffect } from "react";
import { 
  gameWinReducer,
} from "../../services/reducers/field-reducers";
import { useDispatch, useSelector } from "react-redux";

function App() { 
  const [img, setImg] = useState(false);

  const {  emptyClosedCells } =
    useSelector((store) => store.madedField);

  const dispatch = useDispatch();

  
  useEffect(() => {
    if (emptyClosedCells === 0) {
      dispatch(gameWinReducer());
    }
  }, [emptyClosedCells]);

  const preventDefaultFunc = (e) => {
    e.preventDefault(); 
   } 
 
  return (
    <div className={style.app} onContextMenu={preventDefaultFunc}>
      <div className={style.sapper}>
        <Header img={img} />
        <Field setImg={setImg} />
      </div>
    </div>
  );
}

export default App;
