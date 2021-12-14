import {
  collection,
  doc,
  getDoc,
  setDoc,
  where,
  query,
  getDocs,
} from 'firebase/firestore';
import { db } from '../Firebase/config';
const firebasePrueba = async () => {
  const citiesRef = collection(db, 'cities');

  await setDoc(doc(citiesRef, 'SF'), {
    name: 'San Francisco',
    state: 'CA',
    country: 'USA',
    capital: false,
    population: 860000,
    regions: ['west_coast', 'norcal'],
  });
  await setDoc(doc(citiesRef, 'LA'), {
    name: 'Los Angeles',
    state: 'CA',
    country: 'USA',
    capital: false,
    population: 3900000,
    regions: ['west_coast', 'socal'],
  });
  await setDoc(doc(citiesRef, 'DC'), {
    name: 'Washington, D.C.',
    state: null,
    country: 'USA',
    capital: true,
    population: 680000,
    regions: ['east_coast'],
  });
  await setDoc(doc(citiesRef, 'TOK'), {
    name: 'Tokyo',
    state: null,
    country: 'Japan',
    capital: true,
    population: 9000000,
    regions: ['kanto', 'honshu'],
  });
  await setDoc(doc(citiesRef, 'BJ'), {
    name: 'Beijing',
    state: null,
    country: 'China',
    capital: true,
    population: 21500000,
    regions: ['jingjinji', 'hebei'],
  });
  console.log('Added 3 cities to the cities collection.');

  const docRef = doc(db, 'cities', 'SF');
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log('Document data:', docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log('No such document!');
  }

  const q = query(collection(db, 'cities'));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, ' => ', doc.data());
    console.log(doc);
  });
};

export default firebasePrueba;
