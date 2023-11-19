import React from 'react'
import { useState, useEffect } from 'react';
import { Card, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function CardComponent({ data }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 10000))

      setLoading(false)
    }
    fetchData()
  }, []);
  
  return (
    <Col className='pt-4 card-component' data-aos="fade-up">
      {loading ? (
        <Card className="h-100" >
          <Skeleton height={200} />
          <Card.Body>
            <Card.Title><Skeleton /></Card.Title>
              <Card.Text>
                <Skeleton count={3} />
              </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <Card className="h-100" > 
         <Card.Img variant="top"  src={`https://source.unsplash.com/random/${300}x${200 + data.id}/?mental_health`} alt="unsplash.com" className="article-card-image"/>
         <Card.Body>
           <Card.Title><a href={data.url}  className="stretched-link">{data.title}</a></Card.Title>
             <Card.Text>
               {data.text}
             </Card.Text>
         </Card.Body>
       </Card>
      )}
     
    </Col>
  )
}



export default CardComponent