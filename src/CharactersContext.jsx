import { createContext, useState, useEffect } from "react";

export const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      setLoading(true);
      try {
        const characterDetailsResponse = await fetch(
          `https://swapi.py4e.com/api/people/?page=${currentPage}`
        );
        const characterDetails = await characterDetailsResponse.json();
        setCharacters(characterDetails.results);
      } catch (error) {
        console.error("Failed to fetch character details", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, [currentPage]);

  const value = {
    characters,
    currentPage,
    setCurrentPage,
    loading,
  };

  return (
    <CharactersContext.Provider value={value}>
      {children}
    </CharactersContext.Provider>
  );
};
