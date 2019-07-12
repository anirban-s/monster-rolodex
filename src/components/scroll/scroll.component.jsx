import React from 'react';
import './scroll.style.css';

const Scroll = (props) => {
    return (
        <div class="scroll">
            {props.children}
        </div>
    );
}

export default Scroll;