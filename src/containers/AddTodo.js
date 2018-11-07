import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <div className="input-group input-group">
          <input className='form-control' ref={node => input = node} placeholder="Todo Ekle..." />
          <div className="input-group-append">
            <button
              className="btn btn-info"
              type="submit">Todo Ekle</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default connect()(AddTodo)
