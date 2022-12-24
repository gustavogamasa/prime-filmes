import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./style.css";



function Favoritos() {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {

        const minhaLista = localStorage.getItem("@primeflix");
        setFilmes(JSON.parse(minhaLista) || [])


    }, []);



function handlerExcluirItem(id, title){
    
    let novaLista = filmes.filter((item)=>{
        if (item.id!==id) return item;
    });
    
    setFilmes(novaLista);
    localStorage.setItem("@primeflix", JSON.stringify(novaLista));
    toast.success(title+" removido!")

}


    return (

        <div className="meus-filmes">

            <h1>Meus filmes</h1>

            {filmes.length === 0 && <span>Você ainda não tem filmes salvos :(</span>}

            <ul>

                {filmes.map((filme) => {
                    return (
                        <li key={filme.id}>
                            <span>{filme.title}</span>
                            <div>
                            <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                            <button onClick={()=>{handlerExcluirItem(filme.id, filme.title)}}>Excluir</button>
                            </div>
                        </li>
                    );
                })}

            </ul>

        </div>


    );
}

export default Favoritos;