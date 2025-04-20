import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchpopularMoview=()=>{
    return api.get(`/movie/top_rated`)
}

export const useTopReatedQuery=()=>{
    return useQuery({
        queryKey: ['movie-top_rated'],
        queryFn: fetchpopularMoview,
        select:(result)=>result.data,
    })
}