import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
import './style.css';



function Filme() {

    const { id } = useParams();
    const [filme, setFilme] = useState([{}]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        async function loadFilme() {
            await api.get(`movie/${ id }`, {
                params: {
                    api_key: "b00481838fc079014bcbea876d5dd9cb",
                    language: "pt-br",
                    page: 1,
                }
            }).then((response) => {

                setFilme(response.data);
                setLoading(false);

            }).catch(() => {
                console.log("Filme não existe");
                toast.error("Filme não existe!");
                navigate("/", { replace: true });
            })


            //console.log(response);

        }

        loadFilme();
        return () => {
            console.log("Componente desmontado");
        }

    }, [navigate, id]);



    function salvarFilme() {


        const minhaLista = localStorage.getItem("@primeflix");

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const hasFilme = filmesSalvos.some((filmesSalvo) => filmesSalvo.id == filme.id);

        if (hasFilme) {
            toast.warn(`O filme ${ filme.title } já foi salvo`);
            return;
        } else filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success(`Filme ${ filme.title } salvo com sucesso!`);

    }


    if (loading) {
        return (
            <div className="loading">
                <h2>Carregando...</h2>
            </div>
        );
    } else

        return (
            <div className="filme-info">
                <h1>{filme.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${ filme.backdrop_path }`} alt={filme.title} />
                <h3>Sinpse</h3>
                <span>{filme.overview}</span>
                <strong>Avaliação: {filme.vote_average} / 10</strong>

                <div className="area-buttons">
                    <button onClick={salvarFilme}>Salvar</button>
                    <button><a target="blank" rel="external" href={`https://www.youtube.com/results?search_query=${ filme.title } trailer`}>Trailer</a></button>
                </div>

            </div>
        );
}

export default Filme;