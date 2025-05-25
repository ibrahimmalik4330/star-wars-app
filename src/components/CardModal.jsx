import { useContext, useEffect, useState } from "react";
import { CharactersContext } from "../CharactersContext";
import Loading from "./Loading";
import "../styles/CardModal.css";

function CardModal({ selectedCard, modal, closeModal }) {
  const { characters } = useContext(CharactersContext);

  const [homeWorld, setHomeWorld] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (characters?.[selectedCard]?.homeworld) {
      const fetchHomeWorldInfo = async () => {
        setLoading(true);
        try {
          const homeWorldDetailsResponse = await fetch(
            characters[selectedCard].homeworld
          );
          const homeWorldDetails = await homeWorldDetailsResponse.json();
          setHomeWorld(homeWorldDetails);
        } catch (e) {
          console.error("Failed to fetch home world details", e);
        } finally {
          setLoading(false);
        }
      };
      fetchHomeWorldInfo();
    }
  }, [characters, selectedCard]);

  function formatCreatedDate(created) {
    const date = new Date(created);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  function numberOfFilms(array) {
    return array.length || 0;
  }

  function numberOfResidents(array) {
    return array.length || 0;
  }

  if (!modal || selectedCard === null || !characters[selectedCard]) return null;
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-frame">
          <div className="modal-character-name">
            <h2>{characters[selectedCard].name}</h2>
          </div>
          <div className="character-info">
            <p>Height : {characters[selectedCard].height} cm</p>
            <p>Mass : {characters[selectedCard].mass} kg</p>
            <p>Birth Year : {characters[selectedCard].birth_year}</p>
            <p>
              Date Added : {formatCreatedDate(characters[selectedCard].created)}
            </p>
            <p>
              Number Of Films : {numberOfFilms(characters[selectedCard].films)}
            </p>
          </div>
          <div className="home-world-heading">Home World</div>
          <div className="home-world-info">
            {loading ? (
              <>
                <div className="home-world-loading-wrapper">
                  <Loading />
                </div>
              </>
            ) : (
              <>
                <p>Name : {homeWorld.name.toUpperCase()}</p>
                <p>Terrain : {homeWorld.terrain.toUpperCase()}</p>
                <p>Climate : {homeWorld.climate.toUpperCase()}</p>
                <p>
                  Number of Residents : {numberOfResidents(homeWorld.residents)}
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
