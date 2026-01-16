import { toast } from 'react-toastify'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <span className={styles.dot} aria-hidden="true" />
          <span>Swipe Advisor</span>
        </div>
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
