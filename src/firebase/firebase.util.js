import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA98gmnn7pfTKXLph44xlrAbqVwipCnvaU",
    authDomain: "front-end-assignment.firebaseapp.com",
    projectId: "front-end-assignment",
    storageBucket: "front-end-assignment.appspot.com",
    messagingSenderId: "270786003076",
    appId: "1:270786003076:web:53f49b4bf412bfd4b502d1",
    measurementId: "G-BCGTV7175T"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth,
  otherRelevantData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        email,
        createdAt,
        ...otherRelevantData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return userRef;
};

export const addCollectionsAndDocument = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();

  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsToMap = (collections) => {
  const transformedColletions = collections.docs.map((collection) => {
    const { title, items } = collection.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: collection.id,
      title,
      items,
    };
  });

  return transformedColletions.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
  //console.log(transformedColletions);
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject)
  })
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;
