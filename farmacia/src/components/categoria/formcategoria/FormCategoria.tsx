import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormCategoria() {
    const navigate = useNavigate();

    // Inicializa o estado com os campos vazios da Categoria
    const [categoria, setCategoria] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    });

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const { id } = useParams<{ id: string }>();

    // Busca a categoria por ID caso seja uma edição
    async function buscarPorId(id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria);
        } catch (error: any) {
            console.error("Erro ao buscar categoria por id:", error);
            alert('Categoria não encontrada.');
            retornar();
        }
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id);
        }
    }, [id]);

    // Atualiza o estado conforme o usuário digita nos inputs
    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        });
    }

    function retornar() {
        navigate("/categoria");
    }

    // Salva ou atualiza a categoria
    async function salvarCategoria(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);

        if (id !== undefined) {
            // Edição
            try {
                await atualizar(`/categorias`, categoria, setCategoria);
                alert('A Categoria foi atualizada com sucesso!');
            } catch (error: any) {
                console.error("Erro ao atualizar a categoria:", error);
                alert('Erro ao atualizar a categoria.');
            }
        } else {
            // Cadastro Novo
            try {
                await cadastrar(`/categorias`, categoria, setCategoria);
                alert('A Categoria foi cadastrada com sucesso!');
            } catch (error: any) {
                console.error("Erro ao cadastrar a categoria:", error);
                alert('Erro ao cadastrar a categoria.');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto py-8">
            <h1 className="text-4xl text-center my-8 font-bold text-teal-900">
                {id === undefined ? 'Cadastrar Categoria' : 'Editar Categoria'}
            </h1>

            <form className="w-1/2 flex flex-col gap-4 bg-white p-8 rounded-2xl border border-teal-600 shadow-md"
                onSubmit={salvarCategoria} >
                
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome" className="font-semibold text-slate-700">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Nome da categoria"
                        name='nome'
                        required
                        className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                        value={categoria.nome}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="descricao" className="font-semibold text-slate-700">Descrição da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descrição da categoria"
                        name='descricao'
                        className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                        value={categoria.descricao || ''}
                        onChange={atualizarEstado}
                    />
                </div>

                <button
                    className="rounded-lg text-white bg-teal-800 hover:bg-teal-950 w-1/2 py-2 mx-auto flex justify-center mt-4 transition duration-200 font-semibold"
                    type="submit">

                    {isLoading ?
                        <ClipLoader
                            color="#ffffff"
                            size={24}
                        /> :
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    }

                </button>
            </form>
        </div>
    );
}

export default FormCategoria;
