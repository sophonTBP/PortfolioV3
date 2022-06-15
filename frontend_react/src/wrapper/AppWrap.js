import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div  className={`app__container ${classNames}`}>
     <NavigationDots active={idName} />  
      <div id={idName} className="app__wrapper  ">
        <Component  />

      {/*   <div className="copyright">
          <p className="p-text">@2020 MICHAEL</p>
          <p className="p-text">All rights reserved</p>
        </div> */}
       
      </div>
     
    </div>
  );
};

export default AppWrap;