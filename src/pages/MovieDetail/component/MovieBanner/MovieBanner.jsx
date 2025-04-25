import React, {useState} from 'react'
import { Alert } from 'react-bootstrap';
import { useMovieDetail } from '../../../../hooks/useMovieDetail'
import Modal from '../../../../common/Modal/Modal';

const MovieBanner = ({id}) => {

  const { data, isLoading, isError, error } = useMovieDetail(id);
  const [modal, setModal] =useState(false);
  const openModal = ()=>{
    console.log("open")
    setModal(true);
  }
  console.log(data);

  if (isLoading) {
    // return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  } 

  return (
    <div style={{
        backgroundImage: "url("+`https://media.themoviedb.org/t/p/w1066_and_h600_bestv2${data?.poster_path}`+")",
     } }
        className='banner'
     >
         <div className='text-warning banner-text-area '>
            <h1 className="fade-in-up"
                style={{fontFamily:"Bebas Neue"}}> {data?.title}</h1>

            <p className="fade-in-up"
                style={{fontFamily:"Oswald",
                            fontWeight:'343',
                            animationDelay: '0.3s',
                            animationFillMode: 'forwards'
            }}>{data?.overview}</p>
            <button className='video-btn' onClick={openModal}>▶재생</button>
         </div>
        {modal&&(
          <Modal setModal={setModal} id={id} />
        )}
    </div>
  )
}

export default MovieBanner