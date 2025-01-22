import React, { useEffect, useState } from 'react'
import EditButton from './UI/button/EditButton'
import MediaModal from './UI/Modal/MediaModal';
import userAvater from '../img/Ellipse 1.png'


const PostItem = (props) => {

  const [mediaModule, setMediaModule] = useState(false);
  const [media, setMedia] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);


  const openModal = (media, index) => {
    setMediaModule(true);
    setCurrentIndex(index)
  }

  const handleEdit = () => {
    props.onEdit(props.post)
  }

  useEffect(() => {
    console.log(media)
  }, [media])



  return (
    <div className="post">
      <div className='post__user-wrapper'>
        <div className='post__user'>
          <div className="post__user-avatar">
            <img src={userAvater} alt="" />
          </div>
          <div className="post__user-name-wrapper">
            <div className="post__user-name">
              <p>Александр Шульга</p>
            </div>
            <div className="post__user-discharge">
              <p>Механник 3 разряда</p>
            </div>
          </div>
        </div>
        <div className='post__user-edit-button'>
          <EditButton onClick={handleEdit} />
        </div>
      </div>
      <div className="post__content">
        <p> {props.post.title.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}</p>
        <div className='post__media'>
          {props.post.body.map((media, index) => (
            <div key={index} onClick={() => openModal(media, index)} className='post__media-item'>
              {media.type.startsWith('video/') ? (
                <div className='post__media-item-video'>
                  <video src={media.url} width={104} height={104} />
                </div>
              ) : (
                <img src={media.url} />
              )}
            </div>
          ))}
        </div>
      </div>
      <MediaModal
        media={media}
        mediaList={props.post.body}
        mediaModule={mediaModule}
        setMediaModule={setMediaModule}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex} />
    </div>
  )

}

export default PostItem