import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../components/CardList";

const CardContainer = ({ showBookmarksOnly }) => {
  const [cards, setCards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("quizCards")) || [];
    setCards(storedCards);
  }, []);

  const handleToggleBookmark = (cardToToggle) => {
    // Toggle bookmark status by setting isBookmarked flag to true/false
    const updatedCards = cards.map((card) =>
      card === cardToToggle
        ? { ...card, isBookmarked: !card.isBookmarked }
        : card
    );
    // Save updated cards array to localStorage
    setCards(updatedCards);
    localStorage.setItem("quizCards", JSON.stringify(updatedCards));
  };

  const handleEditCard = (cardToEdit) => {
    const cardIndex = cards.indexOf(cardToEdit);
    navigate("/form", {
      state: { cardToEdit: { ...cardToEdit, index: cardIndex } },
    });
  };

  const handleDeleteCard = (cardToDelete) => {
    // Filter out card to delete from cards array
    const updatedCards = cards.filter((card) => card !== cardToDelete);
    // Save updated cards array to localStorage
    setCards(updatedCards);
    localStorage.setItem("quizCards", JSON.stringify(updatedCards));
  };

  return (
    <CardList
      cards={cards}
      showBookmarksOnly={showBookmarksOnly}
      onToggleBookmark={handleToggleBookmark}
      onDeleteCard={handleDeleteCard}
      onEditCard={handleEditCard}
    />
  );
};

export default CardContainer;
