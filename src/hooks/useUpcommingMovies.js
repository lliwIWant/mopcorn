import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchpopularMoview=()=>{
    return api.get(`/movie/upcoming`)
}

export const useUpcommingMoviesQuery=()=>{
    return useQuery({
        queryKey: ['movie-upcoming'],
        queryFn: fetchpopularMoview,
        select:(result)=>result.data,
    })
}