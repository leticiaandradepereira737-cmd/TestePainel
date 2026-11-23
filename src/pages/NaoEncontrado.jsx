import { Link } from "react-router-dom";

function NaoEncontrado() {
    return (
        <main className="nao-encontrado">
            <h1>404</h1>
            <p>Página não encontrada.</p>
            <Link to="/dashboard">Voltar para o Dashboard</Link>
        </main>
    );
}

export default NaoEncontrado;