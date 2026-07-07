import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type { Categoria } from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { SyncLoader } from "react-spinners"

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const navigate = useNavigate()
    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
        } catch (error) {
            console.error("Erro ao buscar categoria", error)
            alert("Erro ao encontrar a categoria.")
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categoria")
    }

    async function deletarCategoria() {
        setIsLoading(true)
        try {
            await deletar(`/categorias/${id}`)
            alert("Categoria apagada com sucesso!")
        } catch (error) {
            console.error("Erro ao deletar categoria", error)
            alert("Erro ao apagar a categoria.")
        } finally {
            setIsLoading(false)
            retornar()
        }
    }

    return (
        <div className='container w-1/3 mx-auto my-8'>
            <h1 className='text-4xl text-center my-4 font-bold text-slate-700'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4 text-slate-500'>
                Você tem certeza de que deseja apagar a categoria listada abaixo?
            </p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between shadow-md bg-white'>
                <header className='py-2 px-6 bg-teal-700 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <div className="p-8 bg-slate-50 text-slate-700">
                    <p className='text-3xl font-medium'>{categoria.nome}</p>
                </div>
                
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-[#8c223b] hover:bg-[#701329] w-full py-2 font-semibold transition-colors'
                        onClick={retornar}
                    >
                        Não
                    </button>
                    <button 
                        className='w-full text-slate-100 bg-teal-500 hover:bg-teal-700 flex items-center justify-center py-2 font-semibold transition-colors'
                        onClick={deletarCategoria}
                        disabled={isLoading}
                    >
                        {isLoading ? <SyncLoader color="#fff" size={8} /> : <span>Sim</span>}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria