import React from 'react';
import CardForm2 from '../memberCard/cardForm2';
import styles from './cardPreview.module.css'; 

const CardPreview = ({member}) => {
    return(
        <div className={styles.section}>
          <h1 className={styles.title}>Card Preview</h1>
          {
            member.map(memb=>{
              return <CardForm2
                member = {memb}
              />
            })
          }
        </div>
    );
};

export default CardPreview;