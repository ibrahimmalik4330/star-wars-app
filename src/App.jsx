import Home from "./pages/Home";
import { CharactersProvider } from "./CharactersContext";

function App() {
  return (
    <CharactersProvider>
      <Home />
    </CharactersProvider>
  );
}

export default App;
