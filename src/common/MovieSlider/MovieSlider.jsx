import React from 'react'
import "./MovieSlider.style.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';
import { isMobile } from 'react-device-detect';


const MovieSlider = ({title, movies, responsive}) => {
  return (
    <div>
        <h3 className='slide-title'>{title}</h3>
        <Carousel
          infinite={true}
          centerMode={!isMobile}
          itemClass="movie-slider p-1"
          containerClass="carousel-container"
          responsive={responsive}
            >
            {movies.map((movie, index)=>(
                <MovieCard movie={movie} key={index} />
            ))}
        </Carousel>
    </div>
  )
}

export default MovieSlider