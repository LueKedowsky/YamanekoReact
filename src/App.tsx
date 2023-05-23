import { Route, Routes } from "react-router-dom";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MainPage from "@/components/MainPage/MainPage";
import ReleasesPage from "@/components/ReleasesPage/ReleasesPage";
import Page404 from "./components/Page404/Page404";
import data from "./data/tempData/data.json";
import { SingleReleaseDataType } from "@/Types/dataTypes";
import CinemaPage from "@/components/CinemaPage/CinemaPage";
import SignIn from "@/components/SignIn/SignIn";

function App() {
  const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/releases" element={<ReleasesPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        {releaseData.map(
          ({ id, titleLink, releasePoster, releaseTrailer, releaseTitleRu, releaseTitleOrig, releaseGenresList, screenshots, roles, releaseDesctiption }) => (
            <Route
              key={id}
              path={titleLink}
              element={
                <CinemaPage
                  itemId={id}
                  titleLink={titleLink}
                  releasePoster={releasePoster}
                  releaseTrailer={releaseTrailer}
                  releaseTitleRu={releaseTitleRu}
                  releaseTitleOrig={releaseTitleOrig}
                  releaseGenresList={releaseGenresList}
                  screenshots={screenshots}
                  roles={roles}
                  releaseDesctiption={releaseDesctiption}
                />
              }
            />
          )
        )}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
