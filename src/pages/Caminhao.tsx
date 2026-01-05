import "../styles/Caminhao.css";

function Caminhao() {
  return (
    <div className="caminhao-container">
      <div className="caminhao-panel">

        {/* Header */}
        <div className="caminhao-header">
          <h1>Ordeno</h1>
        </div>

        {/* Subheader */}
        <div className="caminhao-subheader">
          <span>Rotas</span>
        </div>

        {/* Lista */}
        <div className="caminhao-list">
          <div className="caminhao-list-header">
            <span>Destino</span>
            <span>Distância</span>
            <span>Tempo</span>
          </div>

          {Array.from({ length: 4 }).map((_, index) => (
            <div className="caminhao-list-row" key={index}>
              <span>Morro do Alemão</span>
              <span>12053km</span>
              <span>13:52:00</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Caminhao;
