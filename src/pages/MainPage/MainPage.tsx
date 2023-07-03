import './MainPage.scss';
import LastReleases from 'widgets/LastReleases/LastReleases';
import NewsBlock from 'widgets/NewsBlock/NewsBlock';
import AdBanner from 'widgets/AdBanner/AdBanner';

const MainPage = () => {
  return (
    <div className="mainPage-container">
      <main className="mainPage-main">
        <LastReleases />
        <AdBanner />
        <NewsBlock />
      </main>
    </div>
  );
};

export default MainPage;
