const Events = () => {

    const handleAlert = (event) => {
        window.alert("Você clicou!")

        // dados do event
        console.log(event)

    }

    // Renderizando jsx com funções
    const renderSomething = (x) => {
        if(x){
            return <h1>Retornou um h1</h1>
        }else{
            return <h2>Retornou um h2</h2>
        }
    }

    return(
        <div>
            <div>
                <button onClick={handleAlert}>Clique Aqui</button>
            </div>
            <div>
                <button onClick={ (e) => { console.log(e); window.alert("Função no Próprio Evento"); }}> Função no Evento</button>
            </div>
            <div>
                {
                    renderSomething(true)
                }
            </div>
        </div>
    )
}

export default Events;