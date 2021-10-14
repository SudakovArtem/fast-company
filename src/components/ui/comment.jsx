import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import api from '../../api';
import getCommentTime from '../../utils/getCommentTime';

const Comment = ({comment, removeComment}) => {
  const [user, setUser] = useState();
  useEffect(() => {
    api.users.getById(comment.userId).then((data) => setUser(data));
  }, []);

  return user ? (
    <div className="bg-light card-body mb-3">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-start">
            <img
              src={`https://avatars.dicebear.com/api/avataaars/${(Math.random() + 1).toString(36).substring(7)}.svg`}
              className="rounded-circle shadow-1-strong me-3" alt="avatar" width="65" height="65"/>
            <div className=" flex-grow-1 flex-shrink-1">
              <div className="mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-1">
                    {user.name}
                    <span className="small"> - {getCommentTime(comment.created_at)}</span>
                  </p>
                  <button className="btn btn-sm text-primary d-flex align-items-center" onClick={removeComment.bind(null, comment._id)}>
                    <i className="bi bi-x-lg"/>
                  </button>
                </div>
                <p className="small mb-0">
                  {comment.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : <p>loading...</p>;
};

Comment.propTypes = {
  comment: PropTypes.object,
  removeComment: PropTypes.func
};

export default Comment;
