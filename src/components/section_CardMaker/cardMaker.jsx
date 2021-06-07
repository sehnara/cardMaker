import React from 'react';
import AddForm from '../addForm/addForm';
import CardForm1 from '../memberCard/cardForm1';
import styles from './cardMaker.module.css';

const CardMaker = ({member,addMember}) =>{
    return(
        <div className={styles.section}>
            <h1 className={styles.title}>Card Maker</h1>
            {
                member.map((memb)=>{
                    return <CardForm1 
                        key = {memb.id}
                        member = {memb}
                    />
                })                
            }     
            <AddForm
                addMember ={addMember}
            />      
        </div>
    );
};
export default CardMaker;