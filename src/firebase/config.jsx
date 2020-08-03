import * as firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFRAL62GlNrGKyD15glc7KVvFp1eE0sdQ",
  authDomain: "firegram-manager.firebaseapp.com",
  databaseURL: "https://firegram-manager.firebaseio.com",
  projectId: "firegram-manager",
  storageBucket: "firegram-manager.appspot.com",
  messagingSenderId: "307728937313",
  appId: "1:307728937313:web:ab510fd6be9c4e99f51520",
  measurementId: "G-P9XXTT8FC2"
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// firebase.analytics()

const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectStorage, projectFirestore, timestamp }
