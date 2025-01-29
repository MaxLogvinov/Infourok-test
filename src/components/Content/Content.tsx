import './Content.css';

function Content() {
  return (
    <main className="main">
      <section className="content">
        <div className="content__container">
          <h1 className="content__title">
            Тестовое задание для <span className="content__title_accent">самого лучшего </span>
            верстальщика
          </h1>
          <div className="content__media-container">
            <div className="content__button-container">
              <h3 className="content__heading">Низкий оргвзнос</h3>
              <div className="content__circle-container">
                <h2 className="content__price">30</h2>
                <span className="content__ruble"></span>
                <div className="content__circle"></div>
              </div>
              <button className="content__button">Подать заявку на участие</button>
            </div>
            <div className="content__info-container">
              <ul className="content__info">
                <li className="content__info-item content__info-item_heading">Ученикам</li>
                <li className="content__info-item">Конкурс по 16 предметам</li>
                <li className="content__info-item">Доступные задания для всех учеников</li>
                <li className="content__info-item">Бесплатные дипломы и сертификаты</li>
              </ul>
              <ul className="content__info">
                <li className="content__info-item content__info-item_heading">Учителям</li>
                <li className="content__info-item">Бесплатные свидетельства</li>
                <li className="content__info-item">Бесплатные благодарности</li>
                <li className="content__info-item">Простое участие</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Content;
