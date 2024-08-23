import { useState } from "react";
import Button from "./Button";
import EditMenuIcon from "../assets/icons/icon_edit.svg";
import BookmarkIcon from "../assets/icons/icon_bookmark.svg";
import BookmarkSelectedIcon from "../assets/icons/icon_bookmark_selected.svg";

const Card = ({
  card,
  onToggleBookmark,
  onEditCard,
  onDeleteCard,
  onMenuToggle,
  isMenuActive,
}) => {
  const { question, answer, tags, isBookmarked } = card;
  const [showAnswer, setShowAnswer] = useState(false);

  const handleToggleAnswer = () => setShowAnswer((prev) => !prev);

  return (
    <div className="card">
      {/* Bookmark */}
      <span
        className="card__bookmark"
        role="img"
        aria-label="bookmark"
        onClick={() => onToggleBookmark(card)}
      >
        <img
          src={isBookmarked ? BookmarkSelectedIcon : BookmarkIcon}
          alt={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          className="card__bookmark-icon"
        />
      </span>
      {/* Edit Button */}
      <img
        src={EditMenuIcon}
        alt="Open edit menu"
        className="card__edit-menu-button"
        onClick={onMenuToggle}
      />
      {/* Edit Menu */}
      {isMenuActive && (
        <div className="card__edit-menu">
          <ul>
            <li
              className="card__edit-menu-item"
              onClick={() => {
                onEditCard(card);
                onMenuToggle();
              }}
            >
              Edit
            </li>
            <li
              className="card__edit-menu-item"
              onClick={() => {
                onDeleteCard(card);
                onMenuToggle();
              }}
            >
              Delete
            </li>
          </ul>
        </div>
      )}
      {/* Question */}
      <h2 className="card__question">{question}</h2>
      {/* Answer */}
      <p className={`card__answer ${showAnswer ? "" : "hidden"}`}>{answer}</p>
      {/* Show/Hide Answer Button */}
      <Button className="button card__button" onClick={handleToggleAnswer}>
        {showAnswer ? "Hide Answer" : "Show Answer"}
      </Button>
      {/* Tags */}
      <ul className="card__tag-list">
        {tags.map((tag, index) => (
          <li key={index} className="card__tag">
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
