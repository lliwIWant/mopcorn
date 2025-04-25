import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchRelatedMovie=(id)=>{
    return api.get(`/movie/${id}/recommendations`)
}

export const useRelatedMovie=(id)=>{
    return useQuery({
        queryKey: ['related-movie', id],
        queryFn: ()=>fetchRelatedMovie(id),
        select: (res) => res.data.results,
        enabled: !!id,
    })
}