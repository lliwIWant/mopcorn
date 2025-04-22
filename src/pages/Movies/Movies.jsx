import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import '../Movies/Movies.style.css'

// 경로 2가지
// nav바에서 클릭해서 온경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 ==> keyword와관련된 영화들을 보여줌


// pagenation 설치
// page state 만들기
// 페이지 네이션 클릭할때마아 page 바꿔주기
// page ㄱ밧이 바뀔 때 마다 useSearchmovie에 page까지 넣어서 fetch

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get('q');
  const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page });
  
  useEffect(() => {
    setPage(1);
  }, [keyword]);
  
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  }
  // useEffect(() => {
  //   // 페이지 값이 변경될 때마다 URL에 반영
  //   setQuery({ q: keyword, page: page.toString() });
  // }, [page, keyword, setQuery]);
  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }

  return (
    <Container>
      <Row>
        {/* <Col lg={4} xs={12}>
          {""}
          필터터
          {""}
        </Col> */}
        <Col lg={20} xs={12}>
          <Row>
            {data?.results && data.results.length > 0 ? (
              data.results.map((movie, index) => (
                <Col key={index} lg={3} xs={12} style={{ marginTop: '30px', marginBottom: '30px' }}>
                  <MovieCard movie={movie} />
                </Col>
              ))

            ) : (
              <div className='noMovies'>검색하신 영화가 존재하지 않습니다.😢</div>
            )}
          </Row>
          {data?.results && data.results.length > 0 ? (
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={10}
              marginPagesDisplayed={0}
              pageCount={data?.total_pages} // 전체 페이지가 몇개인가
              previousLabel="<"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
              forcePage={page - 1}
            />
          ) : ('')}
        </Col>
      </Row>
    </Container>
  )
}

export default Movies