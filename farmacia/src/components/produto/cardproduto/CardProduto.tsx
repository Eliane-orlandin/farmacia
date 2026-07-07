import { Link } from 'react-router-dom'
import type Produto from '../../../models/Produto' // Ajuste o caminho se necessário

interface CardProdutoProps {
    prod: Produto
}

function CardProduto({ prod }: CardProdutoProps) {
    return (
        <div className='border border-teal-600 flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md w-full max-w-sm'>
            
            <div>
                
                <header className="flex w-full bg-teal-800 py-3 px-6 items-center justify-between gap-4 text-white">
                    <h3 className='text-sm font-bold uppercase tracking-wider'>
                        {prod.categoria?.nome ? prod.categoria.nome : 'Sem Categoria'}
                    </h3>
                    <span className='text-xs bg-teal-600 text-white px-2 py-1 rounded-md font-semibold uppercase'>
                        {prod.laboratorio}
                    </span>
                </header>

                <div className='p-6 flex flex-col gap-3 bg-slate-50'>

                    <div className='w-full h-44 flex items-center justify-center overflow-hidden rounded-xl bg-white border border-slate-200 p-2 shadow-sm'>
                        <img 
                            src={prod.foto || 'https://i.imgur.com/v2SSTu7.png'} 
                            className='h-full object-contain' 
                            alt={prod.nome} 
                        />
                    </div>

                    <h4 className='text-2xl font-bold uppercase text-slate-800 mt-2'>{prod.nome}</h4>
                    <p className='text-sm text-slate-600 italic min-h-[40px]'>{prod.descricao}</p>

                    <div className='flex justify-between items-center mt-2 p-3 rounded-xl bg-slate-200 border-t border-slate-300'>
                        <p className='text-xl font-bold text-teal-800'>
                            {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(prod.preco)}
                        </p>
                        <p className='text-xs text-slate-700 font-bold uppercase bg-slate-300 px-2 py-1 rounded'>
                            Estoque: {prod.quantidade} un
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex text-white font-semibold">
                <Link to={`/editarproduto/${prod.id}`} className='w-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center py-3 transition-colors duration-200'>
                    <button>Editar</button>
                </Link>
                <Link to={`/deletarproduto/${prod.id}`} className='w-full bg-[#8c223b] hover:bg-[#701329] flex items-center justify-center transition-colors duration-200'>
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardProduto