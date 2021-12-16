import { collection, getDocs, query, where } from 'firebase/firestore';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../Firebase/config';
import {ƒgetNote } from '../../Firebase/ActionFirebase';
import { ContextUser } from '../../Utils/context';
import NotesR from '../NotesR/NotesR';
import ButtonGoBack from '../buttonGoBack';
const NotesById = () => {
  const [note,setNote] =useState([])
  const {authUser} = useContext(ContextUser)
  const { id } = useParams();
 
  useEffect(()=>{
    ƒgetNote({id,setNote,authUser})
  },[])
  console.log(note);
  return(
    <>
      
        <NotesR notes={note} Tnotes={note.title} />
        <ButtonGoBack />
      
      </>
  )
};


export default NotesById; 