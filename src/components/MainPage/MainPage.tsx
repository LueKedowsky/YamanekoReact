import LastReleases from "../LastReleases/LastReleases";
import NewsBlock from "../NewsBlock/NewsBlock";

const MainPage = () => {
  return (
    <div className="wrapper-container">
      <main>
        <LastReleases />
        <NewsBlock />
      </main>
    </div>
  );
};

export default MainPage;
