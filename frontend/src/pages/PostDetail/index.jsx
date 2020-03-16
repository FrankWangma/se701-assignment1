import React from 'react';
import PostDetail from './PostDetail';
import CommentContainer from './CommentsContainer';
import CreateCommentModal from './CreateCommentModal';

export default () => {
  return (
    <div>
      <PostDetail />
      <CommentContainer />
      <CreateCommentModal />
    </div>
  );
};
