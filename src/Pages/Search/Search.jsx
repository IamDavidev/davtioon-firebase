import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { ContextUser } from '../../Utils/context';
import SearchRender from './SearchRender';
import SyledSearch from './StyledSearch';

const Search = () => {
  const { authUser } = useContext(ContextUser);

  return (
    <SyledSearch>
      {authUser.isLoggedIn ? (
        <SearchRender />
      ) : (
        <Navigate replace to="/login" />
      )}
    </SyledSearch>
  );
};

export default Search;
