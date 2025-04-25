import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { useGenres } from '../../../../hooks/useGenres';

const DropdownSearch = ({ title, onSelectGenre }) => {
  const { data, isLoading, isError, error } = useGenres();
  console.log(data)
  return (
    <Dropdown>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        {title}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data?.map((genre) => (
          <Dropdown.Item key={genre.id} onClick={() => onSelectGenre(genre.id)}>
            {genre.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownSearch