import { useState } from 'react';
import { createUserWithEmailAndPassword, FacebookAuthProvider, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, TwitterAuthProvider, onAuthStateChanged } from 'firebase/auth';
import auth from '../firebase.init';

const useFirebase = () => {
    const [profile, setProfile] = useState('')
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const twitterProvider = new TwitterAuthProvider();

    const handleCreateUser = (auth, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const handleLogin = (auth, email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    const handleSignInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            });
    }
    const handleSignInWithFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = FacebookAuthProvider.credentialFromError(error);
            });
    }
    const handleSignInWithTwitter = () => {
        signInWithPopup(auth, twitterProvider)
            .then((result) => {
                const credential = TwitterAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const secret = credential.secret;
                const user = result.user;
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = TwitterAuthProvider.credentialFromError(error);
            });
    }
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setProfile(user);
        }
    });

    return {
        handleCreateUser,
        handleLogin,
        handleSignInWithGoogle,
        handleSignInWithFacebook,
        handleSignInWithTwitter,
        profile
    }
};

export default useFirebase;