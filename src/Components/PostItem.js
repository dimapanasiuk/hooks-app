import React from 'react';
import { get } from 'lodash';

const PostItem = ({ post, number }) => (
  <div className="post">
    <h1>{number}</h1>
    <div>
      <strong>{get(post, 'title')}</strong>
      {get(post, 'body')}
    </div>
    <div className="post_btns">
      <button type="button">Delete</button>
    </div>
  </div>
);

export default PostItem;
