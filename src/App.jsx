import { useState } from 'react'
import './App.css'
import {buttonStyle,containerStyle,titleStyle,descriptionStyle,completeStyle,incompleteStyle} from './'


function App() {
  function addTodoWithStatus(isComplete) {
    setTodos((todos) => [...todos,{
      title: "Build Next.js QR Code Generator",
      description: "Start working on a QR code generator website using Next.js, similar to https://app.qr-code-generator.com/.",
      isComplete: isComplete,
    }])
  }

  const [todos, setTodos] = useState([
      {
        "title": "Complete JavaScript Assignment",
        "description": "Finish the assignment on classes and methods, focusing on the Circle class.",
        "isComplete": true
      },
      {
        "title": "Write Blog on Media Queries",
        "description": "Draft a blog post about integrating media queries into a restaurant website for responsive design.",
        "isComplete": false
      },
    ]);

   return (
    <>
      {todos.map((todo) => (
        <TodoDisplay title={todo.title} description={todo.description} isComplete={todo.isComplete} />
      ))}
     
      <button onClick={() => addTodoWithStatus(true)} style={buttonStyle}> True Add Todo </button>

      <button onClick={() => addTodoWithStatus(false)} style={buttonStyle}> false Add Todo </button>
    </>
   )

}

// component  
const TodoDisplay = ({title,description,isComplete}) => {
  return (
    <div style={containerStyle} >  
      <h3 style={titleStyle} > {title} </h3>
      <p style={descriptionStyle} > {description} </p>
      <button style={isComplete ? completeStyle:incompleteStyle } > {isComplete ?'Complete':'InComplete'}</button>
    </div>
  )
}

export default App
