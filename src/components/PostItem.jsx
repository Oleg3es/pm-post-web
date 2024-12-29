import React from 'react'
import AddButton from './UI/button/AddButton'

const PostItem = (props) => {

    return (
        <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className="post__btns">
          <AddButton onClick={() => props.remove(props.post)}>Удалить</AddButton>
        </div>
      </div>
    )
}

export default PostItem