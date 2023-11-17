import React from 'react'
import { Pagination } from 'react-bootstrap'

function PaginationComponent() {
  return (
    <Pagination className='px-3  justify-content-center info'>
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item >{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item >{14}</Pagination.Item>

      <Pagination.Item>{20}</Pagination.Item>
      <Pagination.Next />
    </Pagination>
  )
}

export default PaginationComponent