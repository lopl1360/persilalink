import {firebaseApp, firebaseDatabase} from './FirebaseService';

export const setCode = (code, linkObj) => {
    firebaseApp().database().ref('codes/'+ code).set(linkObj);
};

export const isCodeNew = async (code) => {
    const res = await firebaseApp().database().ref('codes/' + code).once('value');
    return !res;
};

export const getOnCode = (code, setLinks) => {
    return firebaseApp().database().ref('codes/' + code).on('value', function(snapshot) {
        console.log(snapshot);
        setLinks(snapshot.val());
      });
};

export const getOffCode = () => {
    return firebaseApp().database().ref('codes/').off();
}

export const addLinkToCodeObject = (code, linkObj, codeObj) => {
    if (!codeObj) {
        const ctime = Date.now();
        codeObj = {
            links: [linkObj],
            ctime: ctime
        };
    }
    else {
        const currentLinks = codeObj.links;
        const linkObjs = [...currentLinks, linkObj];
        codeObj = {
            links: linkObjs,
            ctime: codeObj.ctime
        };
    }

    setCode(code, codeObj);
};
