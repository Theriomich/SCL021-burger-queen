import React from "react";
import "../index.jsx";
import orangeArrow from "./img/orangeArrow.jpg";
import { Link } from "react-router-dom";
import Menu from "../cart.json";
import { useState } from "react";
import delete1 from "./img/delete1.png";
import Swal from "sweetalert2";

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
  const meat = {
    Vacuno: "Vacuno",
    Pollo: "Pollo",
    Veggie: "Veggie",
  };

  const [order, setOrder] = useState([]);
  const [count, setCount] = useState(1);

  const prices = order.map((price) => price.price);
  let sum = 0;
  const sumPrices = prices.forEach((prices) => (sum = sum + prices));

  // const deleteItem = (id) => {
  //   const pedidoFiltered = order.filter((element) => element.id !== element.id);
  //   setOrder(pedidoFiltered);
  // };

  //Cuando al contador se le sume 1 se debe multiplicar
  //Si el contador esta en 1 no hacer nada si el contador se le suma +1 hacer una multiplicacion
  //

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
              {Menu.breakfast.map((product, index) => (
                <div className="squaresMenu" Key={index}>
                  <button
                    className="itemsButton"
                    onClick={() => {
                      setOrder([...order, product]);
                    }}
                  >
                    <img
                      src={product.img}
                      className="menuImg"
                      alt="Breakfast"
                    />
                  </button>
                  <p className="menuP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Hamburguesas</h3>
            </div>
            <div className="gridProduct">
              {Menu.hamburguers.map((product, index) => (
                <div className="squaresMenu" key={index}>
                  <button
                    className="itemsButton"
                    onClick={() =>
                      Swal.fire({
                        title: "<strong>Tipo de Carne</strong>",
                        input: "radio",
                        imageHeight: 100,
                        imageUrl:
                          "https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-red-meat-icon-isometric-3d-style-png-image_1821233.jpg",
                        inputOptions: meat,
                      }).then((product) => {
                        Menu.hamburguers.map((product) =>
                          setOrder([...order, product])
                        );
                      })
                    }
                  >
                    <img
                      src={product.img}
                      className="hambImg"
                      alt="Hambuerguers"
                    />
                  </button>
                  <p className="hambP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Extras</h3>
            </div>
            <div className="gridProduct">
              {Menu.Extras.map((product, index) => (
                <div className="squaresMenu" key={index}>
                  <button
                    className="itemsButton"
                    onClick={() => {
                      setOrder([...order, product]);
                    }}
                  >
                    <img src={product.img} className="xtraImg" alt="Extras" />
                  </button>
                  <p className="xtraP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Acompañamientos</h3>
            </div>
            <div className="gridProduct">
              {Menu.Acconpainments.map((product, index) => (
                <div className="squaresMenu" key={index}>
                  <button
                    className="itemsButton"
                    onClick={() => {
                      setOrder([...order, product]);
                    }}
                  >
                    <img
                      src={product.img}
                      className="menuImg"
                      alt="Aconpainments"
                    />
                  </button>
                  <p className="menuP">{product.item}</p>
                  <p className="price">{product.price}</p>
                </div>
              ))}
            </div>

            <div className="identifierDiv">
              <h3 className="identifier">Bebidas</h3>
            </div>
            <div className="gridProduct">
              {Menu.Drinks.map((product, index) => (
                <div className="squaresMenu" key={index}>
                  <button
                    className="itemsButton"
                    onClick={() => {
                      setOrder([...order, product]);
                    }}
                  >
                    <img src={product.img} className="menuImg" alt="Drinks" />
                  </button>
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

          <div id="item_Price">
            <p id="item">Item</p>
            <p id="cost">$</p>
          </div>
          <Shopping order={order} />
          <div id="ordering">
            <p id="total">Sub-Total:${sum}</p>
            <button className="ordersButton" id="finalize">
              Finalizar Pedido
            </button>
            <button
              className="ordersButton"
              id="cancel"
              onClick={() =>
                Swal.fire({
                  title: "¿Seguro que desea cancelar el pedido?",
                  text: "¡No se puede revertir!",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "¡Si, borrar!",
                }).then((result) => {
                  if (result.isConfirmed) {
                    const pedidoFiltered = result.filter(
                      (element) => element.id !== element.id
                    );
                    setOrder(pedidoFiltered);
                    Swal.fire(
                      "¡Borrado!",
                      "Su pedido ha sido cancelado.",
                      "success"
                    );
                  }
                })
              }
            >
              Cancelar Pedido
            </button>
          </div>
        </div>
      </div>
    </>
  );
  function countMore() {
    setCount(count + 1);
  }

  function countless() {
    setCount(count - 1);
  }

  function Shopping({ order }) {
    function deleteItem(product) {
      console.log(product);
      const orderFiltered = order.filter((element) => element.id !== product);

      setOrder(orderFiltered);
    }

    // function countLess(product) {
    //   const restCount = order.map((element) => {
    //     if (element.id == product.id) {
    //       return product.count - 1;
    //     } else {
    //       return product;
    //     }
    //   });
    //   setCount(restCount);
    // }

    const addToCart = (object) => {
      if (!order.includes(object)) {
        setOrder([...order, object]);
      } else {
        let f = order.map((items) => {
          if (items.id == object.id) {
            return { ...items, cuantity: items.cuantity + 1 };
          }
          return items;
        });

        setOrder(f);
      }
    };

    return (
      <>
        <div id="allShopping">
          {order.map((item, index) => (
            <div id="squareShopping" key={index}>
              <div id="itemItem" className="itemAndPrice">
                {item.item}
              </div>

              <button
                id="less"
                className="buttonsShopping"
                onClick={() => countless(item.id)}
                disabled={count <= 1}
              >
                -
              </button>
              <p id="numOfItems">{count}</p>
              <button
                id="more"
                className="buttonsShopping"
                onClick={() => countMore(item.id)}
              >
                +
              </button>
              <div id="itemPrice" className="itemAndPrice">
                {item.price}
              </div>
              <div className="delete">
                <button id="deleteButton" onClick={() => deleteItem(item.id)}>
                  <img src={delete1} id="deleteThrash" alt="deleteitem" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
