import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <strong>Swipe Advisor</strong>
          <p>Optimizing every swipe for maximum rewards.</p>
        </div>
        <div className={styles.links}>
          {/* <a href="#features">Features</a> */}
          <a href="#demo">Demo</a>
          <a href="#waitlist">Waitlist</a>
        </div>
        <span className={styles.copy}>© 2026 Swipe Advisor. All rights reserved.</span>
      </div>
    </footer>
  )
}

export default Footer
