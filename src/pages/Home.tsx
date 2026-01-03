import Card from "../components/Card";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="section">
        <h2 className="section-title">Cadastro</h2>
        <div className="cards-grid">
          <Card route="/caminhao" />
          <Card />
          <Card />
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Monitoramento</h2>
        <div className="cards-grid">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </div>
  );
}

export default Home;
