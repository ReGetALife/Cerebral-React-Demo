/*
 * @Description: It's the entry of our application. Initialize an cerebral app with module 'main' as attribute of container.
 * @Author: Li Qingguo
 * @Date: 2019-11-16 19:42:24
 * @FilePath: \index.js
 * @Environment: Google Chrome 78.0.3904.87 Node 10.15.3
 * @LastEditor: Li Qingguo
 * @LastEditedTime: 2019-11-17 00:51:07
 */

import { Container } from '@cerebral/react'
import App from 'cerebral'
import Devtools from 'cerebral/devtools'
import React from 'react'
import { render } from 'react-dom'
import TodoList from './components/todoList'
import main from './main'

const app = App(main, {
  devtools: Devtools({
    host: 'localhost:8585'
  })
})

render(
  <Container app={app}>
    <TodoList />
  </Container>,
  document.getElementById('app')
)