import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SingleReleaseDataType } from 'types/dataTypes';
import axios from 'axios';
import Footer from 'components/Footer/Footer';
import Header from 'components/Header/Header';
import MainPage from 'components/MainPage/MainPage';
import ReleasesPage from 'components/ReleasesPage/ReleasesPage';
import CinemaPage from 'components/CinemaPage/CinemaPage';
import SignIn from 'components/SignIn/SignIn';
import Page404 from './components/Page404/Page404';

function App() {
  const [data, setData] = useState<SingleReleaseDataType[]>([]);
  const getData = async (link: string) => {
    await axios
      .get(link)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
        console.log(data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData('https://yamaneko.fun/api/get_releases');
  }, []);

  // const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));

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
