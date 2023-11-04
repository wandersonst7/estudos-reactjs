import { useContext } from "react";
import {CounterContext} from "../context/CounterContext";

export const useCounterContext = () => {
    const context = useContext(CounterContext)

    /* 
        Isso é só para desenvolvedores testarem
        se o context está correto.
    */
    if(!context) {
        console.log("Contexto não encontrado!")
    }

    return context
}

export default useCounterContext;

