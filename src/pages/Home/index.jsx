import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from '../../services/api';
import './style.css';

//movie/now_playing?api_key=b00481838fc079014bcbea876d5dd9cb&language=pt-br

function Home (){

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "b00481838fc079014bcbea876d5dd9cb",
                    language: "pt-br",
                    page: 1,
                }
                
            });
            //console.log(response.data.results.slice(0,10));
            setFilmes(response.data.results.slice(0,10));
        }

        loadFilmes();
        setLoading(false);

    },[])

   
    
    if(loading){
        return(
            <div className="loading">
                <h2>Carregando...</h2>
            </div>
        );
    } else


    return(
        
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme)=>{
                    return(
                        <article key={filme.id}>
                            <strong>{filme.title}</strong>
                            <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt="Poster"></img>
                            <Link to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    );
                })}
            </div>
            
        </div>

    );
}

export default Home;