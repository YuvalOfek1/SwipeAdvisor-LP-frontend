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
        <video
          className={styles.player}
          controls
          playsInline
          preload="metadata"
        >
          <source src="/SwipeAdvisorStory.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  )
}


export default VideoPlaceholder
