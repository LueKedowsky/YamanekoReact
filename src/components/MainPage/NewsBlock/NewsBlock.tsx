import "./NewsBlock.scss";

const NewsBlock: React.FC = () => {
  return (
    <div className="news-container">
      <div className="news-wrapper">
        <div className="news">
          <img src="../assets/icons/news.png" alt="NEWS" className="news-icon" />
          <div className="news-row">
            <div className="news-block news-block-1">
              <p>Block 1</p>
            </div>
            <div className="two-news-block">
              <div className="news-block news-block-2">
                <p>Block 2</p>
              </div>
              <div className="news-block news-block-3">
                <p>Block 3</p>
              </div>
            </div>
            <div className="news-block news-block-4">
              <p>Block 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsBlock;
