import firebaseApp from './firebase';

class CardRepository {

  saveCard=(userId, member)=>{
    firebaseApp.database().ref(`${userId}/members/${member.id}`)
    .set(member);
  }
  removeCard=(userId, member)=>{
    firebaseApp.database().ref(`${userId}/members/${member.id}`)
    .remove();
  }
}

export default CardRepository;
