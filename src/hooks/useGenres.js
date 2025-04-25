import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchRelatedMovie=()=>{
    return api.get(`/genre/movie/list`)
}

export const useGenres=()=>{
    return useQuery({
        queryKey: ['genres'],
        queryFn: ()=>fetchRelatedMovie(),
        select: (res) => res.data.genres,
    })
}