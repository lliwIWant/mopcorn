import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import { Alert } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMoviesSilde.style.css'
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }

const PopularMoviesSilde = () => {

  const {data, isLoading, isError, error} = usePopularMoviesQuery();
console.log(data)
  if(isLoading){
    return <h1>Loading...</h1>
  }
  if(isError){
    return <Alert variant="danger">{error.message}</Alert>
  }
  return (
    <div>
        <h3>Popular Movies</h3>
        <Carousel
          infinite={true}
          centerMode={true}
          itemClass="movie-slide p-1"
          containerClass="carousel-container"
          responsive={responsive}
            >
            {data.results.map((movie, index)=>(
                <MovieCard movie={movie} key={index} />
            ))}
        </Carousel>
    </div>
  )
}

export default PopularMoviesSilde