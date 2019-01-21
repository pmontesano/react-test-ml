import React from 'react'


const UserCard = props => (
  <div>
    <h3>{props.name}</h3>
    <p>{props.email}</p>
    <p>{props.address.street}</p>
  </div>
);

export default UserCard
