import {useQuery} from "@tanstack/react-query";
import api from '../utils/api';

const fetchRelatedMovie=(id)=>{
    return api.get(`/movie/${id}/videos`)
}

export const useVideo=(id)=>{
    return useQuery({
        queryKey: ['video', id],
        queryFn: ()=>fetchRelatedMovie(id),
        select: (res) => res.data.results[0].key,
        enabled: !!id,
    })
}