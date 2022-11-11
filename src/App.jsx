import Logo from './Logo.png';
import  "./index.jsx"


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
<button className="buttonLogin" id='waiter' alt="button"> Mesero</button>
<button className="buttonLogin" id='kitchen' alt="button"> Cocina</button>
</div>
);
}

export { Krusty, ButtonsLogin };

