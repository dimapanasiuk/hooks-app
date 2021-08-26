import React, { useState, useEffect } from 'react';
import PostFilter from './Components/PostFilter';
import PostList from './Components/PostlList';
import PostForm from './Components/PostForm';
import Modal from './Components/UI/modal';
import MyButton from './Components/UI/button';
import Loader from './Components/UI/loader';
import useFetching from './hooks/useFetching';
import { usePosts } from './hooks/usePosts';
import PostServices from './API/PostService';

import './styles/App.css';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const postsRes = await PostServices.getAll();
    setPosts(postsRes);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

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
      {postError && (
        <h1>
          your error is
          {postError}
        </h1>
      ) }
      {isPostsLoading ? <div style={{ display: 'flex', justifyContent: 'center' }}><Loader /></div> : (
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Posts" />
      )}
    </div>
  );
};

export default App;
