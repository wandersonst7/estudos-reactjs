// Exportação Nomeada: 
// export const FirstComponent = () => {
//     return (
//         <div>
//             <h2>Meu Primeiro Componente</h2>
//         </div>
//     )
// }

import MyComponent from "./MyComponent";

// Exportação Padrão:
const FirstComponent = () => {
    return (
        <div>
            <h2>Meu Primeiro Componente</h2>
            <MyComponent />
        </div>
    )
}

export default FirstComponent;