import { useContext } from "react";
import { AppContext } from "../App";



const Context = () => {


    const details = useContext(AppContext);

  return (
    <div>
        <h1>Context</h1>
        { details && (
            <div>
                <h2>Linguagem: { details.language }</h2>
                <h4>Framework: { details.framework }</h4>
                <p>Projetos: { details.projects }</p>
            </div>
        )}
    </div>
  )
}

export default Context