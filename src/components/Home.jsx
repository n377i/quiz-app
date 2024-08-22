import { useEffect, useState } from "react";
import CardList from "../components/CardList";

const Home = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const storedCards = JSON.parse(localStorage.getItem("quizCards")) || [];
    setCards(storedCards);
  }, []);

  const toggleBookmark = (cardToToggle) => {
    const updatedCards = cards.map((card) =>
      card === cardToToggle
        ? { ...card, isBookmarked: !card.isBookmarked }
        : card
    );
    setCards(updatedCards);
    localStorage.setItem("quizCards", JSON.stringify(updatedCards));
  };

  return <CardList cards={cards} onToggleBookmark={toggleBookmark} />;
};

export default Home;
