import {useContext} from 'react';
 import {ContextUser} from "../../Utils/context"
 const Home = ()=>{



    const {authUser, setAuthUser} = useContext(ContextUser);
    console.log(authUser);
    return (
        <div>
            {
                authUser.isLoggedIn === true ? <h1>Welcome {authUser.name}</h1> : <h1>Logged </h1>
            }
        </div>
    )
}


export default Home; // export Home
