import React, {useState} from 'react'
import AddButton from './UI/button/AddButton';
import InputSelection from './UI/input/InputSelection';

const PostForm = ({create}) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now(),
        }
        create(newPost)
        setPost({ title: '', body: '' })
    }

    return (
        <form>
            <InputSelection onChange={e => setPost({ ...post, title: e.target.value })} value={post.title} type="text" placeholder="Название поста" />
            <InputSelection onChange={e => setPost({ ...post, body: e.target.value })} value={post.body} type="text" placeholder="Описание поста" />
            <AddButton onClick={addNewPost}>Добавить</AddButton>
        </form>
    )
}

export default PostForm