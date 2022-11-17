import Logo from './Logo.png';
import  "./index.jsx"
import {  Link } from "react-router-dom"



function Krusty() {
  
  return (
     <>
      <header className="App-header">        
      <img src={Logo} className="App-logo" alt="logo" />
      </header>
   
      </>

  );
}

 function ButtonsLogin() {
  
  return (
<div className='TwoButtons'>
<button className="buttonLogin" id='waiter' alt="buttonWaiter"> <Link className='linksTo' to="/Cart"> Carta</Link></button>
<button className="buttonLogin" id='kitchen' alt="buttonKitchen"> <Link className='linksTo' to="/Kitchen">Cocina</Link></button>
</div>
);
}

 


export { Krusty, ButtonsLogin };

