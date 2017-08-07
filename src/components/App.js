import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

import GetPark from '../containers/GetPark'

const App = () => (
  <div>
  	<GetPark />
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
