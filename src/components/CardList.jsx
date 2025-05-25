import { useState, useContext } from "react";
import "../styles/CardList.css";
import Card from "./Card";
import Loading from "./Loading";
import CardModal from "./CardModal";
import { CharactersContext } from "../CharactersContext";

function CardList() {
  const { characters, loading } = useContext(CharactersContext);

  const [modal, setModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
    setSelectedCard(null);
  };

  if (loading)
    return (
      <div className="loading-wrapper">
        <Loading />
      </div>
    );
  return (
    <>
      <div className="card-list-grid">
        <Card characters={characters} handleCardClick={handleCardClick} />
      </div>
      <CardModal
        selectedCard={selectedCard}
        modal={modal}
        closeModal={closeModal}
      />
    </>
  );
}

export default CardList;
