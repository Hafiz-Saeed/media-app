import React, { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import { addToHistory, deleteVideo } from '../services/allAPI';




function VideoCard({ displayData, setDeleteVideoStatus,insideCategory }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    //make api call http://localhost:4000/history
    const { caption, embedLink } = displayData
    let today = new Date()
    // console.log(today);
    let timeStamp = (new Intl.DateTimeFormat('en-US', { year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: '2-digit', second: "2-digit" }).format(today));
    let videoDetails = {
      caption, embedLink, timeStamp
    }
    await addToHistory(videoDetails)
  }

  //delete a video 
  const removeVideo = async (id) => {
    //make a api call
    const response = await deleteVideo(id)
    setDeleteVideoStatus(true)
  }

  const dragStarted = (e,id) => {
    console.log("Drag started.. Video ID : "+id);
    e.dataTransfer.setData("videoId",id)
  }

  return (
    <>
      <Card draggable onDragStart={(e)=>dragStarted(e,displayData?.id)} style={{width:"250px",}}>
        <Card.Img onClick={handleShow} variant="top" src={displayData?.url}  style={{height:"200px",maxWidth:"25  0px"}} />
        <Card.Body className='d-flex justify-content-between align-items-center'>
          <Card.Title> <h6>{displayData?.caption}</h6> </Card.Title>

          {insideCategory?"":<button onClick={() => removeVideo(displayData?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>}

        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${displayData?.embedLink}?autoplay=1`} title={displayData?.caption} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        </Modal.Body>

      </Modal>
    </>
  )
}

export default VideoCard