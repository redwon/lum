import React, { useState } from 'react';

import './ExamplePageWithArticle.scss';
import questionIcon from '../../assets/question-icon.svg';
import fileIcon from '../../assets/file-icon.svg';
import { TIPS } from './tips';

import { Article } from '../Article/Article';
import { TipsList } from '../TipsList/TipsList';
import { Card } from '../Card/Card';
import { Button } from '../Button/Button';
import { TitleIcon } from '../TitleIcon/TitleIcon';

export const ExamplePageWithArticle: React.FC = () => {
  const [articleConfig] = useState({
    title: 'Devenez le leader qui vous inspire et préparez vous à passer à une nouvelle étape',
    description: 'Travaillez sur votre capacité de communication et d’adhésion.',
    category: 'Leadership',
    time: '7 min',
    author: 'Matthieu Cousi',
    authorImg: '/avatar.png',
    backLink: '/',
    backLinkTitle: 'Back to program',
    coverUrl: '/cover.png',
  });

  return (
    <div className="page-container">
      <Article {...articleConfig}>
        <p>
          While no one can make more time, energy is a different matter. Ever wonder why it takes
          twice as long to write a report at 2:30 p.m. as it does at 10:30 a.m.? You haven’t gotten
          dumber - it’s just that your energy levels change during the workday. One study found that
          people were most likely to report high energy levels at 8 a.m., probably when that first
          cup of coffee kicked in. Energy levels then drifted steadly downward into the afternoon.
        </p>

        <TipsList items={TIPS} />

        <p>
          Viverra lobortis aliquam vitae dolor quam eget id. Enim eget amet, mauris sagittis eget at
          nec. Varius sed orci nisi ut. Eget tempor pharetra vel urna. Suscipit amet sed donec
          adipiscing eu, dolor velit pretium. Phasellus amet in lacus, scelerisque pellentesque
          habitasse sed elementum nec. Sapien, eget tempus facilisis non. Eros, libero id donec urna
          dolor adipiscing nascetur vitae pellentesque. Semper in ultrices integer ac posuere
          vestibulum arcu tristique facilisi. Id id sagittis, tellus at. Risus, ullamcorper tortor
          leo pulvinar mattis nam sapien. At non vitae dictumst viverra non enim, lorem commodo.
          Nisl blandit venenatis at vulputate. Volutpat adipiscing in consequat urna, quis lectus
          diam. Ut a, varius vel tristique vitae euismod arcu et quam. Nunc aliquam mi convallis
          viverra quis et quam. Justo, ornare in tempus magna sollicitudin iaculis rutrum nibh.
          Massa lectus malesuada a, enim. Diam egestas mi consectetur arcu. Senectus pharetra,
          vestibulum ultrices venenatis. Odio ut in odio tortor sit elementum vulputate magnis. Ut
          eget.
        </p>

        <div className="mb-2">
          <Card>
            <TitleIcon icon={questionIcon}>Go further questions</TitleIcon>
            <p>
              - Do you really stick to your meeting times? Do you usually start on time and end on
              time as well?
            </p>
            <p> - When is the last time you met outside of the office?</p>
            <p> - How do you follow up on the meeting's action plan? </p>
          </Card>
        </div>

        <div className="mb-2">
          <Card>
            <TitleIcon icon={fileIcon}>Go further content</TitleIcon>
            <strong>Jeff Bezos"two pizza rule'</strong>
            <p>
              Amazon CEO's rule does not mandate that pizza be present at meetings, it does mean
              that he would not go to a meeting, if two pizzas wouldn't feed the entire group.
              Inviting the few right persons that can bring value is essential.
            </p>
            <strong>Book</strong>
            <p>
              <span className="text-underline">"Death by meeting"</span> from P.M Lencioni, 2004{' '}
            </p>
          </Card>
        </div>

        <div className="text-center mb-2">
          <Button>Back to the program</Button>
        </div>
      </Article>
    </div>
  );
};
