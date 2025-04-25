import React, {useState, useEffect} from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert';
import "./Banner.style.css";
import Modal from '../../../../common/Modal/Modal';

const Banner = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();
    console.log("banner", data);
      const [modal, setModal] =useState(false);
      const openModal = ()=>{
        console.log("open")
        setModal(true);
      }
    if(isLoading){
        <h1>Loading...</h1>
    }
    if(isError){
        <Alert variant='danger'>{error.message}</Alert>
    }
   
    // useEffect(() => {
    // setInterval(() => {
    //     setIndex(prev => (prev + 1) % data?.results?.length);
    // }, 10000);

    // }, []);
  return (
    <div style={{
        backgroundImage: "url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.results[0].poster_path}`+")",
     } }
        className='banner'
     >
         <div className='text-warning banner-text-area '>
            <h1 className="fade-in-up"
                style={{fontFamily:"Bebas Neue"}}> {data?.results[0].title}</h1>

            <p className="fade-in-up"
                style={{fontFamily:"Oswald",
                            fontWeight:'343',
                            animationDelay: '0.3s',
                            animationFillMode: 'forwards'
            }}>{data?.results[0].overview}</p>
            <button className='video-btn' onClick={openModal}>▶재생</button>
         </div>
         {modal&&(
          <Modal setModal={setModal} id={data?.results[0].id} />
        )}
     </div>
  )
}

export default Banner