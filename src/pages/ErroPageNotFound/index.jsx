import { Link } from "react-router-dom";
import "./style.css";

function ErroPageNotFound (){
    return(
        <div className="erro">
            <h1>404</h1>
            <h2>Essa página não existe</h2>
            <Link to="/">Voltar para Home</Link>
        </div>
    )
}


export default ErroPageNotFound;