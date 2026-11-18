import { Link, useNavigate } from "react-router-dom"
import {
    FiBox,
    FiHome,
    FiLogOut
} from "react-icons/fi";

function Dashboard() {
    const navigate = useNavigate();

    function sair() {
        console.log("Saindo do painel");

        navigate("/");
    }

    return (
        <main className="dashboard">
            <nav className="menu">
                <strong>AdminStore</strong>

                <Link to="/dashboard">
                    <FiHome />
                    Dashboard
                </Link>

                <Link to="/produtos">
                    <FiBox />
                    Produtos
                </Link>

                <button onClick={sair}>
                    <FiLogOut />
                    Sair
                </button>
            </nav>

            <section className="conteudo">
                <h1>Dashboard</h1>

                <p>Bem-vindo ao painel administrativo.</p>

                <div className="resumo">
                    <article>
                        <span>Produtos</span>
                        <strong>6</strong>
                    </article>

                    <article>
                        <span>Categoria</span>
                        <strong>3</strong>
                    </article>

                    <article>
                        <span>Usuário</span>
                        <strong>Admin</strong>
                    </article>
                </div>
            </section>
        </main>
    );
}

export default Dashboard;