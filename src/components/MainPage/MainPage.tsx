import "./MainPage.scss";
import LastReleases from "./LastReleases/LastReleases";
import NewsBlock from "./NewsBlock/NewsBlock";
import axios from "axios";

const MainPage = () => {
  axios
    .get("http://94.142.139.111/api/get_releases")
    .then(function (response) {
      // handle success
      console.log(response.data, "RESPONSE LOG");
    })
    .catch(function (error) {
      // handle error
      console.log(error, "ERROR LOG");
    })
    .finally(function () {
      // always executed
    });

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
