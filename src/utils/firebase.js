/** @format */

import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyANgM9muS3L46PrKFB9STbVpWmNOIHjnMU',
  authDomain: 'agency04-42b02.firebaseapp.com',
  projectId: 'agency04-42b02',
  storageBucket: 'agency04-42b02.appspot.com',
  messagingSenderId: '166719829620',
  appId: '1:166719829620:web:2f2d51fa1cd08ca9ce4321',
  measurementId: 'G-02LC213B4P',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export default firebase;
