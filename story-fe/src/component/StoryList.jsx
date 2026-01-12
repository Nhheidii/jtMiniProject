import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StoryList = ({ stories }) => {
  return (
    <div>
      <h2>Danh sách Stories</h2>
      <h3> aaa </h3>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            {story.name} {story.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StoryList;
