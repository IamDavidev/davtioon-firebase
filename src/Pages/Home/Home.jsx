import {useContext} from 'react';
 import {ContextUser} from "../../Utils/context"
 const Home = ()=>{



    const {authUser, setAuthUser} = useContext(ContextUser);
    console.log(authUser);
    return (
        <div>

            <h1>Home</h1>
        </div>
    )
}


export default Home; // export Home
