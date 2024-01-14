import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import { firebaseConfig } from './secrets';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const storage = firebase.storage();
const db = firebase.firestore();

export { auth, firebase, storage, db };
