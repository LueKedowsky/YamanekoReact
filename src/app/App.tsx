import { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from 'widgets/Footer/Footer';
import Header from 'widgets/Header/Header';
import MainPage from 'pages/MainPage/MainPage';
import ReleasesPage from 'pages/ReleasesPage/ReleasesPage';
import CinemaPage from 'pages/CinemaPage/CinemaPage';
import SignIn from 'pages/SignIn/SignIn';
import ReleasesDataContext from 'context/ReleasesDataContext';
import Page404 from 'pages/Page404/Page404';

function App() {
  const data = useContext(ReleasesDataContext);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/releases" element={<ReleasesPage />} />
        <Route path="/sign-in" element={<SignIn />} />
        {data.map(
          ({
            id,
            titleLink,
            releasePoster,
            releaseTrailer,
            releaseTitleRu,
            releaseTitleOrig,
            releaseGenresList,
            screenshots,
            roles,
            releaseDescription,
          }) => (
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
                  releaseDescription={releaseDescription}
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
