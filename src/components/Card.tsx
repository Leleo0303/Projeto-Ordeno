import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

interface CardProps {
  title?: string;
  route?: string;
}

function Card({ title, route }: CardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (route) {
      navigate(route);
    }
  };

  return (
    <div className="card" onClick={handleClick}>
      {title && <p className="card-title">{title}</p>}
    </div>
  );
}

export default Card;
