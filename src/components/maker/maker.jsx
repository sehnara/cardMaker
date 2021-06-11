import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import CardMaker from '../section_CardMaker/cardMaker';
import CardPreview from '../section_CardPreview/cardPreview';
import styles from './maker.module.css';

const Maker = ({authService}) => {
  const [member, setMember] = useState({
      '1' :  {
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
      '2' : {
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
      '3' : {
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
    }
  );
 
  const history = useHistory();

  const addOrUpdateMember= memb =>{    
    setMember(member => {
      const updated = {...member};
      updated[memb.id] = memb;
      return updated
    });
  };

  const deleteMember=mb=>{    
    setMember(member=>{
      const updated = {...member};
      delete updated[mb.id];
      return updated;
    });
  };  

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
              addMember = {addOrUpdateMember}
              deleteMember = {deleteMember}
              updateMember = {addOrUpdateMember}
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






  