import React from 'react';

import './TitleIcon.scss';

type TitleIconProps = {
  icon: string;
};

export const TitleIcon: React.FC<TitleIconProps> = (props) => {
  const { icon } = props;

  return (
    <h2 className="title-icon" style={{ backgroundImage: `url(${icon})` }}>
      {props.children}
    </h2>
  );
};
