import React from 'react';

import './Button.scss';

export const Button: React.FC = (props) => {
  return (
    <button className="button" type="button">
      {props.children}
    </button>
  );
};
