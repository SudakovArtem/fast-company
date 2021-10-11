import React, {useEffect, useState} from 'react';
import TextField from '../../common/form/textField';
import {validator} from '../../../utils/validator';
import RadioField from '../../common/form/radioField';
import api from '../../../api';
import MultiSelectField from '../../common/form/multiSelectField';
import SelectField from '../../common/form/selectField';
import PropTypes from 'prop-types';
import {useHistory} from 'react-router-dom';

const UserEdit = ({user}) => {
  const [data, setData] = useState({
    ...user,
    email: user.email || '',
    gender: user.gender || 'male'
  });

  const [qualities, setQualities] = useState({});
  const [professions, setProfessions] = useState();
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения'
      }
    },
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    }
  };
  useEffect(() => {
    validate();
  }, [data]);

  useEffect(() => {
    api.qualities.fetchAll().then((data) => setQualities(data));
    api.professions.fetchAll().then((data) => setProfessions(data));
  }, []);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };

  const disableSubmitBtn = Object.keys(errors).length === 0 && JSON.stringify(data) !== JSON.stringify(user);

  const handleSubmit = (e) => {
    e.preventDefault();
    validate();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
    api.users.update(data._id, data);
    history.push(`/users/${user._id}`);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 shadow p-4">
          {user ? <>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Имя"
                name="name"
                value={data.name}
                onChange={handleChange}
                error={errors.name}
              />
              <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
              />
              <SelectField
                options={professions}
                onChange={handleChange}
                name="profession"
                label="Выберите вашу профессию"
                value={data.profession}
              />
              <RadioField
                options={[{name: 'Male', value: 'male'}, {name: 'Female', value: 'female'}, {name: 'Other', value: 'other'}]}
                value={data.gender}
                name="gender"
                onChange={handleChange}
                label="Выберите ваш пол"
              />
              <MultiSelectField
                options={qualities}
                onChange={handleChange}
                name="qualities"
                label="Выберите ваши качества"
                value={data.qualities}
              />
              <button className="btn btn-primary w-100 mx-auto" type="submit" disabled={!disableSubmitBtn}>Submit
              </button>
            </form>
          </> : <h1>loading...</h1>}
        </div>
      </div>
    </div>
  );
};

UserEdit.propTypes = {
  user: PropTypes.object
};

export default UserEdit;
