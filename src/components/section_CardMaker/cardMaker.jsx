import React from 'react';
import AddForm from '../addForm/addForm';
import CardForm1 from '../memberCard/cardForm1';
import styles from './cardMaker.module.css';

const CardMaker = ({member,addMember, updateMember, deleteMember}) =>{
    return(
        <div className={styles.section}>
            <h1 className={styles.title}>Card Maker</h1>
            {
                Object.keys(member).map((key)=>{
                    return <CardForm1 
                        key = {key}
                        member = {member[key]}
                        deleteMember = {deleteMember}
                        updateMember = {updateMember}
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