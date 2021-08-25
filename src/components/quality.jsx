import React from 'react';

const Quality = ({_id, color, name}) =>
    <span
        id={_id}
        style={{marginRight: '0.5rem'}}
        className={`badge bg-${color}`}>{name}
    </span>;

export default Quality;
