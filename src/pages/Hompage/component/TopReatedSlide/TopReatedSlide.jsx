import React from 'react'
import { useTopReatedQuery } from '../../../../hooks/useTopReated.js';
import { Alert } from 'react-bootstrap';
import 'react-multi-carousel/lib/styles.css';
import MovieSlider from '../../../../common/MovieSlider/MovieSlider';
import {responsive} from "../../../../constants/responsive.js"

const TopReatedSlide = () => {
    const {data, isLoading, isError, error} =useTopReatedQuery();
      if(isLoading){
        return <h1>Loading...</h1>
      }
      if(isError){
        return <Alert variant="danger">{error.message}</Alert>
      }
  return (
    <div>
        <MovieSlider title="Top Rated" movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopReatedSlide