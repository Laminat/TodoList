import { useState, useEffect } from 'react'
import './App.css'
import { TodoList } from '../todo-list/todo-list'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'
import uniqid from 'uniqid';

function App() {

  const [todoData, setTodoData] = useState([
    {
      id: uniqid(),
      task: 'do homework',
      completed: false,
    },
    {
      id: uniqid(),
      task: 'clean the apartment',
      completed: false,
    },
    {
      id: uniqid(),
      task: 'fix the laptop',
      completed: false,
    }
  ])
  


  const addTodo = (task) => {
    const newTodo = {
      id: uniqid(),
      task: task,
      completed: false,
    }
    if (task !== '') {
      setTodoData([...todoData, newTodo])
    }
  }

  const deleteTodo = (id) => {
    const index = todoData.findIndex(todo => todo.id === id)
    const newState = [...todoData.slice(0, index), ...todoData.slice(index + 1)]
    setTodoData(newState)
  }

  const changeCompletedStatus = (id) => {
    const changingTodo = todoData.find(todo => todo.id === id)
    changingTodo.completed = !changingTodo.completed
    const index = todoData.findIndex(todo => todo.id === id)
    const newState = [...todoData.slice(0, index), changingTodo, ...todoData.slice(index + 1)]
    setTodoData(newState)
  }  

  const completedTasks = (data) => {
    let readiness = 0
    data.forEach(todo => {
      if(todo.completed === false) {
        readiness++
      }
      document.getElementById('span').textContent = readiness
    })
  }

  const allTodoData = () => {
    const newState = todoData
    setTodoData(newState)
  }


  const activeTodoData = (data) => {
    let newState = []
    data.forEach(todo => {
      if (todo.completed === false) {
        newState.push(todo)
      }
    setTodoData(newState)
    })
  }
  const completedTodoData = (data) => {
    let newState = []
    data.forEach(todo => {
      if (todo.completed === true) {
        newState.push(todo)
      }
      setTodoData(newState)
      completedTasks(data)
    })
  }

  return (
    <div className="app">
      <Header addTodo = {addTodo}/>
      <TodoList data = {todoData} 
      onDeleteTodo = {deleteTodo}
      onChangeCompletedStatus = {changeCompletedStatus}
      onCompletedTasks = {completedTasks}/>
      <Footer onCompletedTasks = {completedTasks}
      data = {todoData}
      onActiveTodoData = {activeTodoData}
      onCompletedTodoData = {completedTodoData}
      onAllTodoData = {allTodoData}/>
    </div>
  )
}

export default App
