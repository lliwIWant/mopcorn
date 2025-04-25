import React from 'react'
import { useParams } from 'react-router'
import MovieBanner from './component/MovieBanner/MovieBanner';
import Detail from './component/Detail/Detail';
import RelatedMovie from './component/RelatedMovie/RelatedMovie';
import '../MovieDetail/MovieDetail.style.css'
import Reviews from './component/Reviews/Reviews';

const MovieDetail = () => {

  const {id} = useParams();

  return (
    <div className='movie-detail-area'>
      <MovieBanner id={id}/>
      <Detail movie={id}/>
      <RelatedMovie id={id}/>
      <Reviews id={id}/>
    </div>
  )
}

export default MovieDetail