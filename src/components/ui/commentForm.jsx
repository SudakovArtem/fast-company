import React, {useEffect, useState} from 'react';
import api from '../../api';
import SelectField from '../common/form/selectField';
import TextareaField from '../common/form/textareaField';
import {useParams} from 'react-router-dom';
import PropTypes from 'prop-types';

const CommentForm = ({update}) => {
  const {userId} = useParams();
  const [users, setUsers] = useState();
  useEffect(() => {
    api.users.fetchAll().then((data) => {
      setUsers(data.map((optionName) => ({
        label: optionName.name,
        value: optionName._id
      })));
    });
  }, []);
  const [data, setData] = useState({
    user: {},
    text: ''
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.comments.add({
      pageId: userId,
      userId: data.user._id,
      content: data.text
    });
    update();
  };

  return (
    <div className="card mb-2">
      <div className="card-body">
        <div>
          <h2>New comment</h2>
          <SelectField
            options={users}
            onChange={handleChange}
            name="user"
            label="Выберите пользователя"
            value={data.user}
          />
          <TextareaField
            label="Сообщение"
            name="text"
            value={data.text}
            onChange={handleChange}
            rows={3}
          />
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Опубликовать</button>
        </div>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  update: PropTypes.func
};

export default CommentForm;
