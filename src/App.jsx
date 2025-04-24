import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Route, Routes} from 'react-router'
import AppLayout from './layout/AppLayout'
import Homepage from './pages/Hompage/Homepage'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import Movies from './pages/Movies/Movies'
import 'bootstrap/dist/css/bootstrap.min.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {

  return (
    /* 설계 계획
      홈페이지
      영화 전체 보여주는 페이지(서치) /movie ? q
      영화 디테일 페이지 /movies/:id
      추천 영화 /movies/:id/recommandation
      리뷰 /movies/:id/reviews  
    */


    // nav bar form
    <div className='App'>
        <Routes>
          <Route path="/" element={<AppLayout/>}>
                        {/* 요청 주소 부모 요소를 사용하면 index */}
              {/* Homepage */}
              <Route index element={<Homepage/>}/>
              {/* Movie */}
              <Route path="movies" element={<Movies/>}/>
              <Route path ="movies/:id" element ={<MovieDetail/>}/>
              
        </Route>


          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </div>
  )
}

export default App
