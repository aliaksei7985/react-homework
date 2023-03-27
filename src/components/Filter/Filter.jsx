
function Filter(props) {

    const   buttonsData = [
        {
            name: 'all',
            label: 'all',

        },
        {
            name: 'current',
            label: 'current',
        },
        {
            name: 'done',
            label: 'done',
        },
    ];

    const   buttons = buttonsData.map(({name, label}) => {
        const   button_active = props.filter === name ? 'button_active' : '';
        return(
            <button
            onClick={(e) => {
                props.setFilter(name);
                switch (props.filter) {
                    case 'current':
                        props.setTaskFilter(props.tasks.filter(item => !item.done ? item : null))
                        break;
                    case 'done':
                        props.setTaskFilter(props.tasks.filter(item => item.done ? item : null))
                        break;
                    case 'all':
                        props.setTaskFilter(props.tasks)
                        break;
                }
            }}
            className={`button ${button_active}`}
            key={name}
            type="button"
            >{label}</button>
        );
    });

    return(
        <form className="buttons__wrapper">
            {buttons}
        </form>
    );
  };
  
export default Filter;