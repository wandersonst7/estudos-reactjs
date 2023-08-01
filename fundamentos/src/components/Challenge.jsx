const Challenge = () => {

    const n1 = 10;
    const n2 = 20;
    
    return (
        <div>
            <div>
                <p>Valores Enviados: {n1}, {n2} </p>
            </div>
            <div>
                <button onClick={ () => console.log(n1 + n2)}>Somar</button>
            </div>
        </div>
    )
}

export default Challenge;