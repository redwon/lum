import React from 'react';

import './TipsList.scss';
import likeIcon from '../../assets/like.svg';

import { Card } from '../Card/Card';
import { TitleIcon } from '../TitleIcon/TitleIcon';

type TipsListItem = {
  title: string;
  text: string;
};

type TipsListProps = {
  items: TipsListItem[];
};

export const TipsList: React.FC<TipsListProps> = ({ items }) => {
  return (
    <div className="tips-list">
      <TitleIcon icon={likeIcon}>Tips</TitleIcon>

      {items.map((i, index) => (
        <Card key={index}>
          <div className="tips-list__item">
            <h3 className="tips-list__item-title">{i.title}</h3>
            {i.text}
          </div>
        </Card>
      ))}
    </div>
  );
};
