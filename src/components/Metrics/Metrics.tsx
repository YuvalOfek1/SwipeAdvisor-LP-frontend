import styles from './Metrics.module.css'

const Metrics = () => {
  return (
    <section className={styles.metrics} id="metrics">
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.label}>Average monthly savings</p>
          <h3 className={styles.value}>8–14%</h3>
          <p className={styles.detail}>Typical improvement in rewards value per business.</p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Supported cards</p>
          <h3 className={styles.value}>Bit (Carrefour) · Hever</h3>
          <p className={styles.detail}>Major networks with reward categories optimized.</p>
        </div>
        <div className={styles.card}>
          <p className={styles.label}>Businesses supported</p>
          <h3 className={styles.value}>450+</h3>
          <p className={styles.detail}>Retail, hospitality, professional services, and more...</p>
        </div>
      </div>
    </section>
  )
}

export default Metrics
