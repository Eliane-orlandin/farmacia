import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import type { Categoria } from "../../../models/Categoria";
import type Produto from "../../../models/Produto";
import { atualizar, buscar, cadastrar } from "../../../services/Service";

function FormProduto() {
    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    const [categorias, setCategorias] = useState<Categoria[]>([]);
   
    const [categoriaSelecionada, setCategoriaSelecionada] = useState<Categoria>({
        id: 0,
        nome: '',
        descricao: ''
    });

    const [produto, setProduto] = useState<Produto>({
        id: 0,
        nome: '',
        descricao: '',
        quantidade: 0,
        laboratorio: '',
        preco: 0,
        foto: '',
        categoria: null
    });
    
    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            console.error("Erro ao carregar categorias:", error);
        }
    }

    async function buscarProdutoPorId(id: string) {
        try {
            await buscar(`/produtos/${id}`, setProduto);
        } catch (error: any) {
            console.error("Erro ao buscar produto por id:", error);
            alert('Produto não encontrado.');
            retornar();
        }
    }

    useEffect(() => {
        buscarCategorias();
        if (id !== undefined) {
            buscarProdutoPorId(id);
        }
    }, [id]);

    useEffect(() => {
        if (produto.categoria) {
            setCategoriaSelecionada(produto.categoria);
        }
    }, [produto]);

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        const { name, value, type } = e.target;
        
        setProduto({
            ...produto,
            [name]: type === 'number' ? Number(value) : value
        });
    }

    function retornar() {
        navigate("/produtos");
    }

    async function salvarProduto(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        
        const produtoParaEnviar = {
            ...produto,
            categoria: categoriaSelecionada.id === 0 ? null : categoriaSelecionada
        };

        if (id !== undefined) {

            try {
                await atualizar(`/produtos`, produtoParaEnviar, setProduto);
                alert('O Produto foi atualizado com sucesso!');
            } catch (error: any) {
                console.error("Erro ao atualizar o produto:", error);
                alert('Erro ao atualizar o produto.');
            }
        } else {

            try {
                await cadastrar(`/produtos`, produtoParaEnviar, setProduto);
                alert('O Produto foi cadastrado com sucesso!');
            } catch (error: any) {
                console.error("Erro ao cadastrar o produto:", error);
                alert('Erro ao cadastrar o produto.');
            }
        }

        setIsLoading(false);
        retornar();
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto py-8">
            <h1 className="text-4xl text-center my-8 font-bold text-teal-900">
                {id === undefined ? 'Cadastrar Produto' : 'Editar Produto'}
            </h1>

            <form className="w-2/3 md:w-1/2 flex flex-col gap-4 bg-white p-8 rounded-2xl border border-teal-600 shadow-md"
                onSubmit={salvarProduto} >
                
         
                <div className="flex flex-col gap-1">
                    <label htmlFor="nome" className="font-semibold text-slate-700">Nome do Produto</label>
                    <input
                        type="text"
                        placeholder="Ex: Amoxicilina 500mg"
                        name='nome'
                        required
                        className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                        value={produto.nome}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="descricao" className="font-semibold text-slate-700">Descrição</label>
                    <input
                        type="text"
                        placeholder="Ex: Antibiótico de amplo espectro"
                        name='descricao'
                        required
                        className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                        value={produto.descricao}
                        onChange={atualizarEstado}
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <label htmlFor="laboratorio" className="font-semibold text-slate-700">Laboratório</label>
                        <input
                            type="text"
                            placeholder="Ex: Medley"
                            name='laboratorio'
                            className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                            value={produto.laboratorio}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <div className="flex flex-col gap-1">
                        <label htmlFor="quantidade" className="font-semibold text-slate-700">Estoque (Qtde)</label>
                        <input
                            type="number"
                            placeholder="0"
                            name='quantidade'
                            min="0"
                            className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                            value={produto.quantidade}
                            onChange={atualizarEstado}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                    <div className="flex flex-col gap-1 md:col-span-1">
                        <label htmlFor="preco" className="font-semibold text-slate-700">Preço (R$)</label>
                        <input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            name='preco'
                            required
                            className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                            value={produto.preco || ''}
                            onChange={atualizarEstado}
                        />
                    </div>

                    <div className="flex flex-col gap-1 md:col-span-2">
                        <label htmlFor="foto" className="font-semibold text-slate-700">URL da Foto</label>
                        <input
                            type="text"
                            placeholder="Link da imagem do produto"
                            name='foto'
                            className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                            value={produto.foto}
                            onChange={atualizarEstado}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1">
                    <label htmlFor="categoria" className="font-semibold text-slate-700">Selecione a Categoria</label>
                    <select
                        name="categoria"
                        id="categoria"
                        required
                        className="border-2 border-teal-600 rounded-lg p-2 bg-slate-50 text-black outline-none focus:border-teal-800 transition duration-200"
                        value={categoriaSelecionada.id}
                        onChange={(e) => {
                            const idSelecionado = Number(e.target.value);
                            const cat = categorias.find(c => c.id === idSelecionado);
                            if (cat) setCategoriaSelecionada(cat);
                        }}
                    >
                        <option value="" disabled selected={categoriaSelecionada.id === 0}>
                            Escolha uma categoria...
                        </option>
                        {categorias.map((cat) => (
                            <option key={cat.id} value={cat.id}>
                                {cat.nome}
                            </option>
                        ))}
                    </select>
                </div>

                <button
                    className="rounded-lg text-white bg-teal-800 hover:bg-teal-950 w-1/2 py-2 mx-auto flex justify-center mt-4 transition duration-200 font-semibold"
                    type="submit"
                >
                    {isLoading ? (
                        <ClipLoader color="#ffffff" size={24} />
                    ) : (
                        <span>{id === undefined ? 'Cadastrar' : 'Atualizar'}</span>
                    )}
                </button>
            </form>
        </div>
    );
}

export default FormProduto;