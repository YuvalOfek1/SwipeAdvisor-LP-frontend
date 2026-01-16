import styles from './Features.module.css'

const Features = () => {
  return (
    <section className={styles.features} id="features">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Why teams choose Swipe Advisor</h2>
          <p>
            Reliable recommendations powered by real-time merchant data and transparent reward
            logic.
          </p>
        </div>
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Live card optimization</h3>
            <p>Get the best card per transaction with instant reward analysis.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Clear savings insights</h3>
            <p>Track realized savings, points, and discounts in a unified dashboard.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Fast setup</h3>
            <p>Connect to your POS workflow in minutes with minimal change management.</p>
          </div>
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Enterprise-ready controls</h3>
            <p>Permissions, audit trails, and reporting built for finance teams.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
