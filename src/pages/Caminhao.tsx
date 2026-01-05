import PageLayout from "../components/PageLayout/PageLayout";
import List from "../components/List/List";

interface Rota {
  destino: string;
  distancia: string;
  tempo: string;
}

function Caminhao() {
  const columns = [
    { key: "destino", label: "Destino" },
    { key: "distancia", label: "Distância" },
    { key: "tempo", label: "Tempo" },
  ] as const;

  const data: Rota[] = [
    { destino: "Morro do Alemão", distancia: "12053km", tempo: "13:52:00" },
    { destino: "Morro do Alemão", distancia: "12053km", tempo: "13:52:00" },
    { destino: "Morro do Alemão", distancia: "12053km", tempo: "13:52:00" },
    { destino: "Morro do Alemão", distancia: "12053km", tempo: "13:52:00" },
  ];

  return (
    <PageLayout title="Ordeno" subtitle="Rotas">
      <List<Rota> columns={columns} data={data} />
    </PageLayout>
  );
}

export default Caminhao;
