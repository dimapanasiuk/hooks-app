import React, { useState, useRef } from 'react';
import PostList from './Components/PostlList';
import Button from './Components/UI/button/Button';
import Input from './Components/UI/input/Input';
import './styles/App.css';

const App = () => {
  const bodyInputRef = useRef();

  const [posts, setPosts] = useState([
    { id: 1, title: 'JS1', body: 'text body JS1' },
    { id: 2, title: 'JS2', body: 'text body JS2' },
    { id: 3, title: 'JS3', body: 'text body JS3' },
    { id: 4, title: 'JS4', body: 'text body JS4' },
  ]);

  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e) => {
    e.preventDefault();

    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: '', body: '' });
  };

  return (
    <div className="App">
      <form>
        {/* управляемый компонент */}
        <Input type="text" placeholder="post name" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        {/* неуправляемый, неконтролируемый компонент */}
        <Input type="text" ref={bodyInputRef} placeholder="post body" value={post.body} onChange={(e) => setPost({ ...post, body: e.target.value })} />
        <Button onClick={addNewPost}>Add post</Button>
      </form>
      <PostList posts={posts} title="Posts" />
    </div>
  );
};

export default App;
