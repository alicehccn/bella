import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import GetPage from '../containers/GetPage'

const App = () => (
  <div>
  	<GetPage />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
