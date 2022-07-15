import React from "react";
import Button from "@mui/material/Button";
import s from "./Counter.module.css";
import {
  incrementCounterReducerAC,
  resetCounterReducerAC,
} from "./store/counter-reducer";
import { useDispatch, useSelector } from "react-redux";
import { AppRootStateType } from "./store/redux-store";

type counterPropsType = {
  min: number;
  max: number;
};

const Counter = (props: counterPropsType) => {
  const count = useSelector<AppRootStateType>(
    (state) => state.counterState.count
  ) as number;
  const dispatch = useDispatch();

  function increment() {
    const action = incrementCounterReducerAC();
    dispatch(action);
  }

  function reset() {
    const action = resetCounterReducerAC();
    dispatch(action);
  }

  return (
    <div className={s.counter}>
      <div className={s.display}>{count}</div>
      <div className={s.controlsPanel}>
        <Button
          variant="contained"
          onClick={increment}
          disabled={count >= props.max}
        >
          Inc
        </Button>
        <Button
          variant="contained"
          onClick={reset}
          disabled={count === props.min}
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default Counter;
