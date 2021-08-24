import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PostItem from './PostItem';

const PostList = ({ posts, title }) => (
  <>
    <h1 className="post-label">{title}</h1>
    { posts.map(
      (post, num) => <PostItem key={uuidv4()} post={post} number={num} />,
    )}
  </>
);

export default PostList;
