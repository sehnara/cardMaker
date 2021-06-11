import React from 'react';
import CardForm2 from '../memberCard/cardForm2';
import styles from './cardPreview.module.css'; 

const CardPreview = ({member}) => {
    return(
        <div className={styles.section}>
          <h1 className={styles.title}>Card Preview</h1>
          {
            Object.keys(member).map(key=>{
              return <CardForm2
                key = {key}
                member = {member[key]}
              />
            })
          }
        </div>
    );
};

export default CardPreview;