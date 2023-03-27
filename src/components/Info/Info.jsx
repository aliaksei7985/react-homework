function Info(props) {
  return(
    <header className="header">
      <h2>
        task amount: {props.tasks.length}
      </h2>
      <h3>
        task amount complete: {props.tasks.filter((item) => item.done).length}
      </h3>
    </header>
  )
}

export default Info;