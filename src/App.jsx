import { useState, useEffect } from "react";
import "./App.css";

import darkside from "./data/tobacco/darkside";
import mustHave from "./data/tobacco/musthave";
import accessories from "./data/accessories/accessories";

const tobaccoData = {
  Darkside: darkside,
  MustHave: mustHave
};

function App() {
  const [screen, setScreen] = useState("home");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const tg = window.Telegram?.WebApp;

  useEffect(() => {
    tg?.ready();
    tg?.expand();
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const getTotal = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  const sendOrder = () => {
    const user = tg?.initDataUnsafe?.user;

    const order = {
      user: {
        id: user?.id,
        name: user?.first_name,
        username: user?.username
      },
      items: cart,
      total: getTotal()
    };

    tg.sendData(JSON.stringify(order));
  };

  return (
      <div className="container">
        <h1 className="title">🔥 Tobacco Hub</h1>

        {/* HOME */}
        {screen === "home" && (
            <div className="grid">
              <div className="card" onClick={() => setScreen("tobacco")}>
                💨 Табак
              </div>

              <div className="card" onClick={() => setScreen("accessories")}>
                🧰 Допы
              </div>
            </div>
        )}

        {/* TOBACCO */}
        {screen === "tobacco" && (
            <>
              <button className="back" onClick={() => setScreen("home")}>
                ⬅ Назад
              </button>

              <div className="grid">
                {Object.keys(tobaccoData).map((brand) => (
                    <div
                        key={brand}
                        className="card"
                        onClick={() => {
                          setSelectedBrand(brand);
                          setScreen("products");
                        }}
                    >
                      {brand}
                    </div>
                ))}
              </div>
            </>
        )}

        {/* ACCESSORIES */}
        {screen === "accessories" && (
            <>
              <button className="back" onClick={() => setScreen("home")}>
                ⬅ Назад
              </button>

              <div className="grid products">
                {accessories.map((p) => (
                    <div
                        key={p.id}
                        className="card product"
                        onClick={() => {
                          setSelectedProduct(p);
                          setScreen("product");
                        }}
                    >
                      <img src={p.previewImage} />

                      <div className="info">
                        <p>{p.name}</p>
                        <div className="stock">{p.taste}</div>
                        <div className="price">{p.price} ₽</div>
                      </div>

                      <button
                          className="add-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(p);
                          }}
                      >
                        +
                      </button>
                    </div>
                ))}
              </div>
            </>
        )}

        {/* PRODUCTS */}
        {screen === "products" && (
            <>
              <button className="back" onClick={() => setScreen("tobacco")}>
                ⬅ Назад
              </button>

              <div className="grid products">
                {tobaccoData[selectedBrand].map((p) => (
                    <div
                        key={p.id}
                        className="card product"
                        onClick={() => {
                          setSelectedProduct(p);
                          setScreen("product");
                        }}
                    >
                      <img src={p.previewImage} />

                      <div className="info">
                        <p>{p.name}</p>
                        <div className="stock">{p.taste}</div>
                        <div className="price">{p.price} vnd</div>
                      </div>

                      <button
                          className="add-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart({ ...p, brand: selectedBrand });
                          }}
                      >
                        +
                      </button>
                    </div>
                ))}
              </div>
            </>
        )}

        {/* PRODUCT PAGE */}
        {screen === "product" && selectedProduct && (
            <>
              <button
                  className="back"
                  onClick={() =>
                      setScreen(selectedBrand ? "products" : "accessories")
                  }
              >
                ⬅ Назад
              </button>

              <div className="product-page">
                <img src={selectedProduct.fullImage} className="big-img" />

                <h2>{selectedProduct.name}</h2>
                <p className="price">{selectedProduct.price} ₽</p>
                <p className="desc">{selectedProduct.description}</p>

                <button
                    className="add-main"
                    onClick={() =>
                        addToCart({
                          ...selectedProduct,
                          brand: selectedBrand || "Допы"
                        })
                    }
                >
                  Добавить в корзину
                </button>
              </div>
            </>
        )}

        {/* CART BAR */}
        {cart.length > 0 && (
            <div className="cart-bar" onClick={() => setCartOpen(true)}>
              🛒 {cart.length} товаров — {getTotal()} ₽
            </div>
        )}

        {/* CART MODAL */}
        <div className={`cart-modal ${cartOpen ? "open" : ""}`}>
          <div className="cart-header">
            <h2>Корзина</h2>
            <button onClick={() => setCartOpen(false)}>✖</button>
          </div>

          {cart.map((item, i) => (
              <div key={i} className="cart-item">
            <span>
              {item.name} — {item.price} ₽
            </span>

                <button onClick={() => removeFromCart(i)}>❌</button>
              </div>
          ))}

          <h3>Итого: {getTotal()} ₽</h3>

          <button className="checkout" onClick={sendOrder}>
            Оформить заказ
          </button>
        </div>
      </div>
  );
}

export default App;