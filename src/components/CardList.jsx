import { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import "./CardList.css";

const CardList = ({
  cards,
  showBookmarksOnly,
  onToggleBookmark,
  onEditCard,
  onDeleteCard,
}) => {
  // Track index of currently active edit-menu
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuToggle = (index) => {
    // If index of currently active edit-menu matches index of clicked card, close it
    // Otherwise, open edit-menu for clicked card
    setActiveMenu(activeMenu === index ? null : index);
  };

  const handleClickOutside = (event) => {
    // Close edit-menu if click event occurs outside of currently active edit-menu
    if (!event.target.closest(".card__edit-menu")) {
      setActiveMenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const filteredCards = showBookmarksOnly
    ? cards.filter((card) => card.isBookmarked)
    : cards;

  return (
    <div className="card__list">
      {filteredCards.length > 0 ? (
        filteredCards.map((card, index) => (
          <div key={index}>
            <Card
              card={card}
              onToggleBookmark={onToggleBookmark}
              onEditCard={onEditCard}
              onDeleteCard={onDeleteCard}
              onMenuToggle={() => handleMenuToggle(index)}
              isMenuActive={activeMenu === index}
            />
          </div>
        ))
      ) : (
        <div className="card">
          {showBookmarksOnly ? (
            <>
              <h2 className="card__title">No bookmarks yet</h2>
              <p className="text">
                To save a quiz card on your bookmarks page, simply click on its
                bookmark in the top right-hand corner. Repeat to remove it
                again.
              </p>
            </>
          ) : (
            <>
              <h2 className="card__welcome">Welcome!</h2>
              <p>
                Pretty empty here, isn't it?
                <br />
                Start adding a few quiz cards right away.
              </p>
              <Button to="/form" className="button">
                Add first quiz card
              </Button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CardList;
