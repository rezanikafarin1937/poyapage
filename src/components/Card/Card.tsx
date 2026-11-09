import styles from "./card.module.scss";

type TProps = {
  image: string;
  title: string;
  description: string;
  imageAlt: string;
};

const Card = ({ image, title, description, imageAlt }: TProps) => {
  return (
    <article className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt={imageAlt} loading="lazy" decoding="async" />
      </div>
      <div className={styles.card__title}>
        <h3>{title}</h3>
      </div>
      <div className={styles.card__description}>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
