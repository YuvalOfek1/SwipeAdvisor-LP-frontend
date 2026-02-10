import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a className={styles.brand} href="#top">
          <img className={styles.logo} src="/SwipeAdvisor.jpg" alt="Swipe Advisor" />
        </a>
        <nav className={styles.nav}>
          {/* <a href="#features">Features</a> */}
          <a href="#demo">Demo</a>
          <a href="#metrics">Impact</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
        <a className={`btn btnPrimary ${styles.cta}`} href="#waitlist">
          Join waitlist
        </a>
      </div>
    </header>
  )
}

export default Header
