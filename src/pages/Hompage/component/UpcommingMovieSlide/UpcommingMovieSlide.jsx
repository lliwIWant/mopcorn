import React from 'react'
import { useUpcommingMoviesQuery } from '../../../../hooks/useUpcommingMovies';
import { Alert } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from "../../../../constants/responsive.js"

const UpcommingMovieSlide = () => {

    
    const {data, isLoading, isError, error} = useUpcommingMoviesQuery();
    if(isLoading){
      return <h1>Loading...</h1>
    }
    if(isError){
      return <Alert variant="danger">{error.message}</Alert>
    }
  return (
    <div>
    <MovieSlider title="Upcomming Movies" movies={data.results} responsive={responsive}/>
  </div>
  )
}

export default UpcommingMovieSlide