import trash from './close.png';
import tick from './tick.png';

function ListItem({task,  done, handleDeleteClick, handleDoneClick}) {

    let   classNames = 'list_item'

    if(done) {
        classNames += ' line-through'
    }

    return(
      <li className='list_item'>
        <span className={classNames} data-toggle="rise">{task}</span>
        <div>
            <button 
                type="button"
                data-toggle="delete"
                className='button'
                onClick={handleDeleteClick}
            >
                <img
                    className='img'
                    src={trash}
                    alt='icon' />
            </button>
            <button 
                type="button"
                data-toggle="done"
                className='button'
                onClick={handleDoneClick}
            >
                <img
                    className='img'
                    src={tick}
                    alt='icon'
                    />
            </button>
        </div>

      </li>
    )
  }
  
  export default ListItem;