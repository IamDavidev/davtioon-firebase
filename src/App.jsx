import { Provider } from 'react-redux';
import AppRoutes from './Routes/Routes';
import { AppStyled } from './StyledMain';
import { store } from './Store/Store';
import {
  ContextNotes,
  ContextUser,
  StateContext,
  StateNotes,
} from './Utils/context';
import { useState } from 'react';

const App = () => {
  const [authUser, setAuthUser] = useState(StateContext);
  const [notes, setNotes] = useState(StateNotes);
  return (
    <ContextUser.Provider value={{ authUser, setAuthUser,notes,setNotes }}>
      {/* <ContextNotes.provider value={{ notes, setNotes }}> */}
        <AppStyled>
          <AppRoutes />
        </AppStyled>
      {/* </ContextNotes.provider> */}
     </ContextUser.Provider>
  );
};

export default App;
