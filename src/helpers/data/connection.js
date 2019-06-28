import firebase from 'firebase/app';
import fbKeys from '../apiKeys.json';

const firebaseApp = () => {
  console.error('test');
  if (!firebase.apps.length) {
    firebase.initializeApp(fbKeys.firebaseKeys);
  }
};

export default firebaseApp;
