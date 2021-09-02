import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from 'react-router-dom';
import useFetching from '../hooks/useFetching';
import PostServices from '../API/PostService';
import Loader from '../Components/UI/loader';

const Post = () => {
  const params = useParams();
  const [post, setPosts] = useState({});
  const [comments, setComments] = useState([]);
  const [fetchPostById, isLoading, error] = useFetching(async () => {
    const response = await PostServices.getById(params.id);
    setPosts(response.data);
  });

  const [fetchComments, isLoadingComments, commentsError] = useFetching(async () => {
    const response = await PostServices.getCommentsByPostId(params.id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchPostById();
    fetchComments();
  }, []);

  return (
    <div>
      <h1>
        {`U are open post with id ${params.id}`}
      </h1>
      {isLoading ? <Loader /> : (
        <div>
          {post.id}
          {post.title}
        </div>
      )}
      <h1>Comments</h1>
      {isLoadingComments ? <Loader /> : (
        <div>
          {comments.map((comment) => (
            <div key={uuidv4()}>
              <h5>{comment.email}</h5>
              <div>{comment.body}</div>
            </div>
          ))}
        </div>
      ) }
    </div>
  );
};

export default Post;
