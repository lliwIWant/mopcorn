import React from 'react'
import Banner from './component/Banner/Banner'
import PopularMoviesSilde from './component/PopularMoviesSildeSlide/PopularMoviesSilde'
import TopReatedSlide from './component/TopReatedSlide/TopReatedSlide'
import UpcommingMovieSlide from './component/UpcommingMovieSlide/UpcommingMovieSlide'

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
//2.popuar movie
//3. top rated movie
//4. upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMoviesSilde/>
      <TopReatedSlide/>
      <UpcommingMovieSlide/>
    </div>
  )
}

export default Homepage