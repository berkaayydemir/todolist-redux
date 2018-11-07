let nextTodoId = 0

let dateNow = new Date();
var date = dateNow.toTimeString();

var completed = false;

export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  completed,
  date
})

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
})

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}


