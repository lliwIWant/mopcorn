import React from 'react'
import './Detail.style.css'
import { Alert } from 'react-bootstrap';
import { useMovieDetail }from '../../../../hooks/useMovieDetail'

const Detail = ({movie}) => {
    const { data, isLoading, isError, error } = useMovieDetail(movie);

    console.log(data);
  
    if (isLoading) {
      return <h1>Loading...</h1>
    }
    if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
    }
    // console.log(movie.genres[0].name)
  return (
    <div className='detail-wrap'>
        <div style={{
            backgroundImage: `url(${
                data.poster_path
                ? 'https://image.tmdb.org/t/p/w1280' + data.poster_path
                : 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
            })`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            }}
            className='detail-poster'
        ></div>
        <div className='contents'>
            <div className='genres'>
                {data.genres.map((genre, index) => (
                    <div key={index} className='genre'>
                    {genre.name}
                    </div>
                ))}
            </div>
            <div className='movie-title-name'>{data.title}</div>
            <div className='movie-tagline'>{data.tagline}</div>

            <div className='evaluation-area'>
                <img className='imdb-detail' src="data:image/png;base64,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" alt="" />
                <div style={{
                    fontSize: '20px',
                    marginRight:"10px"
                    }}>{data.vote_average}</div>
                <img className='popular' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqlVzj6dcipwSnkR041ZBKkCqABf4PoIYBHQ&s" alt="" />
                <div style={{
                    fontSize: '20px',
                    marginRight:"10px"
                    }}>{data.vote_average}</div>
                <div className={`age ${data.adult?('upper'):('under')}`}>{data.adult?"over18":"under18"}</div>
            </div>
            <hr/>
            <div className='movie-info'>
                {data.overview}
            </div>
            <hr/>

            <div className='mark-line'><div>Budget</div>$ {data.budget}</div>
            <div className='mark-line'><div>Revenue</div>$ {data.revenue}</div>
            <div className='mark-line'><div>Release Date</div>{data.release_date}</div>
            <div className='mark-line'><div>Run time</div>{data.runtime}분</div>

        </div>
    </div>
  )
}

export default Detail