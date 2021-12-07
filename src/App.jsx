import { Provider } from 'react-redux';
import AppRoutes from './Routes/Routes';
import { AppStyled } from './StyledMain';
import { store } from './Store/Store';
const App = () => {
  return (
    <Provider store={store}>
      <AppStyled>
        <AppRoutes />
      </AppStyled>
    </Provider>
  );
};

export default App;
