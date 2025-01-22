import React, { useState } from 'react'
import PostList from './components/PostList';
import AddButton from './components/UI/button/AddButton';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import Modal from './components/UI/Modal/Modal';
import BurgerButton from './components/UI/button/BurgerButton';
import { usePosts } from './hooks/usePosts';
import InputSelection from './components/UI/input/InputSelection';
import './styles/styles.scss'
import Sidebar from './components/UI/sidebar/Sidebar';



function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const [modal, setModal] = useState(false)
  const [postToEdit, setPostToEdit] = useState(null)
  const [menuActive, setMenuActive] = useState(false)
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
    setModal(false)
  }

  const editPost = (updatedPost) => {
    setPosts(posts.map(post => (post.id === updatedPost.id ? updatedPost : post)));
    setModal(false);
    setPostToEdit(null);
  }

  const handleEditPost = (post) => {
    setPostToEdit(post)
    setModal(true)
  }

  console.log(posts)

  return (
    <div className="App">
      <div className='content'>
        <header className='header visible-mobile'>
          <div className='header__burger'>
            <BurgerButton onClick={() => setMenuActive(!menuActive)} />
          </div>
          <Sidebar
            active={menuActive}
            setActive={setMenuActive}
            filter={filter}
            setFilter={setFilter} />
        </header>
        <div className='hidden-mobile'>
          <Sidebar
            active={!menuActive}
            setActive={setMenuActive}
            filter={filter}
            setFilter={setFilter} />
        </div>
        <section className='section container'>
          <div className='posts'>
            <AddButton onClick={() => setModal(true)}>
              Добавить
            </AddButton>
            <InputSelection
              placeholder="Поиск..."
              value={filter.query}
              onChange={e => setFilter({ ...filter, query: e.target.value })} />
            <PostList
              onEdit={handleEditPost}
              posts={sortedAndSearchedPosts}
              title="Список постов" />
            <Modal
              visible={modal}
              setVisible={setModal}>
              <PostForm
                create={createPost}
                editPost={editPost}
                postToEdit={postToEdit}
                setPostToEdit={setPostToEdit}
                modal={modal}
                remove={removePost}
              />
            </Modal>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
