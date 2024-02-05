import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom'; //used to redirect



function LandingPage() {

  const navigateByUrl = useNavigate()

  return (
    <div>
      <Row className='mt-5 align-items-center justify-content-between w-100'>

        <Col></Col>

        <Col lg={4}>
          <h3>Welcome To <span className='text-warning'>Media player</span></h3>
          <p style={{ textAlign: 'justify' }}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque consequatur nemo ratione veritatis iste, eveniet dolor dignissimos nulla eum tempore maxime reprehenderit quis at, nam, iure quos velit? Assumenda, obcaecati!</p>
          <button onClick={() => navigateByUrl('/home')} className='mt-4 btn btn-info'>Get Started &#8594;</button>
        </Col>

        <Col lg={6}>
          <img className='img-fluid rounded'style={{marginLeft:"20px"}} src="https://i.pinimg.com/originals/83/82/06/83820619a50bc4676d642561a9fe7355.gif" alt="player" />
        </Col>

        <Col></Col>

      </Row>

      <div className="container mt-5 mb-5 d-flex align-items-center justify-content-center flex-column">
        <h3>Features</h3>

        <div className="cards  mt-5 mb-5 d-flex align-items-center justify-content-between w-100">
          <Card style={{ width: '18rem' }}>
            <Card.Img width={'300px'} height={'250px'} variant="top" src="https://png.pngtree.com/background/20230621/original/pngtree-premium-photo-of-a-computer-based-3d-video-player-picture-image_3912943.jpg" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img width={'300px'} height={'250px'} variant="top" src="https://png.pngtree.com/thumb_back/fh260/background/20230720/pngtree-keyboard-and-hand-in-a-3d-digital-space-image_3678198.jpg" />
            <Card.Body>
              <Card.Title>Categorized Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }}>
            <Card.Img width={'300px'} height={'250px'} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSjTJ_wTxyMMm8AFrJwHTu3wYtlb_av8YtGk-jIiYHnppNTZ32droWA9HbLrkWQhHW5-I&usqp=CAU" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>

      <div className="container border rounded p-5 mt-5 border-secondary mb-5 d-flex align-items-center justify-content-between w-100">

        <div className='col-lg-5'>
          <h3 className='mb-5 text-warning'>Simple,Powerful & Fast</h3>
          <h6 className='mb-3' style={{textAlign:"justify"}}><span className='fs-5 fw-bolder text-warning'>Play Everything</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae impedit dolorem placeat quia repudiandae recusandae praesentium ipsam saepe debitis repellendus, molestias officia quibusdam hic, culpa asperiores est fugit, non inventore.</h6>

          <h6 className='mb-3' style={{textAlign:"justify"}}><span className='fs-5 fw-bolder text-warning'>Categorized Videos</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae impedit dolorem placeat quia repudiandae recusandae praesentium ipsam saepe debitis repellendus, molestias officia quibusdam hic, culpa asperiores est fugit, non inventore.</h6>

          <h6 className='mb-3' style={{textAlign:"justify"}}><span className='fs-5 fw-bolder text-warning'>Managing History</span>: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae impedit dolorem placeat quia repudiandae recusandae praesentium ipsam saepe debitis repellendus, molestias officia quibusdam hic, culpa asperiores est fugit, non inventore.</h6>
        </div>

        <div className='video col-lg-5'>

          <iframe width="100%" height="315" src="https://www.youtube.com/embed/34Na4j8AVgA?si=u5xMjPmH1AY1m4ZJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>
    </div>
  )
}

export default LandingPage