import React from 'react'
import { useState } from 'react';
import './Todo.css'


const Todo = () => {

    const [todoList, setTodoList] = useState(['Eat Breakfast', 'Eat Lunch', 'Eat Dinner'])
    const [task, setTask] = useState("")
    

    const addNewTask = () => {
        // todoList.push("new task")
        if(task){
        setTodoList([...todoList, task]);
        setTask("");
    }
    }

    const removeTask = (index)=> {
        // alert(index);
        let temp =todoList;
        temp.splice(index,1);
        setTodoList([...temp]);
    }

    const showTodoList =() => {
        return todoList.map((task, index)=><div className='d-flex task-body justify-space-around'>
            <p>{task}</p>
            <button className='btn btn-danger' onClick={() => {removeTask(index)}} ><i class="fa fa-trash" aria-hidden="true" ></i></button>
            </div>);
    }

  return (
    <div className='container' >
        <div class="card">
        <div className="card-body">
            <h3>Todo List</h3>
            <hr />
            <div className='input-group' >
                {/* <button className='btn btn-primary input-group-prepend'>Add Task</button> */}
                <input className='form-control' Value={task} onChange={(e) => {setTask(e.target.value)}}/>
                <button  onClick={addNewTask} className='btn btn-primary input-group-postpend'>Add Task</button>
            </div>
            {showTodoList()}
        </div>
    </div>
    </div>
  )
}

export default Todo