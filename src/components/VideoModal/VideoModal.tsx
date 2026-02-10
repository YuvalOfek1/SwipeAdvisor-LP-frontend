import { useEffect, useRef } from 'react'
import styles from './VideoModal.module.css'

interface Props {
  onClose: () => void
}

const VideoModal = ({ onClose }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose} aria-label="Close">
          ✕
        </button>
        <video
          ref={videoRef}
          className={styles.player}
          controls
          autoPlay
          playsInline
        >
          <source src="/SwipeAdvisorStory.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  )
}

export default VideoModal
