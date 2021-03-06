// import React from 'react'
// import PropTypes from 'prop-types'
// import style from './Button.module.css'

// const Button = ({ children, onClick, ...allyProps }) => {
//     <button
//         type='button'
//         className={style.Button}
//         onClick={onClick} {...allyProps}
//     >
//         {children}
//     </button>
// };

// Button.defaultProps = {
//     onClick: () => null,
//     children: null,
// };

// Button.propTypes = {
//     onClick: PropTypes.func,
//     children: PropTypes.node,
//     'aria-label': PropTypes.string.isRequired,
// };

// export default Button;

import React from 'react';
import PropTypes from 'prop-types';
import '../../style.css';

const Button = ({ onClick }) => (
    <button className="Button" type="button" onClick={onClick}>
        Load more
    </button>
    );

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;