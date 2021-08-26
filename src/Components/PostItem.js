import React from 'react';
import { get } from 'lodash';
import Button from './UI/button';

const PostItem = ({ post, remove }) => (
  <div className="post">
    <h1>{get(post, 'id')}</h1>
    <div>
      <strong>{get(post, 'title')}</strong>
      <p>{get(post, 'body')}</p>
    </div>
    <div className="post_btns">
      <Button onClick={() => remove(post)} type="button">Delete</Button>
    </div>
  </div>
);

export default PostItem;
