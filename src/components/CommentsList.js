import React from 'react';
import Comment from './Comment';

function CommentsList({ comments }) {

  return comments.map((comment) => 
  <div key={comment.name}>
    <Comment data={comment} />
  
    <div className='ml-5 pl-5 border-l-2 border-l-gray-300'>
        <CommentsList comments={comment.reply} />
    </div>
  </div>

);

}

export default CommentsList;
