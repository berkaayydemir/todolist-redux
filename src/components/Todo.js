import React from 'react';
import PropTypes from 'prop-types';

class Todo extends React.Component {

  render() {

    const { onClick, text, date, completed } = this.props;

    return (

        <tr
          onClick={onClick}
          style={{
            fontSize: 'normal',
            color: completed ? 'red' : 'white',
          }}>
          <td>{text}</td>
          <td>{completed ? 'Evet' : 'Hayır'}</td>
          <td>{date}</td>
        </tr>
    )
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo