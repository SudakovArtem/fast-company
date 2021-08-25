import React from 'react';
import Bookmark from "./bookmark";
import Quality from "./quality";

const User = ({_id, name, qualities, profession, completedMeetings, rate, bookmark, onDelete, onMark}) =>
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map(quality => <Quality key={quality._id} {...quality}/>)}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate}/5</td>
      <td>
        <Bookmark checked={bookmark} onMark={onMark} id={_id}/>
      </td>
      <td>
        <button
            type="button"
            className="btn btn-danger"
            onClick={onDelete.bind(null, _id)}>
          delete
        </button>
      </td>
    </tr>;

export default User;
