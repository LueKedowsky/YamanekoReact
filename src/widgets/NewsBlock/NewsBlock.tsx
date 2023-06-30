import './NewsBlock.scss';
import { FC } from 'react';
import newsBanner from 'assets/icons/news.png';

const NewsBlock: FC = () => {
  return (
    <div className="newsBlock-container">
      <img src={newsBanner} alt="" className="news-banner" />
      <div className="newsBlock-news">
        <div className="newsBlock-news--left">
          <div className="newsBlock-news_item first-news">News block 1</div>
        </div>
        <div className="newsBlock-news--center">
          <div className="newsBlock-news_item second-news">News block 2</div>
          <div className="newsBlock-news_item second-news">News block 3</div>
        </div>
        <div className="newsBlock-news--rigth">
          <div className="newsBlock-news_item third-news">News block 4</div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
