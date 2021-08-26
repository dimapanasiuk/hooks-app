import React, { useMemo, useState } from 'react';
import PostFilter from './Components/PostFilter';
import PostList from './Components/PostlList';
import PostForm from './Components/PostForm';
import Modal from './Components/UI/modal/Modal';
import MyButton from './Components/UI/button/Button';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'young', body: 'text body JS1' },
    { id: 2, title: 'dimas', body: 'JS2' },
    { id: 3, title: 'serg', body: 'body ' },
    { id: 4, title: 'and', body: 'text ' },
  ]);

  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => sortedPosts.filter(
    (post) => post.title.toLowerCase().includes(filter.query),
  ), [filter.query, sortedPosts]);

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Create user</MyButton>
      <Modal isVisible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts" />
    </div>
  );
};

export default App;
