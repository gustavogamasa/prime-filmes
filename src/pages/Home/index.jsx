import { useEffect, useState } from "react";
import api from '../../services/api'

//movie/now_playing?api_key=b00481838fc079014bcbea876d5dd9cb&language=pt-br

function Home (){

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "b00481838fc079014bcbea876d5dd9cb",
                    language: "pt-br",
                    page: 1,
                }
                
            });
            console.log(response.data.results);

        }

        loadFilmes();

    },[])

    const dataHoje = new Date();
    const dataExibir = dataHoje.getDate()+"/"+(dataHoje.getMonth()+1)+"/"+dataHoje.getFullYear();

    return(
        <div>
            HOME <br/>
            Data de hoje: { dataExibir  }
        </div>
    );
}

export default Home;