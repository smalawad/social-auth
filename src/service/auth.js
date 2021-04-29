import firebase from '../firebase_config';

const socialMediaAuth = (provider) => { 
    return firebase
        .auth()
        .signInWithPopup(provider)
        .then((res) => {
            return res.user;
        })
        .catch((er) => {
            return er;
        });
};

export default socialMediaAuth;