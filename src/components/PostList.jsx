import React from 'react'
import PostItem from './PostItem'

function PostList({ posts, title, onEdit }) {

    if (!posts.length) {
        return (
            <h1>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <div className="post-list">
            <h1>{title}</h1>
            {/* <TransitionGroup> */}
            {posts.map((post) =>

                <div
                    key={post.id}
                    timeout={500}
                    className="post-item">
                    <PostItem post={post} onEdit={onEdit} />
                </div>
            )}
            {/* </TransitionGroup> */}
        </div>
    )
}

export default PostList