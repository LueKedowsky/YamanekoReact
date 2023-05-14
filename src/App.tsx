import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainPage from "./components/MainPage/MainPage";
import ReleasesPage from "./components/ReleasesPage/ReleasesPage";
import Page404 from "./components/Page404/Page404";
import data from "./data/tempData/data.json";
import { SingleReleaseDataType } from "./Types/dataTypes";
import CinemaPage from "./components/CinemaPage/CinemaPage";

function App() {
  const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const titleLinks = releaseData.map((item) => <Link to={item.titleLink} />);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/releases" element={<ReleasesPage />} />
        <Route path=":titleLinks" element={<CinemaPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
