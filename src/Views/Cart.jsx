import React from "react";
import "../index.jsx";
import cafe from "./img/cafe.png";
import coffeemilk from "./img/coffeemilk.png";
import sandwish from "./img/sandwish.png";
import jugo from "./img/jugo.png";
import simplehamburguer from "./img/simplehamburguer.png";
import doublehamburguer from "./img/doublehamburguer.png";
import friedpotatoes from "./img/friedpotatoes.png";
import onion from "./img/onion.png";
import agua from "./img/agua.png";
import water700 from "./img/water700.png";
import bebida500ml from "./img/bebida500ml.png";
import bebida750ml from "./img/bebida750ml.png";

export default function Cart() {
  return (
    <>
      <h1 className="cartTitle">Nuevos Pedidos</h1>
      <div className="squareMenu">
        <h2 className="menuTitle">Menú</h2>
        <h3 id="identifierBreakfast">Desayuno</h3>
        <div className="squaresMenu" id="breakfast1">
          <img src={cafe} className="menuImg" alt="Coffee" />
          <p className="menuP">Café Americano</p>
          <p className="price">$5</p>
        </div>
        <div className="squaresMenu" id="breakfast2">
          <img src={coffeemilk} className="menuImg" alt="CoffeeMilk" />
          <p className="menuP">Café con Leche</p>
          <p className="price">$7</p>
        </div>
        <div className="squaresMenu" id="breakfast3">
          <img src={sandwish} className="menuImg" alt="Sandwish" />
          <p id="sandwishP">Sandwish</p>
          <p id="sandWishprice">$10</p>
        </div>
        <div className="squaresMenu" id="breakfast4">
          <img src={jugo} className="menuImg" alt="Natural-Juice" />
          <p id="juiceP">Jugo Natural</p>
          <p className="price">$7</p>
        </div>
        <h3 id="identifierHamburguers">Hamburgesas</h3>
        <div className="squaresMenu" id="hamburguer">
          <img src={simplehamburguer} className="menuImg" alt="Hamburguer" />
          <p id="hamburguerP">Hamburguesa</p>
          <p id="hamburguerPrice">$10</p>
        </div>
        <div className="squaresMenu" id="doubleHamburguer">
          <img
            src={doublehamburguer}
            id="doubleHamImg"
            alt="Double-Hamburguer"
          />
          <p id="doubleHamP">Hamburguesa Doble</p>
          <p id="DoubleHamprice">$15</p>
        </div>
        <h3 id="identifierAccompaniments">Acompañamientos</h3>
        <div className="squaresMenu" id="potatoes">
          <img src={friedpotatoes} className="menuImg" alt="Fried-Potatoes" />
          <p id="potatoesP">Papas Fritas</p>
          <p className="price">$5</p>
        </div>
        <div className="squaresMenu" id="onion">
          <img src={onion} className="menuImg" alt="Onion-Rings" />
          <p className="menuP">Aros de Cebolla</p>
          <p className="price">$5</p>
        </div>
        <h3 id="identifierDrinks">Bebidas</h3>
        <div className="squaresMenu" id="water500">
          <img src={agua} className="menuImg" alt="Agua-500ml" />
          <p className="waterP">Agua 500 ml</p>
          <p className="price">$5</p>
        </div>
        <div className="squaresMenu" id="water750">
          <img src={water700} className="menuImg" alt="Onion-Rings" />
          <p className="waterP">Agua 750 ml</p>
          <p className="price">$7</p>
        </div>
        <div className="squaresMenu" id="soda500">
          <img src={bebida500ml} className="menuImg" alt="Agua-500ml" />
          <p className="sodaP">Bebida 500 ml</p>
          <p className="price">$7</p>
        </div>
        <div className="squaresMenu" id="soda750">
          <img src={bebida750ml} className="menuImg" alt="Onion-Rings" />
          <p className="sodaP">Bebida 750 ml</p>
          <p className="price">$10</p>
        </div>
      </div>
      <div className="squareOrder">
        <h2 className="orderTitle">Pedido</h2>
      </div>
    </>
  );
}
