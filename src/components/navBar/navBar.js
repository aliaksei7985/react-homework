import './navBar.css';

function NavBar({item1, item2, item3, item4}) {
  return (
    <div>
      <menu className="nav">
        <li><a className='item' href='#'>{item1}</a></li>
        <li><a className='item' href='#'>{item2}</a></li>
        <li><a className='item' href='#'>{item3}</a></li>
        <li><a className='item' href='#'>{item4}</a></li>
      </menu>
    </div>
  );
}

export default NavBar;