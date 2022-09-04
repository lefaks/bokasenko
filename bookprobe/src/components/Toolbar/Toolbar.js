
import React from 'react'; 

import './Toolbar.css'; 
import DrawerToggleButton from'../SideDrawer/DrawerToggleButton';



const Toolbar= props => {
       return(
    <header className ="toolbar">
         <nav className="toolbar__navigation">

<div> <DrawerToggleButton click={props.drawerClickHandler}/>  </div>
 <div className="toolbar__logo">< a href ="/">Bookman</a> </div>  
       <div className="spcer" ></div>
     
     <div className= "toolbar_navigation_items">
         <ul> 
             <li> <a href ="/"> Home</a></li>
             <li> <a href ="/SearchBar"> SearchBar</a></li>
             <li> <a href ="/"> Knjižnica</a></li> 
             </ul>
 </div>
     </nav>

    </header>

       )

}

export default Toolbar; 
