function Assignment(props) {
    return(
      <main className="main">
        <div>
            <form method="get" >
                <h3>Add new task</h3>
                <fieldset className="assignment" >
                  <input placeholder="what do you want to do" type='text' />
                  <button className="button_add" type="button">Add</button>
                </fieldset>
            </form>
        </div>
  
      </main>
    )
  }
  
  export default Assignment;