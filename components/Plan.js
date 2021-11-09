import styles from "../styles/components/Plan.module.sass";

export const Plan = ({ plan }) => {
  const { title, price, features, highlight, currency } = plan;

  return (
    <div
      className={`${styles.container} ${
        highlight ? styles.highlightContainer : ""
      }`}
    >
      <h2 className={styles.title}>{title}</h2>
      <h3
        className={`${styles.currency} ${
          highlight ? styles.highlightCurrency : ""
        }`}
      >{`${currency} ${price}`}</h3>
      <div>
        {features.map((feature, index) => (
          <label key={index} className={styles.feature}>
            {feature}
          </label>
        ))}
      </div>

      <button
        className={`${styles.button} ${
          highlight ? styles.highlightButton : ""
        }`}
      >
        Select Plan
      </button>
    </div>
  );
};
