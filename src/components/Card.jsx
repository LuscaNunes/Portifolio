// src/components/Card.jsx
const Card = ({ title, description, image, link }) => {
  return (
    <div className="card">
      <img src={image} alt={title} /> {/* Exibe a imagem */}
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Ver mais</a>
    </div>
  );
};

export default Card;