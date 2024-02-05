// upload a video

import { CommonAPI } from "./CommonAPI"
import { serverUrl } from "./ServerUrl"



export const uploadVideo = async(reqBody) => {
    // call POST http request to "http://localhost:4000/videos" to add video to json server and return response to Add.jsx component

    return await CommonAPI("POST", `${serverUrl}/videos`, reqBody)

}


// get all videos from json server   

export const getAllVideo = async() => {
    //make GET http req to "http://localhost:4000/videos" to get all videos from json server to View.jsx component

    return await CommonAPI("GET", `${serverUrl}/videos`, "")
}


// get a videos from json server   

export const getAVideo = async(id) => {
    //make GET http req to "http://localhost:4000/videos" to get a video from json server to VideoCard.jsx component

    return await CommonAPI("GET", `${serverUrl}/videos/${id}`, "")
}


// remove a video from json server   

export const deleteVideo = async(id) => {
    //make DELETE http req to "http://localhost:4000/videos" to remove a video from json server and VideoCard.jsx component

    return await CommonAPI("DELETE", `${serverUrl}/videos/${id}`, {})
}


// store watch history in json server

export const addToHistory = async(videoDetails) => {
    // make POST http request to "http://localhost:4000/history" to add watchhistory to the json server and return the response to VideoCard.jsx component
    return await CommonAPI("POST", `${serverUrl}/history`, videoDetails)
}


// get all watching video history

export const getAllHistory = async() => {
    // make GET http request to "http://localhost:4000/history" to get all video watchhistory from the json server to watchHistory.jsx component
    return await CommonAPI("GET", `${serverUrl}/history`, "")
}


// delete watching video history

export const deleteHistory = async(id) => {
    // make delete http request to "http://localhost:4000/history/id" to delete watch video history from the json server to watchHistory.jsx component
    return await CommonAPI("DELETE", `${serverUrl}/history/${id}`, {})
}

//Add a category to JSON Server

export const addCategory = async(reqBody) => {
    // make POST http request to "http://localhost:4000/categories" to add videos to the json server and return the response to Category.jsx component

    return await CommonAPI("POST", `${serverUrl}/category`, reqBody)
}

//GET all category to JSON Server

export const getAllCategory = async() => {
    // make GET http request to "http://localhost:4000/categories" to get videos from the json server and return the response to Category.jsx component

    return await CommonAPI("GET", `${serverUrl}/category`, "")
}


//DELETE all category to JSON Server

export const deleteCategory = async(id) => {
    // make DELETE http request to "http://localhost:4000/categories/id" to DELETE videos from the json server and return the response to Category.jsx component

    return await CommonAPI("DELETE", `${serverUrl}/category/${id}`, {})
}


//UPDATE all category to JSON Server

export const updateCategory = async(id,body) => {
    // make UPDATE http request to "http://localhost:4000/categories/id" to UPDATE particular category  to json server and return the response to Category.jsx component

    return await CommonAPI("PUT", `${serverUrl}/category/${id}`, body)
}