import { numbersForstopwatch } from "../../../consts";
import style from "./stopwatch.module.css";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export const Stopwatch = () => {
  const { play, startTime, newGameStarted } = useSelector((store) => store.madedField);

  const [number, setNumber] = useState(0);
  const [numberTwo, setNumberTwo] = useState(0);
  const [numberThree, setNumberThree] = useState(0);
  const [timeSec, setTimeSec] = useState(0);

  let timerId;

  useEffect(() => {
    if (play) {
      let timeSecStr = "";
      timerId = setInterval(() => {
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
    }
    return () => {
      clearInterval(timerId);
    };
  });

  return (
    <div className={style.stopwatch}>
      <div
        className={style.number}
        style={{
          backgroundPosition: play
            ? numbersForstopwatch[number]
            : numbersForstopwatch[0],
        }}
      ></div>
      <div
        className={style.number}
        style={{
          backgroundPosition: play
            ? numbersForstopwatch[numberTwo]
            : numbersForstopwatch[0],
        }}
      ></div>
      <div
        className={style.number}
        style={{
          backgroundPosition: play
            ? numbersForstopwatch[numberThree]
            : numbersForstopwatch[0],
        }}
      ></div>
    </div>
  );
};
