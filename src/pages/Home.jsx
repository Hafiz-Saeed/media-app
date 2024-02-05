import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import View from '../components/View'
import Category from '../components/Category'


function Home() {

  const [uploadVideoServerResponse,setuploadVideoServerResponse] = useState({})

  return (
    <>
      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
<div className="add-videos">
  <Add setuploadVideoServerResponse = {setuploadVideoServerResponse} />

</div>
<Link to={'/history'} style={{textDecoration:"none",color:"beige"}}> <span style={{fontSize:"18px"}}> &#8592;</span> Watch History</Link>
      </div>

      <div className="container mt-5 mb-5 d-flex justify-content-between align-items-center">
        <div className="all-videos">
          <h3>All Videos</h3>
<View uploadVideoServerResponse = {uploadVideoServerResponse} />
        </div>

        <div className="category">
<Category/>
        </div>

      </div>


    </>
  )
}

export default Home