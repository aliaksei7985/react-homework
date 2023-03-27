import ListItem from "../ListItem/ListItem";

function List({tasks, setTask, taskFilter}) {

    const   elem = taskFilter.map((item) => {
        const   {id, ...props} = item;
        return(
            <ListItem
                handleDeleteClick={() => {
                  setTask(
                    tasks.filter((item) => {
                      return item.id !== id
                    })
                  )
                }}
                handleDoneClick={(e) => {
                  const prop = e.currentTarget.getAttribute('data-toggle');
                  setTask(
                    tasks.map((item) =>{
                      if (item.id === id) {
                        item[prop] = !item[prop];
                      }
                      return item;
                    })
                  )
                }}
                key={id}
                {...props}
            />
        )
    })

    return(
      <ul>
        {elem}
      </ul>
    )
  }
  
  export default List;