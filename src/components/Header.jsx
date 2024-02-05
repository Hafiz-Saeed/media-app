import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
        <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand >

            <Link to={'/'}  style={{textDecoration:"none"}}>
            <img
            style={{borderRadius:"10px"}}
              alt="navimg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7vVEBcZlvA1HoVOqiB8iKKaObkFSfx-0gE1IA1Rhq7e4rBak_Rxm97F1KXp8tv7cshNA&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Media Player
            </Link>


          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header