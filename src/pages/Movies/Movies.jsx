import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { Container, Row, Col } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate';
import '../Movies/Movies.style.css'
import DropdownSearch from './component/Dropdown/DropdownSearch';
import Dropdown from 'react-bootstrap/Dropdown';
import { useDiscoverMovies } from '../../hooks/useDiscoverMovies';

// 경로 2가지
// nav바에서 클릭해서 온경우 => popularMovie 보여주기
// keyword를 입력해서 온 경우 ==> keyword와관련된 영화들을 보여줌


// pagenation 설치
// page state 만들기
// 페이지 네이션 클릭할때마아 page 바꿔주기
// page ㄱ밧이 바뀔 때 마다 useSearchmovie에 page까지 넣어서 fetch

const Movies = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("popularity.desc");
  const [genreId, setGenreId] = useState(null);

  useEffect(() => {
    setPage(1);
  }, [keyword]);

  useEffect(() => {
    if (keyword) {
      setQuery({ q: keyword, page: page.toString() });
    } else {
      setQuery({ page: page.toString() });
    }
  }, [page, keyword, setQuery]);

  const { data, isLoading, isError, error } = keyword
    ? useSearchMovieQuery({ keyword, page })
    : useDiscoverMovies({ page, sort, genreId });


    const filteredResults = React.useMemo(() => {
      if (!data?.results) return [];
      let results = [...data.results];
  
      if (genreId) {
        results = results.filter(movie => movie.genre_ids.includes(genreId));
      }
  
      if (sort === "popularity.desc") {
        results.sort((a, b) => b.popularity - a.popularity);
      } else if (sort === "popularity.asc") {
        results.sort((a, b) => a.popularity - b.popularity);
      }
  
      return results;
    }, [data, genreId, sort]);
    

  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };

  const handleGenreSelect = (genreId) => {
    setGenreId(genreId);
    setPage(1); // 장르 변경 시 첫 페이지로
  };

  const handleSortChange = (sortKey) => {
    setSort(sortKey);
    setPage(1); // 정렬 변경 시 첫 페이지로
  };

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>
  }
  const results = keyword ? filteredResults : data?.results;
  return (
    <Container>
      <Row>
        <Col lg={5} xs={12} >
          <div className='drop-area'>
            <Dropdown>
              <Dropdown.Toggle variant="warning" id="dropdown-basic">
                정렬 기준
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSortChange("popularity.desc")}>인기 많은 순</Dropdown.Item>
                <Dropdown.Item onClick={() => handleSortChange("popularity.asc")}>인기 적은 순</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <DropdownSearch title={"장르별 검색"} onSelectGenre={handleGenreSelect} />
          </div>

        </Col>
        <Col lg={20} xs={12}>
          <Row className='movie-card-search-list'>
            {results?.length > 0 ? ( 
              results.map((movie, index) => (
                <Col className="col-movie-card-search"key={index} lg={3} xs={10} style={{ marginTop: '30px', marginBottom: '30px' }}>
                  <MovieCard movie={movie} />
                </Col>
              ))
            ) : (
              <div className='noMovies'>검색하신 영화가 존재하지 않습니다.😢</div>  // 수정된 부분: 검색 결과가 없을 경우 메시지 표시
            )}
          </Row>

          {data?.results?.length > 0 && (
            <ReactPaginate
              nextLabel=">"
              onPageChange={handlePageClick}
              pageRangeDisplayed={10}
              marginPagesDisplayed={0}
              pageCount={data?.total_pages}
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
              renderOnZeroPageCount={null}
              activeClassName="active"
              forcePage={page - 1} 
            />
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default Movies