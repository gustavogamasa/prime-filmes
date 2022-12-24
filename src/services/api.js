// https://api.themoviedb.org/3/
//movie/now_playing?api_key=b00481838fc079014bcbea876d5dd9cb&language=pt-br

import axios from 'axios';



const api = axios.create({
    baseURL : "https://api.themoviedb.org/3/",

});

export default api;