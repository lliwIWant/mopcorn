import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchpopularMoview=()=>{
    return api.get(`/movie/popular`)
}

export const usePopularMoviesQuery=()=>{
    return useQuery({
        queryKey: ['movie-popular'],
        queryFn: fetchpopularMoview,
        select:(result)=>result.data,
    })
}