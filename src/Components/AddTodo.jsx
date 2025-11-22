import {useRef} from "react";
function AddTodo({onNewItem}) {
  const todoNameElement=useRef();
  const dueDateElement=useRef();
  

  const hendelAddTaskClick=(event)=>{
    event.preventDefault();
    const todoName=todoNameElement.current.value;
    const dueDate=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
     
    onNewItem(todoName,dueDate);
    
  }
  return (
    <div class="container text-center">
      <form class="row" onSubmit={(hendelAddTaskClick)}>
        <div class="col-6 ">
          <input type="text"
          ref={todoNameElement}
         placeholder="Enter Todo here" class="C"/>
        </div>
        <div class="col-3">
          <input type="date" 
          ref={dueDateElement}
          class="C"/>
        </div>
        <div class="col-3">
          <button class="btn btn-success B">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
