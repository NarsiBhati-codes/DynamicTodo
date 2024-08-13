import { useState } from 'react'
import './App.css'

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

    const buttonStyle = {
      padding: '15px 30px', 
      borderRadius: '10px',
      border: 'none',
      backgroundColor: '#007bff',
      color:'white', 
      fontSize: '18px',
      margin: '20px'
    }

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
  const containerStyle = {
    borderRadius: '10px',
    backgroundColor: '#f7f7f7',
    padding: '20px 0',
    margin: '20px'
  }

  const titleStyle = {
    color: 'black',
    fontSize:'30px'
  }
  
  const descriptionStyle = {
    color: 'grey',
    fontSize: '20px'
  }

  const completeStyle = {
    padding: '15px 30px', 
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#28a745',
    color: '#ffffff',
    fontSize: '18px', 
    marginTop: '5px'
  };

  const incompleteStyle = {
    padding: '15px 30px', 
    borderRadius: '10px',
    border: 'none',
    backgroundColor: '#dc3545',
    color: '#ffffff', 
    fontSize: '18px', 
    marginTop: '5px'
  };


  return (
    <div style={containerStyle} >  
      <h3 style={titleStyle} > {title} </h3>
      <p style={descriptionStyle} > {description} </p>
      <button style={isComplete ? completeStyle:incompleteStyle } > {isComplete ?'Complete':'InComplete'}</button>
    </div>
  )
}

export default App
