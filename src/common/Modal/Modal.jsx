import React from 'react'
import CloseButton from 'react-bootstrap/CloseButton';
import { useVideo } from '../../hooks/useVideo';
import YouTube from 'react-youtube'

const Modal = ({ setModal, id }) => {
    const closeModal = () => {
        setModal(false);
    }
    const handleVideoAreaClick = (e) => {
        e.stopPropagation();
    }
    const opts = {
        height: '400',
        width: '780',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };

    const { data, isLoading, isError, error } = useVideo(id);

    const onReady = (event) => {
        console.log("YouTube Player is ready")
    }
    if (!data) {
        
    }
    console.log(data);

    return (
        <div>
            <div className='video-modal' onClick={closeModal}>
                <div className='video-area' onClick={handleVideoAreaClick} >
                    <div className='jce'>
                        <CloseButton onClick={closeModal} />
                    </div>
                    <hr />
                    <div className="video-container">
                        <YouTube
                            videoId={data}
                            opts={opts}
                            onReady={onReady} // 비디오 준비 완료 시 호출되는 함수
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal