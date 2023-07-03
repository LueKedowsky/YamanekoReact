import './Page404.scss';
import cat404 from 'assets/icons/404.svg';

function Page404() {
  return (
    <div className="page404-container">
      <h1 className="page404-header1">404</h1>
      <h3 className="page404-header3">Страница не найдена!</h3>
      <img className="page404-cat" src={cat404} alt="" />
    </div>
  );
}

export default Page404;
