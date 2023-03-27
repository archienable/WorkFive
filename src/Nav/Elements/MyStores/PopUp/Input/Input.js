import React from 'react';
import './Input.css'

const Input = ({text, placeholder, className}) => {
    return (
        <div className='containerSearch'>
            <form>
                <input
                    className={className}
                    value={text}
                    placeholder={placeholder}
                    type='search'
                     />
            </form>
        </div>
    );
};

export default Input;