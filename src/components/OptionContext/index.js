import React, { useState,createContext} from "react";

export const OptionContext = createContext();
export const OptionProvider = props =>{
    const [options,setOption] = useState([]);
return <OptionContext.Provider value ={[options,setOption]}>{props.children}</OptionContext.Provider>;
}
