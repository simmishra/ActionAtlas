import { useState } from "react";

export function NewTodoForm({addTodo}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e){
        e.preventDefault(); // stop the submission

        if(newItem === "") return
    
        addTodo(newItem)
    
        setNewItem("") //After adding one to do the to make the input box empty
    }


    return (
        <form onSubmit={handleSubmit} className = "new-item-form">
            <div className="form-row">
              <label htmlFor="item">New Item</label> {/* htmlFor links the input field with the label  */}
              <input value={newItem} onChange={e=>setNewItem(e.target.value)} type= "text" id= "item"/>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}