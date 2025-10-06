import "./ImageCard.css";

const ImageCard = ({ image, title }) => {
  return (
    <div className="image-card">
      <img className="image-card__image" src={image} alt={title} />
      <h2 className="image-card__title">{title}</h2>
    </div>
  );
};

export default ImageCard;
