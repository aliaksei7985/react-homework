import { useEffect } from "react";

function Assignment(props) {

    return(
      <main className="main">
        <div>
            <form
              method="get"
              name="form"
              onSubmit={(e) => {
                e.preventDefault();
                props.setTask([...props.tasks,
                  {
                    task: document.getElementById('input').value,
                    done: false,
                    id: props.tasks.length,
                  }
                ]);
                console.log(props.tasks);
              }}
              >
                <h3>Add new task</h3>
                <fieldset className="assignment" >
                  <input 
                    placeholder="what do you want to do"
                    type='text'
                    id="input"
                  />
                  <button className="button_add">Add</button>
                </fieldset>
            </form>
        </div>
  
      </main>
    )
  }
  
  export default Assignment;