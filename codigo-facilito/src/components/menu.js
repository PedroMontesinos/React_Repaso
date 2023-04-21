import MenuItem from "./menu-item";

function Menu(props){
    return(
      <nav>
        <ul>
            <MenuItem
              text='Home'
              link='/'
            />
            <MenuItem
              text='Personajes'
              link='/personajes'
            />
            <MenuItem
              text='Peliculas'
              link='/peliculas'
            />
            <MenuItem
              text='Citas'
              link='/citas'
            />
        </ul>
      </nav>
    );
}

export default Menu