import React, { useEffect, useRef } from 'react';
import Button from '../button/button';
import styles from './cardForm1.module.css';

const CardForm1 = ({member, updateMember, deleteMember, FileInput}) => {
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const onChange=(event)=>{
    if(event.currentTarget ===null){
      return null;
    }else{
      event.preventDefault();
    }
    updateMember({
      ...member,
      [event.currentTarget.name] : event.currentTarget.value // key : value
    })

  }
  const {name, company, theme, title, email, message, fileName, fileURL} = member;
  const onSubmit =(event)=>{
    event.preventDefault();
    deleteMember(member);
  }

  const onFileChange = file =>{
    updateMember({
      ...member,
      fileName : file.name,
      fileURL : file.url
    })
  }

  return(
      <form className={styles.form}>
        <div className={styles.input1}>
          <input ref={nameRef} onChange ={onChange} className={styles.input} type="text" name="name" defaultValue={name}/>
          <input ref={companyRef} onChange ={onChange} className={styles.input} type="text" name="company" defaultValue={company} />
          <select ref={themeRef} onChange ={onChange} className={styles.select} name="theme" defaultValue={theme}>
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="pink">pink</option>        
          </select>   
        </div>

        <div className={styles.input2}>
          <input ref={titleRef} onChange ={onChange} className={styles.input} type="text" name="title" defaultValue={title} />
          <input ref={emailRef} onChange ={onChange} className={styles.input} type="text" name="email" defaultValue={email} />
        </div>
        <textarea ref={messageRef} onChange ={onChange} className={styles.textarea} name="message" cols="30" rows="10" defaultValue={message}></textarea>
        <div className={styles.fileInput}>
          <FileInput 
            name = {name}
            onFileChange ={onFileChange}
          />
          <Button name="Delete" onClick={onSubmit}/>
        </div>
      </form>
  );
};

export default CardForm1;