import React, { useState } from 'react';
import classes from "./create.module.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Create() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [errorMsg, setErrorMsg] = useState([]);


  // const handleImgUpload = () => {
    
  // };

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