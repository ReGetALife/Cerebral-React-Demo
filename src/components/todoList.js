/*
 * @Description: Method connect will return a component that already connected to cerebral.
 * @Author: Li Qingguo
 * @Date: 2019-11-16 23:04:14
 * @FilePath: \components\todoList.js
 * @Environment: Google Chrome 78.0.3904.87 Node 10.15.3 
 * @LastEditor: Li Qingguo
 * @LastEditedTime: 2019-11-17 00:49:38
 */
import { connect } from '@cerebral/react'
import { sequences, state } from 'cerebral'
import React from 'react'

export default connect(
  {
    todos: state`todos`,
    loadAllTodos: sequences`loadAllTodos`
  },
  function App({ todos, loadAllTodos }) {
    return (
      <div>
        <div onClick={() => loadAllTodos()}>Click me to show todo list.</div>
        {todos.map(todo => (
          <div key={todo.userId + "#" + todo.id}>
            <p>User ID: {todo.userId}</p>
            <p>Todo ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed}</p>
            <br></br>
          </div>
        ))}
      </div>
    )
  }
)