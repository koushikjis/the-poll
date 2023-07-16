import React, { useContext } from 'react';
import PageHeader from './PageHeader';
import AppContext from '../context/AppContext';

const Home: React.FC = () => {
  const {state} = useContext(AppContext)
    return <div className="container mt-4">
    <PageHeader header='Welcome to the poll' /> <br />Most organic polling site! {state.user.name}</div>;
  };

  export default Home