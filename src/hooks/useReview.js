import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchRelatedMovie=(id)=>{
    return api.get(`/movie/${id}/reviews`)
}

export const useReviews=(id)=>{
    return useQuery({
        queryKey: ['review', id],
        queryFn: ()=>fetchRelatedMovie(id),
        select: (res) => res.data.results,
        enabled: !!id,
    })
}