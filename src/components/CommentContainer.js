import React from 'react';
import CommentsList from './CommentsList';
import { commentData } from '../utils/CommentData';

function CommentContainer() {
  return (
    <div className=' m-5 y-2'>
        <h1 className='text-2xl font-bold'>Comment :</h1>
        <div>
            <CommentsList comments={commentData} />
        </div>
      
    </div>
  )
}

export default CommentContainer;
