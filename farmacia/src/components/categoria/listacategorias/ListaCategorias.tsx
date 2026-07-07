import { useEffect, useState } from "react";
import type { Categoria } from "../../../models/Categoria";
import { SyncLoader } from "react-spinners";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";

function ListaCategorias() {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function buscarCategorias() {
    try {
        setIsLoading(true);
        await buscar('/categorias', setCategorias); // Adicionar esta linha
    } catch (error: any) {
        console.error("Erro ao buscar as categorias:", error);
        alert("Não foi possível carregar as categorias.");
    } finally {
        setIsLoading(false);
    }
}


    
    useEffect(() => {
        buscarCategorias();    
    }, [categorias.length]);

    return (
        <>
                {isLoading && (
                <div className="flex justify-center w-full my-8">
                    <SyncLoader
                        color="#0f766e"
                        size={32}
                    />
                </div>
            )}

            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col px-4">

                    {/* Mensagem de feedback visual caso o banco retorne vazio */}
                    {(!isLoading && categorias.length === 0) && (
                        <span className="text-3xl text-center my-8 text-slate-600 font-medium">
                            Nenhuma Categoria foi encontrada!
                        </span>
                    )}

                    {/* Grid adaptado para mapear a lista de categorias e renderizar o CardCategoria */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {
                            categorias.map((categoria) => (
                                <CardCategoria key={categoria.id} categoria={categoria}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaCategorias;