import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <a href="/">
          <img
            className="header__logo-img"
            src="../../../public/surface1.svg"
            alt="логотип компании Инфоурок"
          />
        </a>
        <h3 className="header__logo-heading">Логотип</h3>
      </div>
      <ul className="header__list">
        <li className="header__list-item">
          Прием заявок
          <p className="header__list-text">
            до<span className="header__list-number">11</span>марта
          </p>
        </li>
        <li className="header__list-item">
          Получение заданий
          <p className="header__list-text">
            <span className="header__list-number">4</span>марта
          </p>
        </li>
        <li className="header__list-item">
          Внесение ответов
          <p className="header__list-text">
            до<span className="header__list-number">18</span>марта
          </p>
        </li>
        <li className="header__list-item">
          Итоги конкурса
          <p className="header__list-text">
            <span className="header__list-number">19</span>марта
          </p>
        </li>
      </ul>
      <button className="header__button">Вход в кабинет</button>
    </header>
  );
}

export default Header;
