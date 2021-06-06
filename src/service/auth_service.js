import firebase from 'firebase';
import firebaseApp from './firebase';


class AuthService{ // 로그인 또는 로그아웃같은 authetication 관련 업무
    login(providerName){
        const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
        return firebaseApp.auth().signInWithPopup(authProvider);
    };

    logout(){
        firebase.auth().signOut();
    };

    onAuthChange(onUserChanged){
        firebase.auth().onAuthStateChanged(user=>{
            onUserChanged(user);
        })
    };
}

export default AuthService;