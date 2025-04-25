import { useQuery } from "@tanstack/react-query";
import api from '../utils/api';

const fetchRelatedMovie = ({ page, sort, genreId, keyword }) => {
    return api.get(`/discover/movie`, {
        params: {
            page,
            sort_by: sort,
            with_genres: genreId,
            with_keywords: keyword, 
        }
    });
}

export const useDiscoverMovies = ({ page, sort, genreId, keyword }) => {
    return useQuery({
        queryKey: ['discover-movies', page, sort, genreId, keyword],
        queryFn: () => fetchRelatedMovie({ page, sort, genreId, keyword }),  // API 호출
        select: (res) => res.data,  
    });
}