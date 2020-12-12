import React from 'react';

import './Article.scss';

type ArticleProps = {
  title: string;
  description: string;
  category: string;
  time: string;
  author: string;
  authorImg: string;
  backLink: string;
  backLinkTitle: string;
  coverUrl: string;
};

export const Article: React.FC<ArticleProps> = (props) => {
  const {
    title,
    description,
    category,
    time,
    author,
    authorImg,
    backLink,
    backLinkTitle,
    coverUrl,
  } = props;

  return (
    <article className="article">
      <header className="article__header">
        <a className="article__back-link" href={backLink}>
          {backLinkTitle}
        </a>

        <span className="article__category">{category}</span>

        <span className="article__time">{time} read</span>

        <h1 className="article__title">{title}</h1>

        <p className="article__description">{description}</p>

        <div className="article__author">
          <img className="article__author-avatar" src={authorImg} alt={author} />

          <div className="article__author-info">
            Written by
            <br />
            <strong>{author}</strong>
          </div>
        </div>

        <div className="article__cover">
          <img className="article__cover-img" src={coverUrl} alt={title} />
        </div>
      </header>

      <div className="article__content">{props.children}</div>
    </article>
  );
};
