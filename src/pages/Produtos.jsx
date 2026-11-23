import { useState } from "react";
import {
    FiArrowLeft,
    FiPlus,
    FiEdit2,
    FiTrash2,
    FiSave,
    FiX,
    FiSearch
} from "react-icons/fi";
import { Link } from "react-router-dom";

function Produtos({ produtos, setProdutos }) {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const [categoria, setCategoria] = useState("");
    const [editandoId, setEditandoId] = useState(null);
    const [mensagemErro, setMensagemErro] = useState("");
    const [busca, setBusca] = useState("");

    function limparCampos() {
        setNome("");
        setPreco("");
        setCategoria("");
        setEditandoId(null);
        setMensagemErro("");
    }

    function salvarProduto(event) {
        event.preventDefault();

        if (nome.trim() === "") {
            setMensagemErro("Preencha o nome do produto.");
            return;
        }

        if (categoria.trim() === "") {
            setMensagemErro("Preencha a categoria do produto.");
            return;
        }

        if (preco === "" || Number(preco) <= 0) {
            setMensagemErro("Informe um preço maior que zero.");
            return;
        }

        setMensagemErro("");

        if (editandoId !== null) {
            const produtosAtualizados = produtos.map((produto) => {
                if (produto.id === editandoId) {
                    return {
                        ...produto,
                        nome: nome,
                        preco: Number(preco),
                        categoria: categoria,
                    };
                }
                return produto;
            });

            setProdutos(produtosAtualizados);
            limparCampos();
            return;
        }

        const novoProduto = {
            id: Date.now(),
            nome: nome,
            preco: Number(preco),
            categoria: categoria,
        };

        setProdutos([...produtos, novoProduto]);
        limparCampos();
    }

    function excluirProduto(id) {
        const produtosAtualizados = produtos.filter((produto) => produto.id !== id);
        setProdutos(produtosAtualizados);
    }

    function iniciarEdicao(produto) {
        setEditandoId(produto.id);
        setNome(produto.nome);
        setPreco(produto.preco);
        setCategoria(produto.categoria);
        setMensagemErro("");
    }

    function cancelarEdicao() {
        limparCampos();
    }

    const produtosFiltrados = produtos.filter((produto) =>
        produto.nome.toLowerCase().includes(busca.toLowerCase())
    );

  return (
    <main className="pagina-produto">
        <Link 
        className="voltar"
        to="/dashboard">
            <FiArrowLeft />
            Voltar
        </Link>

        <h1>Produtos</h1>

        <form onSubmit={salvarProduto} className="form-produto">
            <input
                type="text"
                placeholder="Nome do produto"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
            />

            <input
                type="number"
                step="0.01"
                placeholder="Preço"
                value={preco}
                onChange={(event) => setPreco(event.target.value)}
            />

            <input
                type="text"
                placeholder="Categoria"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
            />

            {mensagemErro && (
                <p className="mensagem-erro">{mensagemErro}</p>
            )}

            <div className="acoes-form">
                <button type="submit">
                    {editandoId !== null ? (
                        <>
                            <FiSave />
                            Salvar Alterações
                        </>
                    ) : (
                        <>
                            <FiPlus />
                            Adicionar Produto
                        </>
                    )}
                </button>

                {editandoId !== null && (
                    <button type="button" onClick={cancelarEdicao}>
                        <FiX />
                        Cancelar
                    </button>
                )}
            </div>
        </form>

        <div className="barra-busca">
            <FiSearch />
            <input
                type="text"
                placeholder="Buscar produto pelo nome"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
            />
        </div>

        <section className="produtos">
            {produtosFiltrados.length === 0 ? (
                <p className="lista-vazia">Nenhum produto cadastrado</p>
            ) : (
                produtosFiltrados.map((produto) => (
                    <article key={produto.id}>
                        <h2>{produto.nome}</h2>

                        {produto.categoria && (
                            <p>Categoria: {produto.categoria}</p>
                        )}

                        <p>
                            R$ {Number(produto.preco).toFixed(2)}
                        </p>

                        <div className="acoes-produto">
                            <button
                                type="button"
                                onClick={() => iniciarEdicao(produto)}
                            >
                                <FiEdit2 />
                                Editar
                            </button>

                            <button
                                type="button"
                                onClick={() => excluirProduto(produto.id)}
                            >
                                <FiTrash2 />
                                Excluir
                            </button>
                        </div>
                    </article>
                ))
            )}
        </section>
    </main>
  );
}

export default Produtos;