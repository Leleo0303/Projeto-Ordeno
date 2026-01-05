import { useEffect } from "react";
import PageList from "../components/PageList/PageList";

interface CaminhaoProps {
  setSubtitle: (value?: string) => void;
}

interface Rota {
  destino: string;
  distancia: string;
  tempo: string;
}

const rotas: readonly Rota[] = [
  { destino: "São Paulo", distancia: "430 km", tempo: "6h" },
  { destino: "Campinas", distancia: "95 km", tempo: "1h30" },
  { destino: "Ribeirão Preto", distancia: "315 km", tempo: "4h" },
];

function Caminhao({ setSubtitle }: CaminhaoProps) {
  useEffect(() => {
    setSubtitle("Cadastro de Caminhão");
    return () => setSubtitle(undefined);
  }, [setSubtitle]);

  return (
    <PageList
      items={rotas}
      fields={[
        { key: "destino", label: "Destino" },
        { key: "distancia", label: "Distância" },
        { key: "tempo", label: "Tempo" },
      ]}
    />
  );
}

export default Caminhao;
