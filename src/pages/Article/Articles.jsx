import '../../style/article.css'
import { Container, Row, Col, Button, InputGroup, Form, Card } from 'react-bootstrap'
import { BsSearch } from "react-icons/bs";
import {ArticleTerbaru} from "../../data/index"
import CardComponent from '../../components/CardComponent';
import PaginationComponent from '../../components/PaginationComponent';


const Articles = () => {
  return (
    <div>
      <section className="search-section d-flex  align-items-center">
        <Container>
          <Row className='py-5 px-3'>
            <Col md={6} className='d-flex flex-column gap-3'>
              <h1>Solusi Kesehatan Mental Kamu</h1>
              <h2>Artikel yang sesuai dengan mood kamu.</h2>
              <InputGroup className="mb-3 " size='lg'>
                <Form.Control
                  placeholder="Cari artiker berdasarkan judul, kategori, topik"
                  aria-label="Cari artiker berdasarkan judul, kategori, topik"
                  aria-describedby="basic-addon2"
                />
                <Button variant="info" className='text-light' id="button-addon2">
                  <BsSearch className='mb-1'/>
                </Button>
              </InputGroup>
            </Col>
            
          </Row>
        </Container>
      </section>
      <section className='recent-section'>
        <Container>
          <h2 className='px-3 pb-3'>Artikel Terkini</h2>
          <Row className='gap-4 px-3'>
            
            <Col md={8}>
              <Card className="h-100"> 
                <Card.Img variant="top"  src={`https://source.unsplash.com/random/200x1001/?mental_health`} alt="unsplash.com" style={{ height: '200px', objectFit: 'cover'}}/>
                <Card.Body>
                  <Card.Title><a href=""  className="stretched-link">Fakta air putih, bisa membuat kamu lebih rileks</a></Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi voluptatum non omnis sapiente iure consequuntur soluta porro, doloremque autem ipsam animi. Odit alias, repudiandae excepturi temporibus quia illum quod provident.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="h-100"> 
                <Card.Img variant="top"  src={`https://source.unsplash.com/random/200x100/?mental_health`} alt="unsplash.com" style={{ height: '200px', objectFit: 'cover'}}/>
                <Card.Body>
                  <Card.Title><a href=""  className="stretched-link">Fakta air putih, bisa membuat kamu lebih rileks</a></Card.Title>
                  <Card.Text>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero, expedita!
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <h2 className='px-3 pt-5'>Artikel Populer</h2>
          <Row className='px-3' xs={1} md={2} lg={4}>
            {ArticleTerbaru.map((kelas) => {
              return(
                  <CardComponent key={kelas.id} data={kelas} ></CardComponent>
                );
              })}
          </Row>
          <Row className='px-3 py-5'>
            <PaginationComponent></PaginationComponent>
          </Row>
        </Container>
      </section>
    </div>
  )
}


export default Articles;
