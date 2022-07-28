import React from 'react';
import NavBar from './navBar';

const Layout = ({children}) => {
    return (
        <div>
            <NavBar></NavBar>
            <div>{children}</div>
        </div>
    );
}

export default Layout;
