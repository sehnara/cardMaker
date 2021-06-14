import React, { useRef, useState } from 'react';
import styles from './imageInputFile.module.css';

const ImageInputFile = ({ImageUploader, name, onFileChange}) => {
    const [loading, setLoading] = useState(false);
    const inputRef = useRef();
    const onButtonClick=(event)=>{
        event.preventDefault();
        inputRef.current.click();
    }

    const onChange = async event =>{
        setLoading(true);
        const uploaded = await ImageUploader.upload(event.target.files[0]);
        setLoading(false);

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
            {
                !loading && 
                <button className={`${styles.button} ${name ? styles.pink : styles.gray}`} onClick={onButtonClick}>
                    {name||'No File'}
                </button>
            }            
            {
                loading && 
                <div className={styles.loading}></div>
            }
            
        </div>
    );    
};

export default ImageInputFile;

