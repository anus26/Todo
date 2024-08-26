import { useRef, useState } from "react"




function App() {
    const [arr, setArr] = useState([]);
    const todoVal = useRef();
  
    const addTodoList = (event) => {
        event.preventDefault()
       if(todoVal.current.value){
          arr.push(todoVal.current.value);
          setArr([...arr]);
          todoVal.current.value = "";
         } else {
            alert("Please Enter A Value")
           }
          }

  const deleteTodo = (index) => {
      arr.splice(index,1);
      setArr([...arr]);
    }

    const editTodo = (index) => {
        let editVal = prompt("Enter New Val");
        arr.splice(index,1,editVal);
        setArr([...arr]);
      }
      return (
          <>
            <h1>Todo App</h1>
            <form>
              <input type="text" name="" id="" ref={todoVal} />
              <button type="submit" onClick={addTodoList}>Add Todo</button>
            </form>
      
            <ul>
              {arr.map((item, index) => {
                  return (
                      <div key={index}>
                        <li>{item}</li>
                        <button onClick={()=> deleteTodo(index)}>Delete</button>
                        <button onClick={()=> editTodo(index)}>Edit</button>
                      </div>
                    )
                  })}
                </ul>
              </>
            )
          }
          
          // export default App
//           import { useRef, useState } from "react"
//           function App() {
// const [arr,setArr]=useState([])
// const todoVal=useRef()

// const addTodoList=(event) =>{
//     event.preventDefault()
//     arr.push(todoVal.current.value)
// setArr([...arr])
// }
// const deleteTodo =(index)=>{
//   arr.splice(index,1)
//   setArr([...arr])
// }
// const editTodo = (index) =>{
//  let editVal=prompt("Enter new Val");
//  arr.splice(
//     index,1,editVal);
//    setArr([...arr]);
// }



//   return (
// <> 
// <h1>todo app</h1>
// <form >
//   <input type="text" ref={todoVal} />
//   <button type="submit" onClick={addTodoList}>Add todo</button>
// </form>
// <ul>
//   {arr.map((item,index)=>{
// return(
//     <div key={index}>
//       <li>{item}</li>
// <button  onClick={()=>deleteTodo(index)}>deleteTodo</button>
// <button  onClick={()=>editTodo(index)}>editTodo</button>
// </div>
// )
//   })}
// </ul>
// </>
// )

// }
// export default App



// import { useRef, useState } from "react";

//       function App() {
//   const [arr,setArr]=useState([])
//   const todoVal=useRef()
  
//     const addTodoList=(event) =>{
//     event.preventDefault();
//   arr.push(todoVal.current.value);
//   console.log(todoVal);
//   setArr([...arr]);
//   }
//   return(
//     <>
//     <h1>Todo App</h1>
//     <form >
//       <input type="text" ref={todoVal} />
//       <button type="submit" onClick={addTodoList}>Add todo</button>
//     </form>
//     <ul>
//       <li>{item}</li>
//     </ul>
//     </>

//   )
  
// }
// export default App


// import { useState } from "react";

// function App(){
//   const [num,setnum]=useState(0)
//   const addCounter=()=>{
//     setnum(num+1)
//   }
//   const lessCounter =()=>{
//     if (num < 1) {
//       console.log('set add not');
      
//     }
//     setnum(num - 1)
//   }
//   return(
//     <>
//     <h1>hello world</h1>
//     <h1>{num}</h1>
//     <button onClick={addCounter}>add </button>
//     <button onClick={lessCounter}>less </button>
//     </>
//   )
// }
export default App





// function App() {
//   const [arr,setArr]=useState([])
//   const todoVal=useRef()

//   const addTodoList=(event)=>{
//     event.preventDefault()
//     arr.push(todoVal.current.value)
//     setArr([...arr])
//   }
//   return(
//     <>
//     <form >

//       <h1>Todo app</h1>
//       <input type="text" ref={todoVal}/>
//       <button type="submit" onClick={addTodoList}>add</button>
//     </form>
    
//     </>
//   )
  
// }
// export default App