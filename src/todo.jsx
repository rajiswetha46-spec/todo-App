import "./todo.css";

function ToDo()
{
    return (<>
    <div className="container">
          <header className="header">My To Do List</header>
          <div className="form">
              <div className="row" >
                <div className="item">
                    <label> Enter the Task</label>
                </div>
                <div className="item"> 
                    <input type="text"
                     maxLength={100}
                     disabled={false}
                     placeholder="Enter the task..."
                     title="Enter the task..."
                     /> 
                
                </div>
              </div>


              <div className="row" >
                <div className="item">
                    <label> Enter the Description</label>
                </div>
                <div className="item"> 
                    <textarea></textarea>
                </div>
              </div>

              <div className="row" >
                <div className="item">
                    <label> Enter the Type</label>
                </div>
                <div className="item"> 
                    <select>
                        <option>Personal</option>
                        <option>College</option>
                        <option>Shopping</option>
                    </select>
                </div>
              </div>
             
              <div className="row" >
                <div className="item">
                    <label> Enter the Due Date</label>
                </div>
                <div className="item"> 
                    <input type="date"
                     /> 
                
                </div>
              </div>
            
             <div className="row" >
                <div className="item">
                    <label> Enter the Due Time</label>
                </div>
                <div className="item"> 
                    <input type="time"
                     /> 
                
                </div>
              </div>

              <div className="row" >
                <div className="item">
                    
                </div>
                <div className="item"> 
                    <button>Add Task</button>
                </div>
              </div>
          </div>
    </div>
    </>)
}


export default ToDo; 