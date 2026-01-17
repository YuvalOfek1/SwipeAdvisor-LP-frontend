import styles from './VideoPlaceholder.module.css'

const VideoPlaceholder = () => {
  return (
    <section className={styles.video} id="demo">
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.title}>Product demo</h2>
          <p>
            A short walkthrough video will live here. It will show the swipe flow, the instant
            recommendations, and the savings dashboard.
          </p>
        </div>
        <div className={styles.placeholder}>
          <div className={styles.play} aria-hidden="true">
            ▶
          </div>
          <span>Demo video placeholder</span>
        </div>
      </div>
    </section>
  )
}


export default VideoPlaceholder
