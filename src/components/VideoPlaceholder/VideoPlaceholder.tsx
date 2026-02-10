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
        <a className={styles.preview} href="#demo">
          <video
            className={styles.thumbnail}
            src="/SwipeAdvisorStory.mp4#t=20.0"
            muted
            playsInline
            preload="metadata"
          />
          <div className={styles.overlay}>
            <div className={styles.play} aria-hidden="true">▶</div>
          </div>
        </a>
      </div>
    </section>
  )
}


export default VideoPlaceholder
