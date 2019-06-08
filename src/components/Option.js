import React from 'react';
const Option = props => (
  <li className="option">
    <p className="option__text">{props.count}. {props.optionText}</p>
    
    <button
      className="button button--link"
      onClick={() => {
        props.handleDeleteOption(props.optionText);
      }}
      type="button"
    >
    Remove
    </button>
  </li>
);

export default Option;
