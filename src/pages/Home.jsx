import CardList from "../components/CardList";
import Header from "../components/Header";
import "../styles/General.css";
import Pagination from "../components/Pagination";

function Home() {
  return (
    <>
      <Header />
      <div className="content-container">
        <div className="card-list-container">
          <CardList />
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default Home;
