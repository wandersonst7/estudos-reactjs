import { url } from "../config/api";
import { IProdutoRequest } from "../interfaces/IProduto";
import { IProdutoResponse } from "../interfaces/IProduto";

export const getProdutos = async (signal: AbortSignal): Promise<IProdutoResponse[]> => {
    try {
        const response = await fetch(url + "/produtos/", {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }, 
            signal: signal
        })

        if(!response.ok){
            throw new Error("Erro na requisição");
        }

        const responseJson = await response.json();
        return responseJson;

    } catch (error) {
        throw error;
    }
}
