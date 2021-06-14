import React, { useRef, useState } from 'react';
import Button from '../button/button';
import styles from './addForm.module.css';

const AddForm = ({addMember, FileInput}) => {
  const formRef = useRef();
    const nameRef = useRef();
    const companyRef = useRef();
    const themeRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const messageRef = useRef();
    const [file, setFile] = useState({
      fileName : null,
      fileURL : null
    })

    const onFileChange = file =>{
      setFile({
        fileName : file.name, fileURL : file.url
      })
    }


    const onSubmit =(event)=>{
      event.preventDefault();
        const newMember = {
          id:Date.now(),
          name : nameRef.current.value || '',
          company : companyRef.current.value || '',
          theme : themeRef.current.value || '',
          title : titleRef.current.value || '',
          email : emailRef.current.value || '',
          message :messageRef.current.value || '',
          fileName: file.fileName || "",
          fileURL: file.fileURL || ""
        }
        formRef.current.reset();
        setFile({fileName :null, fileURL : null});
        addMember(newMember);
    }

    
    return(
        <form ref = {formRef} className={styles.form}>
        <div className={styles.input1}>
          <input ref={nameRef} className={styles.input} type="text" name="name"  placeholder="name"/>
          <input ref={companyRef} className={styles.input} type="text" name="company" placeholder="company" />
          <select ref={themeRef} className={styles.select} name="theme" >
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="pink">pink</option>        
          </select>
        </div>
  
        <div className={styles.input2}>
          <input ref={titleRef} className={styles.input} type="text" name="title" placeholder="title"/>
          <input ref={emailRef} className={styles.input} type="text" name="email" placeholder="email" />
        </div>
        <textarea ref={messageRef} className={styles.textarea} name="message" cols="30" rows="10" placeholder="write down your message!!"></textarea>
        <div className={styles.fileInput}>
          <FileInput
            name = {file.fileName}
            onFileChange ={onFileChange}  
          />     
          <Button name='Add' onClick={onSubmit}/>
        </div>
      </form>
    );
};

export default AddForm;