import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
const MovieCard = ({movie}) => {
  return (
    <div style={{
        backgroundImage:"url(https://image.tmdb.org/t/p/w1280"+`${movie.poster_path}`+")"
        }}
        className='movie-card'
        >
       
       <div className='overlay'>
        <h1>{movie.title}</h1>
            {movie.genre_ids.map((id)=>(
                <Badge bg="warning" text="dark">{id}</Badge>
            ))}
            <div>{movie.vot_average}</div>
            <div>{movie.popularity}</div>
            <div>{movie.adult?'over18':'under18'}</div>
       </div>
    </div>
  )
}

export default MovieCard