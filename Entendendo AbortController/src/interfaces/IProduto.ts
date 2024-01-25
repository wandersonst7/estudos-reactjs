export interface IProdutoRequest{
    nome: string
    preco: number
    descricao: string
    quantidade: number
}

export interface IProdutoResponse{
    id: number
    nome: string
    preco: number
    descricao: string
    quantidade: number
}