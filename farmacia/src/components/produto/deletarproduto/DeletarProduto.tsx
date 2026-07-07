import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Produto from "../../../models/Produto" // Ajuste o caminho se necessário
import { buscar, deletar } from "../../../services/Service"
import { SyncLoader } from "react-spinners"
import { ToastAlerta } from "../../../utils/ToastAlerta"

function DeletarProduto() {
    const [produto, setProduto] = useState<Produto>({} as Produto)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto)
        } catch (error) {
            console.error("Erro ao buscar produto", error)
            ToastAlerta("Erro ao encontrar o produto.", "erro")
            retornar()
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/produtos")
    }

    async function deletarProduto() {
        setIsLoading(true)
        try {
            await deletar(`/produtos/${id}`)
            ToastAlerta("Produto apagado com sucesso!", "sucesso")
        } catch (error) {
            console.error("Erro ao deletar produto", error)
            ToastAlerta("Erro ao apagar o produto.", "erro")
        } finally {
            setIsLoading(false)
            retornar()
        }
    }

    return (
        <div className='container w-11/12 md:w-1/3 mx-auto my-8'>
            <h1 className='text-4xl text-center my-4 font-bold text-teal-900'>Deletar Produto</h1>
            <p className='text-center font-semibold mb-4 text-slate-500'>
                Você tem certeza de que deseja apagar o produto listado abaixo?
            </p>

            <div className='border border-teal-600 flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white'>

                <header className='py-3 px-6 bg-teal-800 text-white font-bold text-xl uppercase tracking-wider flex justify-between items-center'>
                    <span>Produto</span>
                    <span className='text-xs bg-teal-600 px-2 py-1 rounded font-semibold'>
                        {produto.laboratorio}
                    </span>
                </header>

                <div className="p-8 bg-slate-50 text-slate-700 flex flex-col gap-2">
                    <p className='text-3xl font-bold uppercase text-slate-800'>{produto.nome}</p>
                    <p className='text-sm text-slate-500 italic'>{produto.descricao}</p>
                    {produto.preco && (
                        <p className='text-lg font-semibold text-teal-800 mt-2'>
                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(produto.preco)}
                        </p>
                    )}
                </div>

                <div className="flex font-semibold">
                    <button
                        className='text-slate-100 bg-[#8c223b] hover:bg-[#701329] w-full py-3 transition-colors duration-200'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button
                        className='w-full text-slate-100 bg-teal-600 hover:bg-teal-700 flex items-center justify-center py-3 transition-colors duration-200'
                        onClick={deletarProduto}
                        disabled={isLoading}
                    >
                        {isLoading ? <SyncLoader color="#fff" size={8} /> : <span>Sim</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarProduto