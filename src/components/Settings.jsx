import "../components/Card.css";

const Settings = () => {
  return (
    <div className="card">
      <h2 className="card__title">Stats</h2>
      <div className="card__stats">
        <div className="card__counter">
          <span
            className="card__counter-icon card__counter-icon--questions"
            role="img"
            aria-label="created questions"
          ></span>
          <span className="card__counter-number" data-js="num-of-created-cards">
            0
          </span>
        </div>
        <div className="card__counter">
          <span
            className="card__counter-icon card__counter-icon--bookmark"
            role="img"
            aria-label="created bookmarks"
          ></span>
          <span
            className="card__counter-number"
            data-js="num-of-bookmarked-cards"
          >
            0
          </span>
        </div>
      </div>
      <div className="card__settings">
        <h2 className="card__title">Dark Mode</h2>
        <label className="card__switch" htmlFor="theme-toggle">
          <input type="checkbox" id="theme-toggle" />
          <div className="card__slider"></div>
        </label>
      </div>
    </div>
  );
};

export default Settings;
