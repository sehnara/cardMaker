import firebase from 'firebase';

class AuthService{ // 로그인 또는 로그아웃같은 authetication 관련 업무
    login(providerName){
        const authProvider = new firebaase.auth[`${providerName}AuthProvider`]();
        return firebase.auth().signInWithPopup(authProvider);
    }
}

export default AuthService;