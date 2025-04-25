import React from 'react'
import { useRelatedMovie } from '../../../../hooks/useRelatedMovie';
import { Alert } from 'react-bootstrap';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from "../../../../constants/responsive"

const RelatedMovie = ({id}) => {

     const { data, isLoading, isError, error } = useRelatedMovie(id);

     if (isLoading) {
        return <h1>Loading...</h1>
      }
      if (isError) {
        return <Alert variant="danger">{error.message}</Alert>
      }
      
      console.log('ddd', data);
  return (
    <div>
      <MovieSlider title={"Related Movies"} movies={data} responsive={responsive}/>
    </div>
  )
}

export default RelatedMovie