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

function Filter(props) {

    const   buttons = buttonsData.map(({name, label}) => {
        const   button_active = props.filter === name ? 'button_active' : '';
        return(
            <button
            onClick={(e) => {
                props.setFilter(name);
                }
            }
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