import React from 'react';
import PropTypes from 'prop-types';
import Comment from './comment';
import api from '../../api';

const CommentsList = ({comments, update}) => {
  function removeComment(id) {
    api.comments.remove(id);
    update();
  }

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h2>Comments</h2>
        <hr/>
        {comments.map(comment => (
          <Comment key={comment._id} comment={comment} removeComment={removeComment}/>
        ))}
      </div>
    </div>
  );
};

CommentsList.propTypes = {
  comments: PropTypes.array,
  update: PropTypes.func
};

export default CommentsList;
