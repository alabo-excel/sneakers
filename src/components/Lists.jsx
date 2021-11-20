import React from 'react';
import { ListStyle } from "./styles/ListStyle"

function Lists() {
    return (
        <div style={{display: "flex"}}>
            <ListStyle>Collection</ListStyle>
            <ListStyle>Men</ListStyle>
            <ListStyle>Women</ListStyle>
            <ListStyle>About</ListStyle>
            <ListStyle>Contact</ListStyle>
        </div>
    );
}

export default Lists;