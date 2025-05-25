import "../styles/Card.css";

function Card({ characters, handleCardClick }) {
  return (
    <>
      {characters &&
        characters.map((character, index) => (
          <>
            <div
              className="card-frame"
              key={index}
              onClick={() => handleCardClick(index)}
            >
              <div className="character-img-container">
                <img
                  className="character-img"
                  src={`https://picsum.photos/200/300?random=${index}`}
                  alt=""
                />
              </div>
              <div className="character-name">
                <p>{character.name}</p>
              </div>
            </div>
          </>
        ))}
    </>
  );
}

export default Card;
