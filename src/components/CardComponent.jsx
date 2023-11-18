import React from 'react'
import { Card, Col } from 'react-bootstrap'
import PropTypes from 'prop-types';

function CardComponent({ data }) {
  return (
    <Col className='pt-4 card-component' data-aos="fade-up">
      <Card className="h-100" > 
        <Card.Img variant="top"  src={`https://source.unsplash.com/random/${300}x${200 + data.id}/?mental_health`} alt="unsplash.com" className="article-card-image"/>
        <Card.Body>
          <Card.Title><a href={data.url}  className="stretched-link">{data.title}</a></Card.Title>
            <Card.Text>
              {data.text}
            </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

CardComponent.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
};


export default CardComponent