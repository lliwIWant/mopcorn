import React from 'react'
import { useParams } from 'react-router'
import { useMovieDetail } from '../../hooks/useMovieDetail';
import { Alert } from 'react-bootstrap';
import MovieBanner from './component/MovieBanner/MovieBanner';
import Detail from './component/Detail/Detail';
const MovieDetail = () => {

  const {id} = useParams();
  const { data, isLoading, isError, error } = useMovieDetail(id);

  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }

  return (
    <div>
      <MovieBanner data={data}/>
      <Detail movie={data}/>
    </div>
  )
}

export default MovieDetail