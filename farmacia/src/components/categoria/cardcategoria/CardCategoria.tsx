import { Link } from 'react-router-dom'
import type { Categoria} from '../../../models/Categoria'

interface CardCategoriaProps {
    categoria: Categoria;
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border border-teal-600 flex flex-col rounded-2xl overflow-hidden justify-between bg-white shadow-md w-full max-w-sm'>
            
            <header className='py-2 px-6 bg-teal-800 text-white font-bold text-2xl'>
                Categoria
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
            
            <p className='p-8 text-3xl bg-slate-100 text-slate-800 h-full min-h-[120px] text-xl'>
                {categoria.descricao}
            </p>
            <div className="flex text-white font-semibold">
                <Link to={`/editarcategoria/${categoria.id}`} 
                    className='w-full bg-teal-600 hover:bg-teal-700 flex items-center justify-center py-2 transition-colors duration-200'>
                    <button>Editar</button>
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} 
                    className='w-full bg-[#8c223b] hover:bg-[#701329] flex items-center justify-center transition-colors duration-200'>
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria