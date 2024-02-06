import React, { useEffect, useState } from 'react';
import classes from "./create.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [errorMsg, setErrorMsg] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    const admin = auth ? JSON.parse(auth).isAdmin : false;
    if (admin === false) {
      navigate("/");
    };
  });

  const validation = () => {   
    const error = {};

    if (!title) {
      error.title = "Title is required!";
    } else if (title.length <= 1) {
      error.title = "Title must be more then 1 letter!";
    } else {
      error.title = " ";
    };

    if (!description) {
      error.description = "Description is required!";
    } else if (description.length <= 1) {
      error.description = "Description must be more then 1 letter!";
    } else {
      error.description = " ";
    };

    if (!category) {
      error.category = "Category is required!";
    } else if (category.length <= 1) {
      error.category = "Category must be more then 1 letter!";
    } else {
      error.category = " ";
    };

    if (!image) {
      error.image = "Image is required!";
    } else {
      error.image = " ";
    };

    if (!price) {
      error.price = "Price is required!";
    } else if (price < 0) {
      error.price = "Price should be positive!";
    } else {
      error.price = " ";
    };

    return error;
  };

  const handleCloseImg = () => {
    setImage("");
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const errors = validation();
    setErrorMsg(errors);

    try {
      // product's image upload
      const formData = new FormData();
      let fileName = null;
      if (image) {          
        fileName = Date.now() + image.name;
        formData.append("filename", fileName);
        formData.append("image", image);

        const imagePostApi = "http://localhost:5000/upload/image";  
        const createRequest = {
          method: "POST",
          headers: { "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}` },
          data: formData
        };
        await axios(imagePostApi, createRequest);
      };

      // product upload
      // Convert cases
      const UppercaseTitle = title.toUpperCase();
      const lowercaseCategory = category.toLowerCase();
      
      const productPostApi = "http://localhost:5000/product";
      const createRequest2 = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        },
        data: { title:UppercaseTitle, description, category:lowercaseCategory, img:fileName, price },
      };
      let responseData = await axios(productPostApi, createRequest2);
      responseData = responseData.data;
      navigate(`/food/${responseData._id}`);

    } catch (error) {
      if (error.response) {
        alert("You are not an admin!!");
      } else if(error.request){
        alert("Something went wrong. Try again later!!");
      } else {
        console.error('Error during request setup:', error.message);
      };
    };

  };


  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>Add food</h2>
          <form onSubmit={handleAddProduct} action="" encType='multiple/form-data'>
            <div className={classes.inputWrapper}>
              <label htmlFor="title">Title:</label>
              <input type="text" id="title" placeholder='Title...*' className={classes.input} onChange={(e) => setTitle(e.target.value)} />
              {errorMsg && <div className={classes.errorMsg}>{errorMsg.title}</div>} 
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="description">Description:</label>
              <textarea id="description" placeholder='Description...*' className={classes.input} onChange={(e) => setDescription(e.target.value)} />
              {errorMsg && <div className={classes.errorMsg}>{errorMsg.description}</div>} 
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="category">Category:</label>
              <input type="text" id="category" placeholder='Category...*' className={classes.input} onChange={(e) => setCategory(e.target.value)} />
              {errorMsg && <div className={classes.errorMsg}>{errorMsg.category}</div>} 
            </div>
            <div className={classes.inputWrapper}>
              <div className={classes.imgContent}>
                <label htmlFor="image" className={classes.fileLabelInput}>Image: <span>Upload here</span></label>
                <input style={{ display: "none" }} type="file" id='image' placeholder='Image...*' className={classes.input} onChange={(e)=>setImage(e.target.files[0])}/>
                {image && <p className={classes.imageName}>{image.name} <AiOutlineCloseCircle className={classes.closeImg} onClick={handleCloseImg} /></p>}
                {errorMsg && <div className={classes.errorMsg}>{errorMsg.image}</div>} 
              </div>
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" step={0.01} placeholder='Price...*' className={classes.input} onChange={(e) => setPrice(e.target.value)} />
              {errorMsg && <div className={classes.errorMsg}>{errorMsg.price}</div>} 
            </div>
            <div className={classes.submitBtnWrp}>
              <button type='Submit' className={classes.SubBtn}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Create