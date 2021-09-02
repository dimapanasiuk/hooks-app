import React, { useState, useEffect } from 'react';
import PostFilter from '../Components/PostFilter';
import PostList from '../Components/PostlList';
import PostForm from '../Components/PostForm';
import Modal from '../Components/UI/modal';
import MyButton from '../Components/UI/button';
import Loader from '../Components/UI/loader';
import useFetching from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import PostServices from '../API/PostService';
import getPageCount, { getPagesArray } from '../utils/pages';
import Pagination from '../Components/UI/pagination';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', query: '' });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const res = await PostServices.getAll(limit, page);
    setPosts(res.data);
    const totalCount = res.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, [page]);

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
      <Pagination page={page} changePage={setPage} totalPages={totalPages} />
    </div>
  );
};

export default Posts;
