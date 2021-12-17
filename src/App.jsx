import AppRoutes from './Routes/Routes';
import { AppStyled } from './StyledMain';
import { ContextUser, StateContext } from './Utils/context';
import { useState } from 'react';

const App = () => {
  const [authUser, setAuthUser] = useState(StateContext);
  return (
    <ContextUser.Provider value={{ authUser, setAuthUser }}>
      <AppStyled>
        <AppRoutes />
      </AppStyled>
    </ContextUser.Provider>
  );
};

export default App;
