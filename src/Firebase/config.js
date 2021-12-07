// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBallcRDORI1hZQBvXf9WejekNzC0HuGJM',
  authDomain: 'davtion-7f137.firebaseapp.com',
  projectId: 'davtion-7f137',
  storageBucket: 'davtion-7f137.appspot.com',
  messagingSenderId: '36928251506',
  appId: '1:36928251506:web:9a2efa688fe401320284eb',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);



// Get a list of cities from your database

async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => doc.data());
  return cityList;
}


// export { db, auth, storage, authGoogle }; otra manera de exportar
