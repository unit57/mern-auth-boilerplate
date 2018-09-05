import React from 'react';
import Header from './Header';

export default({children}) => {
  return (<div>
    <Header/>
    Hi I am the app {children}
  </div>);
};
