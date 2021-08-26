import React, { useState } from 'react';
import Button from './UI/button';
import Input from './UI/input';

const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  const addNewPost = (e) => {
    e.preventDefault();

    const newPost = {
      ...post,
      id: Date.now(),
    };

    create(newPost);
    setPost({ title: '', body: '' });
  };
  return (
    <form>
      <Input type="text" placeholder="post name" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
      <Input type="text" placeholder="post body" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
      <Button onClick={addNewPost}>Add post</Button>
    </form>
  );
};

export default PostForm;
