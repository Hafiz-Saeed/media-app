import { Button, Modal, Row, Col } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap';
import { toast , ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAVideo, getAllCategory, updateCategory } from '../services/allAPI';
import VideoCard from './VideoCard';



function Category() {

  const [allCategories,setAllCategories] = useState([])


  const [categoryName,setCategoryName] = useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddCategory = async () => {
    if(categoryName){
//create key for rendering list
      let body = {
        categoryName,allVideos:[]
      }

      //make api call
      const response = await addCategory(body)
      console.log(response);

      if(response.status>=200 && response.status<300){
        //hide modal
        handleClose()
        //reset state
        setCategoryName("")
        //get categories
        getCategories()
        toast.success("Category name added successfully")
      }else{
        toast.error("Something went wrong")
      }
    }else{
      toast.warning("WTF!,Please provide category name, dude!!")
    }
  }


  const getCategories = async() => {
    //make api call
    const {data} = await getAllCategory()
    // console.log(data);
    setAllCategories(data)
  }
  console.log(allCategories);

  useEffect(()=>{
    getCategories()
  },[])

  const handleDelete = async(id) => {
    await deleteCategory(id)
    getCategories()
  }


  const dragOver = (e) => {
    console.log("video drag over category");
    e.preventDefault()
  }

  const videoDrop = async(e,categoryId) => {
    console.log("Video dropped inside the category : "+categoryId);
    const videoId = e.dataTransfer.getData("videoId")
    console.log("video card id : ",videoId);
    //get video detail
    const {data} = await getAVideo(videoId)
    console.log(data);
    //get category details
    const selectedCategory = allCategories?.find(item=>item.id === categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    //make api call
    await updateCategory(categoryId,selectedCategory)
    getCategories()
  }



  return (
    <>



<div className="d-grid ms-3" >
   <button onClick={handleShow} className='btn btn-info'>Add New Category</button>
</div>

{
  allCategories?.length>0?allCategories?.map(item => (
    <div className="m-5 border rounded p-3" droppable onDragOver={(e)=>dragOver(e)} onDrop={(e) => videoDrop(e,item?.id)}>
<div className="d-flex justify-content-between align-items-center">
  <h6>{item?.categoryName}</h6>
  <button onClick={() => handleDelete(item?.id)} className='btn ' style={{marginLeft:"5px"}} ><i className='fa-solid fa-trash text-danger'></i></button>
</div>

<Row>
  {
    item?.allVideos && item?.allVideos.map(
      card=>(
        <Col sm={12}>
          <VideoCard displayData={card} insideCategory={true} />
        </Col>
      )
    )
  }
</Row>

    </div>
  )) : <p className='fs-5 fw-5 text-danger'>No Categories Added</p>

}

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Upload a Video</Modal.Title>
        </Modal.Header>

        <Modal.Body>

          <Form className='border border-secondary rounded p-3'>

            <Form.Group className="mb-3" controlId="formGroupEmail">

              <Form.Label color='white'>Enter Category Name </Form.Label>

              <Form.Control type="email" placeholder="Enter Category Name" onChange={(e)=> setCategoryName(e.target.value)} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer
position='top-center'
theme='colored'
autoClose={2000}/>

    </>
  )
}

export default Category