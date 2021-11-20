import React from 'react';
import { HeaderStyles } from './styles/HeaderStyles';
import Lists from './Lists'
function Header() {
    return (
        <HeaderStyles>
            <img style={{height: "20px"}} src="./src/assets/logo.svg" alt="" />
            <Lists />
            <div style={{ marginLeft: "auto"}}>
            <img style={{width: "20px"}, {padding: "8px"} }  src="./src/assets/icon-cart.svg" alt="" />
            <img style={{width: "35px"}} src="./src/assets/image-avatar.png" alt="" />
        </div>
        </HeaderStyles >
    );
}

export default Header;