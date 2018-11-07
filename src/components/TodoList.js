import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'


class TodoList extends React.Component {

  render() {

    const { todos, toggleTodo } = this.props;

    return (
      <div className='mt-3'>

        <table className="table table-hover table-bordered table-striped rounded mt-3">
          <thead>
            <tr>
              <td>Todo Adı</td>
              <td>Tamamlandı mı?</td>
              <td style={{ width: '30%' }}>Bitiş süresi</td>
            </tr>
          </thead>
          <tbody>
            {todos.map(todo =>
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => toggleTodo(todo.id)}
              />
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
