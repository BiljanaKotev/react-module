// ./src/components/StudentCard.js
import React from 'react';

function StudentCard(props) {
  return (
    <div className="StudentCard">
      <p>Name: {props.name}</p>
      <p>In the city of {props.location.country}</p>
      <p>Currently Enrolled in Bootcamp: {props.bootcamp}</p>

      <br />
    </div>
  );
}

export default StudentCard;
