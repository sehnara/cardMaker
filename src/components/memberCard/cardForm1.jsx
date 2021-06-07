import React from 'react';
import Button from '../button/button';
import ImageInputFile from '../image_input_file/imageInputFile';
import styles from './cardForm1.module.css';

const CardForm1 = ({member}) => {
  const {name, company, theme, title, email, message, fileName, fileURL} = member;
  const onSubmit =()=>{

  }
  return(
    <form className={styles.form}>
      <div className={styles.input1}>
        <input className={styles.input} type="text" name="name" value={name} />
        <input className={styles.input} type="text" name="company" value={company} />
        <select className={styles.select} name="theme" value={theme}>
          <option value="light">light</option>
          <option value="dark">dark</option>
          <option value="pink">pink</option>        
        </select>
      </div>

      <div className={styles.input2}>
        <input className={styles.input} type="text" name="title" value={title} />
        <input className={styles.input} type="text" name="email" value={email} />
      </div>
      <textarea className={styles.textarea} name="message" cols="30" rows="10" value={message}></textarea>
      <div className={styles.fileInput}>
        <ImageInputFile />
        <Button name='delete' onClick={onSubmit}/>
      </div>
    </form>
  );
};

export default CardForm1;