import React, { useRef } from 'react';
import styles from './imageInputFile.module.css';

const ImageInputFile = ({ImageUploader, name, onFileChange}) => {
    const inputRef = useRef();
    const onButtonClick=(event)=>{
        event.preventDefault();
        inputRef.current.click();
    }

    const onChange = async event =>{
        const uploaded = await ImageUploader.upload(event.target.files[0]);
        console.log(uploaded);
        onFileChange({
            name: uploaded.original_filename,
            url : uploaded.url
        })
    }


    return(
        <div className={styles.container}>
            <input 
                ref = {inputRef} 
                className ={styles.input} 
                type="file" 
                accept="image/*"
                name="file"
                onChange={onChange}
            /> 
            <button className={styles.button} onClick={onButtonClick}>{name||'No File'}</button>
        </div>
    );    
};

export default ImageInputFile;

