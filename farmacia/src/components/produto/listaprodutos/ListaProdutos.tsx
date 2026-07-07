import { useEffect, useState } from "react";
import type Produto from "../../../models/Produto"; // Ajuste o caminho se necessário
import { SyncLoader } from "react-spinners";
import { buscar } from "../../../services/Service";
import CardProduto from "../cardproduto/CardProduto";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaProdutos() {
    
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [produtos, setProdutos] = useState<Produto[]>([]);

    async function buscarProdutos() {
        try {
            setIsLoading(true);
            
            await buscar('/produtos', setProdutos); 
        } catch (error: any) {
            console.error("Erro ao buscar os produtos:", error);
            ToastAlerta("Não foi possível carregar os produtos.", "erro");
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        buscarProdutos();    
    }, [produtos.length]);

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

                    {(!isLoading && produtos.length === 0) && (
                        <span className="text-3xl text-center my-8 text-slate-600 font-medium">
                            Nenhum Produto foi encontrado!
                        </span>
                    )}
                  
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                        {
                            produtos.map((produto) => (
                                <CardProduto key={produto.id} prod={produto}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default ListaProdutos;