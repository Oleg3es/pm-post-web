import React from 'react'
import classes from './MediaModal.module.css'

const MediaModal = ({ media, mediaModule, setMediaModule, currentIndex, setCurrentIndex, mediaList }) => {

  const rootClasses = [classes.mediaModal]
  if (mediaModule) {
    rootClasses.push(classes.active)
  }

  const handlePrev = () => {
    if (currentIndex < mediaList.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  }

  const handleNext = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  const currentMedia = mediaList[currentIndex];

  return (
    <div className={rootClasses.join(' ')} onClick={() => setMediaModule(false)}>
      <div className={classes.mediaModalContent} onClick={(e) => e.stopPropagation()}>
        {media ? (
          media.type.startsWith('video') ? (
            <div className={classes.mediaContent}>
              <video controls src={currentMedia.url} type={currentMedia.type} />
            </div>
          ) : (
            <div className={classes.mediaContent}><img src={currentMedia.url} alt="Media content" /></div>
          )
        ) : (
          <div className={classes.mediaContent}>Загрузка...</div>
        )}
        <div className={classes.mediaModuleControls}>
          <button onClick={handlePrev} disabled={currentIndex === 0}>Предыдущий</button>
          <button onClick={handleNext} disabled={currentIndex === mediaList.length - 1}>Следующий</button>
        </div>
      </div>
    </div>
  )
}

export default MediaModal