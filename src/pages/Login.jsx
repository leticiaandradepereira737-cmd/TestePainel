import { useState } from "react"
import { FiLogIn, FiEye, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagemErro, setMensagemErro] = useState("");
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const navigate = useNavigate();

    // MOCK, DADOS MOCKADOS
    const EMAIL_CORRETO = "admin@loja.com";
    const SENHA_CORRETA = "1234";

    function fazerLogin(event) {
        event.preventDefault();

        console.log("E-mail informado:", email);
        console.log("Senha informada:", senha);

        if (email.trim() === "" || senha.trim() === "") {
            setMensagemErro("Preencha e-mail e senha.");
            return;
        }

        if (
            email === EMAIL_CORRETO &&
            senha === SENHA_CORRETA
        ) {
            setMensagemErro("");
            console.log("Login realizado com sucesso");

            navigate("/dashboard");
        } else {
            setMensagemErro("E-mail ou senha incorretos.");
            console.log("E-mail ou senha incorretos");
        }
    }

  return (
    <main className="login-page">
        <section className="login-card">
            <h1>AdminStore</h1>

            <p>Acesso administrativo</p>

            <form onSubmit={fazerLogin}>
                <input 
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
                />

                <div className="campo-senha">
                    <input 
                    type={mostrarSenha ? "text" : "password"}
                    placeholder="Senha"
                    value={senha}
                    onChange={(event) => {
                        setSenha(event.target.value);
                    }}
                    />

                    <button
                    type="button"
                    onClick={() => setMostrarSenha(!mostrarSenha)}
                    >
                        {mostrarSenha ? <FiEyeOff /> : <FiEye />}
                    </button>
                </div>

                {mensagemErro && (
                    <p className="mensagem-erro">{mensagemErro}</p>
                )}

                <button type="submit">
                    <FiLogIn />
                    Entrar
                </button>
            </form>

            <small>
                E-mail: admin@loja.com | Senha: 1234
            </small>
        </section>
    </main>
  );
}

export default Login;