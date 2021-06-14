import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Footer from '../footer/footer';
import Header from '../header/header';
import CardMaker from '../section_CardMaker/cardMaker';
import CardPreview from '../section_CardPreview/cardPreview';
import styles from './maker.module.css';

const Maker = ({authService, FileInput,cardRepository}) => {
  const history = useHistory();
  const historyState = history?.location?.state;
  const [member, setMember] = useState({});
  const [userId, setUserId] = useState(historyState&&historyState.id);

  

  const addOrUpdateMember= memb =>{    
    setMember(member => {
      const updated = {...member};
      updated[memb.id] = memb;      
      return updated;
    });
    cardRepository.saveCard(userId, memb);    
  };

  const deleteMember=mb=>{    
    setMember(member=>{
      const updated = {...member};
      delete updated[mb.id];
      return updated;
    });
    cardRepository.removeCard(userId, mb);    
  };  

  const onLogout =()=>{
      authService.logout();
  };

  useEffect(()=>{
    authService.onAuthChange(user=>{
      if(user){
        setUserId(user.uid);
      }else{
        history.push('/');
      }
    });
  });

  return(
      <section className={styles.maker}>
          <Header onLogout = {onLogout}/>
          <div className={styles.container}>
            <CardMaker
              FileInput ={FileInput}
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






  