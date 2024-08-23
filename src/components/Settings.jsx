import { useEffect, useState } from "react";
import "../components/Card.css";
import "../components/Settings.css";
import QuizCardIcon from "../assets/icons/icon_quiz-card.svg";
import BookmarkIcon from "../assets/icons/icon_bookmark_selected.svg";

const Settings = ({ darkMode, setDarkMode }) => {
  const [totalQuizCards, setTotalQuizCards] = useState(0);
  const [totalBookmarkedCards, setTotalBookmarkedCards] = useState(0);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("quizCards")) || [];
    setTotalQuizCards(storedCards.length);
    const bookmarkedCount = storedCards.filter(
      (card) => card.isBookmarked
    ).length;
    setTotalBookmarkedCards(bookmarkedCount);
  }, []);

  const handleToggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="card">
      <h2 className="card__title">Stats</h2>
      <div className="card__stats">
        <div className="card__counter">
          <img
            src={QuizCardIcon}
            alt="Number of created quiz cards"
            className="card__counter-icon"
          />
          <span className="card__counter-number">{totalQuizCards}</span>
        </div>
        <div className="card__counter">
          <img
            src={BookmarkIcon}
            alt="Number of bookmarked cards"
            className="card__counter-icon"
          />
          <span className="card__counter-number">{totalBookmarkedCards}</span>
        </div>
      </div>
      <div className="card__settings">
        <h2 className="card__title">Dark Mode</h2>
        <label className="card__switch" htmlFor="theme-toggle">
          <input
            type="checkbox"
            id="theme-toggle"
            checked={darkMode}
            onChange={handleToggleTheme}
          />
          <div className="card__slider"></div>
        </label>
      </div>
    </div>
  );
};

export default Settings;
