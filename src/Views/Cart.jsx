import React from "react";
import "../index.jsx";
import orangeArrow from "./img/orangeArrow.jpg";
import { Link } from "react-router-dom";
import Menu from "../cart.json";
import { useState } from "react";
import delete1 from "./img/delete1.png";

function Arrow() {
  return (
    <header className="App-header">
      <button id="buttonArrow">
        <Link className="arrowLink" to="/">
          <img src={orangeArrow} id="arrow"></img>
        </Link>
      </button>
      <p id="backHome">Volver al Inicio</p>
    </header>
  );
}

export default function Cart() {
  return (
    <>
      <header>{Arrow()}</header>
      <h1 className="cartTitle">Nuevos Pedidos</h1>
      <div className="cartDiv">
        <div className="squareMenu">
          <div className="titleMenuDiv">
            <h2 className="menuTitle">Menú</h2>
          </div>
          <div className="tipOfMenus">
            <div className="identifierDiv">
              <h3 className="identifier">Desayuno</h3>
            </div>
            <div className="gridProduct">
              {Menu.breakfast.map((product) => (
                <div className="squaresMenu">
                  <img src={product.img} className="menuImg" alt="Breakfast" />
                  <p className="menuP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Hamburguesas</h3>
            </div>
            <div className="gridProduct">
              {Menu.hamburguers.map((product) => (
                <div className="squaresMenu">
                  <img
                    src={product.img}
                    className="hambImg"
                    alt="Hambuerguers"
                  />
                  <p className="hambP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Extras</h3>
            </div>
            <div className="gridProduct">
              {Menu.Extras.map((product) => (
                <div className="squaresMenu">
                  <img src={product.img} className="xtraImg" alt="Extras" />
                  <p className="xtraP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Acompañamientos</h3>
            </div>
            <div className="gridProduct">
              {Menu.Acconpainments.map((product) => (
                <div className="squaresMenu">
                  <img src={product.img} className="menuImg" alt="Breakfast" />
                  <p className="menuP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Bebidas</h3>
            </div>
            <div className="gridProduct">
              {Menu.Drinks.map((product) => (
                <div className="squaresMenu">
                  <img src={product.img} className="menuImg" alt="Breakfast" />
                  <p className="menuP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* /* ----------------order------------- */}
        <div className="squareOrder">
          <h2 className="orderTitle">Pedido</h2>
          <div className="clientTable">
            <input
              type="text"
              placeholder="Nombre Cliente"
              className="clientAndTable"
            />
            <input
              type="number"
              placeholder="N° de Mesa"
              className="clientAndTable"
            />
          </div>

          <div id="itemPrice">
            <p id="item">Item</p>
            <p id="cost">$</p>
          </div>
          <Shopping />
          <div id="ordering">
            <p id="total">Sub-Total:</p>
            <button className="ordersButton" id="finalize">
              Finalizar Pedido
            </button>
            <button className="ordersButton" id="cancel">
              Cancelar Pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Shopping() {
  const [numItem, setState] = useState(0);
  return (
    <>
      <div id="squareShopping">
        <button id="less" className="buttonsShopping">
          -
        </button>
        <p id="numOfItems">0</p>
        <button
          id="more"
          className="buttonsShopping"
          onClick={() => NumItems++}
        >
          +
        </button>
        <div className="delete">
          <button id="deleteButton">
            <img src={delete1} id="deleteThrash" alt="deleteitem" />
          </button>
        </div>
      </div>
    </>
  );
}

const Item = () => {
  return <shopping />;
};

function NumItems() {
  return <p id="numOfItems">0</p>;
}

function Items() {
  {
    Menu.map((item, index) => {
      return <shopping lala={item.item} />;
    });
  }
}
