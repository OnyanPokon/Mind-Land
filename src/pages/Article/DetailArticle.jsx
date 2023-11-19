import { Container, Row, Col, Image, Button } from "react-bootstrap"
import '../../style/detail-article.css'
import {ArticleTerbaru} from "../../data/index"
import CardComponent from '../../components/CardComponent';
import PaginationComponent from '../../components/PaginationComponent';

const DetailArticle = () => {
  return (
    <div>
      <section className="herodetail-section d-flex align-items-center">
        <Container className="px-3">
          <Row>
            <Col>
              <h1>Tips Menghindari Kecemasan Berlebihan</h1>
              <p>3 menit yang lalu - Ditinjau oleh <span>Dr.Diki Hendrawan</span> 19 November 2023</p>
            </Col>
          </Row>
          <Row className="gap-4 mt-5">
            <Col lg={8}>
              <Image  src={`https://source.unsplash.com/random?mental_health`} alt="unsplash.com" rounded style={{width: '100%', objectFit: 'cover' }}/>
            </Col>
            <Col>
              <h3>Topik terkini</h3>
              <div className="d-flex gap-2 flex-wrap mt-4" style={{  }}>
                <Button variant="outline-secondary">Bunuh Diri</Button>{' '}
                <Button variant="outline-secondary">Mental Health</Button>{' '}
                <Button variant="outline-secondary">Anxiety</Button>{' '}
                <Button variant="outline-secondary">69</Button>{' '}
                <Button variant="outline-secondary">Cemas Kau Dek</Button>{' '}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container className="px-3">
          <h2>kontol</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint assumenda, expedita molestiae, recusandae cumque reiciendis at nemo eveniet aliquid nisi ratione explicabo quod voluptatibus atque doloribus deserunt voluptas, dolorem tempore! Saepe, iure? Ea fugiat laboriosam non alias explicabo exercitationem cupiditate harum et culpa distinctio asperiores facilis quisquam dolorem, in animi minus dicta voluptatibus ab quidem dolores dolore! Similique sunt omnis in voluptas fuga minus odit nobis labore repellendus provident rem illo tempora asperiores non quidem aliquam laudantium recusandae cum unde, quasi molestias placeat nam perferendis? Voluptatem ullam delectus hic, cupiditate repellat ex. Quibusdam totam magnam necessitatibus sint possimus est.</p>
        </Container>
        <Container className="px-3">
          <h2>Memek</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt sint assumenda, expedita molestiae, recusandae cumque reiciendis at nemo eveniet aliquid nisi ratione explicabo quod voluptatibus atque doloribus deserunt voluptas, dolorem tempore! Saepe, iure? Ea fugiat laboriosam non alias explicabo exercitationem cupiditate harum et culpa distinctio asperiores facilis quisquam dolorem, in animi minus dicta voluptatibus ab quidem dolores dolore! Similique sunt omnis in voluptas fuga minus odit nobis labore repellendus provident rem illo tempora asperiores non quidem aliquam laudantium recusandae cum unde, quasi molestias placeat nam perferendis? Voluptatem ullam delectus hic, cupiditate repellat ex. Quibusdam totam magnam necessitatibus sint possimus est.</p>
        </Container>
      </section>
      <section>
        <Container>
          <h2 className='pt-5'>Artikel Populer</h2>
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

export default DetailArticle