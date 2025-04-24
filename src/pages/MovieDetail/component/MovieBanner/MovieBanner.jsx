import React from 'react'

const MovieBanner = ({data}) => {
  return (
    <div style={{
        backgroundImage: "url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.poster_path}`+")",
     } }
        className='banner'
     >
         <div className='text-warning banner-text-area '>
            <h1 className="fade-in-up"
                style={{fontFamily:"Bebas Neue"}}> {data?.original_title}</h1>

            <p className="fade-in-up"
                style={{fontFamily:"Oswald",
                            fontWeight:'343',
                            animationDelay: '0.3s',
                            animationFillMode: 'forwards'
            }}>{data?.overview}</p>
         </div>
    </div>
  )
}

export default MovieBanner