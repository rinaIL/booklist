import React, {Component} from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

class Navbar extends Component {
    static contextType = ThemeContext;
    render() { 
        const{ isLightTheme, light, dark}  = this.context
        const theme = isLightTheme ? light : dark;
        return ( 
            <nav style={{ background: theme.ui, color: theme.syntax}}>
                <ul>
                    <h1>Context App</h1>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

            </nav>
         );
    }
}
 
export default Navbar;