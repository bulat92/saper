import style from "./app.module.css";
import { Header } from "../header/header";
import { Field } from "../field/field";
import { useState } from "react";  

function App() { 
  const [img, setImg] = useState(false);

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
