import React,{useState} from "react"

function TodoList(){
    const [tasks,setTasks] = useState([]);
    const [newTasks,setNewTasks] = useState("");

    function handleInputChange(e){
        setNewTasks(e.target.value)
    }

    function addTask(){
        if(newTasks.trim()!==""){
        setTasks(t => [...t,newTasks])
        setNewTasks("")
        }
    }
    function removeTask(index){
        const updatedTask = tasks.filter((_,i) => i !== index)
        setTasks(updatedTask);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index-1]] = 
            [updatedTask[index-1],updatedTask[index]];
            setTasks(updatedTask)
        }
    }
    function moveTaskDown(index){
        if(index<tasks.length -1){
            const updatedTask = [...tasks];
            [updatedTask[index],updatedTask[index+1]] = 
            [updatedTask[index+1],updatedTask[index]];
            setTasks(updatedTask)
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>
                <div>
                    <input type="text"
                    id="placeholder"
                    placeholder="Enter a moveTaskUp"
                    value={newTasks}
                    onChange={handleInputChange}
                    />
                    <button className="add-button" onClick={addTask}>Add</button>
            </div>
            <ol>
                {tasks.map((task,index) =>
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button 
                        className="delete-button"
                        onClick={() => removeTask(index)}>
                        Delete
                        </button>
                        <button 
                        className="move-button"
                        onClick={() => moveTaskUp(index)}>
                        Up
                        </button>
                        <button 
                        className="move-button"
                        onClick={() => moveTaskDown(index)}>
                        Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default TodoList