import styles from "./service.module.scss";

type ServiceCardProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  logo ?: boolean
};

const ServiceCard = ({ children, title, description,logo = false }: ServiceCardProps) => {
  return (
    <li className={`${styles.parent} ${logo ? styles.parent__logo : styles.parent__nologo}`}>
      <div className={styles.parent__space} aria-hidden="true">{children}</div>
      <div className={styles.parent__text}>
        <h3 className={styles.parent__title}>{title}</h3>
        <p className={styles.parent__description}>{description}</p>
      </div>
    </li>
  );
};

export default ServiceCard;
