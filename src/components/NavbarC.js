import React, { useContext} from 'react';
import { AuthContext } from '../contexts/AuthContext';
import {ThemeContext} from '../contexts/ThemeContext';

const NavBarC= () => {
    const{ isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return ( 
        <nav style={{ background: theme.ui, color: theme.syntax}}>
            <ul>
                <h1>Context App</h1>
                <div onClick={toggleAuth}>
                    { isAuthenticated ? 'Logge in': 'Logged out' }
                </div>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
     );
}
 
export default NavBarC;