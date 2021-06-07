import React from 'react';
import styles from './cardForm2.module.css';
import image1 from '../../images/default_logo.png';
const DEFAULT_IMAGE = image1;
const CardForm2 = ({member}) => {
  // deconstructing
  const {name, company, theme, title, email, message, fileName, fileURL} = member;

  const url = fileURL || DEFAULT_IMAGE;

  return(
    <div className={`${styles.container} ${getStyles(theme)}`} >
      <img className={styles.image} src={url} alt="image"/>
      <div className={ styles.text}>
        <p className={styles.name}>{name}</p>
        <p className={styles.company}>{company}</p> 
        <p className={styles.details}>{title}</p>        
        <p className={styles.details}>{email}</p>        
        <p className={styles.message}>{message}</p>        
      </div>
    </div>
  );
};

function getStyles(theme){
  switch(theme){
    case 'dark':
      return styles.dark;
    case 'light':
      return styles.light;
    case 'pink':
      return styles.pink;
    default:
      throw new Error(`unknown theme : ${theme}`);
  }
}

export default CardForm2;