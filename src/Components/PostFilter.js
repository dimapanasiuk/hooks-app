import React from 'react';
import Input from './UI/input/Input';
import Select from './UI/select/select';

const PostFilter = ({ filter, setFilter }) => (
  <>
    <Input placeholder="search" value={filter.query} onChange={(e) => setFilter({ ...filter, query: e.target.value })} />
    <Select
      value={filter.sort}
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      defaultValue="Sorting by"
      options={[
        { name: 'name', value: 'title' },
        { name: 'description', value: 'body' },
      ]}
    />
  </>
);

export default PostFilter;
