import firebase from 'firebase';

export const firebaseApp = () => {
    if (!firebase.apps.length) {
        return firebase.initializeApp({
            apiKey: process.env.REACT_APP_APIKEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            databaseURL: process.env.REACT_APP_DATABASE_URL,
            projectId: process.env.REACT_APP_PROJECTID,
            storageBucket: process.env.REACT_APP_STORAGEBUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
            appId: process.env.REACT_APP_APP_ID,
            measurementId: process.env.REACT_APP_MEASUREMENTID
          });
    }
    return firebase.app();
};

export const firebaseAnalytics = firebaseApp().analytics();
export const firebaseDatabase = firebaseApp().database();