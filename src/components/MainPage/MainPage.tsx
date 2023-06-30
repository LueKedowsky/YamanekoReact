import './MainPage.scss';
import LastReleases from '../../widgets/LastReleases/LastReleases';
import NewsBlock from '../../widgets/NewsBlock/NewsBlock';

const MainPage = () => {
  return (
    <div className="mainPage-container">
      <main className="mainPage-main">
        <LastReleases />
        <NewsBlock />
      </main>
    </div>
  );
};

export default MainPage;
