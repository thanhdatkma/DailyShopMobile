import React, { useEffect, useState } from "react";
import type { IChildProps } from "../../interfaces/child-props.interface";
import { ScrollContext } from "../scroll-context/scroll-context-provider";

export const HeaderActionContext = React.createContext({
  dataItem: {},
  updateData: (val) => { }
});

export const useActionHeader = () => React.useContext(HeaderActionContext);
export default function HeaderActionContextProvider(props: IChildProps) {
  const [dataItem, setDataItem] = useState({});
  const updateData = (val) => {
    setDataItem({...dataItem, ...val});
    console.log(dataItem)
  }
  // useEffect(() => {
  //   return updateData
  // }, [updateData]);
  return (
    <HeaderActionContext.Provider value={{
      dataItem: dataItem,
      updateData: updateData
    }}>
      {props.children}
    </HeaderActionContext.Provider>
  );
}
