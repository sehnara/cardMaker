import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import CardMaker from '../section_CardMaker/cardMaker';
import CardPreview from '../section_CardPreview/cardPreview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [member, setMember] = useState([
      {
        id:'1',
        name : 'sehoon',
        company : 'Google',
        theme : 'light',
        title : 'fullstack Developer',
        email : 'gsh723@naver.com',
        message :'you are the best',
        fileName:'sehoon',
        fileURL:null
      },
      {
        id:'2',
        name : 'tomioka chizu',
        company : 'hayart hotel',
        theme : 'dark',
        title : 'hotelier',
        email : 'cihzu@naver.com',
        message :'you are good!',
        fileName:'sehoon',
        fileURL:null
      },
      {
        id:'3',
        name : 'hyunna',
        company : 'Korea',
        theme : 'pink',
        title : 'hangjung',
        email : 'hyunna@naver.com',
        message :'you are so Good!',
        fileName:'sehoon',
        fileURL:null
      }
    ]
  );
 
  const history = useHistory();

  const addMember=(newMember)=>{
    const updated = [...member, newMember];
    setMember(updated);
  }

  const deleteMember= d_member =>{
    const memb = [...member];
    const updated = memb.filter(m =>{
      return m.id !== d_member.id
    });
    setMember(updated);
  };

  const updateMember=member =>{
    const memb = [...member];
    
  }

  const onLogout =()=>{
      authService.logout();
  };

  useEffect(()=>{
    authService.onAuthChange(user=>{
      if(!user){
        history.push('/');
      }
    });
  });

  return(
      <section className={styles.maker}>
          <Header onLogout = {onLogout}/>
          <div className={styles.container}>
            <CardMaker
              member ={member}
              addMember = {addMember}
              deleteMember = {deleteMember}
            />
            <CardPreview
              member ={member}
            />
          </div>
          <Footer/>
      </section>
  );
};

export default Maker;






  