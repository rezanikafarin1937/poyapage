import styles from "./card.module.scss";

type TProps = {
  image : string;
  title : string;
  description : string;

}

const Card = ({image,title,description} : TProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={image} alt=" نمونه کار طراحی سایت شرکتی فروشگاهی پنل مدیریتی" />
      </div>
      <div className={styles.card__title}>
        {title}
      </div>
      <div className={styles.card__description}>
        {description}
      </div>
    </div>
  )
}

export default Card
