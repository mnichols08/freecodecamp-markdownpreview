import React from 'react';

import './Header.styles.scss';

class Header extends React.Component {
    render() {
        return (
            <header>
                <span id="close">X</span>
                <h1>Markdown Preview</h1>
                <p>Thank you so much for coming to see on of my very first true React Applications. This is the second of five projects in the freeCodeCamp Curriculum for Front End Libraries and Frameworks Certification! I love building apps, can you tell?!</p>
            </header>
        )
    }
}

export default Header;