import { Provider } from 'react-redux';
import AppRoutes from './Routes/Routes';
import { AppStyled } from './StyledMain';
import { store } from './Store/Store';
import { ContextUser, StateContext } from './Utils/context';
import { useState } from 'react';

const App = () => {
  const [authUser, setAuthUser] = useState(StateContext);

  return (
    <ContextUser.Provider value={{ authUser, setAuthUser }}>
      <Provider store={store}>
        <AppStyled>
          <AppRoutes />
        </AppStyled>
      </Provider>
    </ContextUser.Provider>
  );
};

export default App;
