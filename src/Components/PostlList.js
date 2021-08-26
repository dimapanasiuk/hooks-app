import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PostItem from './PostItem';

const PostList = ({ posts, title, remove }) => (!posts.length
  ? <h1 style={{ textAlign: 'center' }}>List of posts is empty</h1>
  : (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>{title}</h1>
      <TransitionGroup>
        { posts.map((post, num) => (
          <CSSTransition
            key={post.id}
            timeout={500}
            classNames="post"
          >
            <PostItem remove={remove} post={post} number={num + 1} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  ));

export default PostList;
