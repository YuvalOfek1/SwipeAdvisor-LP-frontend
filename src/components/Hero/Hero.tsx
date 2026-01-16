import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.kicker}>Smart payments, better rewards</p>
          <h1 className={styles.title}>Swipe Advisor</h1>
          <p className={styles.subtitle}>
            Smarter card choices at the moment you pay—personalized guidance that saves
            businesses money in seconds.
          </p>
          <div className={styles.actions}>
            <a className="btn btnPrimary" href="#waitlist">
              Join the waitlist
            </a>
            <a className="btn btnGhost" href="#demo">
              See demo
            </a>
          </div>
          <p className={styles.note}>Built for reliable, compliant, and fast decisions.</p>
        </div>
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Real-time optimization</h3>
          <p>
            Swipe Advisor evaluates eligible cards instantly and recommends the best option for
            cash back, points, or discounts.
          </p>
          {/* <div className={styles.badges}>
            <span>Checkout-ready</span>
            <span>Secure by design</span>
            <span>POS friendly</span>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
