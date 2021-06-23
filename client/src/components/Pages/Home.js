import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";

export const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    //eslint-disabled-nextline
  }, []);
  return <div className='grid-2'>Hello World!</div>;
};

export default Home;
