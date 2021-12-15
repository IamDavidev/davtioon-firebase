import { useNavigate } from 'react-router-dom';
const NotesR = ({notes}) => {
    
    const navigate = useNavigate();
    const ƒHandleAdd = ()=>{
        navigate('/notes/add');
    }

    return (
       <>
        <h1>notes Render</h1>
        {
            notes.map(note => {
                return <p key={note.id}>{note.content}</p>
            })
        }
 
        <button onClick={ƒHandleAdd}>
            add notes
        </button>
       </>
    )
}

export default NotesR