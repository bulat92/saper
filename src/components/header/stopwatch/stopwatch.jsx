import { numbersForstopwatch } from "../../../consts";
import style from "./stopwatch.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Stopwatch = () => {
  const { play, startTime, gameOver } = useSelector(
    (store) => store.madedField
  );

  const [number, setNumber] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [timeSec, setTimeSec] = useState(0); 

  let timerId;

  useEffect(() => {
    if (play) {
      let timeSecStr = "";
      timerId = setTimeout(() => {
        setTimeSec(
          999 !== timeSec && play
            ? Math.floor((Date.now() - startTime) / 1000)
            : 0
        );
        timeSecStr = `${timeSec * 0.01 + 0.0001}`;
        setNumber(Number(timeSecStr[0]));
        setNumberTwo(Number(timeSecStr[2]));
        setNumberThree(Number(timeSecStr[3]));
      }, 1000);
    }
    if (!play) {
      clearInterval(timerId);
      console.log("удаление таймера");
    }
    return () => {
      if (!play) {
        clearInterval(timerId);
        console.log("удаление таймера");
      }
    };
  });
  useEffect(() => {
    setTimeSec(0);
    setNumber(0);
    setNumberTwo(0);
    setNumberThree(0);
    
  }, [startTime]);

  return (
    <div className={style.stopwatch}>
      <div
        className={style.number}
        style={{
          backgroundPosition: startTime === 0 ? numbersForstopwatch[0] : numbersForstopwatch[number],
        }}
      ></div>
      <div
        className={style.number}
        style={{
          backgroundPosition: startTime === 0 ? numbersForstopwatch[0] : numbersForstopwatch[numberTwo],
        }}
      ></div>
      <div
        className={style.number}
        style={{
          backgroundPosition: startTime === 0 ? numbersForstopwatch[0] : numbersForstopwatch[numberThree],
        }}
      ></div>
    </div>
  );
};
