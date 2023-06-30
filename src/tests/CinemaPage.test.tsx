import CinemaPage from 'pages/CinemaPage/CinemaPage';
import { render, screen } from '@testing-library/react';

test('Is CinemaPage are renders', () => {
  const data = {
    id: 1,
    titleLink: '/bungouStrayDogsMovie1',
    releasePoster:
      'https://dere.shikimori.me/uploads/poster/animes/34944/c8dbe1a2373441745a34709035780000.jpeg',
    releaseTrailer: 'https://yamaneko.fun/files/preview.mp4',
    releaseTitleRu: 'Великий из бродячих псов: Сгнившее яблоко',
    releaseTitleOrig: 'Bungou Stray Dogs: Dead Apple',
    releaseGenresList: ['Детектив', 'Сверхъестественное', 'Экшен'],
    screenshots: [
      'https://desu.shikimori.me/system/screenshots/original/5615490babe411b038ae066b70bba0f563da464a.jpg?1521661427',
      'https://dere.shikimori.me/system/screenshots/original/539aa3b2ec6cd63449889cadbd6fa3ceac51744a.jpg?1521661431',
    ],
    roles: [
      {
        name: 'Накаджима Ацуши',
        picture:
          'https://nyaa.shikimori.me/uploads/poster/characters/125055/preview-65ead6de927db84fa4ed3db2f571bfec.webp',
        dubber: 'Jet',
      },
      {
        name: 'Осаму Дазай',
        picture:
          'https://kawai.shikimori.me/uploads/poster/characters/125056/preview-9999ee3fc60971ea032235e57ba32db8.webp',
        dubber: 'Jet',
      },
      {
        name: 'Акутагава Рюноске',
        picture:
          'https://kawai.shikimori.me/uploads/poster/characters/132571/preview-ee99a05fabe27ce4064d213de75fecd9.webp',
        dubber: 'Jet',
      },
    ],
    releaseDescription:
      'Неожиданно по всему миру люди, обладающие сверхспособностями, начинают совершать самоубийства один за другим. Каждый такой случай отличается появлением загадочного тумана. Анго Сакагути обращается к «Вооружённому детективному агентству» с просьбой о помощи в поимке человека, подозреваемого в причастности к этим инцидентам. Их целью становится Тацухико Сибусава, или, как он сам себя называет, «Коллекционер».',
  };
  render(
    <CinemaPage
      itemId={data.id}
      titleLink={data.titleLink}
      releasePoster={data.releasePoster}
      releaseTrailer={data.releaseTrailer}
      releaseTitleRu={data.releaseTitleRu}
      releaseTitleOrig={data.releaseTitleOrig}
      releaseGenresList={data.releaseGenresList}
      screenshots={data.screenshots}
      roles={data.roles}
      releaseDescription={data.releaseDescription}
    />
  );
  const description = screen.getByRole('contentinfo');
  expect(description).toHaveTextContent(data.releaseDescription);

  const trailer = screen.getByTestId('cinema-trailer');
  expect(trailer).toBeInTheDocument();
});
