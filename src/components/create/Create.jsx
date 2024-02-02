import React from 'react';
import classes from "./create.module.css";

function Create() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h2 className={classes.title}>Add food</h2>
          <form action="" encType='multiple/form-data'>
            <div className={classes.inputWrapper}>
              <label htmlFor="title">Title:</label>
              <input type="text" id = "title" placeholder='Title...' className={ classes.input} />
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="description">Description:</label>
              <textarea id = "description" placeholder='Description...' className={ classes.input} />
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="category">Category:</label>
              <input type="text" id = "category" placeholder='Category...' className={ classes.input} />
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="image" className={classes.fileLabelInput}>Image: <span>Upload here</span></label>
              <input style={{ display: "none" }} type="file" id='image' placeholder='Image...' className={classes.input} />
            </div>
            <div className={classes.inputWrapper}>
              <label htmlFor="price">Price:</label>
              <input type="number" id = "price" step={0.01} placeholder='Price...' className={ classes.input } />
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