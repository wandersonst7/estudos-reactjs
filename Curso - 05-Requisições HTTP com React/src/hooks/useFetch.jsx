import { useState, useEffect } from "react";


// 4 - custom hook
export const useFetch = (url) => {
    const [data, setData] = useState(null);

    // 5 - refatorando POST
    const [config, setConfig] = useState(null);
    const [method, setMethod] = useState(null);
    const [callFetch, setCallFetch] = useState(false);
    const [id, setId] = useState(null);

    // 6 - loading
    const [loading, setLoading] = useState(false);

    // 7 - tratando erros
    const [error, setError ] = useState(null);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)

            });
        }else if(method === "DELETE"){
            setConfig({
                method
            })
            
        }else{

        }

        setId(data)
        setMethod(method)
    }

    //  1 - resgatando dados com custom hook
    useEffect(() => {

        (async () => {
            setLoading(true)

        try {
            const res = await fetch(url);
            const json = await res.json();
            setData(json)
        } catch (error) {
            setError("Houve um erro ao carregar os dados")
        }


            setLoading(false)
        })()

    },[url, callFetch])

    // 5 - refatorando POST
    useEffect( () => {

        let json;

        const httpRequest = async () => {
            if(method === "POST"){
                let fetchOptions = [url, config]
                const res = await fetch(...fetchOptions)
                json = await res.json();
                // o detalhe aqui é o seguinte:
                /* 
                    * Quando eu passo o JSON para o setCallFetch,
                      a intenção é apenas mudar o valor dele a cada inserção.
                      isso para disparar o useEffect que está resgatando os dados.
                      SE EU NÃO FIZER ISSO, vou ter que recarregar a página sempre!
                      E SE EU COLOCAR O "setCallFetch" para receber "true" após cada
                      inserção, ele não vai mudar depois da primeira inserção, daí caimos
                      no mesmo problema...

                      * Mas ai você pode pensar: "tá, mas se eu mandar 2 cadastros iguais?"
                      eles vão ser jsons diferentes pois mesmo que o nome, preço sejam iguais,
                      a "id" deles vai mudar, ocasionando novamente numa modificação do callFetch
                      e disparando o useEffect
                */
                setCallFetch(json)
            }else if(method === "DELETE"){
                let fetchOptions = [url+`/${id}`, config]
                console.log(fetchOptions)
                const res = await fetch(...fetchOptions)
                json = await res.json();
                setCallFetch(json)
            }else{

            }
        }

        httpRequest();


    }, [config, method, url, id])

  return { data, httpConfig, loading, error }
}