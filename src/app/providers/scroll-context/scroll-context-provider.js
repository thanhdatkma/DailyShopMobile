import React, { useState } from 'react';
import type { IChildProps } from "../../interfaces/child-props.interface";
const withinLimits = (val: number, min: number, max: number): number => val;

export const ScrollContext = React.createContext({
  opacity: 0,
  maxOffset: 0,
  offset: 0,
  titleShowing: 0,
  updateOffset: (val: number) => { }
});

export const useScroller = () => React.useContext(ScrollContext);

export default function ScrollContextProvider(props: IChildProps) {
  const minOffset: number = 0;
  const maxOffset: number = 9.25;
  const [offset, setOffset] = useState(0);
  const [titleShowing, setTitleShowing] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const updateOffset = (val: number) => {
    let opacity = val * maxOffset / 1000;
    if (opacity < 0) {
      opacity = -0.01;
    } else {
      opacity = parseFloat(Number(opacity.toString()).toFixed(2));
    }
    setOffset(withinLimits(val, minOffset, maxOffset));
    setTitleShowing(val > maxOffset);
    setOpacity(withinLimits(opacity, 0, 1));
  }
  return (
    <ScrollContext.Provider value={{
      opacity: opacity,
      maxOffset: maxOffset,
      offset: offset,
      titleShowing: titleShowing,
      updateOffset: updateOffset,
    }}>
      {props.children}
    </ScrollContext.Provider>
  );
}
