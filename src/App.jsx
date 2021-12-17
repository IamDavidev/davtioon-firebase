
import AppRoutes from './Routes/Routes';
import { AppStyled } from './StyledMain';
import {
  ContextUser,
  StateContext,
  StateNotes,
} from './Utils/context';
import { useState } from 'react';

const App = () => {
  const [authUser, setAuthUser] = useState(StateContext);
  const [notes, setNotes] = useState(StateNotes);
  return (
    <ContextUser.Provider value={{ authUser, setAuthUser, notes, setNotes }}>
      <AppStyled>
        <AppRoutes />
      </AppStyled>
    </ContextUser.Provider>
  );
};

export default App;
