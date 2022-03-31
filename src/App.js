import "./App.css"
import { GoogleLogo, FacebookLogo } from "phosphor-react";
import imgLogin from "./img/img-login.png"


function App() {
  return (

    <div className="card-principal">
      <div className="card-info">
        <h3 className="titulo-card-info">Faça seu login</h3>
        <div className="engloba-formulario">
          <form>
            <input
              id="email"
              name="email"
              placeholder="E-mail ou nome de usuário:"
              type="email" />
          </form>
          <form>
            <input
              id="senha"
              name="senha"
              placeholder="Senha:"
              type="senha" />
          </form>
        </div>
        <a href="#" className="link-senha">esqueceu sua senha?</a>
        <button className="btn-entrar">Entrar</button>
        <div className="agrupa-text-link">
          <hr className="linha-esquerda" />
          <p className="text-link">ou</p>
          <hr className="linha-direita" />
        </div>
        <button className="btn-google">
          <span className="icone-google">
            <GoogleLogo size={18} color="#b9b3b3" />
          </span>
          Entrar com o google
        </button>
        <button className="btn-facebook">
          <span className="icone-facebook">
          <FacebookLogo size={18} color="#b9b3b3"/>
          </span>
          Entrar com o facebook
        </button>
      </div>
      <img src={imgLogin} className="img-login"/>
    </div>

  );
}

export default App;
